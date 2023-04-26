import { useEffect, useState, useCallback } from 'react'

export const useSound = (soundPath: string) => {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null)
  const [isReady, setIsReady] = useState(false)

  const play = useCallback(() => {
    audio?.play()
  }, [audio])

  // Due to no window
  useEffect(() => {
    setAudio(new Audio(soundPath))
  }, [soundPath])

  useEffect(() => {
    if (audio === null) {
      return
    }

    audio.addEventListener('canplaythrough', () => {
      setIsReady(true)
    })

    return () => {
      setIsReady(false)
    }
  }, [audio])

  return { play, isReady, currentAudio: audio }
}
