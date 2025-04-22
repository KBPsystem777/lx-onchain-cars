import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Car,
  CheckCircle,
  FileText,
  Shield,
  User,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminLayout } from "@/components/admin-layout";

export default function ApplicationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <AdminLayout>
      <Link
        href="/admin/applications"
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to applications
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Application #APP-{params.id}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Thomas Wilson • Car Owner • Submitted May 15, 2025
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 flex-1 md:flex-none"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            <span className="sm:inline">Approve</span>
            <span className="hidden sm:inline"> Application</span>
          </Button>
          <Button
            size="sm"
            variant="destructive"
            className="flex-1 md:flex-none"
          >
            <XCircle className="mr-2 h-4 w-4" />
            <span className="sm:inline">Reject</span>
            <span className="hidden sm:inline"> Application</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="kyc" className="space-y-6">
        <TabsList className="w-full flex flex-wrap">
          <TabsTrigger value="kyc" className="flex-1">
            KYC Docs
          </TabsTrigger>
          <TabsTrigger value="user" className="flex-1">
            User Info
          </TabsTrigger>
          <TabsTrigger value="vehicle" className="flex-1">
            Vehicle
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex-1">
            Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kyc" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Identity Verification</CardTitle>
              <CardDescription>
                Review the applicant's identity documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Driver's License</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Front of License</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&text=License+Front"
                        alt="Driver's License Front"
                        width={500}
                        height={300}
                        className="object-contain w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Back of License</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&text=License+Back"
                        alt="Driver's License Back"
                        width={500}
                        height={300}
                        className="object-contain w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Name on License</p>
                    <p>Thomas Wilson</p>
                  </div>
                  <div>
                    <p className="font-medium">License Number</p>
                    <p>CA12345678</p>
                  </div>
                  <div>
                    <p className="font-medium">Issuing State</p>
                    <p>California</p>
                  </div>
                  <div>
                    <p className="font-medium">Expiration Date</p>
                    <p>05/15/2026</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Selfie with ID</h3>
                <div className="border rounded-lg overflow-hidden max-w-md">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Selfie+with+ID"
                    alt="Selfie with ID"
                    width={600}
                    height={400}
                    className="object-contain w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Secondary Identification
                </h3>
                <div className="border rounded-lg overflow-hidden max-w-md">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Passport"
                    alt="Passport"
                    width={500}
                    height={300}
                    className="object-contain w-full"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Document Type</p>
                    <p>Passport</p>
                  </div>
                  <div>
                    <p className="font-medium">Document Number</p>
                    <p>P12345678</p>
                  </div>
                  <div>
                    <p className="font-medium">Expiration Date</p>
                    <p>10/20/2030</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Verification Notes</h3>
                <Textarea
                  placeholder="Add notes about this verification..."
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="user" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Review the applicant's personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 relative rounded-full overflow-hidden mx-auto sm:mx-0">
                  <Image
                    src="/placeholder.svg?height=128&width=128&text=TW"
                    alt="Thomas Wilson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Full Name</p>
                      <p>Thomas Wilson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p>thomaswilson@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Date of Birth</p>
                      <p>January 15, 1985 (38 years old)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p>
                      123 Main Street, Apt 4B
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Background Check Results
                </h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <p className="font-medium">No criminal history found</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="h-5 w-5 text-green-500" />
                    <p className="font-medium">
                      Clean driving record (last 5 years)
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-5 w-5 text-green-500" />
                    <p className="font-medium">
                      Identity verified successfully
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-500" />
                    <p className="font-medium">Address verification complete</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application History</CardTitle>
              <CardDescription>
                Previous interactions with the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-2 mt-0.5">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Account Created</p>
                      <p className="text-sm text-muted-foreground">
                        May 15, 2025
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      User created an account with email verification
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-2 mt-0.5">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Documents Uploaded</p>
                      <p className="text-sm text-muted-foreground">
                        May 15, 2025
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      User completed KYC document uploads
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-muted p-2 mt-0.5">
                    <Car className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Vehicle Added</p>
                      <p className="text-sm text-muted-foreground">
                        May 16, 2025
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      User added Tesla Model Y (2022)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vehicle" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Information</CardTitle>
              <CardDescription>
                Review the applicant's vehicle details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Tesla+Model+Y"
                    alt="Tesla Model Y"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Make</p>
                      <p>Tesla</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Model</p>
                      <p>Model Y</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Year</p>
                      <p>2022</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Color</p>
                      <p>White</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">VIN</p>
                      <p>5YJYGDEF2NF123456</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">License Plate</p>
                      <p>ABC1234</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Vehicle Type</p>
                    <p>Electric SUV</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Daily Rate</p>
                    <p className="text-lg font-bold">$95.00</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Vehicle Documentation
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                      Registration Document
                    </h4>
                    <div className="border rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&text=Vehicle+Registration"
                        alt="Vehicle Registration"
                        width={500}
                        height={300}
                        className="object-contain w-full"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-muted-foreground">
                        Expiration: 12/31/2025
                      </p>
                      <p className="text-green-600 font-medium">Valid</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Insurance Document</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500&text=Vehicle+Insurance"
                        alt="Vehicle Insurance"
                        width={500}
                        height={300}
                        className="object-contain w-full"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-muted-foreground">
                        Coverage: $100,000/$300,000
                      </p>
                      <p className="text-green-600 font-medium">Valid</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Vehicle Photos</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    "Front",
                    "Back",
                    "Driver Side",
                    "Passenger Side",
                    "Interior Front",
                    "Interior Back",
                    "Trunk",
                    "Dashboard",
                  ].map((angle, i) => (
                    <div key={i} className="space-y-1">
                      <div className="border rounded-lg overflow-hidden aspect-square">
                        <Image
                          src={`/placeholder.svg?height=200&width=200&text=${angle}`}
                          alt={`Vehicle ${angle}`}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-xs text-center">{angle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>
                Review the applicant's payment details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Bank Account Details
                </h3>
                <div className="rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Account Holder Name</p>
                      <p>Thomas Wilson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Account Type</p>
                      <p>Checking</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Routing Number</p>
                      <p>•••••••••1234</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Account Number</p>
                      <p>•••••••••5678</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Tax Information</h3>
                <div className="rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Tax ID Type</p>
                      <p>Social Security Number</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tax ID Number</p>
                      <p>•••-••-••••</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Pricing Information
                </h3>
                <div className="rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Daily Rate</p>
                      <p className="font-bold">$95.00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Weekly Rate</p>
                      <p className="font-bold">$570.00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Platform Fee</p>
                      <p>10%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Owner Payout</p>
                      <p>90% of rental price</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-medium mb-4">Admin Decision</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="decision-notes" className="text-sm font-medium">
              Notes
            </label>
            <Textarea
              id="decision-notes"
              placeholder="Add notes about your decision..."
              className="min-h-[120px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <Button variant="outline" size="lg" className="order-3 sm:order-1">
              Request More Info
            </Button>
            <Button variant="destructive" size="lg" className="order-2">
              <XCircle className="mr-2 h-5 w-5" />
              Reject
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 order-1 sm:order-3"
              size="lg"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
