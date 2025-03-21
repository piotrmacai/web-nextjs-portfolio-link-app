import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialLink } from "@/components/social-link"
import { Banner } from "@/components/banner"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site"
import  Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-muted">
      <Banner image={siteConfig.bannerImage} />
      <div className="mx-auto max-w-2xl p-4">
        <ThemeToggle />
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
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
        </div>

        <div className="grid gap-4 py-6 md:gap-6">
          {siteConfig.links.filter(link => link.visible).map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <Footer {...siteConfig.footer} />
        <Chatbot/>
      </div>
    </div>
  )
}

