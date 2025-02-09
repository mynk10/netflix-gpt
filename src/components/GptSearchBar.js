import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black  grid grid-cols-12">
        <input
          type="text"
          placeholder="Search here for the movies "
          className="col-span-9 p-4 m-4"
        />
        <button
          type="submit"
          className="col-span-3 m-4 py-2 px-4  bg-red-600 rounded-md text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
