import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchOne } from "../hooks/useFetchOne";
import { BiArrowBack } from "react-icons/bi";

export default function Country() {
  const { name } = useParams();
  const { country } = useFetchOne(name);

  return (
    <section className="py-10">
      <Link
        to="/"
        className="country-block"
      >
        <BiArrowBack size={25} /> Back
      </Link>

      {country.map(
        ({
          flag,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        }) => (
          <article
            key={name}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-x-20 py-10 ss:py-20"
          >
            <img src={flag} className="article-img" alt={name} />

            <div className="space-y-10 pt-10">
              <h2 className="text-2xl">{name}</h2>
              <ul className="article-content">
                <li>
                  Native Name: <span>{nativeName}</span>
                </li>
                <li>
                  Population: <span>{population.toLocaleString()}</span>
                </li>
                <li>
                  Region: <span>{region}</span>
                </li>
                <li>
                  Sub Region: <span>{subregion}</span>
                </li>
                <li>
                  Capital: <span>{capital}</span>
                </li>
                <li>
                  Top Level Domain: <span>{topLevelDomain}</span>
                </li>
                <li>
                  Currencies: <span>{currencies[0].name}</span>
                </li>
                <li>
                  Languages: <span>{languages[0].name}</span>
                </li>
              </ul>

              {borders?.length && (
                <div className="article-list">
                  <h3>Border Countries: </h3>

                  <ul className="flex items-center gap-x-2">
                    {borders.map((border) => {
                      return (
                        <li key={border} className="article-item">
                          {border}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </article>
        )
      )}
    </section>
  );
}
