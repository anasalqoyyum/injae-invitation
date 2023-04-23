import { useCountdown } from '../hooks/useHooks'

const DateTimeDisplay = ({ value, type }: any) => {
  return (
    <div className={'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
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
