import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Car, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function FileClaimPage({ params }: { params: { id: string } }) {
  return (
    <OwnerLayout>
      <Link
        href="/owner/damage-claims"
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to damage claims
      </Link>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            File Damage Claim
          </h1>
          <p className="text-muted-foreground mt-2">
            Review the damage report and file a claim for compensation
          </p>
        </div>

        <Tabs defaultValue="report" className="space-y-6">
          <TabsList>
            <TabsTrigger value="report">Damage Report</TabsTrigger>
            <TabsTrigger value="claim">File Claim</TabsTrigger>
          </TabsList>

          <TabsContent value="report">
            <Card>
              <CardHeader>
                <CardTitle>Damage Report Details</CardTitle>
                <CardDescription>
                  Report submitted by Sarah Johnson on May 19, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-full md:w-1/3 aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Tesla+Model+3"
                      alt="Tesla Model 3"
                      width={300}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">Tesla Model 3</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Booking ID</p>
                        <p className="text-muted-foreground">BK-12345</p>
                      </div>
                      <div>
                        <p className="font-medium">Rental Period</p>
                        <p className="text-muted-foreground">
                          May 15 - May 18, 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Renter</p>
                        <p className="text-muted-foreground">Sarah Johnson</p>
                      </div>
                      <div>
                        <p className="font-medium">Report Date</p>
                        <p className="text-muted-foreground">May 19, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Damage Type</h4>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">
                      Minor Scratch/Dent
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Location of Damage</h4>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">
                      Passenger Side
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground">
                      There is a scratch on the passenger side door that
                      happened when I was parking at the shopping mall. Another
                      car door may have hit it. The scratch is about 6 inches
                      long and appears to be through the paint.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">When Damage Occurred</h4>
                    <p className="text-sm text-muted-foreground">
                      May 17, 2025, 2:30 PM
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Photos</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="border rounded-lg overflow-hidden"
                        >
                          <Image
                            src={`/placeholder.svg?height=150&width=150&text=Damage+${i}`}
                            alt={`Damage photo ${i}`}
                            width={150}
                            height={150}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="claim">
            <form className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claim Details</CardTitle>
                  <CardDescription>
                    Provide information about repair costs and compensation
                    requested
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="repair-cost">
                      Estimated Repair Cost ($)
                    </Label>
                    <Input
                      type="number"
                      id="repair-cost"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter the estimated cost to repair the damage
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-costs">
                      Additional Costs ($)
                    </Label>
                    <Input
                      type="number"
                      id="additional-costs"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                    <p className="text-xs text-muted-foreground">
                      Include any additional costs such as loss of rental income
                      during repairs
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="repair-details">Repair Details</Label>
                    <Textarea
                      id="repair-details"
                      placeholder="Describe the repairs needed and how the cost was estimated..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Supporting Documents</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-32">
                          <Info className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">Repair Quote</p>
                          <p className="text-xs text-muted-foreground">
                            Upload repair estimate
                          </p>
                          <Input type="file" className="hidden" />
                        </div>
                      </div>
                      <div className="border border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-32">
                          <Car className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">
                            Additional Photos
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Upload additional evidence
                          </p>
                          <Input type="file" multiple className="hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full">Submit Claim</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this claim, you confirm that the information
                    provided is accurate and that you have made reasonable
                    efforts to estimate repair costs.
                  </p>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </OwnerLayout>
  );
}
