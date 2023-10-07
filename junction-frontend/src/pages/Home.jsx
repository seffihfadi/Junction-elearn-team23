import { useAuth } from "../context/AuthProvider";
import dashcircle from "../assets/dashcircle.png";
import Footer from "../components/Footer";
import { useState } from "react";
import someone from "../assets/someMF.png";
import musk from "../assets/Musk.png";
import guts from "../assets/gutsAvatar.png";
import studying from "../assets/Studying.png";

const DataCircles = ({ data, title }) => {
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className=" w-28 aspect-square rounded-full relative flex justify-center items-center bg-kbcyan">
        <span className=" relative z-10 font-bold text-3xl text-white">
          {data}
        </span>
        <div className=" absolute w-full h-full top-0 left-0">
          <img src={dashcircle} alt="circle" className=" w-full h-full" />
        </div>
      </div>
      <span className=" text-center font-bold text-2xl text-kbcyan">
        {title}
      </span>
    </div>
  );
};

const TestimonialCard = ({ img, name, quote }) => {
  return (
    <div className=" max-w-xl gap-4 border-solid border-[1px] border-kbcyan rounded-md p-4 flex flex-col md:flex-row items-center">
      <div>
        <p>"{quote}"</p>
        <span className=" w-full flex justify-end">“ {name} “</span>
      </div>
      <img
        src={img}
        alt="avatar"
        className=" w-20 h-20 rounded-full order-first md:order-last"
      />
    </div>
  );
};

const Testimonials = () => {
  const lorem =
    "I swear, i will give this team the highest ranking in the JunctionX hackathon! Don't forget you sweared!.";
  const [step, setStep] = useState(0);
  return (
    <div className=" flex flex-col md:flex-row gap-8">
      <ul className=" flex md:flex-col gap-4 justify-center">
        {[...new Array(3)].map((_, idx) => {
          return (
            <li
              onClick={() => setStep(idx)}
              className={`${
                idx === step ? " bg-kbcyan " : " bg-[#D1F5FF]"
              } cursor-pointer w-3 h-3 rounded-full`}
              key={idx}
            ></li>
          );
        })}
      </ul>
      {step === 0 ? (
        <TestimonialCard img={musk} name={"Elon Musk"} quote={lorem} />
      ) : null}
      {step === 1 ? (
        <TestimonialCard img={guts} name={"Guts"} quote={lorem} />
      ) : null}
      {step === 2 ? (
        <TestimonialCard img={someone} name={"some one"} quote={lorem} />
      ) : null}
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className="cours max-w-sm">
      <div className=" aspect-video">
        <img src={studying} alt="clur" className=" w-full h-full object-top " />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1">
        <h3>Robotic for kids</h3>
        <div className="flex gap-2 items-center">
          <i className="uil uil-user"></i>
          <span className="font-semibold text-sm">Dr. benyahya</span>
        </div>
        <div className="flex items-center gap-2">
          <span>4.3</span>
          <div className="flex">
            {[...new Array(5)].map((_, idx) => (
              <i key={idx} className="uil uil-star"></i>
            ))}
          </div>
          <span>(2.4k)</span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const user = useAuth();
  return (
    // <div>Home hellow {user.name}</div>
    <>
      <div className="hero">
        <div className="container mt-10">
          <div className=" flex flex-col md:flex-row items-center">
            <div className="col-span-7 flex flex-col justify-center">
              <h1>
                Learn and make your key <br />
                to the future
              </h1>
              <p className="my-8 max-w-md">
                Unlock Your Potential: Empower Your Future with Knowledge at
                Keybox Where Learning Knows No Boundaries!
              </p>
            </div>
            <div className="col-span-5 ml-auto">
              <img src="/hero.png" alt="hero-image" />
            </div>
          </div>
        </div>
        <div className="thebest">
          <div className="container">
            <h2 className="title">How we are the best</h2>
            <div className="grid grid-cols-12 mt-5 md:px-14">
              <div className="cret">
                <img src="/ico1.png" alt="ico1" />
                <span>Personalized roadmaps</span>
              </div>
              <div className="cret">
                <img src="/ico2.png" alt="ico2" />
                <span>Impressive award system</span>
              </div>
              <div className="cret">
                <img src="/ico3.png" alt="ico3" />
                <span>Gamifying learning experience</span>
              </div>
              <div className="cret">
                <img src="/ico4.png" alt="ico4" />
                <span>Active Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="title">Our best courses</h2>
        <div className=" flex gap-5 flex-wrap md:flex-nowrap justify-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      <div className=" py-20 flex gap-2 justify-evenly px-4 flex-wrap">
        <DataCircles data={62} title={"Sessions"} />
        <DataCircles data={420} title={"Members"} />
        <DataCircles data={25} title={"Formateurs"} />
        <DataCircles data={"100%"} title={"Satisfaction"} />
      </div>

      <div className="container">
        <h2 className=" font-bold text-2xl">Daro fina thi9a</h2>
        <div className="grid grid-cols-12">
          <div className="spon">
            <img src="/spon (1).png" alt="" />
          </div>
          <div className="spon">
            <img src="/spon (2).png" alt="" />
          </div>
          <div className="spon">
            <img src="/spon (3).png" alt="" />
          </div>
          <div className="spon">
            <img src="/spon (4).png" alt="" />
          </div>
          <div className="spon">
            <img src="/spon (5).png" alt="" />
          </div>
          <div className="spon">
            <img src="/spon (6).png" alt="" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 px-2 md:px-14">
        <h3 className=" font-bold text-2xl">Testimonials</h3>
        <div className=" flex justify-center items-center">
          <Testimonials />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
