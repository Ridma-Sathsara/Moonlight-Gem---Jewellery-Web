import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight, CuboidIcon as Cube } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const gemItems = [
  {
    slug: "blue-sapphire",
    name: "Blue Sapphire",
    description: "Ceylon blue sapphires are renowned for their exceptional color and clarity.",
    price: 1200,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
    category: "Sapphires",
    featured: true,
    has3dModel: true,
  },
  {
    slug: "ruby",
    name: "Ruby",
    description: "Sri Lankan rubies are known for their pinkish-red to deep red color.",
    price: 1500,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
    category: "Rubies",
    featured: true,
    has3dModel: true,
  },
  {
    slug: "emerald",
    name: "Emerald",
    description: "Colombian emeralds are considered the finest in the world, known for their rich green color.",
    price: 1000,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=1000&auto=format&fit=crop",
    category: "Emeralds",
    featured: true,
    has3dModel: true,
  },
  {
    slug: "alexandrite",
    name: "Alexandrite",
    description:
      "Rare color-changing gemstone that appears greenish-blue in daylight and purplish-red in incandescent light.",
    price: 3000,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1000&auto=format&fit=crop",
    category: "Rare Gems",
    featured: true,
    has3dModel: true,
  },
  {
    slug: "pink-sapphire",
    name: "Pink Sapphire",
    description: "Delicate pink sapphires with excellent clarity and brilliance.",
    price: 1100,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
    category: "Sapphires",
    featured: false,
    has3dModel: false,
  },
  {
    slug: "yellow-sapphire",
    name: "Yellow Sapphire",
    description: "Vibrant yellow sapphires known for their sunny color and excellent hardness.",
    price: 900,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1599707385852-88c5ef8cb6c3?q=80&w=1000&auto=format&fit=crop",
    category: "Sapphires",
    featured: false,
    has3dModel: false,
  },
  {
    slug: "spinel",
    name: "Spinel",
    description: "Natural spinels in various colors, often mistaken for rubies or sapphires throughout history.",
    price: 800,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
    category: "Rare Gems",
    featured: false,
    has3dModel: false,
  },
  {
    slug: "garnet",
    name: "Garnet",
    description: "Deep red garnets with excellent clarity and brilliance.",
    price: 500,
    priceUnit: "per carat",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
    category: "Semi-Precious",
    featured: false,
    has3dModel: false,
  },
]

export default function GemsPage() {
  const categories = Array.from(new Set(gemItems.map((item) => item.category)))

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-mixed">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">
                Certified Genuine Gems
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Precious Gem Collection
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore our selection of certified genuine gems from Sri Lanka, known as the "Gem Island."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gradient">Featured Gems</h2>
            <div className="flex gap-2 mt-4 md:mt-0 flex-wrap justify-center">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm" className="rounded-full">
                  {category}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              >
                All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
            {gemItems.map((item) => (
              <Link href={`/gems/${item.slug}`} key={item.slug} className="group">
                <Card className="overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up h-full">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">View details</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      {item.featured && <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>}
                      {item.has3dModel && (
                        <Badge className="bg-primary text-primary-foreground">
                          <Cube className="h-3 w-3 mr-1" /> 3D
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                        {item.name}
                      </CardTitle>
                      <span className="font-bold">${item.price.toLocaleString()}</span>
                    </div>
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 text-sm rounded-full">
                3D Gem Visualization
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Experience Gems in 3D</h2>
              <p className="text-muted-foreground text-lg">
                Our interactive 3D gem viewer allows you to examine our precious gems from every angle. Rotate, zoom,
                and appreciate the brilliance and facets of each stone as if you were holding it in your hand.
              </p>
              <p className="text-muted-foreground">
                We've created detailed 3D models of our most popular gems to help you make informed decisions. Each
                model accurately represents the cut, color, and characteristics of our high-quality gemstones.
              </p>
              <div className="pt-4">
                <Link href="/gems/blue-sapphire">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Try Our 3D Gem Viewer
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden animate-fade-in">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop"
                  alt="3D Gem Visualization"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cube className="h-16 w-16 text-white/80" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Interactive 3D models</p>
                  <p className="text-white/80">Examine gems from every angle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
