import Image from 'next/image'

interface BannerProps {
  image: string
}

export function Banner({ image }: BannerProps) {
  return (
    <div className="relative w-full" style={{ maxHeight: '30vh' }}>
      <Image
        src={image}
        alt="Profile banner"
        width={1200}
        height={300}
        className="w-full h-auto object-cover"
        style={{ maxHeight: '30vh' }}
      />
    </div>
  )
}

