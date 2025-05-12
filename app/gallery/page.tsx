import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Sapphire Necklace",
      description: "18k white gold pendant with a 2-carat Ceylon blue sapphire",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      slug: "sapphire-necklace",
    },
    {
      id: 2,
      title: "Emerald Necklace",
      description: "Elegant emerald pendant with diamond accents on a gold chain",
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      slug: "emerald-necklace",
    },
    {
      id: 3,
      title: "Ruby Earrings",
      description: "Classic drop earrings featuring vibrant rubies and white gold",
      image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
      slug: "ruby-earrings",
    },
    {
      id: 4,
      title: "Diamond Bracelet",
      description: "Stunning tennis bracelet with brilliant-cut diamonds",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      slug: "diamond-bracelet",
    },
    {
      id: 5,
      title: "Blue Topaz Earrings",
      description: "Delicate blue topaz earrings on a sterling silver chain",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      slug: "topaz-earrings",
    },
    {
      id: 6,
      title: "Amethyst Pendant",
      description: "Beautiful amethyst pendant with diamond accents",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
      slug: "amethyst-pendant",
    },
    {
      id: 7,
      title: "Pearl Necklace",
      description: "Elegant freshwater pearl necklace with a gold clasp",
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      slug: "pearl-necklace",
    },
    {
      id: 8,
      title: "Garnet Bracelet",
      description: "Stunning garnet bracelet set in yellow gold",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      slug: "garnet-bracelet",
    },
    {
      id: 9,
      title: "Citrine Ring",
      description: "Bold citrine statement ring with diamond accents",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      slug: "citrine-ring",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-mixed">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">Handcrafted Since 1996</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Jewellery Collection
            </h1>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
              Explore our exquisite collection of handcrafted jewellery featuring certified genuine gems.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Link href={`/jewelry/${item.slug}`} key={item.id} className="group">
                <Card className="overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-60">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">View details</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">{item.description}</CardDescription>
                    <div className="mt-4 flex justify-end">
                      <Button variant="ghost" size="sm" className="group-hover:text-secondary transition-colors">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Custom Creations</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We specialize in creating bespoke jewellery pieces tailored to your preferences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full">
              <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66 1-1.73" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Design Consultation</h3>
                <p className="text-muted-foreground text-center">
                  Schedule a consultation with our expert designers to bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Gem Selection</h3>
                <p className="text-muted-foreground text-center">
                  Choose from our collection of certified gems or bring your own for a custom piece.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Craftsmanship</h3>
                <p className="text-muted-foreground text-center">
                  Our skilled artisans will handcraft your piece with meticulous attention to detail.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Start Your Custom Design
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
