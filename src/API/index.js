import axios from "axios";

const api = () => axios.create({ baseURL: "https://restcountries.com/v2/" });

export class CountriesService {
  static async getAll() {
    const res = await api().get("all");
    return res.data;
  }

  static async getOne(name) {
    const res = await api().get(`name/${name}`);
    return res.data;
  }

  static async getBySearch(name) {
    console.log(name);
    const res = await api().get(`name/${name}`);
    return res.data;
  }

  static async getByRegion(region) {
    const res = await api().get(`region/${region}`);
    return res.data;
  }
}
