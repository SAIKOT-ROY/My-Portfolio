import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegHandPointRight, FaUnlink } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";
import { TbServerBolt } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="grid justify-center items-center gap-8 grid-cols-1 mb-20">
      <div className="md:flex justify-between mb-4">
        <div className="border md:w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
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
              className="btn btn-sm bg-sky-600 text-white hover:bg-blue-400"
            >
              <span>
                <RiLiveLine />
              </span>
              Live Demo
            </Link>
            <Link to="https://github.com/SAIKOT-ROY/chef-recipe" className="btn btn-sm bg-teal-500 text-white hover:bg-teal-300">
              <span>
                <FaUnlink />
              </span>
              Live Code
            </Link>
            <button className="btn btn-sm hover:bg-orange-200 bg-orange-400 text-white"><span><TbServerBolt /></span>Server Code</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl mb-2 text-blue-500 font-bold">Chef Hunter</p>
          <p className="font-bold mb-4">
            This Project i Have Build To Displaying The Chef of Japanese
            Restaurant And There Unique Dishes That are Famous
          </p>
          <div>
            <p className="flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                In This Web page you can see in top there is a navigation bar
                where you can browse to desired Route
              </span>
            </p>
            <p className="flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                It is a responsive website and it has login and register system
                for register website
              </span>
            </p>
            <p className="flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                If you click on View Details page you can see chef details and
                there recipe details.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between mb-4">
        <div className="md:w-1/2">
          <p className="text-3xl mb-2 text-blue-500 font-bold">Toy Story</p>
          <p className="font-bold mb-4">
            This Project of mine Called Toy store it has responsive design eye
            pleasing and user friendly
          </p>
          <div>
            <p className="md:flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                In This Web page you can see in top there is a navigation bar
                where you can browse to desired Route
              </span>
            </p>
            <p className="flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                It is a responsive website and it has login and register system
                for register website
              </span>
            </p>
            <p className="flex mb-2 gap-5 items-center">
              <span>
                <FaRegHandPointRight size={20} />
              </span>
              <span className="font-medium">
                If you click on View Details page you can see chef details and
                there recipe details.
              </span>
            </p>
          </div>
        </div>
        <div className="border md:w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
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
              to="https://toy-store-e89c4.web.app/"
              className="btn btn-sm bg-sky-600 text-white hover:bg-blue-400"
            >
              <span>
                <RiLiveLine />
              </span>
              Live Demo
            </Link>
            <Link to="https://github.com/SAIKOT-ROY/Toy-Store" className="btn btn-sm bg-teal-500 text-white hover:bg-teal-300">
              <span>
                <FaUnlink />
              </span>
              Live Code
            </Link>
            <button className="btn btn-sm hover:bg-orange-200 bg-orange-400 text-white"><span><TbServerBolt /></span>Server Code</button>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between gap-10 mb-4">
        <div className="border md:w-1/3 relative group border-blue-800 rounded-lg bg-slate-100 pb-8">
          <div className="border relative group">
            <img
              className="h-[220px] w-[1200px] rounded-md"
              src="https://i.ibb.co/60bF0N9/camp.png"
              alt=""
            />
            <div className="hidden rounded-md group-hover:block absolute top-0 left-0 right-0 pt-24 bg-gray-900 bg-opacity-75 h-full">
              <p className="text-white rounded-lg font-medium flex justify-center gap-2 items-center w-1/3 mx-auto">
                Build With
              </p>
              <p className="text-white text-center font-medium">
                React, React Router, Firebase, Express Js
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-3 ml-2">
            <Link
              to="https://summer-camp-58a17.web.app/"
              className="btn btn-sm bg-sky-600 text-white hover:bg-blue-400"
            >
              <span>
                <RiLiveLine />
              </span>
              Live Demo
            </Link>
            <Link to="https://github.com/SAIKOT-ROY/Sunshine-Camp" className="btn btn-sm bg-teal-500 text-white hover:bg-teal-300">
              <span>
                <FaUnlink />
              </span>
              Live Code
            </Link>
            <button className="btn btn-sm hover:bg-orange-200 bg-orange-400 text-white"><span><TbServerBolt /></span>Server Code</button>
          </div>
        </div>
        <div>
          <div className="md:w-3/4">
            <p className="text-3xl mb-2 text-blue-500 font-bold">Summer Camp</p>
            <p className="font-bold mb-4">
              This Project of mine Called Toy store it has responsive design eye
              pleasing and user friendly
            </p>
            <div>
              <p className="flex mb-2 gap-5 items-center">
                <span>
                  <FaRegHandPointRight size={20} />
                </span>
                <span className="font-medium">
                  In This Web page you can see in top there is a navigation bar
                  where you can browse to desired Route
                </span>
              </p>
              <p className="flex mb-2 gap-5 items-center">
                <span>
                  <FaRegHandPointRight size={20} />
                </span>
                <span className="font-medium">
                  It is a responsive website and it has login and register
                  system for register website
                </span>
              </p>
              <p className="flex mb-2 gap-5 items-center">
                <span>
                  <FaRegHandPointRight size={20} />
                </span>
                <span className="font-medium">
                  If you click on View Details page you can see chef details and
                  there recipe details.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
