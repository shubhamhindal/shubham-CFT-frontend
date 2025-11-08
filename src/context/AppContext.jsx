import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen ] = useState(false);

  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 5000));
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleDelete = (id) => {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
  };

  const contextValue = {
    posts,
    setPosts,
    loading,
    currentPage,
    setCurrentPage,
    totalPages,
    postsPerPage,
    handleDelete,
    view,
    setView,
    isModalOpen,
    setIsModalOpen 
  }

  return(
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  );
};
