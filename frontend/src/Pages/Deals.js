import React from "react";
import DealsList from "../Components/DealsList";
import { Link } from "react-router-dom";
function Deals() {
  return (
    <div className="bg-[#F5F6F8] p-10 h-full w-6/6  ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Deals</h2>
        <div className="flex items-center space-x-4">
          <h2 className="text-[grey] text-sm font-normal">company :All</h2>
          <button className="bg-[#109CF1] text-[white] p-3 rounded-md text-sm font-medium">
            <Link to="/createdeals">+ Add new Deal</Link>
          </button>
        </div>
      </div>

      <div className="bg-[white] my-6 h-[95%] overflow-scroll whitespace-nowrap">
        <div className="flex justify-around text-[gray] font-medium text-xs border-2 p-3 ">
          <h4>Name of company</h4>
          <h4>Company description</h4>
          <h4>Amount to be raised</h4>
          <h4>Performance history</h4>
          <h4>Pre-tax</h4>
          <h4>Post-tax</h4>
          <h4>Tenure</h4>
          <h4>Action</h4>

          <h4>Company description</h4>
          <h4>Amount to be raised</h4>
          <h4>Performance history</h4>
          <h4>Pre-tax</h4>
          <h4>Post-tax</h4>
          <h4>Tenure</h4>
          <h4>Action</h4>
        </div>
        <DealsList />
      </div>
    </div>
  );
}

export default Deals;
