import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

const Home = () => {
  const { posts, loading, currentPage, postsPerPage, view } = useContext(AppContext);

  if (loading) return <Loader />;

  const startIdx = (currentPage - 1) * postsPerPage;
  const visiblePosts = posts.slice(startIdx, startIdx + postsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <div
          className={`grid gap-6 ${
            view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Home;
