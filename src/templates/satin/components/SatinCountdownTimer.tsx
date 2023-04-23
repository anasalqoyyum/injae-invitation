import { useCountdown } from '../../../hooks/useHooks'

const DateTimeDisplay = ({ value, type }: any) => {
  return (
    <div className="flex items-end justify-center gap-1">
      <p className="font-bold">{value}</p>
      <p className="text-xl font-semibold">{type}</p>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="satin-secondary flex flex-row justify-center gap-4 text-5xl text-satin-900">
      <DateTimeDisplay value={days} type={'Hari'} />
      <DateTimeDisplay value={hours} type={'Jam'} />
      <DateTimeDisplay value={minutes} type={'Menit'} />
      <DateTimeDisplay value={seconds} type={'Detik'} />
    </div>
  )
}

export const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
}
