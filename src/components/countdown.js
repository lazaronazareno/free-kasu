import React, { useState, useEffect, useContext } from 'react'
import { ColorContext } from '../context/colorContexts'

const Countdown = () => {
  const { theme } = useContext(ColorContext)

  const [countdown, setCountdown] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date()
      const targetDate = new Date(2023, 2, 1)
      const diffTime = targetDate - currentDate
      const seconds = Math.floor((diffTime / 1000) % 60)
      const minutes = Math.floor((diffTime / 1000 / 60) % 60)
      const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='countdown' style={{ color: theme.details === '#EAC7C7' ? 'black' : theme.details, backgroundColor: theme.bg }}>
      {countdown === null
        ? (
            'Loading...'
          )
        : (
          <>
            <div className='timer'>
              <div>
                <span>días</span>
                <h1>{countdown.days}</h1>
              </div>
              <div>
                <span>horas</span>
                <h1>{countdown.hours}</h1>
              </div>
              <div>
                <span>minutos</span>
                <h1>{countdown.minutes}</h1>
              </div>
              <div>
                <span>segundos</span>
                <h1>{countdown.seconds}</h1>
              </div>
            </div>
            <h1>Para que Kasu sea libre...</h1>
          </>
          )}
    </div>

  )
}

export default Countdown
