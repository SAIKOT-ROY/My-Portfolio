import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="grid justify-center items-center gap-8 grid-cols-1 md:grid-cols-1 mb-96">
      <div className="flex justify-between">
        <div className="border w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
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
          <div className="mt-10 flex gap-3 ml-2">
            <Link
              to="https://the-chef-hunting-10.web.app/?fbclid=IwAR0JQHr6bFxBEQv7GM4wBhuIxAc7BPzkehOyLNf54oOj5zsEOcCG-8XITwc"
              className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400"
            >
              Live Demo
            </Link>
            <button className="btn btn-sm btn-outline">Live Code</button>
            <button className="btn btn-sm btn-outline">Server Code</button>
          </div>
        </div>
        <div className="w-1/2">
          <p>Hola senor</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p>senor</p>
        </div>
        <div className="border w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
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
          <div className="mt-10 flex gap-3 ml-2">
            <Link
              to="https://the-chef-hunting-10.web.app/?fbclid=IwAR0JQHr6bFxBEQv7GM4wBhuIxAc7BPzkehOyLNf54oOj5zsEOcCG-8XITwc"
              className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400"
            >
              Live Demo
            </Link>
            <button className="btn btn-sm btn-outline">Live Code</button>
            <button className="btn btn-sm btn-outline">Server Code</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
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
          <div className="mt-10 flex gap-3 ml-2">
            <Link
              to="https://the-chef-hunting-10.web.app/?fbclid=IwAR0JQHr6bFxBEQv7GM4wBhuIxAc7BPzkehOyLNf54oOj5zsEOcCG-8XITwc"
              className="btn btn-sm bg-blue-600 text-white hover:bg-blue-400"
            >
              Live Demo
            </Link>
            <button className="btn btn-sm btn-outline">Live Code</button>
            <button className="btn btn-sm btn-outline">Server Code</button>
          </div>
        </div>
        <div>
          <p>Senor</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
