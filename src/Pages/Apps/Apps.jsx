import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate, useNavigation } from "react-router";
import App from "../../Components/Apps/App";
import { Atom } from "react-loading-indicators";

const Apps = () => {
  const apps = useLoaderData();
  const navigate = useNavigation();
  const [allApps, setAllApps] = useState(apps);

  const handleSearch = (search) => {
    // console.log(search)
    if (!search) {
      setAllApps(apps);
    }
    const filteredApps = apps.filter((app) => app.title.includes(search));
    setAllApps(filteredApps);
  };

  if(navigate.state === 'loading') return <div className="flex justify-center items-center"><Atom text="Loading"  color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} /></div>

  return (
    <div className="bg-base-200 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  py-10">
          <h2 className="text-4xl font-bold">Our All Applications</h2>
          <p className="text-gray-500 py-5">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between">
          <p> ({allApps.length}) Apps Found</p>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        <div
          className={`my-10 ${allApps.length > 0 ? "grid grid-cols-4 gap-5" : "block"}`}
        >
          {allApps.length > 0 ? (
            allApps.map((app) => (
              <NavLink to={`/apps/${app.id}`} key={app.id}>
                {" "}
                <App app={app}  />
              </NavLink>
            ))
          ) : (
            <h2 className="text-5xl text-center font-bold text-red-500 w-full ">
              No App Found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
