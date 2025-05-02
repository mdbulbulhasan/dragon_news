import React, { use } from "react";
import { NavLink } from "react-router";

// resolve a promise for fetching data
const catagoriesPromise = fetch("/categories.json").then((res) => res.json());

const Catagories = () => {
  // for once rendaring data when load page use "use" hook
  const catagories = use(catagoriesPromise);
  return (
    <div>
      <h2 className="font-bold">All Catagories ({catagories.length}) </h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {catagories.map((catagory) => (
          <NavLink
            key={catagory.id}
            className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"}
            to={`/catagory/${catagory.id}`}
          >
            {catagory.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
