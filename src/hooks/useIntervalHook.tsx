import { useEffect, useRef } from 'react'

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>()

  useEffect(() => {
    savedCallback.current = callback
  },[callback])

  useEffect(() => {
    function tick() {
      savedCallback.current?savedCallback.current():console.log('none')
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  },[delay])
}