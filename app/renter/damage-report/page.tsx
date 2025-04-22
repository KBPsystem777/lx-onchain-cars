import Link from "next/link";
import { ArrowLeft, Camera, Car, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DamageReportPage() {
  return (
    <div className="container max-w-3xl py-10">
      <Link
        href="/renter/bookings"
        className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to bookings
      </Link>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Report Vehicle Damage
          </h1>
          <p className="text-muted-foreground mt-2">
            Please provide details about any damage to help us process your
            report quickly and accurately.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>Rental information for reference</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/3 aspect-video relative rounded-md overflow-hidden bg-muted flex items-center justify-center">
                <Car className="h-12 w-12 text-muted-foreground" />
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
                    <p className="font-medium">Owner</p>
                    <p className="text-muted-foreground">John Doe</p>
                  </div>
                  <div>
                    <p className="font-medium">Status</p>
                    <p className="text-muted-foreground">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <form className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Damage Information</CardTitle>
              <CardDescription>
                Provide details about the damage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="damage-type">Type of Damage</Label>
                <RadioGroup
                  defaultValue="minor"
                  id="damage-type"
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                >
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="minor" id="minor" />
                    <Label htmlFor="minor" className="flex-1 cursor-pointer">
                      Minor Scratch/Dent
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                      Moderate Damage
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="severe" id="severe" />
                    <Label htmlFor="severe" className="flex-1 cursor-pointer">
                      Severe Damage
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location of Damage</Label>
                <RadioGroup
                  defaultValue="front"
                  id="location"
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2"
                >
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="front" id="front" />
                    <Label htmlFor="front" className="flex-1 cursor-pointer">
                      Front
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="rear" id="rear" />
                    <Label htmlFor="rear" className="flex-1 cursor-pointer">
                      Rear
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="driver-side" id="driver-side" />
                    <Label
                      htmlFor="driver-side"
                      className="flex-1 cursor-pointer"
                    >
                      Driver Side
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem
                      value="passenger-side"
                      id="passenger-side"
                    />
                    <Label
                      htmlFor="passenger-side"
                      className="flex-1 cursor-pointer"
                    >
                      Passenger Side
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="interior" id="interior" />
                    <Label htmlFor="interior" className="flex-1 cursor-pointer">
                      Interior
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="wheels" id="wheels" />
                    <Label htmlFor="wheels" className="flex-1 cursor-pointer">
                      Wheels/Tires
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="windshield" id="windshield" />
                    <Label
                      htmlFor="windshield"
                      className="flex-1 cursor-pointer"
                    >
                      Windshield/Glass
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="flex-1 cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe the damage in detail, including how it occurred if known..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Photos</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-32">
                      <Camera className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">Take Photo</p>
                      <p className="text-xs text-muted-foreground">
                        Use your camera
                      </p>
                      <Input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div className="border border-dashed rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-32">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">Upload Photo</p>
                      <p className="text-xs text-muted-foreground">
                        Select from your device
                      </p>
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-square relative bg-muted flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Preview will appear here
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Upload clear photos of the damage from multiple angles. Max 5
                  photos, 10MB each.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="when">When did the damage occur?</Label>
                <Input type="datetime-local" id="when" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full">Submit Damage Report</Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting this report, you confirm that the information
                provided is accurate to the best of your knowledge.
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
