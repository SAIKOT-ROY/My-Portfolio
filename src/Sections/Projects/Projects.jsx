import { BsEyeFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="grid justify-center items-center gap-8 grid-cols-1 md:grid-cols-3">
      <div className="border border-blue-500">
        <div className="border relative group">
          <img
            className="h-[220px] w-[1200px] rounded-md"
            src="https://i.ibb.co/4TSHQ4Z/ramen.png"
            alt=""
          />
          <div className="hidden rounded-md group-hover:block absolute top-0 left-0 right-0 pt-24 bg-gray-900 bg-opacity-75 h-full">
            <p className="text-slate-800 rounded-lg font-medium flex justify-center gap-2 items-center bg-slate-300 border w-1/3 mx-auto">
              <span>View Details</span>
              <span>
                <BsEyeFill />
              </span>
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-outline">Live Demo</button>
          <button className="btn btn-outline">Live Code</button>
          <button className="btn btn-outline">Server Code</button>
        </div>
      </div>
      <div className="border relative group">
        <img
          className="h-[220px] w-[1200px] rounded-md"
          src="https://i.ibb.co/KhwphXg/Toy.png"
          alt=""
        />
        <div className="hidden rounded-md group-hover:block absolute top-0 left-0 right-0 pt-24 bg-gray-900 bg-opacity-75 h-full">
          <p className="text-slate-800 rounded-lg font-medium flex justify-center gap-2 items-center bg-slate-300 border w-1/3 mx-auto">
            <span>View Details</span>
            <span>
              <BsEyeFill />
            </span>
          </p>
        </div>
      </div>
      <div className="border relative group">
        <img
          className="h-[220px] w-[1200px] rounded-md"
          src="https://i.ibb.co/60bF0N9/camp.png"
          alt=""
        />
        <div className="hidden rounded-md group-hover:block absolute top-0 left-0 right-0 pt-24 bg-gray-900 bg-opacity-75 h-full">
          <p className="text-slate-800 rounded-lg font-medium flex justify-center gap-2 items-center bg-slate-300 border w-1/3 mx-auto">
            <span>View Details</span>
            <span>
              <BsEyeFill />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
