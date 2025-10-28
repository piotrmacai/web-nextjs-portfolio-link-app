"use client"
import { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    // Inject Botpress scripts only once
    const inject = document.createElement("script")
    inject.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    inject.async = true
    document.body.appendChild(inject)

    const config = document.createElement("script")
    config.src = "https://files.bpcontent.cloud/2024/11/29/17/20241129171925-F8VMA5P5.js"
    config.defer = true
    document.body.appendChild(config)

    return () => {
      // optional cleanup on unmount
      inject.remove()
      config.remove()
    }
  }, [])

  return null // nothing visible; widget auto-injects itself
}
