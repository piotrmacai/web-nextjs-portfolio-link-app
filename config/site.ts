export interface SiteConfig {
  name: string
  avatar: string
  description: string
  bannerImage: string
  links: {
    label: string
    url: string
    type: 'x' | 'linkedin' | 'instagram' | 'facebook' | 'threads' | 'youtube' | 'tiktok' | 'pinterest' | 'whatsapp' | 'telegram' | 'messenger' | 'behance' | 'artstation' | 'deviantart' | 'custom'
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
  avatar: "/macaihead.jpg",
  description: "AI & Web Designer & Developer. Creator of New Digital World.",
  bannerImage: "/banner.jpg?height=300&width=1200",
  links: [
    {
      label: "Ainsider.tools",
      url: "https://ainsider.tools",
      type: "custom",
      description: "AI Tools and Models Directory",
      shortDescription: "AI Tools and Models Directory",
      visible: true
    },
    {
      label: "Ainsider.studio",
      url: "https://ainsider.co",
      type: "custom",
      description: "My Web & AI Studio",
      shortDescription: "My Web & AI Studio",
      visible: true
    },
    {
      label: "Ainsider.store",
      url: "https://ainsider.store",
      type: "custom",
      description: "AI Tutorials & Resources Platform",
      shortDescription: "AI Guides & Resources",
      visible: true
    },   
    {
      label: "Ai Newsletter",
      url: "https://ainsider.beehiiv.com",
      type: "custom",
      description: "Ainsider AI Newsletter",
      shortDescription: "Ainsider AI Newsletter",
      visible: true
    }, 
    {
      label: "Macai.studio",
      url: "https://macai.studio",
      type: "custom",
      description: "Check out my latest projects and case studies",
      shortDescription: "Personal Portfolio",
      visible: true
    },
    {
      label: "X",
      url: "https://x.com/piotrmacai",
      type: "x",
      shortDescription: "AI Insights and Guides",
      visible: true
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/piotrmacai/",
      type: "linkedin",
      shortDescription: "AI Agents and LLMs insights",
      visible: true
    },
    {
      label: "Instagram",
      url: "https://instagram.com/yourusername",
      type: "instagram",
      shortDescription: "Visuals & AI Art",
      visible: true
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
      visible: true
    },
    {
      label: "Artstation",
      url: "https://www.artstation.com/piotrmacai",
      type: "artstation",
      shortDescription: "AI Generated Visuals",
      visible: true
    },
    {
      label: "DeviantArt",
      url: "https://www.deviantart.com/piotrmacai",
      type: "deviantart",
      shortDescription: "AI Generated Visuals",
      visible: false
    }
  ],
  footer: {
    email: "piotr@ainsider.co",
    address: "Poland",
    phone: "+48 576 287 032"
  }
}

