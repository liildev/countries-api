import React from "react";
import CountryItem from "./CountryItem";
import ReactPaginate from "react-paginate";
import { useScroll } from "../hooks/useScroll";
import { usePaginator } from "../hooks/usePaginator";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PaginatedItems({ data }) {
  const { scrolled } = useScroll();
  const { countries, pageCount, handlePageClick } = usePaginator(data);

  return (
    <>
      <div className="countries-block">
        {countries.map((country) => (
          <CountryItem key={country.name} country={country} />
        ))}
      </div>

      {scrolled && (
        <ReactPaginate
          className="pagination-block"
          activeClassName="pagination-item"
          breakLabel="..."
          nextLabel={<IoIosArrowForward size={30} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<IoIosArrowBack size={30} />}
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
}
