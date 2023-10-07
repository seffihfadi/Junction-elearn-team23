import Assigments from "../shared/Assigments"
import achiement from '../../assets/Achievement.png'
const Assigmento = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 lg:gap-8">
        <div className="col-span-12 lg:col-span-6 rounded-lg shadow-lg px-10 py-2">
          <h2 className="title">Assigments</h2>
          <Assigments />
        </div>
        <div className="col-span-12 lg:col-span-6 rounded-lg shadow-lg px-10 py-2">
          <h2 className="title">Notes Received</h2>
          <div className="flex py-5 items-center gap-4">

            <img src={achiement} alt="achivement" className="w-8 h-8" />
            <p className="font-semibold">Great Job</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assigmento