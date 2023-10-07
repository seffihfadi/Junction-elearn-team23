
const Cards = () => {
  return (
    <div className="container">
      <h1 className="title">My Cards</h1>
      <h2 className="title">waiting</h2>
      <div className="grid grid-cols-12 mb-10">
        <div className="col-span-4 flex flex-col shadow-lg rounded-lg p-4">
          <div className="flex justify-center items-center gap-4">
            <i className="uil uil-question-circle text-[80px] text-kbcyan"></i>
            <p>What is the most powerful framework ?</p>
          </div>
          <div className="flex justify-around border-t-2 pt-4">
            <div className="flex justify-center cursor-pointer items-center gap-2">
              <i className="uil uil-edit text-[20px]"></i>
              Edit
            </div>
            <div className="flex justify-center cursor-pointer items-center gap-2">
              <i className="uil uil-trash-alt text-[20px]"></i>
              Delete
            </div>
          </div>
        </div>
      </div>
      <h2 className="title">answered</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex flex-col shadow-lg rounded-lg p-4">
          <div className="flex justify-center items-center gap-4">
            <i className="uil uil-question-circle text-[80px] text-kbcyan"></i>
            <p>Is HTML a Programing language ?</p>
          </div>
          <div className="border-t-2 pt-4">
            <span className="font-bold">Answer:</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta labore sint aliquid distinctio odio, maxime vitae odit, qui sed explicabo voluptas? Incidunt voluptatum pariatur ut officiis explicabo ea quod!</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cards