import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star } from "lucide-react"

// This would typically come from a database or CMS
const jewelryItems = [
  {
    slug: "sapphire-necklace",
    name: "Sapphire Necklace",
    description:
      "This elegant sapphire pendant features a stunning 2-carat Ceylon blue sapphire set in 18k white gold. The pendant hangs from a delicate 18-inch gold chain, creating a piece that's perfect for both special occasions and everyday luxury.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Ceylon Blue Sapphire",
      caratWeight: "2.0 carats",
      metalType: "18k White Gold",
      chainLength: "18 inches",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstone",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["ruby-earrings", "emerald-ring", "sapphire-bracelet"],
  },
  {
    slug: "ruby-earrings",
    name: "Ruby Earrings",
    description:
      "These stunning drop earrings feature vibrant Burmese rubies totaling 1.5 carats, surrounded by a halo of brilliant-cut diamonds. Set in 18k yellow gold, these earrings add a touch of elegance to any outfit.",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Burmese Ruby",
      caratWeight: "1.5 carats total",
      metalType: "18k Yellow Gold",
      diamondWeight: "0.5 carats total",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "emerald-ring", "ruby-bracelet"],
  },
  {
    slug: "emerald-ring",
    name: "Emerald Ring",
    description:
      "This exquisite ring features a 1.8-carat Colombian emerald in a classic setting with pavé diamonds along the band. The 18k white gold setting enhances the vibrant green color of the emerald, creating a truly stunning piece.",
    price: 2199,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Colombian Emerald",
      caratWeight: "1.8 carats",
      metalType: "18k White Gold",
      diamondWeight: "0.4 carats total",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "ruby-earrings", "emerald-bracelet"],
  },
  {
    slug: "emerald-necklace",
    name: "Emerald Necklace",
    description:
      "Elegant emerald pendant featuring a 1.5-carat Colombian emerald surrounded by a halo of diamonds. The pendant is set in 18k white gold and hangs from a delicate 18-inch chain, creating a stunning piece for special occasions.",
    price: 2299,
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Colombian Emerald",
      caratWeight: "1.5 carats",
      metalType: "18k White Gold",
      chainLength: "18 inches",
      diamondWeight: "0.3 carats total",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "ruby-earrings", "emerald-ring"],
  },
  {
    slug: "diamond-bracelet",
    name: "Diamond Tennis Bracelet",
    description:
      "This classic tennis bracelet features 36 brilliant-cut diamonds totaling 3 carats, set in 18k white gold. The secure clasp ensures this elegant piece stays in place while you move, making it perfect for both everyday wear and special occasions.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Diamond",
      caratWeight: "3.0 carats total",
      metalType: "18k White Gold",
      length: "7 inches",
      clarity: "VS1-VS2",
      color: "F-G",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced diamonds",
      "Secure fold-over clasp",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "ruby-earrings", "emerald-ring"],
  },
  {
    slug: "pearl-necklace",
    name: "Pearl Necklace",
    description:
      "This elegant necklace features 45 perfectly matched freshwater pearls with excellent luster. The 18k gold clasp adds a touch of luxury to this timeless piece that can be worn for any occasion, from business meetings to formal events.",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Freshwater Pearls",
      pearlSize: "7-8mm",
      metalType: "18k Yellow Gold Clasp",
      length: "18 inches",
      color: "White with Rose Overtones",
      certification: "Certified Authentic",
    },
    features: [
      "Hand-selected pearls for perfect matching",
      "Individually knotted between each pearl for security",
      "Ethically sourced pearls",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "emerald-necklace", "diamond-bracelet"],
  },
  {
    slug: "topaz-earrings",
    name: "Blue Topaz Earrings",
    description:
      "These vibrant blue topaz drop earrings feature 2 carats of London blue topaz set in sterling silver. The modern design combines classic elegance with contemporary style, making these earrings perfect for both casual and formal occasions.",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "London Blue Topaz",
      caratWeight: "2.0 carats total",
      metalType: "Sterling Silver",
      length: "1.5 inches",
      backType: "Push Back",
      certification: "Certified Authentic",
    },
    features: [
      "Handcrafted by our master silversmiths",
      "Ethically sourced gemstones",
      "Rhodium plated for tarnish resistance",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["ruby-earrings", "pearl-necklace", "amethyst-pendant"],
  },
  {
    slug: "amethyst-pendant",
    name: "Amethyst Pendant",
    description:
      "This stunning pendant features a 2.5-carat deep purple amethyst surrounded by a halo of small diamonds. Set in white gold with a delicate chain, this piece showcases the rich color of the amethyst while adding a touch of sparkle.",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Amethyst",
      caratWeight: "2.5 carats",
      accentStones: "Diamonds, 0.25 carats total",
      metalType: "14k White Gold",
      chainLength: "18 inches",
      certification: "Certified Authentic",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Adjustable chain length",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["topaz-earrings", "pearl-necklace", "citrine-ring"],
  },
  {
    slug: "citrine-ring",
    name: "Citrine Cocktail Ring",
    description:
      "This bold cocktail ring features a 5-carat citrine in a unique setting with diamond accents. The warm golden color of the citrine is complemented by the yellow gold setting, creating a statement piece that's perfect for special occasions.",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Citrine",
      caratWeight: "5.0 carats",
      accentStones: "Diamonds, 0.15 carats total",
      metalType: "14k Yellow Gold",
      ringSize: "Available in sizes 5-9",
      certification: "Certified Authentic",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Unique design exclusive to MoonLight Gems",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["amethyst-pendant", "topaz-earrings", "emerald-ring"],
  },
  {
    slug: "garnet-bracelet",
    name: "Garnet Bracelet",
    description:
      "This elegant bracelet features deep red garnets totaling 4 carats set in yellow gold. The rich color of the garnets is enhanced by the warm tone of the gold, creating a piece that's both classic and eye-catching.",
    price: 1699,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Rhodolite Garnet",
      caratWeight: "4.0 carats total",
      metalType: "14k Yellow Gold",
      length: "7 inches",
      clasp: "Box Clasp with Safety",
      certification: "Certified Authentic",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Secure clasp with safety mechanism",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["ruby-earrings", "diamond-bracelet", "citrine-ring"],
  },
  {
    slug: "sapphire-bracelet",
    name: "Sapphire Bracelet",
    description:
      "This exquisite bracelet features Ceylon blue sapphires alternating with brilliant-cut diamonds. Set in 18k white gold, this piece showcases the stunning blue of the sapphires while the diamonds add extra sparkle and elegance.",
    price: 2899,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Ceylon Blue Sapphire",
      caratWeight: "3.5 carats total sapphires",
      accentStones: "Diamonds, 1.0 carat total",
      metalType: "18k White Gold",
      length: "7 inches",
      clasp: "Double Safety Clasp",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Double safety clasp for security",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["sapphire-necklace", "diamond-bracelet", "ruby-earrings"],
  },
  {
    slug: "ruby-bracelet",
    name: "Ruby Bracelet",
    description:
      "This luxurious bracelet features Burmese rubies set in 18k rose gold. The deep red of the rubies contrasts beautifully with the warm tone of the rose gold, creating a piece that's both elegant and eye-catching.",
    price: 2599,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Burmese Ruby",
      caratWeight: "2.8 carats total",
      metalType: "18k Rose Gold",
      length: "7 inches",
      clasp: "Lobster Clasp",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Secure lobster clasp",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["ruby-earrings", "sapphire-bracelet", "garnet-bracelet"],
  },
  {
    slug: "emerald-bracelet",
    name: "Emerald Bracelet",
    description:
      "This stunning bracelet features Colombian emeralds set in 18k white gold. The vibrant green of the emeralds is enhanced by the white gold setting, creating a piece that's both elegant and eye-catching.",
    price: 2399,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    ],
    details: {
      gemstone: "Colombian Emerald",
      caratWeight: "2.5 carats total",
      metalType: "18k White Gold",
      length: "7 inches",
      clasp: "Box Clasp with Safety",
      certification: "GIA Certified",
    },
    features: [
      "Handcrafted by our master goldsmiths",
      "Ethically sourced gemstones",
      "Secure box clasp with safety mechanism",
      "Comes with certification of authenticity",
      "Free worldwide shipping",
      "Complimentary gift wrapping",
    ],
    relatedItems: ["emerald-ring", "emerald-necklace", "sapphire-bracelet"],
  },
]

