import { Assinment } from "../../pages/Dashboard"
import achiement from "../../assets/Achievement.png";
const Assigments = () => {
  return (
    <>
      <h3 className="my-5 font-semibold text-lg">
        Assinments of this week :{" "}
      </h3>

      <div className=" p-4 flex flex-col border-y-2">
        
        <Assinment done={true} Text={"Study quizz 1, robotics "} />
        <hr className=" w-full border-[1px]  border-gray-300" />
        <Assinment done={true} Text={"Study quizz 1, robotics "} />
        <hr className=" w-full border-[1px]  border-gray-300" />
        <Assinment done={false} Text={"Study quizz 1, robotics "} />
        <hr className=" w-full border-[1px]  border-gray-300" />
        <Assinment done={false} Text={"Study quizz 1, robotics "} />
        <hr className=" w-full border-[1px]  border-gray-300" />
        <Assinment done={false} Text={"Study quizz 1, robotics "} />
      </div>
      <div className=" flex flex-col gap-1 p-4">
        <p className=" flex items-center gap-1">
          <span>Next rank : Intermediate</span>
          <img src={achiement} alt="achivement" className=" w-5 h-5" />
        </p>
        <div className=" w-full h-2 bg-bgDarker rounded-full">
          <div className=" w-3/4 bg-kbcyan h-2 rounded-full"></div>
        </div>
        <span className=" opacity-50">123PX / 230PX</span>
      </div>
    </>
  )
}

export default Assigments