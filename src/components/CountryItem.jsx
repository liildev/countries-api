import React from "react";
import { Link } from "react-router-dom";

export default function CountryItem({ country }) {
  const { ccn3, name, flag, population, region, capital } = country;

  return (
    <Link to={`/${name}`} key={ccn3}>
      <article className="article-box">
        <img
          src={flag}
          className="rounded-t-[5px] w-full h-[55%] ss:h-[45%] object-cover"
          alt={name}
        />
        <div className="py-6 px-5 h-[45%] ss:h-[55%] bg-white dark:bg-main-black">
          <h2>{name}</h2>
          <ul className="mt-3 space-y-1">
            <li>
              Population: <span>{population.toLocaleString()}</span>
            </li>
            <li>
              Region: <span>{region}</span>
            </li>
            <li>
              Capital: <span>{capital}</span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}
