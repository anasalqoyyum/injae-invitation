import male from '../assets/male.png?url'
import female from '../assets/female.png?url'
import { Instagram } from 'react-feather'

export const Bride = () => {
  return (
    <section>
      <div className="container mx-auto pt-16 pb-16">
        <div className="mx-52 flex flex-row justify-center">
          <div className="flex flex-row gap-2 rounded-xl bg-[#F3F1EB] p-12 shadow-satin-xl">
            <div className="flex flex-col items-center py-8 px-12 text-center">
              <img className="max-w-[50%]" src={male} />
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
            <div className="flex flex-col items-center py-8 px-12 text-center">
              <img className="max-w-[50%]" src={female} />
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
