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
const gemItems = [
  {
    id: "GEM001",
    name: "Blue Sapphire",
    category: "Sapphires",
    price: 1200,
    priceUnit: "per carat",
    carats: 2.5,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM002",
    name: "Ruby",
    category: "Rubies",
    price: 1500,
    priceUnit: "per carat",
    carats: 1.8,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM003",
    name: "Emerald",
    category: "Emeralds",
    price: 1000,
    priceUnit: "per carat",
    carats: 2.2,
    origin: "Colombia",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM004",
    name: "Alexandrite",
    category: "Rare Gems",
    price: 3000,
    priceUnit: "per carat",
    carats: 1.1,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM005",
    name: "Pink Sapphire",
    category: "Sapphires",
    price: 1100,
    priceUnit: "per carat",
    carats: 1.7,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM006",
    name: "Yellow Sapphire",
    category: "Sapphires",
    price: 900,
    priceUnit: "per carat",
    carats: 3.0,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM007",
    name: "Spinel",
    category: "Rare Gems",
    price: 800,
    priceUnit: "per carat",
    carats: 2.3,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
  {
    id: "GEM008",
    name: "Garnet",
    category: "Semi-Precious",
    price: 500,
    priceUnit: "per carat",
    carats: 3.5,
    origin: "Sri Lanka",
    image: "/placeholder.svg?height=40&width=40",
    certified: true,
  },
]

export default function GemsAdmin() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = gemItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gem Management</h1>
          <p className="text-muted-foreground">Manage your gem inventory</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Gem
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search gems..."
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
                Origin
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Origins</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sri Lanka</DropdownMenuItem>
              <DropdownMenuItem>Colombia</DropdownMenuItem>
              <DropdownMenuItem>Brazil</DropdownMenuItem>
              <DropdownMenuItem>Other</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gem</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Carats</TableHead>
              <TableHead>Origin</TableHead>
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
                <TableCell>
                  ${item.price.toLocaleString()} <span className="text-xs text-muted-foreground">{item.priceUnit}</span>
                </TableCell>
                <TableCell>{item.carats}</TableCell>
                <TableCell>{item.origin}</TableCell>
                <TableCell>
                  {item.certified ? (
                    <Badge className="bg-green-500 hover:bg-green-600">Certified</Badge>
                  ) : (
                    <Badge variant="outline">Uncertified</Badge>
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
