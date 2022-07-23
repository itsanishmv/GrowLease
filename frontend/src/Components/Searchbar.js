import React from "react";
import {} from "@fortawesome/react-fontawesome";
function Searchbar() {
  return (
    <div className=" h-16 bg-[white] flex  items-center justify-between px-10 ">
      <div>
        <input
          className=" outline-none w-80"
          type="search"
          placeholder=" &#xf002; search for swiggy zomato"
        />
      </div>
      <img
        className="w-6 h-6 opacity-30"
        src="../../icons/notification.png"
        alt="img"
      />
    </div>
  );
}

export default Searchbar;
