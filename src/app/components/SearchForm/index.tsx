"use client";

import { SearchNormal } from "iconsax-react";

const SearchForm = () => {
  return (
    <form className="flex max-w-md mt-6 border border-[#A9AAB4] rounded-[100vw] px-[18px] items-center">
      <input
        className="flex-grow rounded-[100vw] px-2 py-2 outline-none placeholder:text-[#A9AAB4] text-black"
        type="text"
        name="globalSearchField"
        placeholder="Search..."
      />
      <SearchNormal size={24} variant="Outline" color="#202024" />;
    </form>
  );
};

export default SearchForm;
