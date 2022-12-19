import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function Loader() {
  return <div className="h-[70vh] flex justify-center items-center">
    <BiLoaderAlt className="h-20 w-20 animate-spin dark:text-white" />
  </div>;
}
