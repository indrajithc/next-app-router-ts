"use client";

import { FC, useState } from "react";

import SearchManufacturer from "@components/SearchManufacturer";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = (props) => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
