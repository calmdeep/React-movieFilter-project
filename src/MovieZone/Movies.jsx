import React from "react";
import { movies } from "./data";
import { useState } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) =>{
    setMovieList(movies.filter((data)=>data.category == cat))
  }
  return (
    <>
      <nav className="flex justify-center gap-10 mt-5 font-semibold">
        <button onClick={()=>setMovieList(movies)} type="button" className="text-blue-600 outline-1 p-1 hover:bg-blue-200 rounded-xs">All</button>
        <button onClick={()=>filterByCategory("Action")} type="button" className="text-gray-400 outline-1 p-1 hover:bg-gray-200 rounded-xs" >Action</button>
        <button onClick={()=>filterByCategory("Thriller")}type="button" className="text-green-400 outline-1 p-1 hover:bg-green-200 rounded-xs">Thriller</button>
        <button onClick={()=>filterByCategory("Animation")} type="button" className="text-red-400 outline-1 p-1 hover:bg-red-200 rounded-xs">Animation</button>
        <button onClick={()=>filterByCategory("Horror")}type="button" className="text-yellow-400 outline-1 p-1 hover:bg-yellow-200 rounded-xs">Horror</button>
        <button onClick={()=>filterByCategory("Drama")} type="button" className="text-blue-300 outline-1 p-1 hover:bg-blue-200 rounded-xs">Drama</button>
        <button onClick={()=>filterByCategory("Sci-Fi")}type="button" className="text-orange-400 outline-1 p-1 hover:bg-orange-100 rounded-xs">Sci-Fi</button>
      </nav>
      <div className="flex justify-center items-center flex-wrap gap-5 text-center w-300 mx-auto">
        {movieList.map((data) => (
          <div key={data.id} className="max-w-65">
            <div className="py-6 overflow ">
              <img
                className="w-65 rounded-2xl border-2 border-amber-200 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src={data.poster_path}
                alt=""
              />
            </div>
            <h4>{data.title}</h4>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
