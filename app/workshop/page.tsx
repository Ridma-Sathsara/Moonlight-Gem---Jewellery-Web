import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function WorkshopPage() {
  const craftingSteps = [
    {
      id: 1,
      title: "Gem Selection",
      description:
        "Our master gemologists carefully select only the finest quality gems from local mines in Sri Lanka.",
      image:
        "https://images.unsplash.com/photo-1615655096345-61a54750068d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Design Creation",
      description:
        "Our designers work closely with clients to create unique designs that showcase the beauty of each gem.",
      image:
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Metal Crafting",
      description:
        "Skilled artisans handcraft the metal settings using traditional techniques passed down through generations.",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Stone Setting",
      description: "Each gem is carefully set by hand to ensure perfect placement and security.",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Polishing",
      description:
        "Every piece is meticulously polished to achieve a perfect finish that highlights the beauty of the materials.",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Quality Control",
      description:
        "Each piece undergoes rigorous inspection to ensure it meets our high standards of quality and craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1600701303489-e92aee1a093d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-mixed">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">
                Established 1996 • Professional Goldsmiths
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our Jewellery Workshop
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Discover the artistry and craftsmanship behind every piece of MoonLight Gems jewellery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 text-sm rounded-full">
                Artisan Tradition
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Handcrafted Excellence</h2>
              <p className="text-muted-foreground text-lg">
                At MoonLight Gems and Jewellery, we take pride in creating every piece by hand. Our workshop in
                Kalutara, Sri Lanka, is where traditional craftsmanship meets contemporary design.
              </p>
              <p className="text-muted-foreground">
                Each of our artisans has undergone years of training to master the delicate art of jewellery making.
                From selecting the perfect gem to the final polish, every step is performed with meticulous attention to
                detail by our talented and highly qualified team.
              </p>
              <p className="text-muted-foreground">
                Our master craftsmen have decades of experience, with many having been with us since our founding in
                1996. Their exceptional skills and deep knowledge of gemstones and metalwork ensure that each piece
                meets our exacting standards of quality and beauty.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Book a Workshop Tour
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden animate-fade-in">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jewellery Artisan at Work"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Crafting with precision and passion</p>
                  <p className="text-white/80">Every piece tells a story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Our Crafting Process</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              From raw materials to finished masterpiece, discover how we create our handcrafted jewellery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animation">
            {craftingSteps.map((step) => (
              <Card
                key={step.id}
                className="overflow-hidden border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden animate-fade-in">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jewellery Workshop"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4 animate-fade-in">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 text-sm rounded-full">Visit Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Experience Our Workshop</h2>
              <p className="text-muted-foreground text-lg">
                We invite you to visit our workshop in Kalutara, Sri Lanka, where you can witness our artisans at work
                and learn about the fascinating process of jewellery making.
              </p>
              <p className="text-muted-foreground">
                Our talented team of craftspeople are not only highly skilled but also passionate about sharing their
                knowledge with visitors. Many of our artisans have been with us for over 20 years and are recognized
                experts in their specialized areas of jewellery making.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
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
                    className="mr-2 h-5 w-5 text-secondary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Guided tours of our workshop</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
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
                    className="mr-2 h-5 w-5 text-secondary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Meet our skilled artisans</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
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
                    className="mr-2 h-5 w-5 text-secondary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Learn about gemstone selection and cutting</span>
                </li>
                <li className="flex items-start animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
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
                    className="mr-2 h-5 w-5 text-secondary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Opportunity to commission custom pieces</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                    Schedule a Visit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-mixed">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Bring Your Vision to Life
            </h2>
            <p className="text-white/80 md:text-xl">
              Let our skilled artisans create a custom piece of jewellery that tells your unique story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button className="bg-white text-primary hover:bg-white/90 group">
                Start a Custom Design
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
