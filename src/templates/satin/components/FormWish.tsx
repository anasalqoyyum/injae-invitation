import { Wave } from '../assets/Wave'

export const FormWish = () => {
  return (
    <section className="bg-[#E0DBCE]">
      <Wave parentClassName="h-[64px] w-full" className="w-full fill-[#F3F1EB]" />
      {/* <div className="container mx-auto pt-8 pb-36">
        <p data-aos="zoom-in-up" className="satin-secondary pt-4 text-center text-[50px] font-semibold leading-none text-satin-900">
          Ucapkan Sesuatu
        </p>
      </div> */}
      {/* <div className="pb-24"> */}
        <h1
          data-aos="fade-in"
          className="satin-secondary flex flex-row items-center justify-center gap-4 pt-8 pb-4 text-center text-4xl font-semibold text-satin-900 before:block before:w-12 before:border-t-2  before:border-b-0 before:border-t-[#A87000] after:block after:w-12 after:border-b-0 after:border-t-2 after:border-t-[#A87000]">
          Reyhan & Linta
        </h1>
        <p className="text-center text-sm italic">See You on Our Lovely Day</p>
      {/* </div> */}
      <Wave parentClassName="h-[64px] w-full rotate-180" className="w-full fill-[#F3F1EB]" />
    </section>
  )
}
