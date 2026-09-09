import React from "react";
import { useParams, useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { TfiThumbUp } from "react-icons/tfi";
const AppInfo = () => {
  const params = useParams();

  const apps = useLoaderData();
  const app = apps.find((app) => parseInt(app.id) === parseInt(params.id));
  if (!app) {
    return <div>App not found</div>;
  }
  const { image, ratingAvg, downloads, title, reviews, size } = app;
  console.log(app);

  return (
    <div className="bg-base-200">
      <div className="max-w-7xl  mx-auto">
        <div className=" flex items-center">
          <div className="w-lg p-10">
            <img src={image} alt={title} />
          </div>
          <div className="space-y-3  w-full">
            <div className="">
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="text-gray-500">
                Developed by{" "}
                <span className="primary-color">productive.io</span>
              </p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-start gap-10 py-5">
              <div className="space-y-2">
                <FiDownload style={{ color: "green", fontSize: "2rem" }} />
                <p className="text-gray-500 text-sm">Downloads</p>
                <h4 className="text-4xl font-bold">
                  {String(downloads).charAt(0)}M
                </h4>
              </div>
              <div className="space-y-2">
                <IoStar style={{ color: "orange", fontSize: "2rem" }} />
                <p className="text-gray-500 text-sm">Average Rating</p>
                <h4 className="text-4xl font-bold">{ratingAvg}</h4>
              </div>
              <div className="space-y-2">
                <TfiThumbUp style={{ color: "purple", fontSize: "2rem" }} />
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <h4 className="text-4xl font-bold">{reviews}</h4>
              </div>
            </div>
            <div>
              <button className="btn bg-green-400 text-white ">
                Install Now ({size} MB){" "}
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AppInfo;
