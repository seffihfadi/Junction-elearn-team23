
const Goodies = () => {
  return (
    <div className="container">
      <h2 className="title">Hello, Study and Claim your godies !</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 rounded-lg shadow-lg p-5">
          <h2 className="title">Pick your Gift</h2>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <img src="/grp.svg" alt="" />
              <h4 className="text-center font-semibold">Keybox mug</h4>
              <div className="flex ml-auto items-center gap-2 py-4">
                <img className="w-7" src="/fire1.svg" alt="" />
                <span>39px</span>
              </div>
              <button className="secondary">Claim</button>
            </div>
            
            <div className="flex flex-col">
              <img src="/gift (1).svg" alt="" />
              <h4 className="text-center font-semibold">Keybox T-shirt</h4>
              <div className="flex ml-auto items-center gap-2 py-4">
                <img className="w-7" src="/fire1.svg" alt="" />
                <span>1200px</span>
              </div>
              <button className="secondary">Claim</button>
            </div>
            <div className="flex flex-col">
              <img src="/gift (3).svg" alt="" />
              <h4 className="text-center font-semibold">Keybox cap</h4>
              <div className="flex ml-auto items-center gap-2 py-4">
                <img className="w-7" src="/fire1.svg" alt="" />
                <span>420px</span>
              </div>
              <button className="secondary">Claim</button>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-12">
          <div className="col-span-12">
            <img className="w-full" src="/grad.svg" alt="" />
          </div>
            {/* <img className="w-full h-full" src="/rank.svg" alt="" /> */}
          <div className="col-span-12">
            <div className="px-2 flex items-center gap-3 py-1">
              <span>#01</span>
              <img className="object-cover w-10 h-10 rounded-full" src="/mask.png" alt="" />
              <h5>Aghiles</h5>
              <span className="ml-auto">2150px</span>
            </div>
            <div className="px-2 flex items-center gap-3 py-1 rounded-md bg-gray-200">
              <span>#02</span>
              <img className="object-cover w-10 h-10 rounded-full" src="/cours.png" alt="" />
              <h5>Rami</h5>
              <span className="ml-auto">2000px</span>
            </div>
            <div className="px-2 flex items-center gap-3 py-1">
              <span>#03</span>
              <img className="object-cover w-10 h-10 rounded-full" src="/mask.png" alt="" />
              <h5>Zegtouf</h5>
              <span className="ml-auto">1000px</span>
            </div>
            <div className="px-2 flex items-center gap-3 py-1">
              <span>#04</span>
              <img className="object-cover w-10 h-10 rounded-full" src="/mask.png" alt="" />
              <h5>Aymen</h5>
              <span className="ml-auto">20px</span>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Goodies