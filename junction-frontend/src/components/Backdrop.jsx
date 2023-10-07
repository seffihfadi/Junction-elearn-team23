import PaperPlane from "../assets/PaperPlane"

const Backdrop = () => {
  return (
    <div className="fixed -z-10 top-0 left-0 w-screen h-screen">
      <PaperPlane />
    </div>
  )
}

export default Backdrop