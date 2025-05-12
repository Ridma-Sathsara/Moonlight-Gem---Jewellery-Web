import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-mixed">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-in">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-2">
                Established 1996 • Professional Goldsmiths
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                About MoonLight Gems and Jewellery
              </h1>
              <p className="text-white/80 text-lg">
                MoonLight Gems and Jewellery, located in Kalutara, Sri Lanka, specializes in bespoke and ready-made
                jewellery with certified genuine gems. With a 4.9 rating from 33 reviews, we pride ourselves on
                excellent customer service.
              </p>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="text-white/80">4.9 (33 reviews)</span>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600701303489-e92aee1a093d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MoonLight Gems and Jewellery Store"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gradient">Our Story</h2>
              <p className="text-muted-foreground">
                MoonLight Gems and Jewellery was established in 1996 by a family of professional goldsmiths with a
                passion for creating exquisite jewellery that showcases the natural beauty of genuine gems. Our founder,
                with decades of experience in gemology, started this boutique to provide customers with authentic,
                high-quality jewellery that stands the test of time.
              </p>
              <p className="text-muted-foreground">
                Located in the beautiful coastal town of Kalutara, Sri Lanka, we have built a reputation for excellence
                and authenticity over the past 25+ years. Each piece in our collection is carefully crafted to highlight
                the unique characteristics of the gems we source from local mines.
              </p>
              <p className="text-muted-foreground">
                Our team of professional goldsmiths combines traditional craftsmanship with modern design sensibilities
                to create pieces that are both timeless and contemporary. We take pride in our heritage and continue to
                uphold the highest standards of quality and service.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gradient">Our Commitment</h2>
              <p className="text-muted-foreground">At MoonLight Gems and Jewellery, we are committed to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
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
                  <span>Providing certified genuine gems with proper documentation</span>
                </li>
                <li className="flex items-start">
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
                  <span>Crafting bespoke jewellery tailored to individual preferences</span>
                </li>
                <li className="flex items-start">
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
                  <span>Offering exceptional customer service from selection to aftercare</span>
                </li>
                <li className="flex items-start">
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
                  <span>Maintaining ethical sourcing practices for all our materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We offer a range of services to meet your jewellery needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Custom Design</h3>
              <p className="text-muted-foreground mt-2">
                Work with our skilled artisans to create a unique piece that reflects your personal style.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Gem Certification</h3>
              <p className="text-muted-foreground mt-2">
                All our gems come with proper certification, ensuring authenticity and quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Jewellery Repair</h3>
              <p className="text-muted-foreground mt-2">
                Professional repair and restoration services to keep your precious pieces looking their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team"
                width={600}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gradient">Meet Our Team</h2>
              <p className="text-muted-foreground">
                Our team consists of professional goldsmiths, gemologists, and designers with decades of combined
                experience. Many of our artisans have been with us since our founding in 1996, honing their craft and
                passing down traditional techniques to the next generation.
              </p>
              <p className="text-muted-foreground">
                We believe that our people are our greatest asset. Their expertise, creativity, and dedication to
                excellence are what make MoonLight Gems and Jewellery special. When you visit our workshop, you'll have
                the opportunity to meet the skilled craftspeople who create our beautiful pieces.
              </p>
              <div className="pt-4">
                <Link href="/workshop">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Visit Our Workshop
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
          <div className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Experience the MoonLight Difference
            </h2>
            <p className="text-white/80 md:text-xl">
              Visit our store in Kalutara or contact us to learn more about our unique jewellery and gems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
