/** Wing mark: three feathers per side. Pairs with the "grow wings" tagline. */
export default function Logo({ className = '' }: { className?: string }) {
  const feather = (rot: number, len: number) => (
    <rect x="29" y={42 - len} width="6" height={len} rx="3" transform={`rotate(${rot} 32 42)`} />
  )
  return (
    <svg viewBox="0 0 64 64" width="48" height="48" role="img" aria-label="Wings logo" className={className}>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#b4d08c" stroke="#131815" strokeWidth="3" />
      <g fill="#131815">
        {feather(-50, 26)}
        {feather(-72, 22)}
        {feather(-94, 17)}
      </g>
      <g fill="#131815" transform="translate(64 0) scale(-1 1)">
        {feather(-50, 26)}
        {feather(-72, 22)}
        {feather(-94, 17)}
      </g>
      <circle cx="32" cy="44" r="4" fill="#dbea8e" stroke="#131815" strokeWidth="2.5" />
    </svg>
  )
}
