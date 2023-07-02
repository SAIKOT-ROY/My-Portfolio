import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center mb-28 mx-auto">
      <div className="md:w-[3000px] lg:w-[2000px] w-3/4 mb-8">
        <img
          className="md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full"
          src="https://i.ibb.co/B3dP614/Untitled-design-2.png"
          alt=""
        />
      </div>
      <div className="md:ml-10 mx-4">
        <p
          className="text-4xl mb-4 text-[#2b7cff] font-bold"
          style={{
            textFillColor: "#2b7cff",
            WebkitTextStroke: "1px #c8f3f4ba",
            WebkitTextStrokeWidth: "1px",
          }}
        >
          About Me
        </p>
        <p className="md:w-3/4 text-justify mb-5 text-xl font-medium">
          Hi, I am Saikot Roy Chandan, a MERN stack developer. I have been
          learning and developing for six months. During this learning period, I
          have acquired skills in HTML, CSS, JavaScript, React, Node.js, and
          Express.js. I have built several significant projects using these
          skills. I am always eager to learn new things and continuously improve
          my knowledge. Adaptability to new situations is one of my strengths.
        </p>
        <div className="justify-start flex flex-col">
          <p className="text-3xl font-bold mb-2 ml-4">Find Me</p>
          <div className="flex mb-3">
            <Link className="btn btn-ghost" to="https://github.com/SAIKOT-ROY">
              <AiFillGithub size={35} />
            </Link>
            <Link
              className="btn btn-ghost"
              to="https://www.linkedin.com/in/saikot-roy-291688278/"
            >
              <BsLinkedin size={35} />
            </Link>
            <Link
              className="btn btn-ghost"
              to="https://www.facebook.com/Saikot.Roy.Chandon/"
            >
              <BsFacebook size={35} />
            </Link>
          </div>
        </div>
        <div className="ml-4">
          <p className="font-bold text-xl mb-2">Contact Info</p>
          <div className="flex gap-4">
            <p className="flex gap-2 items-center">
              <span>
                <BsPhoneFill />
              </span>
              <span className="font-medium">01767555544</span>
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <GrMail />
              </span>
              <span className="font-medium">saikotroydev@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
