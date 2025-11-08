import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { XCircleIcon } from "@heroicons/react/24/solid";

const PostCard = ({ post }) => {
  const { handleDelete, view } = useContext(AppContext);

  return (
    <div
      className={`relative bg-white rounded-xl shadow-md p-5 transition hover:shadow-lg ${
        view === "grid" ? "w-full" : "flex gap-4"
      }`}
    >
      <button
        onClick={() => handleDelete(post.id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-600"
      >
        <XCircleIcon className="h-6 w-6" />
      </button>

      <div>
        <h2 className="font-semibold text-lg text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
