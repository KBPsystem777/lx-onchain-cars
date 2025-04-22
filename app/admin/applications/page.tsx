import Image from "next/image";
import { CheckCircle, FileText, Filter, Search, XCircle } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { AdminLayout } from "@/components/admin-layout";

export default function AdminApplicationsPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Application Reviews
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="owners" className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="owners" className="flex-1">
              Car Owners (12)
            </TabsTrigger>
            <TabsTrigger value="renters" className="flex-1">
              Renters (18)
            </TabsTrigger>
            <TabsTrigger value="rejected" className="flex-1">
              Rejected (5)
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex-1">
              Approved (45)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="owners" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Car Owner Applications</CardTitle>
                <CardDescription>
                  Review and approve car owners who want to join the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-8 w-full"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={`/placeholder.svg?height=50&width=50&text=A${i}`}
                              alt={`Applicant ${i}`}
                              width={50}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold">
                                {i === 1
                                  ? "Thomas Wilson"
                                  : i === 2
                                  ? "Jennifer Lee"
                                  : "Robert Chen"}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                                Car Owner
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {i === 1
                                ? "thomaswilson@example.com"
                                : i === 2
                                ? "jenniferlee@example.com"
                                : "robertchen@example.com"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Applied: {i} day{i !== 1 ? "s" : ""} ago
                            </p>
                            <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                              <p>
                                <span className="font-medium">Car:</span>{" "}
                                {i === 1
                                  ? "Tesla Model Y"
                                  : i === 2
                                  ? "BMW 3 Series"
                                  : "Audi Q5"}
                              </p>
                              <p>
                                <span className="font-medium">Year:</span>{" "}
                                {2020 + i}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 sm:flex-none"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex-1 sm:flex-none"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Car Owner Applications
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="renters" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Renter Applications</CardTitle>
                <CardDescription>
                  Review and approve renters who want to join the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-8 w-full"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={`/placeholder.svg?height=50&width=50&text=R${i}`}
                              alt={`Applicant ${i}`}
                              width={50}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold">
                                {i === 1
                                  ? "Jason Smith"
                                  : i === 2
                                  ? "Amanda Miller"
                                  : "Kevin Johnson"}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800">
                                Renter
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {i === 1
                                ? "jasonsmith@example.com"
                                : i === 2
                                ? "amandamiller@example.com"
                                : "kevinjohnson@example.com"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Applied: {i * 2} hour{i * 2 !== 1 ? "s" : ""} ago
                            </p>
                            <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
                              <p>
                                <span className="font-medium">Age:</span>{" "}
                                {25 + i}
                              </p>
                              <p>
                                <span className="font-medium">License:</span>{" "}
                                {i + 3} years
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 sm:flex-none"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex-1 sm:flex-none"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Renter Applications
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Applications</CardTitle>
                <CardDescription>
                  Review previously rejected applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-8 w-full"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={`/placeholder.svg?height=50&width=50&text=X${i}`}
                              alt={`Applicant ${i}`}
                              width={50}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold">
                                {i === 1 ? "David Brown" : "Sarah Thompson"}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800">
                                Rejected
                              </span>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">
                                {i === 1 ? "Car Owner" : "Renter"}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {i === 1
                                ? "davidbrown@example.com"
                                : "sarahthompson@example.com"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Rejected: {i + 5} days ago
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 sm:flex-none"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Reconsider
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-red-800">
                              Rejection Reason:
                            </p>
                            <p className="text-red-700">
                              {i === 1
                                ? "Vehicle registration document was expired. Can reapply with updated registration."
                                : "Driver's license was suspended. Unable to verify driving record."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Rejected Applications
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Approved Applications</CardTitle>
                <CardDescription>
                  Recently approved users on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search applications..."
                      className="pl-8 w-full"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <div className="rounded-md border overflow-hidden">
                  <div className="hidden md:grid grid-cols-4 gap-4 p-4 font-medium border-b">
                    <div className="col-span-2">User</div>
                    <div>Type</div>
                    <div>Approval Date</div>
                  </div>

                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 p-4 border-b"
                    >
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=A${i}`}
                            alt={`User ${i}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate">
                            {i === 1
                              ? "Michael Taylor"
                              : i === 2
                              ? "Elizabeth Green"
                              : i === 3
                              ? "Christopher Lee"
                              : i === 4
                              ? "Jessica White"
                              : "Daniel Martin"}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {i === 1
                              ? "michaeltaylor@example.com"
                              : i === 2
                              ? "elizabethgreen@example.com"
                              : i === 3
                              ? "christopherlee@example.com"
                              : i === 4
                              ? "jessicawhite@example.com"
                              : "danielmartin@example.com"}
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-1 flex items-center">
                        <div className="md:hidden text-xs font-medium mr-2">
                          Type:
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                            i % 2 === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {i % 2 === 0 ? "Car Owner" : "Renter"}
                        </span>
                      </div>
                      <div className="md:col-span-1 flex items-center">
                        <div className="md:hidden text-xs font-medium mr-2">
                          Approved:
                        </div>
                        <div className="text-sm">
                          {new Date(
                            Date.now() - i * 86400000
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 5 of 45 approved applications
                </div>
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
        </Tabs>
      </div>
    </AdminLayout>
  );
}
