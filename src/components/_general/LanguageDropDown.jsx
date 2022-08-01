import React from "react";

const LanguageDropDownComp = () => {
  return (
    <select
      className=' w-[45px] h-[35px] rounded-md bg-[#001D29] text-white'
      name='languages'
      size={1}>
      <option
        style={{backgroundImage: "url(../assets/images/iran.png)"}}
        value='ir'>
        IR
      </option>
      <option value='ar'> AR </option>
      <option value='en'> EN </option>
    </select>
  );
};

export default LanguageDropDownComp;
