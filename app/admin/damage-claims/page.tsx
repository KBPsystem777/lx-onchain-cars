import Image from "next/image";
import { CheckCircle, Filter, Search, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminLayout } from "@/components/admin-layout";

export default function AdminDamageClaimsPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Damage Claims Management
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending Review (8)</TabsTrigger>
            <TabsTrigger value="approved">Approved (15)</TabsTrigger>
            <TabsTrigger value="rejected">Rejected (7)</TabsTrigger>
            <TabsTrigger value="all">All Claims</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Claims</CardTitle>
                <CardDescription>
                  Review and process damage claims awaiting approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search claims..."
                      className="pl-8 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=50&width=80&text=Car+${i}`}
                              alt={`Car ${i}`}
                              width={80}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">
                                Claim #{`CL-00${i}`}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                                Pending Review
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {i === 1
                                ? "Tesla Model 3"
                                : i === 2
                                ? "BMW X5"
                                : "Toyota Camry"}{" "}
                              • BK-{12345 + i}
                            </p>
                            <div className="grid grid-cols-2 gap-x-4 text-sm mt-1">
                              <p>
                                <span className="font-medium">Owner:</span>{" "}
                                {i === 1
                                  ? "John Doe"
                                  : i === 2
                                  ? "Sarah Johnson"
                                  : "Michael Brown"}
                              </p>
                              <p>
                                <span className="font-medium">Renter:</span>{" "}
                                {i === 1
                                  ? "Emily Davis"
                                  : i === 2
                                  ? "Robert Wilson"
                                  : "Jennifer Lee"}
                              </p>
                              <p>
                                <span className="font-medium">Filed:</span>{" "}
                                {i === 1
                                  ? "May 20, 2025"
                                  : i === 2
                                  ? "May 19, 2025"
                                  : "May 18, 2025"}
                              </p>
                              <p>
                                <span className="font-medium">Amount:</span> $
                                {i === 1
                                  ? "350.00"
                                  : i === 2
                                  ? "520.00"
                                  : "150.00"}
                              </p>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Damage:</span>{" "}
                              {i === 1
                                ? "Scratch on passenger door"
                                : i === 2
                                ? "Dent in rear bumper"
                                : "Interior stain"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
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
                  View All Pending Claims
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Approved Claims</CardTitle>
                <CardDescription>
                  Review previously approved damage claims
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search claims..."
                      className="pl-8 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=50&width=80&text=Car+${i}`}
                              alt={`Car ${i}`}
                              width={80}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">
                                Claim #{`CL-01${i}`}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                                Approved
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {i === 1 ? "Honda Civic" : "Ford Mustang"} • BK-
                              {12350 + i}
                            </p>
                            <div className="grid grid-cols-2 gap-x-4 text-sm mt-1">
                              <p>
                                <span className="font-medium">Owner:</span>{" "}
                                {i === 1 ? "Alex Johnson" : "Maria Garcia"}
                              </p>
                              <p>
                                <span className="font-medium">Renter:</span>{" "}
                                {i === 1 ? "David Wilson" : "Susan Miller"}
                              </p>
                              <p>
                                <span className="font-medium">Filed:</span>{" "}
                                {i === 1 ? "May 15, 2025" : "May 12, 2025"}
                              </p>
                              <p>
                                <span className="font-medium">Amount:</span> $
                                {i === 1 ? "420.00" : "680.00"}
                              </p>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Damage:</span>{" "}
                              {i === 1
                                ? "Cracked taillight"
                                : "Front bumper damage"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="mr-2 h-4 w-4" />
                            Revoke Approval
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-800">
                              Approved by Admin:
                            </p>
                            <p className="text-green-700">
                              {i === 1
                                ? "Approved on May 17, 2025. Payment processed to owner."
                                : "Approved on May 14, 2025. Payment processed to owner."}
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
                  View All Approved Claims
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Claims</CardTitle>
                <CardDescription>
                  Review previously rejected damage claims
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search claims..."
                      className="pl-8 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-md overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=50&width=80&text=Car+${i}`}
                              alt={`Car ${i}`}
                              width={80}
                              height={50}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">
                                Claim #{`CL-02${i}`}
                              </h3>
                              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800">
                                Rejected
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {i === 1 ? "Audi A4" : "Nissan Altima"} • BK-
                              {12360 + i}
                            </p>
                            <div className="grid grid-cols-2 gap-x-4 text-sm mt-1">
                              <p>
                                <span className="font-medium">Owner:</span>{" "}
                                {i === 1 ? "Thomas Wright" : "Jessica Chen"}
                              </p>
                              <p>
                                <span className="font-medium">Renter:</span>{" "}
                                {i === 1 ? "Kevin Brown" : "Amanda Taylor"}
                              </p>
                              <p>
                                <span className="font-medium">Filed:</span>{" "}
                                {i === 1 ? "May 10, 2025" : "May 8, 2025"}
                              </p>
                              <p>
                                <span className="font-medium">Amount:</span> $
                                {i === 1 ? "280.00" : "190.00"}
                              </p>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Damage:</span>{" "}
                              {i === 1
                                ? "Minor scratches on door"
                                : "Stain on seat"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-start">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
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
                                ? "Rejected on May 12, 2025. Damage appears to be pre-existing based on check-in photos."
                                : "Rejected on May 10, 2025. Normal wear and tear according to our policy."}
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
                  View All Rejected Claims
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Claims</CardTitle>
                <CardDescription>
                  Comprehensive view of all damage claims in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search claims..."
                      className="pl-8 w-full"
                    />
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
                    <div className="col-span-2">Claim</div>
                    <div>Owner</div>
                    <div>Renter</div>
                    <div>Amount</div>
                    <div>Status</div>
                    <div className="text-right">Actions</div>
                  </div>

                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="grid grid-cols-7 gap-4 p-4 border-b items-center"
                    >
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=C${i}`}
                            alt={`Claim ${i}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Claim #{`CL-0${i}${i}`}</p>
                          <p className="text-xs text-muted-foreground">
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
                      <div className="text-sm">
                        {i === 1
                          ? "Emily Davis"
                          : i === 2
                          ? "Robert Wilson"
                          : i === 3
                          ? "Jennifer Lee"
                          : i === 4
                          ? "David Wilson"
                          : "Susan Miller"}
                      </div>
                      <div className="font-medium">
                        ${(i * 100 + 50).toFixed(2)}
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                            i % 3 === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : i % 3 === 1
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {i % 3 === 0
                            ? "Pending"
                            : i % 3 === 1
                            ? "Approved"
                            : "Rejected"}
                        </span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        {i % 3 === 0 && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 5 of 30 claims
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
