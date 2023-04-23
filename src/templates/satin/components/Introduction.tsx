import { Wave } from '../assets/Wave'

export const Introduction = () => {
  return (
    <section className="bg-[#E0DBCE]">
      <div className="container mx-auto pt-16 pb-40">
        <p className="text-center font-semibold leading-none tracking-[4px] text-satin-100">
          WE INVITE YOU TO <br /> CELEBRATE OUR WEDDING
        </p>
        <p className="pt-8 text-center font-semibold leading-none tracking-[4px] text-satin-100">The Wedding of</p>
        {/* TODO: Replace-able */}
        <p
          data-aos="zoom-in-up"
          className="satin-secondary pt-4 text-center text-[50px] font-semibold leading-none tracking-[4px] text-satin-900">
          <i>Reyhan </i> & <i>Linta</i>
        </p>
        {/* TODO: Replace-able */}
        <div className="my-8">
          <p className="mb-2 text-center text-xl font-semibold leading-none tracking-[4px] text-satin-100">Sabtu</p>
          <p className="text-center text-2xl font-semibold leading-none tracking-[4px] text-satin-100">6 | Mei | 2023</p>
        </div>
        <p className="text-center text-xl italic leading-none tracking-[1px] text-satin-100">
          Maha suci Allah SWT yang telah menciptakan makhluk-NYA berpasang-pasangan. untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk
          keluarga yang sakinah, mawaddah, warahmah. Maka ijinkanlah kami menikahkannya.
        </p>
      </div>
      <Wave parentClassName="h-[64px] w-full rotate-180" className="w-full fill-[#F3F1EB]" />
    </section>
  )
}
