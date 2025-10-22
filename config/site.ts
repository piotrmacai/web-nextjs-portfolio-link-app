export interface SiteConfig {
  name: string
  avatar: string
  description: string
  bannerImage: string
  links: {
    label: string
    url: string
    type: 'x' | 'linkedin' | 'github' | 'instagram' | 'facebook' | 'threads' | 'youtube' | 'tiktok' | 'pinterest' | 'whatsapp' | 'telegram' | 'messenger' | 'behance' | 'artstation' | 'deviantart' | 'custom'
    description?: string
    shortDescription?: string
    visible: boolean
  }[]
  footer: {
    email?: string
    address?: string
    phone?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Piotr Macai / Ainsider.co",
  avatar: "/macailg.jpg",
  description: "AI & Web Designer & Developer. Creator of New Digital World.",
  bannerImage: "/banner.png?height=300&width=1200",
  links: [       
    {
      label: "AI Agents & Resources Hub",
      url: "https://ainsider.store",
      type: "custom",
      description: "AI Agents & Resources Hub",
      shortDescription: "ainsider.store",
      visible: true
    },    
   {
      label: "AI & Automation Studio",
      url: "https://ainsider.co",
      type: "custom",
      description: "AI & Automation Studio",
      shortDescription: "ainsider.co",
      visible: true
    }, 
       {
      label: "Substack AI Newsletter",
      url: "https://ainsiderai.substack.com/",
      type: "custom",
      description: "Substack AI Newsletter",
      shortDescription: "ainsiderai.substack.com",
      visible: true
    },       
    // {
    //   label: "AI Agents & Automation Templates Store",
    //   url: "https://ainsider.store",
    //   type: "custom",
    //   description: "AI Agents & Automation Templates Store",
    //   shortDescription: "Ainsider.store",
    //   visible: true
    // },
    
    {
      label: "AI Newsletter po polsku",
      url: "https://ainsider.pl",
      type: "custom",
      description: "AI po polsku",
      shortDescription: "ainsider.pl",
      visible: true
    }, 
            {
      label: "My Personal Portfolio",
      url: "https:/macai.cloud.com", 
      type: "custom",
      description: "Check out my latest projects and case studies",
      shortDescription: "macai.cloud",
      visible: true
    }, 
    {
      label: "AI Agents & Automation Skool",
      url: "https://www.skool.com/ainsider-6149/about?ref=d207b2af5b914ff09daac8af70f1162c",
      type: "custom",
      description: "Skool with AI Agents & Automations",
      shortDescription: "skool",
      visible: true
    },  
     {
      label: "Gumroad with AI & Creatives Workflows",
      url: "https://ainsider.gumroad.com/",
      type: "custom",
      description: "Gumroad",
      shortDescription: "gumroad",
      visible: true
    },    
    // {
    //   label: "Polskojęzyczny Newsletter AI",
    //   url: "https://newsletter.ainsider.pl",
    //   type: "custom",
    //   description: "Baza wiedzy & Katalog Narzędzi AI",
    //   shortDescription: "Subskrybuj",
    //   visible: true
    // },
   
    {
      label: "X",
      url: "https://x.com/piotrmacai",
      type: "x",
      shortDescription: "AI Insights and Guides",
      visible: false
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/piotrmacai/",
      type: "linkedin",
      shortDescription: "AI Agents and LLMs insights",
      visible: false
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/piotr.macai/",
      type: "instagram",
      shortDescription: "Visuals & AI Art",
      visible: false
    },
    {
      label: "Facebook",
      url: "https://facebook.com/yourusername",
      type: "facebook",
      shortDescription: "Personal updates and community",
      visible: false
    },
    {
      label: "Threads",
      url: "https://www.threads.net/@piotr.macai",
      type: "threads",
      shortDescription: "AI news & AI art",
      visible: false
    },
    {
      label: "YouTube",
      url: "https://youtube.com/c/yourusername",
      type: "youtube",
      shortDescription: "Video content and tutorials",
      visible: false
    },
    {
      label: "TikTok",
      url: "https://tiktok.com/@yourusername",
      type: "tiktok",
      shortDescription: "Short-form video content",
      visible: false
    },
    {
      label: "Pinterest",
      url: "https://pinterest.com/yourusername",
      type: "pinterest",
      shortDescription: "Visual inspiration and ideas",
      visible: false
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/yournumber",
      type: "whatsapp",
      shortDescription: "Direct messaging",
      visible: false
    },
    {
      label: "Telegram",
      url: "https://t.me/yourusername",
      type: "telegram",
      shortDescription: "Secure messaging and updates",
      visible: false
    },
    {
      label: "Messenger",
      url: "https://m.me/yourusername",
      type: "messenger",
      shortDescription: "Quick chats and connections",
      visible: false
    },
    {
      label: "Behance",
      url: "https://www.behance.net/macaistudio",
      type: "behance",
      shortDescription: "Design & UX/UI",
      visible: false
    },
    {
      label: "Artstation",
      url: "https://www.artstation.com/piotrmacai",
      type: "artstation",
      shortDescription: "AI Generated Visuals",
      visible: false
    },
    {
      label: "DeviantArt",
      url: "https://www.deviantart.com/piotrmacai",
      type: "deviantart",
      shortDescription: "AI Generated Visuals",
      visible: false
    }
    // {
    //   label: "GitHub",
    //   url: "https://github.com/piotrmacai",
    //   type: "github",
    //   shortDescription: "Source code and projects",
    //   visible: true
    // }
  ],
  footer: {
    email: "piotr@ainsider.co",
    address: "Poland",
    phone: "+48 730 776 541"
  }
}

