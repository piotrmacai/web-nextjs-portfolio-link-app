import { Button } from "@/components/ui/button"
import { X, Linkedin, InstagramIcon, Facebook, LinkIcon, Share2, Youtube, TwitterIcon as TikTok, PinIcon as Pinterest, Phone, Send, MessageCircle, Palette } from 'lucide-react'
import Image from 'next/image'

interface SocialLinkProps {
  type: string
  label: string
  url: string
  description?: string
  shortDescription?: string
}

const BehanceIcon = () => (
  <Image 
    src="/behance.png" 
    alt="Behance" 
    width={18} 
    height={18}
    className="opacity-75"
    style={{ marginRight: '8px' }} 
  />
)

const ArtstationIcon = () => (
  <Image 
    src="/artstation.png" 
    alt="Artstation" 
    width={18} 
    height={18}
    className="opacity-75"
    style={{ marginRight: '8px' }} 
  />
)

const DeviantartIcon = () => (
  <Image 
    src="/deviantart.png" 
    alt="DeviantArt" 
    width={18} 
    height={18}
    className="opacity-75"
    style={{ marginRight: '8px' }} 
  />
)

const iconMap = {
  x: X,
  linkedin: Linkedin,
  instagram: InstagramIcon,
  facebook: Facebook,
  threads: Share2,
  youtube: Youtube,
  tiktok: TikTok,
  pinterest: Pinterest,
  whatsapp: Phone,
  telegram: Send,
  messenger: MessageCircle,
  behance: BehanceIcon,
  artstation: ArtstationIcon,
  deviantart: DeviantartIcon,
  custom: LinkIcon,
}

export function SocialLink({ type, label, url, description, shortDescription }: SocialLinkProps) {
  const Icon = iconMap[type as keyof typeof iconMap]

  return (
    <Button 
      asChild 
      variant="outline" 
      className="w-full h-auto text-lg gap-4 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 flex flex-col items-start p-4 md:flex-row md:items-center"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
        <div className="flex items-center w-full">
          <Icon className="w-5 h-5 mr-4 flex-shrink-0" />
          <span>{label}</span>
        </div>
        {(shortDescription || (description && type === 'custom')) && (
          <p className="text-sm text-muted-foreground mt-2 text-left md:mt-0 md:ml-auto md:pl-4">
            {shortDescription || description}
          </p>
        )}
      </a>
    </Button>
  )
}

