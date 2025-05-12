"use client"

import { useState } from "react"
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
import { ChevronDown, MoreHorizontal, Plus, Search, Filter, Eye, Mail, Edit, History } from "lucide-react"

// This would typically come from a database or CMS
const customers = [
  {
    id: "CUST001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    totalSpent: 4299,
    lastPurchase: "2025-04-15",
    status: "Active",
  },
  {
    id: "CUST002",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    phone: "+44 20 1234 5678",
    country: "United Kingdom",
    totalSpent: 2899,
    lastPurchase: "2025-04-22",
    status: "Active",
  },
  {
    id: "CUST003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+61 2 1234 5678",
    country: "Australia",
    totalSpent: 3599,
    lastPurchase: "2025-03-30",
    status: "Active",
  },
  {
    id: "CUST004",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    phone: "+1 (555) 987-6543",
    country: "Canada",
    totalSpent: 1899,
    lastPurchase: "2025-05-01",
    status: "Active",
  },
  {
    id: "CUST005",
    name: "David Chen",
    email: "david.chen@example.com",
    phone: "+65 6123 4567",
    country: "Singapore",
    totalSpent: 7499,
    lastPurchase: "2025-04-10",
    status: "Active",
  },
  {
    id: "CUST006",
    name: "Lisa Garcia",
    email: "lisa.garcia@example.com",
    phone: "+1 (555) 456-7890",
    country: "United States",
    totalSpent: 2199,
    lastPurchase: "2025-02-18",
    status: "Inactive",
  },
  {
    id: "CUST007",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    phone: "+49 30 1234567",
    country: "Germany",
    totalSpent: 4899,
    lastPurchase: "2025-01-25",
    status: "Inactive",
  },
]

export default function CustomersAdmin() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
          <p className="text-muted-foreground">Manage your customer relationships</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
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
                Country
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Countries</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>United States</DropdownMenuItem>
              <DropdownMenuItem>United Kingdom</DropdownMenuItem>
              <DropdownMenuItem>Australia</DropdownMenuItem>
              <DropdownMenuItem>Canada</DropdownMenuItem>
              <DropdownMenuItem>Singapore</DropdownMenuItem>
              <DropdownMenuItem>Germany</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-xs text-muted-foreground">{customer.id}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-sm">{customer.email}</div>
                    <div className="text-xs text-muted-foreground">{customer.phone}</div>
                  </div>
                </TableCell>
                <TableCell>{customer.country}</TableCell>
                <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                <TableCell>{new Date(customer.lastPurchase).toLocaleDateString()}</TableCell>
                <TableCell>
                  {customer.status === "Active" ? (
                    <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                  ) : (
                    <Badge variant="outline">Inactive</Badge>
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
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <History className="mr-2 h-4 w-4" />
                        Purchase History
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
