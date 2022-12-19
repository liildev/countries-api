import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Filter({ search, filter }) {
  return (
    <form className="filter-block">
      <label htmlFor="search" className="relative w-full sm:w-80 lg:w-96">
        <BiSearchAlt2
          size={22}
          className="absolute top-[27%] left-5 text-gray-500 dark:text-white "
        />
        <input
          type="search"
          className="w-full pl-16 background: #848484;
          dark:placeholder:text-white"
          placeholder="Search for a country…"
          autoComplete="off"
          onChange={(e) => search(e.target.value)}
        />
      </label>

      <select
        className="w-[50%] sm:w-48 mt-10 sm:mt-0"
        name="select"
        id="select"
        onChange={(e) => filter(e.target.value)}
      >
        <option selected disabled defaultValue="All">
          Filter by region
        </option>

        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
