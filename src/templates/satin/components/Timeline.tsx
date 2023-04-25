import { Heart } from 'react-feather'

export const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-8">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-red-200">
          <Heart className="h-3 w-3 fill-gray-100 stroke-slate-600" />
        </span>
        <div data-aos='fade-right' className="bg-white p-8 rounded-xl">
          <h3 className="mb-1 flex items-center text-lg md:text-xl font-semibold text-satin-900">Awal Pertemuan</h3>
          <p className="mb-4 text-base md:text-lg font-normal">
            <span className="font-bold">2013</span> - 10 tahun lalu jadi rekan OSIS di MTsN, sering ketemu and finally he fell first.
            Akhirnya deket dan putus karena mau ujian.
          </p>
        </div>
      </li>
      <li className="mb-10 ml-8">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-red-200">
          <Heart className="h-3 w-3 fill-gray-100 stroke-slate-600" />
        </span>
        <div data-aos='fade-right' className="bg-white p-8 rounded-xl">
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-satin-900">Boarding in Love</h3>
          <p className="text-base md:text-lg font-normal">
            <span className="font-bold">2015</span> - Ternyata lanjut di MAN yang sama dan tinggal di Boarding hampir 24/7 ketemu, putus
            nyambung lagi dan akhirnya di kelas 12 nyambung until now.
          </p>
        </div>
      </li>
      <li className="mb-10 ml-8">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-red-200">
          <Heart className="h-3 w-3 fill-gray-100 stroke-slate-600" />
        </span>
        <div data-aos='fade-right' className="bg-white p-8 rounded-xl">
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-satin-900">Menjalin Hubungan</h3>
          <p className="text-base md:text-lg font-normal">
            <span className="font-bold">2017</span> - Kuliah harus LDR Semarang - Jakarta, alhamdulillah masing-masing lulus dan kerja.
          </p>
        </div>
      </li>
      <li className="ml-8">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-red-200">
          <Heart className="h-3 w-3 fill-gray-100 stroke-slate-600" />
        </span>
        <div data-aos='fade-right' className="bg-white p-8 rounded-xl">
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-satin-900">Hari Tunangan</h3>
          <p className="text-base md:text-lg font-normal">
            <span className="font-bold">18 Desember 2022</span> - Alhamdulillah tunangan dan merencanakan pernikahan kami.
          </p>
        </div>
      </li>
    </ol>
  )
}
