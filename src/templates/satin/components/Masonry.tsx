import reyhan1 from '../assets/reyhan-linta/reyhan-1.jpg?url'
import reyhan2 from '../assets/reyhan-linta/reyhan-2.jpg?url'
import reyhan3 from '../assets/reyhan-linta/reyhan-3.jpg?url'
import reyhan4 from '../assets/reyhan-linta/reyhan-4.jpg?url'

export const Masonry = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-4">
        <div data-aos="fade-right">
          <img className="h-auto max-w-full rounded-lg transition hover:scale-110 ease-in-out duration-500 hover:z-50" src={reyhan1} alt="" />
        </div>
        <div data-aos="fade-right">
          <img className="h-auto max-w-full rounded-lg transition hover:scale-110 ease-in-out duration-500 hover:z-50" src={reyhan2} alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div data-aos="fade-left">
          <img className="h-auto max-w-full rounded-lg transition hover:scale-110 ease-in-out duration-500 hover:z-50" src={reyhan3} alt="" />
        </div>
        <div data-aos="fade-left">
          <img className="h-auto max-w-full rounded-lg transition hover:scale-110 ease-in-out duration-500 hover:z-50" src={reyhan4} alt="" />
        </div>
      </div>
    </div>
  )
}
