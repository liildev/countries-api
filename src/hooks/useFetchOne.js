import { useEffect, useState } from "react";
import { CountriesService } from "../API";

export const useFetchOne = (name) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await CountriesService.getOne(name);
      setCountry(response);
    };

    fetchCountry();
  }, [name]);

  return { country };
};
