import ProgressBar from "@ramonak/react-progress-bar";

const SkillProgress = () => {
  return (
    <div className="mb-28">
      <div className="mb-5">
        <p className="text-center font-bold font-serif text-black text-4xl">
          Skill Bars
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 justify-center items-center mb-20">
        <p>
          <span className="ml-1 font-bold">Html</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={92}
          />
        </p>
        <p>
          <span className="ml-1 font-bold">Css</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={92}
          />
        </p>
        <p>
          <span className="ml-1 font-bold">Express Js</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={88}
          />
        </p>
        <p>
          <span className="ml-1 font-bold">Js</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={85}
          />
        </p>
        <p>
          <span className="ml-1 font-bold">React Js</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={90}
          />
        </p>
        <p>
          <span className="ml-1 font-bold">Mongo DB</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={87}
          />
        </p>
        <p className="">
          <span className="ml-1 font-bold">Node Js</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={35}
          />
        </p>
        <p className="">
          <span className="ml-1 font-bold">Firebase</span>
          <ProgressBar
            bgColor="#318CE7"
            animateOnRender
            width="90%"
            completed={65}
          />
        </p>
      </div>
    </div>
  );
};

export default SkillProgress;
