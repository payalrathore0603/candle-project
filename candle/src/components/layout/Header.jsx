import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Header() {
  
  const [categories,setCategories]= useState(["Jar Candles","Shape Candles", "Flower Candle"])
  return(
     <div className="w-full flex items-center gap-4 bg-primary text-secondary  px-8 py-6  shadow-sm ">

      <div className="w-sm flex items-center justify-between gap-8  bg-secondary-50 border-secondary-200  rounded-full px-3 py-1 w-64 focus-within:ring-1 focus-within:ring-secondary-800 ">
        <input type="text" name="" id="" placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)}
        className="bg-transparent outline-none w-full text-sm text-stone-800 placeholder-stone-400" />
        <Search/>
      </div>
 
      {/* Categories */}
      <div className="flex flex-1 items-center justify-evenly gap-8 ">
        {categories.map(item=>(
          <div key={item} className="text-stone-700 hover:bg-secondary hover:text-white hover:px-4 rounded-full hov cursor-pointer transition-colors text-sm transform-3d transition-all duration-300 ease-in-out">{item}</div>
        ))}
      </div>
     </div>
  );
}
