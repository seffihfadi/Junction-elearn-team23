
const Cours = () => {
  return (
    <div className="cours">
      <img src="/cours.png" alt="clur" />
      <div className="px-4 py-3">
        <h3>Robotic for kids</h3>
        <div className="flex gap-2 items-center">
          <i className="uil uil-user"></i>
          <span className="font-semibold text-sm">Dr. benyahya</span>
        </div>
        <div className="flex items-center gap-2">
          <span>4.3</span>
          <div className="flex">
            <i className="uil uil-star"></i>
            <i className="uil uil-star"></i>
            <i className="uil uil-star"></i>
            <i className="uil uil-star"></i>
            <i className="uil uil-star"></i>
          </div>
          <span>(2.4k)</span>
        </div>
      </div>
    </div>
  )
}

export default Cours