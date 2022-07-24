import React, { useEffect, useState } from "react";
import DealsList from "../Components/DealsList";
import { Link } from "react-router-dom";
function Deals() {
  return (
    <div className="bg-[#F5F6F8] p-10 pt-24 w-6/6  ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Deals</h2>
        <div className="flex items-center space-x-4">
          <h2 className="text-[grey] text-sm font-normal">company :All</h2>
          <Link to="/createDeals">
            <button className="bg-[#109CF1] text-[white] p-3 rounded-md text-sm font-medium">
              + Add new Deal
            </button>
          </Link>
        </div>
      </div>
      <DealsList />
    </div>
  );
}

export default Deals;
