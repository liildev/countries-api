import { useState } from "react";

export const usePaginator = (data) => {
  const limit = 12;
  const length = data.length;
  const [page, setPage] = useState(0);

  const endOffset = page + limit;
  const countries = data.slice(page, endOffset);
  const pageCount = Math.ceil(length / limit);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % length;
    setPage(newOffset);
  };

  return { countries, pageCount, handlePageClick };
};
