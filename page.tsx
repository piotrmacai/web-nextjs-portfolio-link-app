import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialLink } from "@/components/social-link"
import { Banner } from "@/components/banner"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site"
import Chatbot from "@/components/chatbot"
import { Github, Instagram, Linkedin, X, Video } from "lucide-react"

export default function Home() {
  // Get specific social media links
  const getSocialLink = (type: string) => {
    return siteConfig.links.find(link => link.type === type && link.visible)
  }

  // const socialMediaLinks = [
  //   { type: 'x', icon: '𝕏', link: getSocialLink('x') },
  //   { type: 'linkedin', icon: <Linkedin className="h-5 w-5" />, link: getSocialLink('linkedin') },
  //   { type: 'instagram', icon: <Instagram className="h-5 w-5" />, link: getSocialLink('instagram') },
  //   { type: 'behance', icon: 'Be', link: getSocialLink('behance') },
  //   { type: 'artstation', icon: 'AS', link: getSocialLink('artstation') },
  //   { type: 'github', icon: <Github className="h-5 w-5" />, link: getSocialLink('github') }
  // ].filter(item => item.link) 

  const socialMediaLinks = [
    {
      type: 'x',
      icon: <X className="h-5 w-5" />,
      url: "https://x.com/piotrmacai",
      shortDescription: "AI Insights and Guides"
    },
    {
      type: 'linkedin',
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/piotrmacai/",
      shortDescription: "AI Agents and LLMs insights"
    },
    {
      type: 'instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/piotr.macai/",
      shortDescription: "Visuals & AI Art"
    },
    {
      type: 'tiktok',
      icon: <Video className="h-5 w-5" />,
      url: "https://www.tiktok.com/@piotr_macai",
      shortDescription: "Short-form video AI content"
    },
    {
      type: 'behance',
      icon: 'Be',
      url: "https://www.behance.net/macaistudio",
      shortDescription: "Design & UX/UI"
    },
    {
      type: 'github',
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/piotrmacai",
      shortDescription: "Agents and LLMs"
    },
  ]


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted">
      <Banner image={siteConfig.bannerImage} />
      <div className="mx-auto max-w-2xl p-4">
        <ThemeToggle />

        <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
          <Avatar className="h-24 w-24 border-4 border-border">
            <AvatarImage src={siteConfig.avatar} alt={siteConfig.name} />
            <AvatarFallback>{siteConfig.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">
              {siteConfig.name}
            </h1>
            <p className="text-muted-foreground max-w-[600px] text-sm sm:text-base">
              {siteConfig.description}
            </p>
          </div>

          {/* Social Media Icons Bar */}
          <div className="flex justify-center items-center gap-4 py-2">
            {socialMediaLinks.map((social) => (
              <a
                key={social.type}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-110"
                title={social.shortDescription}
              >
                {typeof social.icon === 'string' ? (
                  <span className="text-lg font-bold">{social.icon}</span>
                ) : (
                  social.icon
                )}
              </a>
            ))}
          </div>


        </div>

        <div className="grid gap-4 py-2 md:gap-6">
          {siteConfig.links.filter(link => link.visible).map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <Footer {...siteConfig.footer} />
        <Chatbot />
      </div>
    </div>
  )
}

