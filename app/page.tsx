import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Facebook, Instagram, MapPin, Phone, Star, TwitterIcon as TikTok } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { featuredItems, gemCollection, customerService, testimonials } from "@/lib/data"
import { FeaturedItem, Gem, CustomerService, Testimonial } from "@/lib/types"

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
            <h1 className="text-4xl font-semi-bold font-julius tracking-tighter sm:text-5xl md:text-6xl/none text-foreground max-w-4xl animate-fade-up">
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
              <h2 className="text-3xl font-semi-bold  tracking-tighter sm:text-4xl md:text-5xl text-foreground">
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
            <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured <span className="text-primary">Collections</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our handpicked selection of exquisite jewellery pieces, each crafted with precision and passion.
            </p>
          </div>
          <div className="flex md:grid flex-row md:grid-cols-3 gap-8 mt-8 overflow-x-auto snap-x snap-mandatory pb-4 md:overflow-x-visible">
            {featuredItems.map((item: FeaturedItem) => (
              <Card
                key={item.id}
                className="overflow-hidden border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl snap-center min-w-[200px] md:min-w-0"
                style={{ animationDelay: item.animationDelay || "0s" }}
              >
                <div className="relative h-48 md:h-72 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <Badge className={item.badgeStyle}>{item.badge}</Badge>
                      <p className="font-medium text-xs md:text-lg">{item.hoverText}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-base md:text-xl font-semi-bold font-julius text-primary">{item.title}</CardTitle>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2 text-xs md:text-base line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={item.link} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
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
            <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl">
              Precious <span className="text-primary">Gem Collection</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our selection of certified genuine gems from Sri Lanka, known as the "Gem Island."
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {gemCollection.map((gem: Gem) => (
              <Link key={gem.id} href={gem.link} className="group">
                <div
                  className="relative rounded-xl overflow-hidden aspect-square animate-fade-up border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: gem.animationDelay || "0s" }}
                >
                  <Image
                    src={gem.image}
                    alt={gem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 text-white w-full">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-1 w-5 bg-secondary rounded-full group-hover:w-8 transition-all duration-300"></div>
                        <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">{gem.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{gem.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
              <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl">
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
            <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl">
              Exceptional <span className="text-primary">Service</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We pride ourselves on providing friendly, personalized service to every customer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {customerService.map((service: CustomerService) => (
              <Card
                key={service.id}
                className="border border-primary/10 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
                style={{ animationDelay: service.animationDelay || "0s" }}
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6" dangerouslySetInnerHTML={{ __html: service.icon }} />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl">
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
            {testimonials.map((testimonial: Testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-card/30 backdrop-blur-sm border border-primary/10 hover:bg-card/50 transition-all duration-300 animate-fade-up rounded-xl"
                style={{ animationDelay: testimonial.animationDelay || "0s" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">{testimonial.review}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                      <span className="font-semibold text-primary">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">via {testimonial.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
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
          </div>
        </div>
      </section>
    </main>
  )
}