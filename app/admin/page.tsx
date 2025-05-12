import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, DollarSign, ShoppingBag, Users, ArrowUpRight, ArrowDownRight, Gem } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your jewelry business</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +20.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Jewelry Sales</CardTitle>
            <ShoppingBag className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Gem Sales</CardTitle>
            <Gem className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+15</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-red-500 flex items-center mr-1">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -3.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+32</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +18.7%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground absolute">Sales chart will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 24 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {["Sapphire Necklace", "Ruby Earrings", "Emerald Ring", "Diamond Bracelet"][i - 1]}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+${[2499, 1899, 2199, 3499][i - 1].toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center text-muted-foreground">
          Analytics content will appear here
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center text-muted-foreground">
          Reports content will appear here
        </TabsContent>
        <TabsContent value="notifications" className="h-[400px] flex items-center justify-center text-muted-foreground">
          Notifications content will appear here
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
            <CardDescription>You have 5 unread inquiries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {["Custom Ring Design", "Gem Certification", "Workshop Tour"][i - 1]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      From: {["John Smith", "Emma Johnson", "Michael Brown"][i - 1]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() - i * 12 * 60 * 60 * 1000).toLocaleString()}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Link href="/admin/inquiries">
                      <span className="text-xs text-primary hover:underline">View</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
            <CardDescription>Current stock levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Sapphires</span>
                  <span className="ml-auto text-sm">24 in stock</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-3/4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Rubies</span>
                  <span className="ml-auto text-sm">18 in stock</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-1/2" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Emeralds</span>
                  <span className="ml-auto text-sm">12 in stock</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-1/3" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Diamonds</span>
                  <span className="ml-auto text-sm">36 in stock</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-4/5" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>You have 3 appointments scheduled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {["Custom Design Consultation", "Gem Selection", "Workshop Tour"][i - 1]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      With: {["Sarah Williams", "David Chen", "Lisa Garcia"][i - 1]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString()} at{" "}
                      {["10:00 AM", "2:30 PM", "11:15 AM"][i - 1]}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Link href="/admin/appointments">
                      <span className="text-xs text-primary hover:underline">View</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
