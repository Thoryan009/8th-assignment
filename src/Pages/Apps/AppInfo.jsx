import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { TfiThumbUp } from "react-icons/tfi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { isExist, saveApps } from "../../helpers/localstorage";
import AppNotFound from "../AppNotFound";
// import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const AppInfo = () => {
  const params = useParams();
  const [ifExist, setIfExist] = useState(isExist(parseInt(params.id)))
  // useEffect(() => {
  //   setIfExist(isExist(params.id));
  // }, []);
// console.log(isExist(params.id))
  const apps = useLoaderData();
  const app = apps.find((app) => parseInt(app.id) === parseInt(params.id));
  if (!app) {
    return <AppNotFound/>;
  }

  const {
    image,
    id,
    ratingAvg,
    downloads,
    title,
    reviews,
    size,
    ratings,
    description,
  } = app;
  console.log(app);

  const handleClick = (id) => {
    console.log("clieck bro")
    saveApps(id);
    //  setIfExist(isExist(id));
     setIfExist(true)
  };

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
              <button
                onClick={() => handleClick(id)}
                disabled={ifExist}
                className="btn bg-green-400 text-white "
              >
                {ifExist ?   "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-start text-orange-400">
            Ratings
          </h3>
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={ratings}
            margin={{
              top: 5,
              right: 0,
              left: 30,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid /> */}
            <XAxis dataKey="name" />
            <YAxis width="auto" dataKey="count" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" radius={[10, 10, 0, 0]} />
            {/* <RechartsDevtools /> */}
          </BarChart>
        </div>
        <h4 className="text-2xl font-bold">Description</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AppInfo;
