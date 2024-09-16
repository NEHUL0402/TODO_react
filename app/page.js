"use client"
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
  };
const deletehandelar = (i)=>{
  let copy = [...maintask];
  copy.splice(i,1);
  setmaintask(copy);

}
  let rendertask = <h2 className="text-lg">No Task Available</h2>;

  if (maintask.length > 0) {
    rendertask = (
      <>
        {/* Titles for the columns */}
        <div className="grid grid-cols-3 mb-4 border-b-2 border-gray-500 pb-2">
          <span className="text-2xl font-bold text-blue-400">Title</span>
          <span className="text-2xl font-bold text-blue-400">Description</span>
          <span className="text-2xl font-bold text-blue-400">Actions</span>
        </div>
        <ul>
          {maintask.map((t, i) => {
            return (
              <li key={i} className="grid grid-cols-3 items-center justify-between mb-5">
                <h5 className="text-white text-xl">{t.title}</h5>
                <h5 className="text-white text-xl">{t.desc}</h5>
                <button
                  className="bg-red-500 text-white rounded-lg px-2 py-1 w-24 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={()=>{
                  deletehandelar(i);
                }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="px-5 py-5 flex items-center">
        <form onSubmit={Submit}>
          <input
            className="border border-gray-300 rounded-lg m-5 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 rounded-lg m-5 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white rounded-lg m-5 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>

      <hr className="border-black" />

      <div className="m-7 py-6 px-6 bg-slate-800 text-white text-2xl">
        {rendertask}
      </div>
    </>
  );
}
