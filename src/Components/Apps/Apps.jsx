import { useEffect, useState } from "react";
import App from "./App";
import { NavLink } from "react-router";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/public/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const shortApps = apps.slice(0, 8);

  return (
    <section className="bg-base-200 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-gray-500 py-5">
            Explore All the Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          {shortApps.map((app) => (
            <App app={app} key={app.id} />
          ))}
        </div>
       <div className="text-center py-10">
         <button className="btn primary-bg text-white">
                      <NavLink to="/apps">Show All</NavLink>

        </button>
       </div>
      </div>
    </section>
  );
};

export default Apps;
