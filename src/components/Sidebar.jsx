import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  Squares2X2Icon,
  ListBulletIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const { setView, view } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      <div
        className={`fixed md:static top-0 left-0 h-full md:h-auto bg-[#f2f6f8] flex flex-col items-center py-8 space-y-8 rounded-tr-3xl rounded-br-3xl shadow-md md:shadow-none transition-all duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
        w-[240px] md:w-[260px]`}
      >
        <div className="bg-white shadow-sm rounded-xl w-[85%] p-3 flex items-center gap-3">
          <img
            src="../../shubh.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Hi Shubham,</p>
            <p className="text-xs text-gray-500">Here’s your News!</p>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl w-[85%] p-4 flex flex-col items-center">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            View Toggle
          </p>

          <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1 w-full">
            <button
              onClick={() => setView("grid")}
              className={`flex items-center justify-center w-1/2 py-2 rounded-lg transition ${
                view === "grid"
                  ? "bg-emerald-400 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>

            <button
              onClick={() => setView("list")}
              className={`flex items-center justify-center w-1/2 py-2 rounded-lg transition ${
                view === "list"
                  ? "bg-emerald-400 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <ListBulletIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl w-[85%] p-4 flex flex-col items-center justify-between">
          <p className="text-sm font-semibold text-gray-800 mb-3 text-center">
            Have a Feedback?
          </p>
          <button
            onClick={() => navigate("/feedback")}
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium text-sm py-2 px-4 rounded-lg transition-all duration-200 shadow-sm"
          >
            We’re Listening!
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
