"use client";
import React, { useState } from "react";

// Define the type for the props
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [extendedSection, setExtendedSection] = useState<string | null>("models");

  const toggleSection = (section: string) => {
    setExtendedSection(extendedSection === section ? null : section);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black w-[50vw] transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50 overflow-y-auto`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="mt-16">
        <ul className="space-y-4 px-4 font-normal font-sans">
          {/* Models Section */}
          <li
            className="text-2xl cursor-pointer transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm"
            onClick={() => toggleSection("models")}
          >
            Models
          </li>
          {extendedSection === "models" && (
            <div className="flex justify-between mt-4">
              <ul className="space-y-4 px-4 w-1/2">
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section1" className="flex flex-col items-center">
                    718
                    <img src="718.webp" alt="718" className="mt-2" />
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section2" className="flex flex-col items-center">
                    911
                    <img src="911.webp" alt="911" className="mt-2" />
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section3" className="flex flex-col items-center">
                    Taycan
                    <img src="taycan.webp" alt="Taycan" className="mt-2" />
                  </a>
                </li>
              </ul>
              <ul className="space-y-4 px-4 w-1/2">
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section4" className="flex flex-col items-center">
                    Cayenne
                    <img src="cayenne.webp" alt="Cayenne" />
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section5" className="flex flex-col items-center">
                    Panamera
                    <img src="panamera.webp" alt="Panamera" />
                  </a>
                </li>
                <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                  <a href="#section6" className="flex flex-col items-center">
                    Macan
                    <img src="macan.webp" alt="Macan" />
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Services Section */}
          <li
            className="text-2xl cursor-pointer mt-4 transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm"
            onClick={() => toggleSection("services")}
          >
            Services
          </li>
          {extendedSection === "services" && (
            <ul className="space-y-4 px-4 mt-2">
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#service1 " className="">
                  Service 1
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#service2" className="">
                  Service 2
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#service3" className="">
                  Service 3
                </a>
              </li>
            </ul>
          )}

          {/* Option 2 Section */}
          <li
            className="text-2xl cursor-pointer transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm"
            onClick={() => toggleSection("option2")}
          >
            Option 2
          </li>
          {extendedSection === "option2" && (
            <ul className="space-y-4 px-4 mt-2">
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option2a" className="">
                  Option 2a
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option2b" className="">
                  Option 2b
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option2c" className="">
                  Option 2c
                </a>
              </li>
            </ul>
          )}

          {/* Option 3 Section */}
          <li
            className="text-2xl cursor-pointer transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm"
            onClick={() => toggleSection("option3")}
          >
            Option 3
          </li>
          {extendedSection === "option3" && (
            <ul className="space-y-4 px-4 mt-2">
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option3a" className="">
                  Option 3a
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option3b" className="">
                  Option 3b
                </a>
              </li>
              <li className="transition-transform transform hover:scale-95 bg-slate-400 bg-opacity-0 p-4 hover:bg-opacity-20 rounded-sm">
                <a href="#option3c" className="">
                  Option 3c
                </a>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
