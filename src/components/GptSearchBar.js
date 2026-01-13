import React from "react";
import { useSelector } from "react-redux";
import LangConfig from "../utils/LangConfig";
const GptSearchBar = () => {
  const langSelected = useSelector((store) => store.language?.lang);
  return (
    <div className="flex justify-center">
      <form className="mt-40 flex bg-black w-1/2">
        <input
          type="text"
          placeholder={LangConfig[langSelected]?.AskPlaceholder}
          className="m-3 w-80 flex-1 p-2"
        />
        <button className="bg-red-600 text-white rounded-lg py-3 px-6 m-3 flex-none">
          {LangConfig[langSelected]?.Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
