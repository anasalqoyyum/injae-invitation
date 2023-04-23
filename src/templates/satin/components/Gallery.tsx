import { Wave } from '../assets/Wave'

export const Gallery = () => {
  return (
    <section className="bg-[#E0DBCE]">
      <Wave parentClassName="h-[64px] w-full" className="w-full fill-[#F3F1EB]" />
      <div className="container mx-auto pt-8 pb-40">
        <p data-aos="zoom-in-up" className="satin-secondary pt-4 text-center text-[50px] font-semibold leading-none text-satin-900">
          Galeri
        </p>
      </div>
      <Wave parentClassName="h-[64px] w-full rotate-180" className="w-full fill-[#F3F1EB]" />
    </section>
  )
}
