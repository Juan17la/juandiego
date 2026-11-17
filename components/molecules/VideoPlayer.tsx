'use client'

import { useEffect, useRef, useState } from 'react'
import { CornersOut, Pause, Play, SpeakerSimpleHigh, SpeakerSimpleSlash } from '@phosphor-icons/react'
import { useContent } from '@/lib/i18n'

const time = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

/** Promo video in the site's style: poster + shimmer while it loads, spinner while buffering, slim custom controls. */
export default function VideoPlayer({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const { ui } = useContent()
  const box = useRef<HTMLDivElement>(null)
  const v = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [waiting, setWaiting] = useState(true)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(true)
  const [t, setT] = useState(0)
  const [dur, setDur] = useState(0)
  const [full, setFull] = useState(false)
  const scrubbing = useRef(false)

  useEffect(() => {
    const on = () => setFull(document.fullscreenElement === box.current)
    document.addEventListener('fullscreenchange', on)
    return () => document.removeEventListener('fullscreenchange', on)
  }, [])

  const toggle = () => (v.current?.paused ? v.current.play() : v.current?.pause())
  // Imperative, not the `muted` prop: React only applies that on mount, so toggling it later does nothing.
  const mute = () => {
    if (!v.current) return
    v.current.muted = !v.current.muted
    setMuted(v.current.muted)
  }
  const fullscreen = () => (document.fullscreenElement ? document.exitFullscreen() : box.current?.requestFullscreen?.())
  const seek = (to: number) => {
    if (v.current) v.current.currentTime = to
    setT(to)
  }
  const btn = 'grid size-10 shrink-0 place-items-center rounded-full text-white transition hover:bg-white/15'

  return (
    <div ref={box} className={`group/v absolute inset-0 grid place-items-center bg-black ${ready ? '' : 'skeleton'}`}>
      <video
        ref={v}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        onClick={toggle}
        onLoadedData={() => setReady(true)}
        onWaiting={() => setWaiting(true)}
        onPlaying={() => setWaiting(false)}
        onCanPlay={() => setWaiting(false)}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onDurationChange={(e) => setDur(e.currentTarget.duration)}
        onTimeUpdate={(e) => !scrubbing.current && setT(e.currentTarget.currentTime)}
        className="size-full cursor-pointer object-contain"
      />

      {waiting ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center bg-black/25">
          <span className="rounded-full bg-black/55 p-3 backdrop-blur-md">
            <span className="spinner block" />
          </span>
        </div>
      ) : paused ? (
        <button type="button" onClick={toggle} aria-label={ui.play} className="absolute grid size-20 place-items-center rounded-full bg-hi text-on-hi shadow-2xl transition hover:scale-105">
          <Play size={30} weight="fill" aria-hidden />
        </button>
      ) : null}

      <div
        className={`absolute inset-x-3 bottom-3 flex items-center gap-1 rounded-full bg-black/55 py-1 pr-2 pl-1 backdrop-blur-md transition-opacity duration-300 sm:inset-x-4 sm:bottom-4 [@media(hover:none)]:opacity-100 ${paused || full ? 'opacity-100' : 'opacity-0 group-hover/v:opacity-100 focus-within:opacity-100'}`}
      >
        <button type="button" onClick={toggle} aria-label={paused ? ui.play : ui.pause} className={btn}>
          {paused ? <Play size={18} weight="fill" aria-hidden /> : <Pause size={18} weight="fill" aria-hidden />}
        </button>
        <input
          type="range"
          min={0}
          max={dur || 1}
          step={0.1}
          value={t}
          aria-label={ui.seek}
          onPointerDown={() => (scrubbing.current = true)}
          onPointerUp={() => (scrubbing.current = false)}
          onPointerCancel={() => (scrubbing.current = false)}
          onBlur={() => (scrubbing.current = false)}
          onChange={(e) => seek(+e.target.value)}
          className="scrub mx-1 min-w-0 flex-1"
          style={{ '--p': `${dur ? (t / dur) * 100 : 0}%` } as React.CSSProperties}
        />
        <span className="num shrink-0 px-1 text-xs text-white/85">
          {time(t)} / {time(dur)}
        </span>
        <button type="button" onClick={mute} aria-label={muted ? ui.unmute : ui.mute} className={btn}>
          {muted ? <SpeakerSimpleSlash size={18} weight="fill" aria-hidden /> : <SpeakerSimpleHigh size={18} weight="fill" aria-hidden />}
        </button>
        <button type="button" onClick={fullscreen} aria-label={ui.fullscreen} className={`${btn} max-sm:hidden`}>
          <CornersOut size={18} weight="bold" aria-hidden />
        </button>
      </div>
    </div>
  )
}
