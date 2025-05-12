import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%208-JJeUsZ0sg5FSizPrIgwatwiCqa7tsF.png"
              alt="MoonLight Gems and Jewellery Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="hidden font-bold text-gradient sm:inline-block">MoonLight Gems</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/gems" className="text-sm font-medium transition-colors hover:text-primary">
            Gems
          </Link>
          <Link href="/workshop" className="text-sm font-medium transition-colors hover:text-primary">
            Workshop
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
                  Gallery
                </Link>
                <Link href="/gems" className="text-sm font-medium transition-colors hover:text-primary">
                  Gems
                </Link>
                <Link href="/workshop" className="text-sm font-medium transition-colors hover:text-primary">
                  Workshop
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/contact">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">Contact Us</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
