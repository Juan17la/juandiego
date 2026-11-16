'use client'

import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'

/** <img> that shimmers until it has loaded, then fades in. Give it a size (h-full, w-full…) so the skeleton has room to show. */
export default function Img({ className = '', onLoad, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null)
  const [ready, setReady] = useState(false)
  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete) setReady(true)
  }, [])
  return (
    // eslint-disable-next-line @next/next/no-img-element -- alt comes in through props
    <img
      ref={ref}
      decoding="async"
      {...rest}
      onLoad={(e) => {
        setReady(true)
        onLoad?.(e)
      }}
      onError={() => setReady(true)}
      className={`${className} ${ready ? 'loaded' : 'skeleton'}`}
    />
  )
}
