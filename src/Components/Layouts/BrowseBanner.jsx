import React from "react";
import { Link } from "react-router";

const BrowseBanner = () => {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden flex items-center bg-[#1e1e2f] pl-10">
      <div className="z-10 text-white flex-1 h-full flex flex-col justify-center">
        <div className="text-md font-bold">Welcome To GameXD</div>
        <div className=" text-3xl font-bold my-2">
          <span className="text-blue-theme">BROWSE</span> POPULAR GAMES HERE
        </div>
        <div>
          <Link to="/browse">
            <button className="mt-4 px-4 py-2 bg-blue-theme-darker hover:bg-blue-950 rounded-full w-fit cursor-pointer">
              Browse Now
            </button>
          </Link>
        </div>
      </div>

      <div className="z-1 flex-1 h-full ">
        <img
          src="/src/assets/gamesbanner.png"
          alt="Banner Right"
          className="right-0 top-0 w-full h-full object-cover"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 30%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default BrowseBanner;
