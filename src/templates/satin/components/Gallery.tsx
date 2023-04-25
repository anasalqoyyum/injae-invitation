import { Wave } from '../assets/Wave'
import { Carousel } from './Carousel'
import reyhan1 from '../assets/reyhan-linta/reyhan-1.jpg?url'
import reyhan2 from '../assets/reyhan-linta/reyhan-2.jpg?url'
import reyhan3 from '../assets/reyhan-linta/reyhan-3.jpg?url'
import reyhan4 from '../assets/reyhan-linta/reyhan-4.jpg?url'
import { Masonry } from './Masonry'

export const Gallery = () => {
  const images = [
    reyhan1,
    reyhan2,
    reyhan3,
    reyhan4
  ]

  return (
    <section className="bg-[#E0DBCE]">
      <Wave parentClassName="h-[64px] w-full" className="w-full fill-[#F3F1EB]" />
      <div className="container mx-auto pt-8 pb-36">
        <p data-aos="zoom-in-up" className="satin-secondary pt-4 text-center text-[50px] font-semibold leading-none text-satin-900">
          Galeri
        </p>
        <div data-aos="zoom-in" className='mt-8 mx-80'>
          <Carousel images={images} />
        </div>
        <div className='mt-16 mx-96'>
          <Masonry />
        </div>
      </div>
      <Wave parentClassName="h-[64px] w-full rotate-180" className="w-full fill-[#F3F1EB]" />
    </section>
  )
}
