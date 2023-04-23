import { CountdownTimer } from './SatinCountdownTimer'

export const Time = () => {
  const TARGET_TIME = new Date('May 6, 2023').getTime()

  return (
    <section>
      <div className="container mx-auto pt-4 pb-20">
        <CountdownTimer targetDate={TARGET_TIME} />
        <div className="flex justify-center">
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+%3A+Reyhan+dan+Linta&details=Lokasi%3A+RDM+Garage%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2Fr9mqkDmCr869S8Cg8%0A%0ASomosari+02%2F02+Batealit+Jepara&location=RDM+Garage%2C+Unnamed+Road%2C+9Q7V%2BW8X%2C+Somosari+III%2C+Somosari%2C+Batealit%2C+Jepara+Regency%2C+Central+Java+59461%2C+Indonesia&dates=20230506T060000Z%2F20230506T110000Z"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 mr-2 mb-2 inline-flex items-center rounded-full bg-[#3F3C38] px-7 py-2.5 text-center font-medium text-white hover:bg-[#3F3C38]/90 focus:outline-none focus:ring-4 focus:ring-[#3F3C38]/50">
            Save The Date
          </a>
        </div>
        <p className="mx-24 mt-4 text-center text-lg italic">
          “Dan di antara tanda-tanda (kebesaran)-Nya adalah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
          cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."{' '}
          <span className="font-bold">Ar-Ruum : 21</span>
        </p>
      </div>
    </section>
  )
}
