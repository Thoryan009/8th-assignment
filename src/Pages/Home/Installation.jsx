import  { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { deleteApp, getApps } from "../../helpers/localstorage";
import { useLoaderData } from "react-router";

const Installation = () => {
  const allApps = useLoaderData();

  const [savedApps, setSavedApps] = useState(() => {
    const appIds = getApps();
    return allApps.filter((app) => appIds.includes(app.id));
  });

  const handleClick = (id) => {
    deleteApp(id);

    // UI থেকে সাথে সাথে remove
    setSavedApps((prevApps) => prevApps.filter((app) => app.id !== id));
  };

  return (
    <div className="bg-base-200 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  py-10">
          <h2 className="text-4xl font-bold">Your Installed Apps</h2>
          <p className="text-gray-500 py-5">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between my-5">
          <p className="font-bold">{savedApps.length} Apps Found</p>
          <select
            defaultValue="Pick an AI Model"
            className="select select-error"
          >
            <option disabled={true}>Sort By Size</option>
            <option>GPT-4</option>
          </select>
        </div>
        {savedApps.map((app) => (
          <div className="bg-white flex justify-between p-5 rounded-lg my-5">
            <div className="flex gap-5">
              <img width={80} src={app.image} alt="" />
              <div>
                <h6 className="font-bold ">{app.title}</h6>
                <div className="flex gap-5">
                  <div className="flex  items-center gap-1 text-green-500">
                    <FiDownload style={{ color: "green" }} />
                    <p>{String(app.downloads).charAt(0)}M</p>
                  </div>
                  <div className="flex  items-center gap-1 text-orange-500">
                    <IoStar style={{ color: "orange" }} />
                    <p>{app.ratingAvg}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">{app.size} MB</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn bg-success text-white"
              onClick={() => handleClick(app.id)}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