export default function JewelryItemPage({ params }: { params: { slug: string } }) {
  const item = jewelryItems.find((item) => item.slug === params.slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <Link href="/jewelry" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jewelry Collection
          </Link>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <Tabs defaultValue="image-1" className="w-full">
                <div className="relative aspect-square overflow-hidden rounded-lg border">
                  {item.images.map((image, index) => (
                    <TabsContent key={`image-${index + 1}`} value={`image-${index + 1}`} className="h-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${item.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </TabsContent>
                  ))}
                </div>
                <TabsList className="mt-3 justify-start h-auto p-0 bg-transparent">
                  {item.images.map((image, index) => (
                    <TabsTrigger
                      key={`thumbnail-${index + 1}`}
                      value={`image-${index + 1}`}
                      className="relative h-16 w-16 rounded-md overflow-hidden border data-[state=active]:border-primary"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${item.name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <span className="sr-only">Image {index + 1}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">
                  Handcrafted Since 1996
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">{item.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(12 reviews)</span>
                </div>
                <p className="text-2xl font-bold mt-2">${item.price.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Details</h3>
                <ul className="space-y-1 text-sm">
                  {Object.entries(item.details).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                      <span className="font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Features</h3>
                <ul className="space-y-1">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
                        className="mr-2 h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Inquire About This Item
                </Button>
                <Button variant="outline" className="flex-1">
                  Book a Viewing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gradient mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {item.relatedItems.map((relatedSlug) => {
              const relatedItem = jewelryItems.find((item) => item.slug === relatedSlug)
              if (!relatedItem) return null

              return (
                <Card
                  key={relatedSlug}
                  className="overflow-hidden border-2 border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedItem.images[0] || "/placeholder.svg"}
                      alt={relatedItem.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary">{relatedItem.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{relatedItem.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="font-bold">${relatedItem.price.toLocaleString()}</span>
                      <Link href={`/jewelry/${relatedItem.slug}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
