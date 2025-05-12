"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, MoreHorizontal, Plus, Search, Filter, Edit, Trash, Eye } from "lucide-react"

// This would typically come from a database or CMS
const jewelryItems = [
  {
    id: "JW001",
    name: "Sapphire Necklace",
    category: "Necklaces",
    price: 2499,
    stock: 3,
    image: "/placeholder.svg?height=40&width=40",
    featured: true,
  },
  {
    id: "JW002",
    name: "Ruby Earrings",
    category: "Earrings",
    price: 1899,
    stock: 5,
    image: "/placeholder.svg?height=40&width=40",
    featured: true,
  },
  {
    id: "JW003",
    name: "Emerald Ring",
    category: "Rings",
    price: 2199,
    stock: 2,
    image: "/placeholder.svg?height=40&width=40",
    featured: true,
  },
  {
    id: "JW004",
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    price: 3499,
    stock: 1,
    image: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
  {
    id: "JW005",
    name: "Pearl Necklace",
    category: "Necklaces",
    price: 1299,
    stock: 4,
    image: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
  {
    id: "JW006",
    name: "Blue Topaz Earrings",
    category: "Earrings",
    price: 899,
    stock: 7,
    image: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
  {
    id: "JW007",
    name: "Amethyst Pendant",
    category: "Necklaces",
    price: 1499,
    stock: 3,
    image: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
  {
    id: "JW008",
    name: "Citrine Cocktail Ring",
    category: "Rings",
    price: 1199,
    stock: 2,
    image: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
]

export default function JewelryAdmin() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = jewelryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jewelry Management</h1>
          <p className="text-muted-foreground">Manage your jewelry inventory</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Jewelry
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jewelry..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Category
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Necklaces</DropdownMenuItem>
              <DropdownMenuItem>Earrings</DropdownMenuItem>
              <DropdownMenuItem>Rings</DropdownMenuItem>
              <DropdownMenuItem>Bracelets</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price.toLocaleString()}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  {item.featured ? (
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                  ) : (
                    <Badge variant="outline">Standard</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
