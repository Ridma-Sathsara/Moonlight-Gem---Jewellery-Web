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
import { ChevronDown, MoreHorizontal, Search, Filter, Eye, Mail, ArchiveX, CheckCircle } from "lucide-react"

// This would typically come from a database or CMS
const inquiries = [
  {
    id: "INQ001",
    subject: "Custom Ring Design",
    name: "John Smith",
    email: "john.smith@example.com",
    date: "2025-05-07T10:30:00",
    status: "New",
    message: "I'm interested in designing a custom engagement ring with a blue sapphire. Can you help me with this?",
  },
  {
    id: "INQ002",
    subject: "Gem Certification",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    date: "2025-05-06T14:45:00",
    status: "New",
    message: "I'd like to know more about your gem certification process. Do you provide certificates for all gems?",
  },
  {
    id: "INQ003",
    subject: "Workshop Tour",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    date: "2025-05-05T09:15:00",
    status: "New",
    message: "I'm visiting Sri Lanka next month and would love to tour your workshop. Do I need to book in advance?",
  },
  {
    id: "INQ004",
    subject: "Jewelry Repair",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    date: "2025-05-04T16:20:00",
    status: "Responded",
    message:
      "I have a sapphire necklace that needs repair. The chain is broken. Can you fix this and how much would it cost?",
  },
  {
    id: "INQ005",
    subject: "Bulk Order Inquiry",
    name: "David Chen",
    email: "david.chen@example.com",
    date: "2025-05-03T11:10:00",
    status: "Responded",
    message:
      "I'm interested in placing a bulk order for several pieces of jewelry for my boutique. Can you provide wholesale pricing?",
  },
  {
    id: "INQ006",
    subject: "Shipping Question",
    name: "Lisa Garcia",
    email: "lisa.garcia@example.com",
    date: "2025-05-02T13:25:00",
    status: "Archived",
    message: "I'm in the United States. How long does shipping typically take and what are the costs?",
  },
  {
    id: "INQ007",
    subject: "Gem Sourcing",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    date: "2025-05-01T15:40:00",
    status: "Archived",
    message: "I'm looking for a specific type of emerald for a custom project. Can you source this for me?",
  },
]

export default function InquiriesAdmin() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInquiries = inquiries.filter(
    (inquiry) =>
      inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Inquiries</h1>
        <p className="text-muted-foreground">Manage and respond to customer inquiries</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inquiries..."
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
                Status
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Statuses</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New</DropdownMenuItem>
              <DropdownMenuItem>Responded</DropdownMenuItem>
              <DropdownMenuItem>Archived</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>From</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{inquiry.subject}</div>
                    <div className="text-xs text-muted-foreground">{inquiry.id}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div>{inquiry.name}</div>
                    <div className="text-xs text-muted-foreground">{inquiry.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(inquiry.date).toLocaleDateString()} at{" "}
                  {new Date(inquiry.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </TableCell>
                <TableCell>
                  {inquiry.status === "New" ? (
                    <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
                  ) : inquiry.status === "Responded" ? (
                    <Badge className="bg-green-500 hover:bg-green-600">Responded</Badge>
                  ) : (
                    <Badge variant="outline">Archived</Badge>
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
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Reply
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark as Responded
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ArchiveX className="mr-2 h-4 w-4" />
                        Archive
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
