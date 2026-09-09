import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const App = (app) => {
   const {image, ratingAvg, downloads, title} = app.app
  //  console.log(app)
    return (
           <div className=" ml-5 card bg-base-100  shadow-sm">
            <figure className="  p-5 ">
              <img
                className="rounded-xl"
                src={image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>

              <div className="card-actions justify-between">
                <div className="btn bg-amber-50 border-0 text-green-500">
                  {" "}
                  <FaDownload />
                  {String(downloads).charAt(0)}M
                </div>
                <div className="btn bg-amber-50 text-orange-400 border-0">
                 <FaStar />  {ratingAvg}
                </div>
              </div>
            </div>
          </div>
    );
};

export default App;