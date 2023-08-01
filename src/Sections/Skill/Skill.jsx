import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div id="skill">
      <Marquee speed={175} className="mb-28">
        <div className="flex w-1/3 gap-12">
          <div className="w-2/3">
            <img src="https://i.ibb.co/ZHGKpkG/html-5-5968267.png" alt="" />
          </div>
          <div className="w-2/3">
            <img src="https://i.ibb.co/nb74S00/css-888847.png" alt="" />
          </div>
          <div className="w-2/3">
            <img src="https://i.ibb.co/Syttkch/leaf-692032.png" alt="" />
          </div>
          <div className="w-2/3">
            <img src="https://i.ibb.co/TBvkNwK/structure-3334886.png" alt="" />
          </div>
          <div className="w-2/3">
            <img src="https://i.ibb.co/CzPj5pW/js-5968292.png" alt="" />
          </div>
          <div className="w-2/3">
            <img src="https://i.ibb.co/614Tynm/node-js-5968322.png" alt="" />
          </div>
          <div className="w-2/3 mt-4">
            <img
              className="h-20"
              src="https://i.ibb.co/jw5H7Sw/cover.png"
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skill;
