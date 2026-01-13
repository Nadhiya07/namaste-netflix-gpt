import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGptPage } from "../utils/GptSlice";
import LangConfig from "../utils/LangConfig";

const GptSearchPage = () => {
  const gptPage = useSelector((Store) => Store.gptSearchPage.gptPage);
  const language = useSelector((store) => store.language?.lang);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setGptPage());
  };
  return (
    <div>
      <button
        className="bg-red-700 rounded-md text-white p-2 font-semibold"
        onClick={handleClick}
      >
        {gptPage ? LangConfig[language]?.CloseGptSearch : "Gpt Search"}
      </button>
    </div>
  );
};

export default GptSearchPage;
