import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Car,
  Clock,
  DollarSign,
  Edit,
  Gauge,
  Plus,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OwnerLayout } from "@/components/owner-layout";

export default function OwnerDashboard() {
  return (
    <OwnerLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Link href="/owner/cars/add">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Car
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">PHP4,550.32</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Bookings
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                2 upcoming this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                1 currently rented
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Approval Rate
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">
                19 of 20 requests approved
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="space-y-4">
          <TabsList>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="cars">My Cars</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>
                  Manage your upcoming car rentals and booking requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pending Approval */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                          Pending Approval
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Request received 2 hours ago
                        </p>
                      </div>
                      <h3 className="font-semibold">
                        Tesla Model 3 - John Smith
                      </h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>May 15 - May 18, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>$225 total</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Deny
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                </div>

                {/* Approved Booking */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                          Approved
                        </span>
                      </div>
                      <h3 className="font-semibold">BMW X5 - Sarah Johnson</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>May 20 - May 25, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>$450 total</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Active Booking */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800">
                          Active
                        </span>
                      </div>
                      <h3 className="font-semibold">
                        Tesla Model 3 - Michael Brown
                      </h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>May 10 - May 14, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Returns in 2 days</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact Renter
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Bookings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cars" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Cars</CardTitle>
                <CardDescription>
                  Manage your car listings and vehicle information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Car 1 */}
                <div className="flex flex-col md:flex-row gap-4 rounded-lg border p-4">
                  <div className="w-full md:w-1/4 aspect-video md:aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=Tesla+Model+3"
                      alt="Tesla Model 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Tesla Model 3</h3>
                        <p className="text-sm text-muted-foreground">
                          Electric • Automatic • 5 Seats
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                        Available
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Daily Rate</p>
                        <p className="text-lg font-bold">$75.00</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Mileage</p>
                        <div className="flex items-center gap-1">
                          <Gauge className="h-4 w-4" />
                          <p>12,450 miles</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Manage Availability
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Maintenance Log
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Car 2 */}
                <div className="flex flex-col md:flex-row gap-4 rounded-lg border p-4">
                  <div className="w-full md:w-1/4 aspect-video md:aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=BMW+X5"
                      alt="BMW X5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">BMW X5</h3>
                        <p className="text-sm text-muted-foreground">
                          SUV • Automatic • 5 Seats
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800">
                        Currently Rented
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Daily Rate</p>
                        <p className="text-lg font-bold">$90.00</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Mileage</p>
                        <div className="flex items-center gap-1">
                          <Gauge className="h-4 w-4" />
                          <p>28,320 miles</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Manage Availability
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Maintenance Log
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View All Cars</Button>
                <Link href="/owner/cars/add">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Car
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>
                  Track your rental income and financial performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Summary Cards */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          This Month
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$1,240.50</div>
                        <p className="text-xs text-muted-foreground">
                          From 5 bookings
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Last Month
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$980.25</div>
                        <p className="text-xs text-muted-foreground">
                          From 4 bookings
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          All Time
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$4,550.32</div>
                        <p className="text-xs text-muted-foreground">
                          From 18 bookings
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Transactions */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Recent Transactions
                    </h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b pb-4"
                        >
                          <div className="space-y-1">
                            <p className="font-medium">
                              Booking Payment - Tesla Model 3
                            </p>
                            <p className="text-sm text-muted-foreground">
                              May 10, 2025
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-green-600">
                              +$225.00
                            </p>
                            <p className="text-xs text-muted-foreground">
                              After platform fee
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Complete Financial History
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </OwnerLayout>
  );
}
