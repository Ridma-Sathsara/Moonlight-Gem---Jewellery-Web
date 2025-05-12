import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const jewelryItems = [
  {
    slug: "sapphire-necklace",
    name: "Sapphire Necklace",
    description: "Elegant sapphire pendant with 18k gold chain, perfect for special occasions.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    category: "Necklaces",
    featured: true,
  },
  {
    slug: "ruby-earrings",
    name: "Ruby Earrings",
    description: "Stunning ruby earrings with diamond accents, handcrafted for timeless beauty.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
    category: "Earrings",
    featured: true,
  },
  {
    slug: "emerald-ring",
    name: "Emerald Ring",
    description: "Exquisite emerald ring set in white gold with pavé diamonds for a luxurious look.",
    price: 2199,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    category: "Rings",
    featured: true,
  },
  {
    slug: "emerald-necklace",
    name: "Emerald Necklace",
    description: "Elegant emerald pendant with diamond accents on a white gold chain.",
    price: 2299,
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
    category: "Necklaces",
    featured: false,
  },
  {
    slug: "diamond-bracelet",
    name: "Diamond Tennis Bracelet",
    description: "Classic tennis bracelet with brilliant-cut diamonds set in 18k white gold.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "Bracelets",
    featured: false,
  },
  {
    slug: "pearl-necklace",
    name: "Pearl Necklace",
    description: "Elegant freshwater pearl necklace with a gold clasp, perfect for any occasion.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
    category: "Necklaces",
    featured: false,
  },
  {
    slug: "topaz-earrings",
    name: "Blue Topaz Earrings",
    description: "Vibrant blue topaz drop earrings set in sterling silver with a modern design.",
    price: 899,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
    category: "Earrings",
    featured: false,
  },
  {
    slug: "amethyst-pendant",
    name: "Amethyst Pendant",
    description: "Rich purple amethyst pendant surrounded by small diamonds on a white gold chain.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
    category: "Necklaces",
    featured: false,
  },
  {
    slug: "citrine-ring",
    name: "Citrine Cocktail Ring",
    description: "Bold citrine cocktail ring with a unique design, perfect for making a statement.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    category: "Rings",
    featured: false,
  },
  {
    slug: "garnet-bracelet",
    name: "Garnet Bracelet",
    description: "Elegant bracelet featuring deep red garnets set in yellow gold with a secure clasp.",
    price: 1699,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "Bracelets",
    featured: false,
  },
  {
    slug: "sapphire-bracelet",
    name: "Sapphire Bracelet",
    description: "Exquisite bracelet with Ceylon blue sapphires alternating with brilliant-cut diamonds.",
    price: 2899,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "Bracelets",
    featured: false,
  },
  {
    slug: "ruby-bracelet",
    name: "Ruby Bracelet",
    description: "Luxurious bracelet featuring Burmese rubies set in 18k rose gold with a secure clasp.",
    price: 2599,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "Bracelets",
    featured: false,
  },
  {
    slug: "emerald-bracelet",
    name: "Emerald Bracelet",
    description: "Stunning bracelet with Colombian emeralds set in 18k white gold with a box clasp.",
    price: 2399,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    category: "Bracelets",
    featured: false,
  },
]

export default function JewelryPage() {
  const categories = Array.from(new Set(jewelryItems.map((item) => item.category)))

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-mixed">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">
                Handcrafted Since 1996
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our Jewelry Collection
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore our exquisite collection of handcrafted jewelry featuring certified genuine gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gradient">Featured Pieces</h2>
            <div className="flex gap-2 mt-4 md:mt-0">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animation">
            {jewelryItems.map((item) => (
              <Card
                key={item.slug}
                className="overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
              >
                <div className="relative h-60 overflow-hidden group">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Handcrafted with precision</p>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                    <span className="font-bold">${item.price.toLocaleString()}</span>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/jewelry/${item.slug}`} className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Custom Jewelry Design</h2>
            <p className="text-muted-foreground md:text-xl">
              Can't find exactly what you're looking for? Our master craftsmen can create a custom piece just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Request a Custom Design
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/workshop">
                <Button variant="outline">Learn About Our Process</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
