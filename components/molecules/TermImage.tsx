'use client'

import { useState } from 'react'
import type { TNode } from '@/lib/terminal'

/** A photo shown through a CRT filter so it looks like it lives in the terminal. Falls back to hand-made ASCII. */
export default function TermImage({ node }: { node: Extract<TNode, { type: 'image' }> }) {
  const [bad, setBad] = useState(false)
  return (
    <figure className="my-2">
      {node.src && !bad ? (
        <div className="relative inline-block max-w-full overflow-hidden rounded-sm border border-[#2e4a2c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={node.src}
            alt={node.caption ?? ''}
            onError={() => setBad(true)}
            className="block max-h-[300px] w-auto max-w-full [filter:grayscale(1)_contrast(1.25)_brightness(0.95)]"
          />
          {/* green phosphor tint + scanlines + vignette */}
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[#3dff6a] mix-blend-multiply opacity-80" />
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(0_0_0/0.28)_0_1px,transparent_1px_3px)]" />
          <span aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.55)_100%)]" />
        </div>
      ) : (
        <pre className="overflow-x-auto leading-[1.1] text-[#9fd08a]">{(node.ascii ?? ['[no image]']).join('\n')}</pre>
      )}
      {node.caption ? <figcaption className="mt-1 text-[#8a9a8c]"># {node.caption}</figcaption> : null}
    </figure>
  )
}
