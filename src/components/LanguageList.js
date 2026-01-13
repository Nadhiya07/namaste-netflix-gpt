import React from "react";
import { LANG_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setLanguage } from "../utils/LangSlice";
const LanguageList = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div className="mt-2">
      <select
        className="bg-black text-white rounded-md"
        onChange={handleChange}
      >
        {LANG_OPTIONS.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageList;
