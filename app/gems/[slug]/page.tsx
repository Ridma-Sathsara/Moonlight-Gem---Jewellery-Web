// import Image from "next/image"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { ArrowLeft, CuboidIcon as Cube } from "lucide-react"
// // import GemViewer3D from "@/components/gem-viewer-3d"

// // This would typically come from a database or CMS
// const gemItems = [
//   {
//     slug: "blue-sapphire",
//     name: "Blue Sapphire",
//     description:
//       "Ceylon blue sapphires are renowned for their exceptional color and clarity. These precious gemstones range from light to deep blue and are among the most sought-after sapphires in the world. Sri Lanka (formerly Ceylon) has been producing these magnificent gems for thousands of years.",
//     price: 1200,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385852-88c5ef8cb6c3?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385886-d8e587e0068c?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka (Ceylon)",
//       hardness: "9 on Mohs scale",
//       color: "Medium to Deep Blue",
//       transparency: "Transparent",
//       treatments: "Heat treatment (common)",
//     },
//     properties: [
//       "Symbol of wisdom and royalty",
//       "September birthstone",
//       "Traditional gift for 5th and 45th anniversaries",
//       "Associated with focus, discipline, and protection",
//     ],
//     relatedItems: ["ruby", "emerald", "alexandrite"],
//   },
//   {
//     slug: "ruby",
//     name: "Ruby",
//     description:
//       "Sri Lankan rubies are known for their pinkish-red to deep red color. These precious gemstones are a variety of the mineral corundum, the same as sapphires, but with chromium that gives them their distinctive red color. Sri Lankan rubies are prized for their exceptional clarity and brilliance.",
//     price: 1500,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka",
//       hardness: "9 on Mohs scale",
//       color: "Pinkish-Red to Deep Red",
//       transparency: "Transparent",
//       treatments: "Heat treatment (common)",
//     },
//     properties: [
//       "Symbol of passion and love",
//       "July birthstone",
//       "Traditional gift for 15th and 40th anniversaries",
//       "Associated with vitality, energy, and courage",
//     ],
//     relatedItems: ["blue-sapphire", "emerald", "alexandrite"],
//   },
//   {
//     slug: "emerald",
//     name: "Emerald",
//     description:
//       "Colombian emeralds are considered the finest in the world, known for their rich green color derived from chromium and vanadium. These precious gemstones are a variety of the mineral beryl. Colombian emeralds are prized for their exceptional color, which ranges from slightly bluish-green to pure green.",
//     price: 1000,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1551732998-9573f695fdbb?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385852-88c5ef8cb6c3?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385886-d8e587e0068c?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Colombia",
//       hardness: "7.5-8 on Mohs scale",
//       color: "Bluish-Green to Pure Green",
//       transparency: "Transparent to Translucent",
//       treatments: "Oil treatment (common)",
//     },
//     properties: [
//       "Symbol of rebirth and love",
//       "May birthstone",
//       "Traditional gift for 20th and 35th anniversaries",
//       "Associated with growth, patience, and wisdom",
//     ],
//     relatedItems: ["blue-sapphire", "ruby", "alexandrite"],
//   },
//   {
//     slug: "alexandrite",
//     name: "Alexandrite",
//     description:
//       "Alexandrite is one of the rarest and most valuable gemstones, known for its remarkable color-changing property. In daylight, it appears greenish-blue, while in incandescent light, it shifts to purplish-red. This rare chrysoberyl variety was first discovered in Russia but is now found in Sri Lanka, Brazil, and East Africa.",
//     price: 3000,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka, Russia, Brazil",
//       hardness: "8.5 on Mohs scale",
//       color: "Color-changing: Green/Blue to Purple/Red",
//       transparency: "Transparent",
//       treatments: "Usually untreated",
//     },
//     properties: [
//       "Symbol of good fortune and prosperity",
//       "June birthstone (alternative)",
//       "Associated with creativity, imagination, and intuition",
//       "Known as 'emerald by day, ruby by night'",
//     ],
//     relatedItems: ["blue-sapphire", "ruby", "emerald"],
//   },
//   {
//     slug: "pink-sapphire",
//     name: "Pink Sapphire",
//     description:
//       "Pink sapphires are a beautiful variety of corundum with a delicate pink to hot pink color. These gems get their color from trace amounts of chromium, the same element that gives rubies their red color. Sri Lankan pink sapphires are particularly prized for their pastel pink hues and excellent clarity.",
//     price: 1100,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka, Madagascar",
//       hardness: "9 on Mohs scale",
//       color: "Light Pink to Hot Pink",
//       transparency: "Transparent",
//       treatments: "Heat treatment (common)",
//     },
//     properties: [
//       "Symbol of love and compassion",
//       "Associated with gentleness and femininity",
//       "Promotes emotional healing and peace",
//       "Enhances creativity and expression",
//     ],
//     relatedItems: ["blue-sapphire", "ruby", "yellow-sapphire"],
//   },
//   {
//     slug: "yellow-sapphire",
//     name: "Yellow Sapphire",
//     description:
//       "Yellow sapphires range from pale lemon to deep golden yellow, with their color coming from traces of iron. These bright, sunny gems are highly valued for their brilliance and durability. Sri Lankan yellow sapphires are particularly famous for their exceptional clarity and vibrant color.",
//     price: 900,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385852-88c5ef8cb6c3?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707385886-d8e587e0068c?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka, Thailand",
//       hardness: "9 on Mohs scale",
//       color: "Lemon Yellow to Golden Yellow",
//       transparency: "Transparent",
//       treatments: "Heat treatment (sometimes)",
//     },
//     properties: [
//       "Symbol of wisdom and prosperity",
//       "Associated with Jupiter in astrology",
//       "Promotes financial abundance and success",
//       "Enhances intellectual abilities and clarity of thought",
//     ],
//     relatedItems: ["blue-sapphire", "pink-sapphire", "spinel"],
//   },
//   {
//     slug: "spinel",
//     name: "Spinel",
//     description:
//       "Spinels are magnificent gems that occur in a wide range of colors, including red, pink, blue, and purple. For centuries, spinels were mistaken for rubies or sapphires due to their similar appearance. Sri Lankan spinels are known for their exceptional clarity and vibrant colors.",
//     price: 800,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka, Myanmar",
//       hardness: "8 on Mohs scale",
//       color: "Red, Pink, Blue, Purple, Orange",
//       transparency: "Transparent",
//       treatments: "Usually untreated",
//     },
//     properties: [
//       "Symbol of hope and revitalization",
//       "August birthstone (alternative)",
//       "Promotes energy and vitality",
//       "Enhances creativity and problem-solving abilities",
//     ],
//     relatedItems: ["ruby", "blue-sapphire", "garnet"],
//   },
//   {
//     slug: "garnet",
//     name: "Garnet",
//     description:
//       "Garnets are a group of silicate minerals that come in a variety of colors, though the deep red variety is most common. Sri Lankan garnets are known for their exceptional clarity and rich color. These gems have been used in jewelry since ancient times and were particularly popular during the Victorian era.",
//     price: 500,
//     priceUnit: "per carat",
//     images: [
//       "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop",
//     ],
//     details: {
//       origin: "Sri Lanka, India",
//       hardness: "6.5-7.5 on Mohs scale",
//       color: "Deep Red to Burgundy",
//       transparency: "Transparent",
//       treatments: "Usually untreated",
//     },
//     properties: [
//       "Symbol of protection and strength",
//       "January birthstone",
//       "Associated with passion and creativity",
//       "Believed to promote good health and vitality",
//     ],
//     relatedItems: ["ruby", "spinel", "alexandrite"],
//   },
// ]

