import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(AppContext);

  const groupStart = Math.floor((currentPage - 1) / 3) * 3 + 1;
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages - groupStart + 1) },
    (_, i) => groupStart + i
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-10 gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`flex items-center justify-center w-9 h-9 rounded-full border text-gray-500 transition ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm font-medium transition
            ${
              page === currentPage
                ? "bg-emerald-400 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`flex items-center justify-center w-9 h-9 rounded-full border text-gray-500 transition ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;
