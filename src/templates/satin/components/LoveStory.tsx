import { Timeline } from './Timeline'

export const LoveStory = () => {
  return (
    <section className='z-10'>
      <div className="container mx-auto pt-16 pb-20">
        <p data-aos="zoom-in-up" className="satin-secondary pt-4 text-center text-[50px] font-semibold leading-none text-satin-900">
          Kisah Cinta
        </p>
        <div className="mx-96 mt-16 flex justify-center">
          <Timeline />
        </div>
        <p className="pt-16 text-center mx-72">
          "Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih
          cinta-Nya dilakukan dengan sukacita."
        </p>
      </div>
    </section>
  )
}