// export default async function GemItemPage({ params }: { params: { slug: string } }) {
//   const slug = params.slug;
//   const gem = gemItems.find((item) => item.slug === slug);

//   if (!gem) {
//     notFound();
//   }

//   return (
//     <main className="flex flex-col min-h-screen">
//       <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
//         <div className="container px-4 md:px-6">
//           <Link href="/gems" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Gem Collection
//           </Link>

//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
//             <div className="space-y-4">
//               <Tabs defaultValue="image-1" className="w-full">
//                 <div className="relative aspect-square overflow-hidden rounded-lg border">
//                   {gem.images.map((image, index) => (
//                     <TabsContent key={`image-${index + 1}`} value={`image-${index + 1}`} className="h-full">
//                       <Image
//                         src={image || "/placeholder.svg"}
//                         alt={`${gem.name} - Image ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </TabsContent>
//                   ))}
//                   <TabsContent value="3d-view" className="h-full">
//                     {/* <GemViewer3D gemType={gem.slug} /> */}
//                   </TabsContent>
//                 </div>
//                 <TabsList className="mt-3 justify-start h-auto p-0 bg-transparent">
//                   {gem.images.map((image, index) => (
//                     <TabsTrigger
//                       key={`thumbnail-${index + 1}`}
//                       value={`image-${index + 1}`}
//                       className="relative h-16 w-16 rounded-md overflow-hidden border data-[state=active]:border-primary"
//                     >
//                       <Image
//                         src={image || "/placeholder.svg"}
//                         alt={`${gem.name} - Thumbnail ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                       <span className="sr-only">Image {index + 1}</span>
//                     </TabsTrigger>
//                   ))}
//                   <TabsTrigger
//                     value="3d-view"
//                     className="relative h-16 w-16 rounded-md overflow-hidden border data-[state=active]:border-primary bg-black/10"
//                   >
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <Cube className="h-8 w-8 text-primary" />
//                     </div>
//                     <span className="sr-only">3D View</span>
//                   </TabsTrigger>
//                 </TabsList>
//               </Tabs>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">Certified Genuine</Badge>
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">{gem.name}</h1>
//                 <p className="text-2xl font-bold mt-2">
//                   ${gem.price.toLocaleString()}{" "}
//                   <span className="text-sm font-normal text-muted-foreground">{gem.priceUnit}</span>
//                 </p>
//               </div>

