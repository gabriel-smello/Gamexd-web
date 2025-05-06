import { Search } from "lucide-react";
import { findAllGenres } from "../../Services/GenreService";
import { findAllPlatforms } from "../../Services/PlatformService";
import React, { useEffect, useState } from "react";

const SideBarFilter = () => {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");

  useEffect(() => {
    findAllGenres()
      .then(setGenres)
      .catch((err) => console.error("Erro:", err));
  }, []);

  useEffect(() => {
    findAllPlatforms()
      .then(setPlatforms)
      .catch((err) => console.error("Erro:", err));
  }, []);

  return (
    <div className="bg-[#1a1a1a] p-5 my-4 w-2xs">
      {/* Search Input */}
      <div className="flex-grow min-w-[150px] w-full relative content-center mb-4">
        <input
          className="w-full px-2 py-1 bg-neutral-700 focus:outline-none text-neutral-200 focus:text-white"
          placeholder="Game..."
        />
      </div>

      {/* Genres */}
      <h1 className="font-bold mb-1">Genres</h1>
      <div className="max-h-35 overflow-y-auto mb-4">
        <ul className="space-y-1 text-gray-400">
          {genres.map((genre) => (
            <li key={genre.id} className="ml-5 text-xs">
              <div className="flex content-between justify-between mr-5 ">
                <label
                  htmlFor={`genre-${genre.id}`}
                  className="hover:text-white"
                >
                  {genre.name}{" "}
                </label>
                <input
                  type="checkbox"
                  id={`genre-${genre.id}`}
                  className="accent-blue-theme"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Platforms */}
      <h1 className="font-bold mb-1">Platforms</h1>
      <div className="max-h-35 overflow-y-auto mb-4">
        <ul className="space-y-1 text-gray-400">
          {platforms.map((platform) => (
            <li key={platform.id} className="ml-5 text-xs">
              <div className="flex content-between justify-between mr-5">
                <label
                  htmlFor={`platform-${platform.id}`}
                  className="hover:text-white"
                >
                  {platform.name}
                </label>
                <input
                  type="checkbox"
                  id={`platform-${platform.id}`}
                  className="accent-blue-theme"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Release Year Filter */}
      <h1 className="font-bold mb-1">Release Year</h1>
      <div className="flex space-x-4 items-center text-gray-400 text-xs">
        <div className="w-full">
          <input
            type="number"
            min="1970"
            max="2100"
            value={fromYear}
            className="bg-neutral-700 text-white px-2 py-1 focus:outline-none rounded-xs w-full h-9"
            placeholder="From"
          />
        </div>
        <div>—</div>
        <div className="w-full">
          <input
            type="number"
            min="1970"
            max="2100"
            value={toYear}
            className="bg-neutral-700 text-white px-2 py-1 focus:outline-none rounded-xs w-full h-9"
            placeholder="To"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
