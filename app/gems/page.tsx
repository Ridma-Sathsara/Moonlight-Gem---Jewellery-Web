"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, CuboidIcon as Cube, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Define the GemItem type for TypeScript
interface GemItem {
  slug: string;
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  image: string;
  category: string;
  featured: boolean;
  has3dModel: boolean;
  color?: string; // Inferred color
  shape?: string; // Inferred shape
}

// Gemstone data with inferred colors and shapes
const gemItems: GemItem[] = [
  {
    slug: "blue-sapphire",
    name: "Blue Sapphire",
    description:
      "Ceylon blue sapphires are renowned for their exceptional color and clarity.",
    price: 1200,
    priceUnit: "per carat",
    image: "https://gemstock.org/wa-data/public/shop/img/c/sapphire.webp",
    category: "Sapphires",
    featured: true,
    has3dModel: true,
    color: "blue",
    shape: "round",
  },
  {
    slug: "ruby",
    name: "Ruby",
    description:
      "Sri Lankan rubies are known for their pinkish-red to deep red color.",
    price: 1500,
    priceUnit: "per carat",
    image:
      "https://images.unsplash.com/photo-1522777183857-cb4be6839fbe?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Rubies",
    featured: true,
    has3dModel: true,
    color: "red",
    shape: "oval",
  },
  {
    slug: "emerald",
    name: "Emerald",
    description:
      "Colombian emeralds are considered the finest in the world, known for their rich green color.",
    price: 1000,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/88/f0/15/88f0154af40be9bf6cbbe48b7f85bfd3.jpg",
    category: "Emeralds",
    featured: true,
    has3dModel: true,
    color: "green",
    shape: "cushion",
  },
  {
    slug: "alexandrite",
    name: "Alexandrite",
    description:
      "Rare color-changing gemstone that appears greenish-blue in daylight and purplish-red in incandescent light.",
    price: 3000,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/4e/3f/45/4e3f45939831871e5ef020c656945cf2.jpg",
    category: "Rare Gems",
    featured: true,
    has3dModel: true,
    color: "green", // Primary daylight color
    shape: "round",
  },
  {
    slug: "pink-sapphire",
    name: "Pink Sapphire",
    description:
      "Delicate pink sapphires with excellent clarity and brilliance.",
    price: 1100,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/82/67/eb/8267eb30e768c1475f3b0be43b5cf427.jpg",
    category: "Sapphires",
    featured: false,
    has3dModel: false,
    color: "pink",
    shape: "pear",
  },
  {
    slug: "yellow-sapphire",
    name: "Yellow Sapphire",
    description:
      "Vibrant yellow sapphires known for their sunny color and excellent hardness.",
    price: 900,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/77/9a/30/779a30d090cc262f16b4fac7a3d6b82d.jpg",
    category: "Sapphires",
    featured: false,
    has3dModel: false,
    color: "yellow",
    shape: "oval",
  },
  {
    slug: "spinel",
    name: "Spinel",
    description:
      "Natural spinels in various colors, often mistaken for rubies or sapphires throughout history.",
    price: 800,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/fe/a1/63/fea163756a84a8923bdf058ba0057e2a.jpg",
    category: "Rare Gems",
    featured: false,
    has3dModel: false,
    color: "red", // Assuming red spinel
    shape: "cushion",
  },
  {
    slug: "garnet",
    name: "Garnet",
    description: "Deep red garnets with excellent clarity and brilliance.",
    price: 500,
    priceUnit: "per carat",
    image:
      "https://i.pinimg.com/736x/aa/f1/8a/aaf18ad135e35803f16b473ac1689016.jpg",
    category: "Semi-Precious",
    featured: false,
    has3dModel: false,
    color: "red",
    shape: "round",
  },
];

// Available colors for filtering
const gemColors = [
  { name: "Red", value: "red", hex: "#E53935" },
  { name: "Blue", value: "blue", hex: "#1E88E5" },
  { name: "Green", value: "green", hex: "#43A047" },
  { name: "Yellow", value: "yellow", hex: "#FDD835" },
  { name: "Pink", value: "pink", hex: "#EC407A" },
];

// Available shapes for filtering
const gemstoneShapes = ["round", "oval", "cushion", "pear"];

