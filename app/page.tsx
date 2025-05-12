import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Facebook, Instagram, MapPin, Phone, Star, TwitterIcon as TikTok } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-secondary/20 z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-2 backdrop-blur-sm py-1.5 px-4 text-sm">
              Established 1996 • Professional Goldsmiths
            </Badge>
            <h1 className="text-4xl font-semi-bold tracking-tighter sm:text-5xl md:text-6xl/none text-foreground max-w-4xl animate-fade-up">
              Discover Exquisite Jewellery at{" "}
              <span className="relative inline-block">
                MoonLight Gem & Jewellery 
               
              </span>
            </h1>
            <p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Bespoke and handcrafted jewellery with certified genuine gems in Kalutara, Sri Lanka.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link href="/gallery">
                <Button size="lg" className="bg-secondary text-primary-foreground hover:bg-primary/90 font-medium">
                  View Collection
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 font-medium"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div
              className="flex items-center gap-4 pt-8 text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Kalutara, Sri Lanka</span>
              </div>
              <div className="h-4 w-px bg-muted-foreground/30"></div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+94 71 64 65 451</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-24 bg-background/60">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-5 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm rounded-full">Our Heritage</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Crafting Excellence <span className="text-primary">Since 1996</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                MoonLight Gems and Jewellery was established in 1996 by a family of professional goldsmiths with a
                passion for creating exquisite jewellery that showcases the natural beauty of Sri Lanka's precious gems.
              </p>
              <p className="text-muted-foreground">
                For over 25 years, we have maintained our commitment to exceptional craftsmanship, ethical sourcing, and
                personalized customer service. Each piece in our collection represents our heritage of excellence and
                attention to detail.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden animate-fade-in">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="MoonLight Gems Workshop"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 bg-secondary rounded-full"></div>
                    <p className="font-medium text-secondary">25+ years of excellence</p>
                  </div>
                  <p className="text-white/90 text-lg">Traditional craftsmanship meets modern design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="w-full py-16 md:py-24 bg-accent/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12 animate-fade-up">
            <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm rounded-full mb-2">
              Handcrafted Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured <span className="text-primary">Collections</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our handpicked selection of exquisite jewellery pieces, each crafted with precision and passion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Featured Item 1 */}
            <Card className="overflow-hidden border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl">
              <div className="relative h-72 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sapphire Necklace"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <Badge className="bg-primary/80 hover:bg-primary text-white mb-2">New Collection</Badge>
                    <p className="font-medium text-lg">Handcrafted with precision</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Sapphire Necklace</CardTitle>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
                  Elegant sapphire pendant with 18k gold chain, perfect for special occasions.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/jewelry/sapphire-necklace" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Featured Item 2 */}
            <Card
              className="overflow-hidden border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative h-72 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ruby Earrings"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <Badge className="bg-secondary/80 hover:bg-secondary text-white mb-2">Best Seller</Badge>
                    <p className="font-medium text-lg">Artisan crafted with love</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Ruby Earrings</CardTitle>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
                  Stunning ruby earrings with diamond accents, handcrafted for timeless beauty.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/jewelry/ruby-earrings" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Featured Item 3 */}
            <Card
              className="overflow-hidden border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative h-72 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Emerald Ring"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <Badge className="bg-primary/80 hover:bg-primary text-white mb-2">Limited Edition</Badge>
                    <p className="font-medium text-lg">Meticulously handcrafted</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Emerald Ring</CardTitle>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
                  Exquisite emerald ring set in white gold with pavé diamonds for a luxurious look.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/jewelry/emerald-ring" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/jewelry">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                View All Jewelry
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gem Collection Section */}
      <section className="w-full py-16 md:py-24 bg-background/60">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12 animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm rounded-full mb-2">
              Ceylon's Finest
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Precious <span className="text-primary">Gem Collection</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our selection of certified genuine gems from Sri Lanka, known as the "Gem Island."
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {/* Gem 1 */}
            <Link href="/gems/blue-sapphire" className="group">
              <div className="relative rounded-xl overflow-hidden aspect-square animate-fade-up border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blue Sapphire"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-1 w-5 bg-secondary rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">Blue Sapphire</h3>
                    </div>
                    <p className="text-white/90 text-sm">Ceylon's finest</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gem 2 */}
            <Link href="/gems/ruby" className="group">
              <div
                className="relative rounded-xl overflow-hidden aspect-square animate-fade-up border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1602491676584-c2440fbd24f4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ruby"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-1 w-5 bg-secondary rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">Ruby</h3>
                    </div>
                    <p className="text-white/90 text-sm">Vibrant red brilliance</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gem 3 */}
            <Link href="/gems/emerald" className="group">
              <div
                className="relative rounded-xl overflow-hidden aspect-square animate-fade-up border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Emerald"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-1 w-5 bg-secondary rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">Emerald</h3>
                    </div>
                    <p className="text-white/90 text-sm">Lush green elegance</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gem 4 */}
            <Link href="/gems/alexandrite" className="group">
              <div
                className="relative rounded-xl overflow-hidden aspect-square animate-fade-up border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Alexandrite"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-1 w-5 bg-secondary rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">Alexandrite</h3>
                    </div>
                    <p className="text-white/90 text-sm">Color-changing marvel</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/gems">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Explore All Gems
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="w-full py-16 md:py-24 bg-accent/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-5 animate-fade-in order-2 lg:order-1">
              <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm rounded-full">
                Artisan Craftsmanship
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Handcrafted with <span className="text-secondary">Passion</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                At MoonLight Gems and Jewellery, every piece is meticulously crafted by hand by our skilled artisans. We
                take pride in preserving traditional jewellery-making techniques while incorporating modern designs.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-secondary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Each gem is carefully selected and cut by master gemologists</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-secondary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Metal settings are handcrafted using traditional techniques</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-secondary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Each piece is polished and finished by hand for exceptional quality</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 text-secondary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>No mass production - every jewellery piece is unique</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/workshop">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                    Visit Our Workshop
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden animate-fade-in order-1 lg:order-2">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jewellery Workshop"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 bg-secondary rounded-full"></div>
                    <p className="font-medium text-secondary">Our master craftsmen at work</p>
                  </div>
                  <p className="text-white/90 text-lg">Decades of experience in every piece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="w-full py-16 md:py-24 bg-background/60">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12 animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm rounded-full mb-2">
              Customer Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Exceptional <span className="text-primary">Service</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We pride ourselves on providing friendly, personalized service to every customer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <circle cx="12" cy="10" r="2" />
                    <line x1="8" x2="8" y1="2" y2="4" />
                    <line x1="16" x2="16" y1="2" y2="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Personalized Consultations</h3>
                <p className="text-muted-foreground">
                  Our expert staff provides one-on-one consultations to help you find the perfect piece or create a
                  custom design that matches your vision.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M21.73 18.36a2 2 0 0 1-2.84 0L17.42 17a2 2 0 0 1 0-2.83l.22-.22a2 2 0 0 1 2.83 0l1.27 1.27a2 2 0 0 1 0 2.83Z" />
                    <path d="M18.36 5.27a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l1.27 1.27a2 2 0 0 1 0 2.83l-.22.22a2 2 0 0 1-2.83 0Z" />
                    <path d="M8 4H5a2 2 0 0 0-2 2v16" />
                    <path d="M4 12h16" />
                    <path d="M14 8h2" />
                    <path d="M14 16h2" />
                    <path d="M9 8h1" />
                    <path d="M9 16h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Certification & Guarantee</h3>
                <p className="text-muted-foreground">
                  All our gems come with proper certification, and we offer a satisfaction guarantee on all purchases to
                  ensure your complete confidence.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Always Available</h3>
                <p className="text-muted-foreground">
                  Connect with us anytime via WhatsApp, Facebook, or email. Our friendly team is ready to assist with
                  inquiries, custom orders, or after-sales support.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="https://wa.me/94716465451">
                <Button className="bg-[#25D366] text-white hover:bg-[#25D366]/90 group flex gap-2 min-w-[200px] justify-center">
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
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                  </svg>
                  Chat on WhatsApp
                </Button>
              </Link>
              <Link href="https://www.facebook.com/MoonlightGemsandJewellery">
                <Button className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 group flex gap-2 min-w-[200px] justify-center">
                  <Facebook className="h-5 w-5" />
                  Message on Facebook
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group min-w-[200px] justify-center">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 bg-accent/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center animate-fade-up mb-12">
            <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm rounded-full mb-2">
              Customer Reviews
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our <span className="text-secondary">Customers Say</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We pride ourselves on excellent customer service with a 4.9 rating from 33 reviews.
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <Link
                href="https://www.tripadvisor.com/Attraction_Review-g304136-d25230040-Reviews-Moonlight_Gems_And_Jewellery-Kalutara_Western_Province.html"
                className="text-sm text-muted-foreground hover:text-primary flex items-center bg-card/30 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                </svg>
                TripAdvisor
              </Link>
              <Link
                href="https://www.facebook.com/MoonlightGemsandJewellery"
                className="text-sm text-muted-foreground hover:text-primary flex items-center bg-card/30 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <Facebook className="h-4 w-4 mr-1" />
                Facebook
              </Link>
              <Link
                href="https://www.tiktok.com/@moonlight20030809"
                className="text-sm text-muted-foreground hover:text-primary flex items-center bg-card/30 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <TikTok className="h-4 w-4 mr-1" />
                TikTok
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-card/30 backdrop-blur-sm border border-primary/10 hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Moonlight Gems and Jewellery are truly experts in their field. The quality of the workmanship is 2nd to none. They supply fully certified genuine stones. No fakes here!!
The team are excellent, they customised exactly my design.
I've had a few pieces now from Moonlight, I've never lost a stone, earring back or found a piece tarnished. I would definitely recommend!!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <span className="font-semibold text-primary">MT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Kirsty E</p>
                    <p className="text-xs text-muted-foreground">via TripAdvisor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="bg-card/30 backdrop-blur-sm border border-primary/10 hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "This family jewellery shop and staff are brilliant - so skilled and innovative in their quality and designs - absolutely thrilled with our pieces ❤️😍😘 - which are ‘brilliant’ - you made our holiday 🥰"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <span className="font-semibold text-primary">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Clare Forsyth</p>
                    <p className="text-xs text-muted-foreground">via Facebook</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="bg-card/30 backdrop-blur-sm border border-primary/10 hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "A hidden gem in Kalutara! I found unique pieces that I couldn't find anywhere else during my trip to
                  Sri Lanka. The workshop tour was fascinating!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <span className="font-semibold text-primary">ER</span>
                  </div>
                  <div>
                    <p className="font-semibold">Emma R.</p>
                    <p className="text-xs text-muted-foreground">via TikTok</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-secondary/20 z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-6 animate-fade-up">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-2 backdrop-blur-sm py-1.5 px-4 text-sm">
              Visit Us Today
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Experience the Art of Handcrafted Jewellery
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Visit our workshop in Kalutara, Sri Lanka or browse our online collection to discover unique, handcrafted
              jewellery pieces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Book a Workshop Tour
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Browse Collection
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-8 text-muted-foreground">
              <Link href="https://facebook.com/moonlightgems" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/moonlightgems" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://tiktok.com/@moonlightgems" className="hover:text-primary transition-colors">
                <TikTok className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}
