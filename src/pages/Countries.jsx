import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Filter, Loader, PaginatedItems } from "../components";

export default function Countries() {
  const { data, loading, search, filter } = useFetch();

  return (
    <section>
      <Filter search={search} filter={filter} />

      {loading ? <Loader /> : <PaginatedItems data={data} />}
    </section>
  );
}
