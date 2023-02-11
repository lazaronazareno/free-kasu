import confetti from 'canvas-confetti'
import React, { useState, useEffect, useContext } from 'react'
import { ColorContext } from '../context/colorContexts'

const Countdown = () => {
  const { theme } = useContext(ColorContext)

  const [countdown, setCountdown] = useState(null)
  const [isFree, setIsFree] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date()
      const targetDate = new Date(2023, 1, 11, 17, 0, 0)
      const diffTime = targetDate - currentDate
      const seconds = Math.floor((diffTime / 1000) % 60)
      const minutes = Math.floor((diffTime / 1000 / 60) % 60)
      const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    if (countdown !== null && countdown.days <= 0 &&
      countdown.hours <= 0 && countdown.minutes &&
      countdown.seconds <= 0) {
      setIsFree(true)
    }
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (isFree) {
      confetti()
    }
  }, [setIsFree])

  return (
    <div className='countdown' style={{ color: theme.details === '#EAC7C7' ? 'black' : theme.details, backgroundColor: theme.bg }}>
      {countdown === null
        ? (
            'Loading...'
          )
        : countdown !== null && countdown.days <= 0 &&
        countdown.hours <= 0 && countdown.minutes &&
        countdown.seconds <= 0
          ? (
          <h2 style={{ fontSize: '5rem', margin: '0' }}>Kasu es Libre!!!!</h2>
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
