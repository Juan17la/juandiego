export default function Gif({ name, size = 24, className = '' }: { name: 'sparkle' | 'heart'; size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/gifs/${name}.gif`} alt="" width={size} height={size} className={`inline-block motion-reduce:hidden [image-rendering:pixelated] ${className}`} />
}
