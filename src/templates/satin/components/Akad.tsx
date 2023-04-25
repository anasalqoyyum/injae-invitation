export const Akad = () => {
  return (
    <section className="z-10">
      <div className="container mx-auto pt-4 pb-20 relative">
        <div className="absolute inset-0 block rotate-180 bg-[url('/satin/assets/leaf-3.png')] bg-cover opacity-20 md:hidden" />
        <div className="mx-4 flex flex-col justify-around gap-8 md:mx-52 md:flex-row md:gap-0">
          <div data-aos="zoom-in-up" className="text-center">
            <h1 className="satin-secondary text-4xl font-bold text-satin-900 md:text-5xl">Akad</h1>
            <p className="mt-2 mb-6 text-lg md:text-xl">Sabtu, 6 Mei 2023</p>
            <p className="mb-4 text-base md:text-lg">
              RDM Garage, <br /> Somosari 02/02 Batealit Jepara <br /> <span className="font-bold"> 09.00 WIB - Selesai</span>
            </p>
            <a
              href="https://goo.gl/maps/qU6yrahz7C5yJdgq8"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mr-2 mb-2 inline-flex items-center rounded-full bg-[#3F3C38] px-7 py-2.5 text-center font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus:ring-4 focus:ring-[#3F3C38]/50 md:mt-8">
              Lihat Lokasi
            </a>
          </div>
          <div data-aos="zoom-in-up" className="text-center">
            <h1 className="satin-secondary text-4xl font-bold text-satin-900 md:text-5xl">Resepsi</h1>
            <p className="mt-2 mb-6 text-lg md:text-xl">Sabtu, 6 Mei 2023</p>
            <p className="mb-4 text-base md:text-lg">
              RDM Garage, <br /> Somosari 02/02 Batealit Jepara <br /> <span className="font-bold"> 13.00 WIB - 18.00 WIB</span>
            </p>
            <a
              href="https://goo.gl/maps/qU6yrahz7C5yJdgq8"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mr-2 mb-2 inline-flex items-center rounded-full bg-[#3F3C38] px-7 py-2.5 text-center font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus:ring-4 focus:ring-[#3F3C38]/50 md:mt-8">
              Lihat Lokasi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