export default function GemsPage() {
  const categories = Array.from(new Set(gemItems.map((item) => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // State for filters and filtered gems
  const [filteredGems, setFilteredGems] = useState<GemItem[]>(gemItems);
  const [filters, setFilters] = useState({
    colors: [] as string[],
    shapes: [] as string[],
    sortBy: "featured" as "featured" | "price-low" | "price-high" | "name",
  });

  // State for mobile filter drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Apply filters
  const applyFilters = () => {
    let result = [...gemItems];

    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter(
        (item) => item.color && filters.colors.includes(item.color)
      );
    }

    // Apply shape filter
    if (filters.shapes.length > 0) {
      result = result.filter(
        (item) => item.shape && filters.shapes.includes(item.shape)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredGems(result);
  };

  // Handle color filter change
  const handleColorChange = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  // Handle shape filter change
  const handleShapeChange = (shape: string) => {
    setFilters((prev) => ({
      ...prev,
      shapes: prev.shapes.includes(shape)
        ? prev.shapes.filter((s) => s !== shape)
        : [...prev.shapes, shape],
    }));
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: value as typeof filters.sortBy,
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      colors: [],
      shapes: [],
      sortBy: "featured",
    });
    setActiveCategory("All");
  };

  // Count active filters
  const activeFilterCount =
    filters.colors.length +
    filters.shapes.length +
    (activeCategory !== "All" ? 1 : 0);

  // Update filtered gems when filters change
  useEffect(() => {
    applyFilters();
  }, [filters, activeCategory]);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1E88E5] via-[#90A4AE] via-[#A5B6A0] to-[#FDD835]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-2">
                Certified Genuine Gems
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Precious Gem Collection
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore our selection of certified genuine gems from Sri Lanka,
                known as the "Gem Island."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          {/* Mobile Filter Button */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E88E5] to-[#FDD835]">
              Featured Gems
            </h2>
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your gem selection with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={
                          activeCategory === "All" ? "default" : "outline"
                        }
                        size="sm"
                        className="rounded-full"
                        onClick={() => setActiveCategory("All")}
                      >
                        All
                      </Button>
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={
                            activeCategory === category ? "default" : "outline"
                          }
                          size="sm"
                          className="rounded-full"
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Colors</h3>
                    <div className="flex flex-wrap gap-3">
                      {gemColors.map((color) => (
                        <button
                          key={color.value}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                            filters.colors.includes(color.value)
                              ? "border-primary scale-110"
                              : "border-muted-foreground/20 hover:border-muted-foreground/50"
                          )}
                          style={{ backgroundColor: color.hex }}
                          onClick={() => handleColorChange(color.value)}
                          aria-label={`Filter by ${color.name}`}
                        >
                          {filters.colors.includes(color.value) && (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Shapes</h3>
                    <div className="flex flex-wrap gap-2">
                      {gemstoneShapes.map((shape) => (
                        <Button
                          key={shape}
                          variant={
                            filters.shapes.includes(shape)
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          className="capitalize"
                          onClick={() => handleShapeChange(shape)}
                        >
                          {shape}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Sort By</h3>
                    <Select
                      value={filters.sortBy}
                      onValueChange={handleSortChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <SheetFooter className="flex-row justify-between">
                  <Button variant="outline" onClick={resetFilters}>
                    Reset All
                  </Button>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="hidden md:block w-64 shrink-0 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E88E5] to-[#FDD835]">
                  Filters
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant={activeCategory === "All" ? "default" : "ghost"}
                        size="sm"
                        className="justify-start h-8"
                        onClick={() => setActiveCategory("All")}
                      >
                        All Gems
                      </Button>
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={
                            activeCategory === category ? "default" : "ghost"
                          }
                          size="sm"
                          className="justify-start h-8"
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Colors</h3>
                    <div className="flex flex-wrap gap-3">
                      {gemColors.map((color) => (
                        <div
                          key={color.value}
                          className="flex flex-col items-center gap-1"
                        >
                          <button
                            className={cn(
                              "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                              filters.colors.includes(color.value)
                                ? "border-primary scale-110"
                                : "border-muted-foreground/20 hover:border-muted-foreground/50"
                            )}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => handleColorChange(color.value)}
                            aria-label={`Filter by ${color.name}`}
                          >
                            {filters.colors.includes(color.value) && (
                              <div className="w-3 h-3 bg-white rounded-full" />
                            )}
                          </button>
                          <span className="text-xs">{color.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Shapes</h3>
                    <div className="flex flex-wrap gap-2">
                      {gemstoneShapes.map((shape) => (
                        <Button
                          key={shape}
                          variant={
                            filters.shapes.includes(shape)
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          className="capitalize"
                          onClick={() => handleShapeChange(shape)}
                        >
                          {shape}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Sort By</h3>
                    <Select
                      value={filters.sortBy}
                      onValueChange={handleSortChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {activeFilterCount > 0 && (
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={resetFilters}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reset Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold md:hidden mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#1E88E5] to-[#FDD835]">
                    {activeCategory === "All" ? "All Gems" : activeCategory}
                  </h2>
                  <p className="text-muted-foreground">
                    Showing {filteredGems.length}{" "}
                    {filteredGems.length === 1 ? "gem" : "gems"}
                    {activeCategory !== "All" && ` in ${activeCategory}`}
                  </p>
                </div>

                {/* Desktop Category Tabs */}
                <div className="hidden md:flex mt-4 md:mt-0">
                  <Tabs
                    value={filters.sortBy}
                    onValueChange={handleSortChange}
                    className="w-[400px]"
                  >
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger value="featured">Featured</TabsTrigger>
                      <TabsTrigger value="price-low">Price: Low</TabsTrigger>
                      <TabsTrigger value="price-high">Price: High</TabsTrigger>
                      <TabsTrigger value="name">Name</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeCategory !== "All" && (
                    <Badge variant="secondary" className="px-3 py-1">
                      {activeCategory}
                      <button
                        className="ml-2"
                        onClick={() => setActiveCategory("All")}
                        aria-label="Remove category filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}

                  {filters.colors.map((color) => {
                    const colorInfo = gemColors.find((c) => c.value === color);
                    return (
                      <Badge
                        key={color}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {colorInfo?.name || color}
                        <button
                          className="ml-2"
                          onClick={() => handleColorChange(color)}
                          aria-label={`Remove ${color} filter`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}

                  {filters.shapes.map((shape) => (
                    <Badge
                      key={shape}
                      variant="secondary"
                      className="px-3 py-1 capitalize"
                    >
                      {shape}
                      <button
                        className="ml-2"
                        onClick={() => handleShapeChange(shape)}
                        aria-label={`Remove ${shape} filter`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              {/* Gem Grid */}
              {filteredGems.length === 0 ? (
                <div className="text-center py-16 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No gems found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGems.map((item, index) => (
                    <Card
                      key={item.slug}
                      className="overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
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
                            <p className="font-medium">View details</p>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 flex gap-1">
                          {item.featured && (
                            <Badge className="bg-[#1E88E5] text-white">
                              Featured
                            </Badge>
                          )}
                          {item.has3dModel && (
                            <Badge className="bg-[#FDD835] text-white">
                              <Cube className="h-3 w-3 mr-1" /> 3D
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-6 flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {item.name}
                          </CardTitle>
                          <span className="font-bold">
                            ${item.price.toLocaleString()}
                          </span>
                        </div>
                        <CardDescription className="text-muted-foreground mt-2">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href={`/gems/${item.slug}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full group bg-gradient-to-r from-[#1E88E5] to-[#FDD835] text-white hover:from-[#1E88E5]/90 hover:to-[#FDD835]/90"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Visualization Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1E88E5]/20 via-[#90A4AE]/20 to-[#FDD835]/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-[#1E88E5]/20 text-[#1E88E5] px-3 py-1 text-sm rounded-full">
                3D Gem Visualization
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E88E5] to-[#FDD835]">
                Experience Gems in 3D
              </h2>
              <p className="text-muted-foreground text-lg">
                Our interactive 3D gem viewer allows you to examine our precious
                gems from every angle. Rotate, zoom, and appreciate the
                brilliance and facets of each stone as if you were holding it in
                your hand.
              </p>
              <p className="text-muted-foreground">
                We've created detailed 3D models of our most popular gems to
                help you make informed decisions. Each model accurately
                represents the cut, color, and characteristics of our
                high-quality gemstones.
              </p>
              <div className="pt-4">
                <Link href="/gems/blue-sapphire">
                  <Button className="bg-gradient-to-r from-[#1E88E5] to-[#FDD835] text-white hover:from-[#1E88E5]/90 hover:to-[#FDD835]/90 group">
                    Try Our 3D Gem Viewer
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop"
                  alt="3D Gem Visualization"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 p-6 rounded-full backdrop-blur-sm">
                    <Cube className="h-16 w-16 text-white" />
                  </div>
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
  );
}