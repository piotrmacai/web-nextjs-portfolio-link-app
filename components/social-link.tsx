import { Button } from "@/components/ui/button"
// 1. IMPORT ALL NECESSARY ICONS (both social and custom link icons)
import {
  X, Linkedin, InstagramIcon, Facebook, LinkIcon, Share2, Youtube,
  TwitterIcon as TikTok, PinIcon as Pinterest, Phone, Send,
  MessageCircle, Globe, ShoppingCart, Bot, Mail, Languages, ShoppingBag, Cpu,
  Palette, Github // Added Github if you uncomment it later
} from 'lucide-react'
import Image from 'next/image'
import React from 'react' // Import React for utility functions

interface SocialLinkProps {
  type: string
  label: string
  url: string
  description?: string
  shortDescription?: string
}

// ... your existing Image Icon components ...
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

// 2. Add the custom link icon mapping helper
const getCustomIcon = (label: string, url: string): React.ElementType | undefined => {
  const lowerLabel = label.toLowerCase();

  // Mapping based on your siteConfig labels
  if (lowerLabel.includes("store") || lowerLabel.includes("hub")) return Bot;
  if (lowerLabel.includes("automation studio")) return Cpu;
  if (lowerLabel.includes("substack")) return Mail;
  if (lowerLabel.includes("po polsku")) return Languages;
  if (lowerLabel.includes("portfolio")) return Globe;
  if (lowerLabel.includes("gumroad")) return ShoppingBag;

  // Return undefined if no custom match is found
  return undefined;
};

// 3. Update the existing iconMap with all possible icons
const iconMap: Record<string, React.ElementType> = {
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
  custom: LinkIcon, // Default fallback for custom links
  github: Github, // Added Github just in case, based on your previous code
};

export function SocialLink({ type, label, url, description, shortDescription }: SocialLinkProps) {

  // 4. Determine the Icon to Display
  let IconComponent: React.ElementType = iconMap[type as keyof typeof iconMap];

  // Check if it's a custom link and if we have a more specific icon for it
  if (type === 'custom') {
    const CustomIcon = getCustomIcon(label, url);
    if (CustomIcon) {
      IconComponent = CustomIcon;
    }
  }

  // Check if the icon is one of your Image components (Behance, Artstation, etc.)
  const isImageComponent = type === 'behance' || type === 'artstation' || type === 'deviantart' || (type === 'custom' && !React.isValidElement(<IconComponent />));

  return (
    <Button
      asChild
      variant="outline"
      className="w-full h-auto text-lg gap-4 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 flex flex-col items-start p-4 md:flex-row md:items-center"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
        <div className="flex items-center w-full">
          {/* 5. RENDER THE ICON */}
          {isImageComponent ? (
            // Render custom components (like your Image components) directly
            <div className="w-5 h-5 mr-4 flex-shrink-0 flex items-center justify-center">
              <IconComponent />
            </div>
          ) : (
            // Render Lucide icons with className for sizing
            <IconComponent className="w-5 h-5 mr-4 flex-shrink-0" />
          )}
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