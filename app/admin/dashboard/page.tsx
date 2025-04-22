import Image from "next/image"
import {
  AlertCircle,
  Car,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Download,
  FileText,
  Filter,
  Percent,
  Search,
  Settings,
  Shield,
  Users,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Platform Settings
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,892.50</div>
              <p className="text-xs text-muted-foreground">+15.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+42 new users this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Listed Cars</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+18 new listings this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Fee</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10%</div>
              <p className="text-xs text-muted-foreground">Standard fee on all bookings</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="cars">Car Listings</TabsTrigger>
            <TabsTrigger value="kyc">KYC Verification</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage all users on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search users..." className="pl-8 w-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button size="sm">Add User</Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
                    <div className="col-span-2">User</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div>Cars</div>
                    <div className="text-right">Actions</div>
                  </div>

                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b items-center">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=U${i}`}
                            alt={`User ${i}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">
                            {i === 1
                              ? "John Doe"
                              : i === 2
                                ? "Sarah Johnson"
                                : i === 3
                                  ? "Michael Brown"
                                  : i === 4
                                    ? "Emily Davis"
                                    : "Robert Wilson"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {i === 1
                              ? "john.doe@example.com"
                              : i === 2
                                ? "sarah.j@example.com"
                                : i === 3
                                  ? "mbrown@example.com"
                                  : i === 4
                                    ? "emily.d@example.com"
                                    : "rwilson@example.com"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">
                          {i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Car Owner" : "Renter"}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                            i % 4 === 0 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {i % 4 === 0 ? "Pending" : "Active"}
                        </span>
                      </div>
                      <div>{i % 2 === 0 ? `${i} cars` : "N/A"}</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          Suspend
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Showing 5 of 1,248 users</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cars" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Car Listings</CardTitle>
                <CardDescription>Manage all car listings on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search cars..." className="pl-8 w-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                    <div className="col-span-2">Car</div>
                    <div>Owner</div>
                    <div>Price</div>
                    <div>Status</div>
                    <div>Rating</div>
                    <div className="text-right">Actions</div>
                  </div>

                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="grid grid-cols-7 gap-4 p-4 border-b items-center">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-12 w-16 rounded-md overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=50&width=80&text=Car+${i}`}
                            alt={`Car ${i}`}
                            width={80}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">
                            {i === 1
                              ? "Tesla Model 3"
                              : i === 2
                                ? "BMW X5"
                                : i === 3
                                  ? "Toyota Camry"
                                  : i === 4
                                    ? "Honda Civic"
                                    : "Ford Mustang"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {i === 1
                              ? "Electric • 2022"
                              : i === 2
                                ? "SUV • 2021"
                                : i === 3
                                  ? "Sedan • 2020"
                                  : i === 4
                                    ? "Sedan • 2019"
                                    : "Sports • 2022"}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm">
                        {i === 1
                          ? "John Doe"
                          : i === 2
                            ? "Sarah Johnson"
                            : i === 3
                              ? "Michael Brown"
                              : i === 4
                                ? "Emily Davis"
                                : "Robert Wilson"}
                      </div>
                      <div className="font-medium">${65 + i * 5}/day</div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                            i % 5 === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : i % 4 === 0
                                ? "bg-red-100 text-red-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {i % 5 === 0 ? "Pending Review" : i % 4 === 0 ? "Maintenance" : "Active"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <svg
                                key={j}
                                className={`h-4 w-4 ${j < (5 - (i % 2)) ? "text-primary fill-primary" : "text-muted-foreground fill-muted"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                        <span className="ml-1 text-sm">{(4 + (i % 10) / 10).toFixed(1)}</span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Showing 5 of 342 cars</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="kyc" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>KYC Verification Requests</CardTitle>
                <CardDescription>Review and approve user verification documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="border-primary text-primary">
                      All Requests (12)
                    </Button>
                    <Button variant="outline" size="sm">
                      Pending (8)
                    </Button>
                    <Button variant="outline" size="sm">
                      Approved (3)
                    </Button>
                    <Button variant="outline" size="sm">
                      Rejected (1)
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=50&width=50&text=U${i}`}
                              alt={`User ${i}`}
                              width={50}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">
                                {i === 1 ? "John Doe" : i === 2 ? "Sarah Johnson" : "Michael Brown"}
                              </h3>
                              <span
                                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                                  i === 1
                                    ? "bg-yellow-100 text-yellow-800"
                                    : i === 2
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {i === 1 ? "Pending" : i === 2 ? "Approved" : "Rejected"}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {i === 1
                                ? "john.doe@example.com"
                                : i === 2
                                  ? "sarah.j@example.com"
                                  : "mbrown@example.com"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Submitted: {i === 1 ? "2 hours ago" : i === 2 ? "1 day ago" : "3 days ago"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            View ID
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            View License
                          </Button>
                          {i === 1 && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </Button>
                            </>
                          )}
                          {i === 2 && (
                            <Button size="sm" variant="destructive">
                              <XCircle className="mr-2 h-4 w-4" />
                              Revoke
                            </Button>
                          )}
                          {i === 3 && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Reconsider
                            </Button>
                          )}
                        </div>
                      </div>

                      {i === 3 && (
                        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-red-800">Rejection Reason:</p>
                              <p className="text-red-700">
                                ID document was blurry and unreadable. Please resubmit a clearer image.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Verification Requests
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Reports</CardTitle>
                <CardDescription>View and analyze platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,248</div>
                      <p className="text-xs text-muted-foreground">+18% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$2,489.25</div>
                      <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Booking Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$198.50</div>
                      <p className="text-xs text-muted-foreground">-2.3% from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-start gap-4 border-b pb-4">
                          <div
                            className={`rounded-full p-2 ${
                              i % 3 === 0 ? "bg-green-100" : i % 3 === 1 ? "bg-blue-100" : "bg-yellow-100"
                            }`}
                          >
                            {i % 3 === 0 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : i % 3 === 1 ? (
                              <Car className="h-4 w-4 text-blue-600" />
                            ) : (
                              <Shield className="h-4 w-4 text-yellow-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">
                              {i % 3 === 0
                                ? "New booking completed"
                                : i % 3 === 1
                                  ? "New car listing added"
                                  : "User verification approved"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {i % 3 === 0
                                ? "Tesla Model 3 booked by Sarah Johnson"
                                : i % 3 === 1
                                  ? "BMW X5 added by Michael Brown"
                                  : "John Doe completed KYC verification"}
                            </p>
                          </div>
                          <div className="text-sm text-muted-foreground whitespace-nowrap">
                            {i === 1
                              ? "Just now"
                              : i === 2
                                ? "2 hours ago"
                                : i === 3
                                  ? "5 hours ago"
                                  : i === 4
                                    ? "Yesterday"
                                    : "2 days ago"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Reports
                </Button>
                <Button>
                  <ChevronRight className="mr-2 h-4 w-4" />
                  View All Analytics
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
