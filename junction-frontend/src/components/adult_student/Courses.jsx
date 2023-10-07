import Cours from "../shared/Cours"

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="title">My Courses</h2>
      <div className="grid grid-cols-12 mb-10">
        <div className="col-span-6 flex shadow-lg p-4 rounded-xl">

          <div className="flex-shrink-0 w" >
            <img className="rounded-xl h-full aspect-[12/9] object-cover" src="/mask.png" alt="mak" />
          </div>
          <div  className="flex flex-col w-full p-3">
            <h5 className="font-semibold text-lg">Programing Fundementals</h5>
            <p className="text-sm">Developper nasa with assembly</p>
            <div className="flex gap-2 items-center">
              <i className="uil uil-user"></i>
              <span className="font-semibold text-sm">Dr. benyahya</span>
            </div>
            <div className="flex justify-around my-3">
              <div className="flex flex-col justify-center items-center gap-2">
                <img src="/Vector.svg" alt="" />
                <span className="text-xs text-center">upcoming exam 10 days</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src="/Vector-1.svg" alt="" />
                <span className="text-xs text-center">All assigments are done</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src="/Vector-2.svg" alt="" />
                <span className="text-xs text-center">join Cours disscusion</span>
              </div>
            </div>
            <div className="mt-auto w-full h-2 bg-[#f5f5f5] rounded-full">
              <div className=" w-3/4 bg-kbcyan h-2 rounded-full"></div>
            </div>
            <span className="text-xs">Avancement : 70 %</span>
          </div>

        </div>
      </div>
      <h2 className="title">Recommended for You</h2>
      <div className="grid grid-cols-12 gap-4">
        <Cours />
        <Cours />
        <Cours />
      </div>
    </div>
  )
}

export default Courses