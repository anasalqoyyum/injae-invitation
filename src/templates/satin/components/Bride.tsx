import male from '../assets/male.png?url'
import female from '../assets/female.png?url'
import { Instagram } from 'react-feather'

export const Bride = () => {
  return (
    <section className="z-10">
      <div className="absolute h-[64rem] md:h-[48rem] w-full">
        <div className="absolute top-0 left-0 h-full w-full rotate-180 bg-[url('/satin/assets/leaf-3.png')] bg-[length:100%_auto] md:bg-[length:80%_auto] bg-center bg-no-repeat opacity-20" />
      </div>
      <div className="container mx-auto pt-16 pb-16">
        <div className="mx-12 flex flex-row justify-center md:mx-52">
          <div className="z-10 flex flex-col gap-2 rounded-xl bg-[#F3F1EB] p-0 shadow-satin-xl md:flex-row md:p-12">
            <div className="flex flex-col items-center py-8 px-12 text-center">
              <img className="max-w-full md:max-w-[50%]" src={male} />
              {/* TODO: Replace-able */}
              <p className="satin-secondary mb-1 pt-4 text-center text-4xl font-bold italic text-satin-900">Reyhan</p>
              <p>Muhammad Reyhan Jawadi</p>
              <p className="mt-2 text-sm">
                Putra Pertama dari Keluarga <br /> Bpk Agus Wahyu Wibowo & Ibu Musyarofah (alm)
              </p>
              <a
                href="https://www.instagram.com/reyhan_jee/"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="mt-6 mr-2 mb-2 flex flex-row items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
                <Instagram size={15} /> Instagram
              </a>
            </div>
            <div className="satin-secondary block text-center text-4xl font-semibold text-satin-900 md:hidden">&</div>
            <div className="flex flex-col items-center py-8 px-12 text-center">
              <img className="max-w-full md:max-w-[50%]" src={female} />
              {/* TODO: Replace-able */}
              <p className="satin-secondary mb-1 pt-4 text-center text-4xl font-bold italic text-satin-900">Linta</p>
              <p>Linta Ainil Ulya</p>
              <p className="mt-2 text-sm">
                Putri Kedua dari Keluarga <br /> Bpk Kasnan & Ibu Sutifik
              </p>
              <a
                href="https://www.instagram.com/lintaa_/"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="mt-6 mr-2 mb-2 flex flex-row items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
                <Instagram size={15} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
