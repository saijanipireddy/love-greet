import { useState, useEffect, useRef, useCallback } from 'react'

const YOUTUBE_VIDEO_ID = 'UNOyfqFA8S4'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const autoplayAttempted = useRef(false)

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer()
      return
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      createPlayer()
    }

    return () => {
      window.onYouTubeIframeAPIReady = null
    }
  }, [])

  // Fallback: play on first user interaction if autoplay was blocked
  useEffect(() => {
    function playOnInteraction() {
      if (playerRef.current && ready && !playing) {
        playerRef.current.playVideo()
        setPlaying(true)
      }
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
    }

    if (ready && !playing) {
      document.addEventListener('click', playOnInteraction)
      document.addEventListener('touchstart', playOnInteraction)
    }

    return () => {
      document.removeEventListener('click', playOnInteraction)
      document.removeEventListener('touchstart', playOnInteraction)
    }
  }, [ready, playing])

  function createPlayer() {
    if (playerRef.current) return
    playerRef.current = new window.YT.Player('yt-player', {
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: YOUTUBE_VIDEO_ID, // required for loop to work
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: () => {
          setReady(true)
          playerRef.current.setVolume(50)
          // Try to autoplay immediately
          if (!autoplayAttempted.current) {
            autoplayAttempted.current = true
            playerRef.current.playVideo()
            setPlaying(true)
          }
        },
        onStateChange: (event) => {
          // Track actual playing state
          if (event.data === window.YT.PlayerState.PLAYING) {
            setPlaying(true)
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            // Only update if user intentionally paused (not browser blocking)
          }
          // If video ended, replay (backup for loop)
          if (event.data === window.YT.PlayerState.ENDED) {
            playerRef.current.playVideo()
          }
        },
      },
    })
  }

  const toggle = useCallback(() => {
    if (!playerRef.current || !ready) return

    if (playing) {
      playerRef.current.pauseVideo()
      setPlaying(false)
    } else {
      playerRef.current.playVideo()
      setPlaying(true)
    }
  }, [playing, ready])

  return (
    <>
      {/* Hidden YouTube player — off screen, audio only */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <div id="yt-player" />
      </div>

      {/* Toggle button */}
      <button
        onClick={toggle}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 50,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          background: 'rgba(17, 17, 51, 0.7)',
          backdropFilter: 'blur(12px)',
          border: playing
            ? '1px solid rgba(225, 29, 72, 0.4)'
            : '1px solid rgba(254, 242, 242, 0.15)',
          boxShadow: playing
            ? '0 0 20px rgba(225, 29, 72, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
        }}
        title={!ready ? 'Loading music...' : playing ? 'Pause Music' : 'Play Music'}
      >
        {!ready ? '⏳' : playing ? '🎵' : '🔇'}
      </button>
    </>
  )
}
