import React from "react";
import { Link } from "react-router-dom";
function CreateDeals() {
  return (
    <div className="bg-[#F5F6F8] p-10 h-full w-6/6   ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium"> New Deal</h2>
        <div className="flex items-center space-x-4 box-border ">
          <button className="bg-[#F7685B] text-[white] h-10 w-40  box-border rounded-md text-sm font-medium w-22">
            Cancel
          </button>
          <button className="bg-[#109CF1] text-[white] h-10 w-40 box-border rounded-md text-sm font-medium w-22">
            Make it LIVE
          </button>
        </div>
      </div>

      <div>
        <div>
          <h2>Upload logo of your company</h2>
          <input type="file" />
        </div>
        <div className="flex">
          <div>
            <h4>company name </h4>
            <input type="text" />
          </div>
          <div>
            <h4>Amaout to be raised</h4>
            <input type="text" />
          </div>
        </div>
        <div>
          <h4>Company description</h4>
          <input type="text" />
        </div>
        <div>
          <h4>Upload graphs about performace history</h4>
          <input type="file" />
        </div>
        <div>
          <h4>Any other information about performace history</h4>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default CreateDeals;
