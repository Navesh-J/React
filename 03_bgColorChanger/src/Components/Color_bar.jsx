import React from "react";

function Color_bar({setColor}) {
  return (
    <div className="bg-slate-300   border-2 border-black flex gap-6 justify-center px-6 py-4 rounded-full bottom-12 fixed">
      <div onClick={()=> setColor("white")} className="bg-white text-black p-2  rounded-xl w-16  cursor-pointer text-center">
        White
      </div>
      <div onClick={()=> setColor("black")} className="bg-black text-white p-2 rounded-xl w-16  cursor-pointer text-center">
        Black
      </div>
      <div onClick={()=> setColor("blue")} className="bg-blue-700 text-white p-2 rounded-xl w-16 cursor-pointer text-center">
        Blue
      </div>
      <div onClick={()=> setColor("lime")} className="bg-lime-300 text-black p-2 rounded-xl w-16 cursor-pointer text-center">
        Lime
      </div>
      <div onClick={()=> setColor("cyan")} className="bg-cyan-300 p-2 rounded-xl w-16 cursor-pointer text-center">
        Cyan
      </div>
      <div onClick={()=> setColor("yellow")} className="bg-yellow-500 p-2 rounded-xl w-16 cursor-pointer text-center">
        Yellow
      </div>
      <div onClick={()=> setColor("gray")} className="bg-gray-400 p-2 text-white rounded-xl w-16 cursor-pointer text-center">
        Gray
      </div>
      <div onClick={()=> setColor("pink")} className="bg-pink-300 p-2 text-white rounded-xl w-16 cursor-pointer text-center">
        Pink
      </div>
      <div onClick={()=> setColor("purple")} className="bg-purple-700 p-2 text-white rounded-xl w-16 cursor-pointer text-center">
        Purple
      </div>
      <div onClick={()=> setColor("red")} className="bg-red-500 text-white p-2 rounded-xl w-16 cursor-pointer text-center">
        Red
      </div>
    </div>
  );
}

export default Color_bar;