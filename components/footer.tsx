import { Mail, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  email?: string
  address?: string
  phone?: string
}

export function Footer({ email, address, phone }: FooterProps) {
  const footerItems = [
    { icon: Mail, content: email },
    { icon: MapPin, content: address },
    { icon: Phone, content: phone },
  ].filter(item => item.content)

  if (footerItems.length === 0) return null

  return (
    <footer className="mt-12 py-6 border-t">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {footerItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <item.icon className="w-4 h-4" />
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </footer>
  )
}

