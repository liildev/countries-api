import { useEffect, useState } from "react";
import { CountriesService } from "../API";

export const useFetch = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const filterCountry = async (country) => {
    const res = await CountriesService.getByRegion(country);
    setCountries(res);
  };

  const searchByName = async (name) => {
    setSearch(name);

    const res = await CountriesService.getBySearch(search);
    setCountries(res);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await CountriesService.getAll();
      setCountries(res);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  return {
    data: countries,
    loading: loading,
    search: searchByName,
    filter: filterCountry,
  };
};
