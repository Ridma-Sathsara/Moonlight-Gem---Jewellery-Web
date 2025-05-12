import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%208-JJeUsZ0sg5FSizPrIgwatwiCqa7tsF.png"
                alt="MoonLight Gems and Jewellery Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-gradient">MoonLight Gems</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Specializing in bespoke and handcrafted jewellery with certified genuine gems since 1996.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/gems" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gems
              </Link>
              <Link href="/workshop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Workshop
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>JW8W+VCW, Wadduwa, Sri Lanka</p>
              <p>+94 123 456 789</p>
              <p>info@moonlightgems.com</p>
            </address>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary">Hours</h3>
            <p className="text-sm text-muted-foreground">Open 9:00 AM - 8:00 PM daily</p>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://facebook.com/moonlightgems"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/moonlightgems"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com/@moonlightgems"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 8v8a4 4 0 0 1-4 4" />
                  <line x1="15" x2="15" y1="4" y2="12" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://tripadvisor.com/moonlightgems"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                </svg>
                <span className="sr-only">TripAdvisor</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MoonLight Gems and Jewellery. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