//               <div>
//                 <p className="text-muted-foreground">{gem.description}</p>
//               </div>

//               <div className="space-y-2">
//                 <h3 className="font-semibold">Gem Properties</h3>
//                 <ul className="space-y-1 text-sm">
//                   {Object.entries(gem.details).map(([key, value]) => (
//                     <li key={key} className="flex justify-between">
//                       <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
//                       <span className="font-medium">{value}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="space-y-2">
//                 <h3 className="font-semibold">Metaphysical Properties</h3>
//                 <ul className="space-y-1">
//                   {gem.properties.map((property, index) => (
//                     <li key={index} className="flex items-start">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="mr-2 h-5 w-5 text-primary"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                       <span className="text-sm text-muted-foreground">{property}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex flex-col gap-2 sm:flex-row">
//                 <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
//                   Inquire About This Gem
//                 </Button>
//                 <Button variant="outline" className="flex-1">
//                   View Jewelry with {gem.name}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="mb-10">
//             <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gradient mb-4">
//               Interactive 3D Visualization
//             </h2>
//             <p className="text-muted-foreground max-w-3xl">
//               Explore our {gem.name} in stunning 3D detail. Rotate, zoom, and examine the gem from every angle to
//               appreciate its cut, clarity, and brilliance. This interactive model represents the typical characteristics
//               of our high-quality {gem.name}s.
//             </p>
//           </div>

//           <div className="bg-background p-6 rounded-lg shadow-sm">
//             {/* <GemViewer3D gemType={gem.slug} /> */}
//           </div>

//           <div className="mt-6 text-sm text-muted-foreground">
//             <p>
//               <strong>Instructions:</strong> Click and drag to rotate. Scroll to zoom in/out. Use the controls to reset
//               view or enter fullscreen mode.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container px-4 md:px-6">
//           <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gradient mb-8">Other Precious Gems</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {gem.relatedItems.map((relatedSlug) => {
//   const relatedGem = gemItems.find((item) => item.slug === relatedSlug);
//   if (!relatedGem) return null;

//   return (
//     <Card key={relatedGem.slug} className="overflow-hidden">
//       <Link href={`/gems/${relatedGem.slug}`} className="block h-full">
//         <div className="relative aspect-video">
//           <Image
//             src={relatedGem.images[0] || "/placeholder.svg"}
//             alt={relatedGem.name}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <CardContent className="p-4">
//           <h3 className="font-semibold text-lg">{relatedGem.name}</h3>
//           <p className="text-sm text-muted-foreground mt-1">
//             From ${relatedGem.price.toLocaleString()} {relatedGem.priceUnit}
//           </p>
//         </CardContent>
//       </Link>
//     </Card>
//   );
// })}

//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
