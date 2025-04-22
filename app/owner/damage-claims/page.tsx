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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { OwnerLayout } from "@/components/owner-layout";

export default function DamageClaimsPage() {
  return (
    <OwnerLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Damage Claims</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList>
            <TabsTrigger value="reports">Damage Reports</TabsTrigger>
            <TabsTrigger value="claims">My Claims</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>New Damage Reports</CardTitle>
                <CardDescription>
                  Review damage reports submitted by renters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search reports..."
                      className="pl-8 w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* New Report */}
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=50&width=50&text=SJ"
                            alt="Sarah Johnson"
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Sarah Johnson</h3>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                              New Report
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Tesla Model 3 • BK-12345
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reported: 2 hours ago
                          </p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Issue:</span> Minor
                            scratch on passenger door
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">File Claim</Button>
                      </div>
                    </div>
                  </div>

                  {/* Another Report */}
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=50&width=50&text=MB"
                            alt="Michael Brown"
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Michael Brown</h3>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                              New Report
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            BMW X5 • BK-12346
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reported: 1 day ago
                          </p>
                          <p className="text-sm mt-2">
                            <span className="font-medium">Issue:</span>{" "}
                            Windshield chip from road debris
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">File Claim</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Reports
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="claims" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Damage Claims</CardTitle>
                <CardDescription>
                  Track the status of your damage claims
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
                  {/* Pending Claim */}
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=50&width=80&text=Tesla"
                            alt="Tesla Model 3"
                            width={80}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Claim #CL-001</h3>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800">
                              Pending Review
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Tesla Model 3 • BK-12345
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Renter: Sarah Johnson
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Filed: May 20, 2025
                          </p>
                          <div className="mt-2">
                            <p className="text-sm">
                              <span className="font-medium">Damage:</span>{" "}
                              Scratch on passenger door
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Claim Amount:</span>{" "}
                              $350.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Approved Claim */}
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=50&width=80&text=BMW"
                            alt="BMW X5"
                            width={80}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Claim #CL-002</h3>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                              Approved
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            BMW X5 • BK-12340
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Renter: John Smith
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Filed: May 15, 2025
                          </p>
                          <div className="mt-2">
                            <p className="text-sm">
                              <span className="font-medium">Damage:</span> Dent
                              in rear bumper
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Claim Amount:</span>{" "}
                              $520.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-800">
                            Claim Approved:
                          </p>
                          <p className="text-green-700">
                            Your claim has been approved. $520.00 will be
                            transferred to your account within 3-5 business
                            days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rejected Claim */}
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=50&width=80&text=Toyota"
                            alt="Toyota Camry"
                            width={80}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Claim #CL-003</h3>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-800">
                              Rejected
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Toyota Camry • BK-12338
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Renter: Emily Davis
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Filed: May 10, 2025
                          </p>
                          <div className="mt-2">
                            <p className="text-sm">
                              <span className="font-medium">Damage:</span>{" "}
                              Interior stain
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Claim Amount:</span>{" "}
                              $150.00
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Appeal
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-red-800">
                            Claim Rejected:
                          </p>
                          <p className="text-red-700">
                            Your claim was rejected as the damage appears to be
                            normal wear and tear according to our policy. You
                            may appeal this decision with additional evidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Claims
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </OwnerLayout>
  );
}
