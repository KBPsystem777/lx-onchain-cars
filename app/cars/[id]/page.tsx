import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Car,
  Check,
  ChevronLeft,
  Fuel,
  Gauge,
  MapPin,
  Shield,
  Star,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FooterYear } from "@/components/footer-year";

// This component uses the CarContentProvider to fetch car details
// In a real implementation, this would connect to a CMS like Strapi or Sitecore
export default function CarDetailPage({ params }: { params: { id: string } }) {
  // In a real implementation, this would fetch from the CMS
  // For demo purposes, we're using the mock data from the provider
  const carId = `car-${params.id}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6" />
            <span>LXCars</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/cars"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Browse Cars
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 md:px-6 md:py-12">
        <Link
          href="/cars"
          className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to search results
        </Link>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {/* Car Images and Details - Using CMS Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Images */}
            <div className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Tesla+Model+3"
                  alt="Tesla Model 3"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-video overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/placeholder.svg?height=150&width=200&text=Image+${i}`}
                      alt={`Car image ${i}`}
                      width={200}
                      height={150}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Tesla Model 3</h1>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="ml-1 font-medium">4.9</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    (42 reviews)
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Car className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Electric</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Gauge className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Automatic</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <User className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">5 Seats</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-3">
                  <Fuel className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Electric</span>
                </div>
              </div>
            </div>

            {/* Tabs for Details */}
            <Tabs defaultValue="description" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6 space-y-4">
                <p>
                  Experience the future of driving with this Tesla Model 3. This
                  all-electric sedan combines luxury, performance, and
                  cutting-edge technology to deliver an exceptional driving
                  experience.
                </p>
                <p>
                  With a range of up to 358 miles on a single charge, this Model
                  3 is perfect for both city commutes and longer road trips. The
                  dual motor all-wheel drive provides excellent handling in all
                  weather conditions.
                </p>
                <p>
                  The spacious interior comfortably seats 5 adults and features
                  a minimalist design with a 15-inch touchscreen that controls
                  nearly all of the car's functions. The panoramic glass roof
                  creates an open, airy feel throughout the cabin.
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Owner's Notes</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=50&width=50&text=JD"
                          alt="Owner"
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">
                          Owner since 2021
                        </p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Please return the car with at least 20% charge.
                      Superchargers are available throughout the city. No
                      smoking in the vehicle. Pets are allowed but please use
                      the provided seat covers.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Car Features</h3>
                    <ul className="space-y-2">
                      {[
                        "Autopilot",
                        "15-inch Touchscreen",
                        "Panoramic Glass Roof",
                        "Premium Sound System",
                        "Heated Seats",
                        "Keyless Entry",
                        "Mobile App Access",
                        "Supercharger Access",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Included in Rental
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Insurance Coverage",
                        "24/7 Roadside Assistance",
                        "Unlimited Mileage",
                        "Car Charger",
                        "Phone Mount",
                        "Cleaning Supplies",
                        "First-time Renter Support",
                        "Contactless Pickup",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <span className="ml-2 font-medium">4.9 out of 5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on 42 reviews
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=40&width=40&text=U${i}`}
                              alt={`Reviewer ${i}`}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">
                              {i === 1
                                ? "Sarah Johnson"
                                : i === 2
                                ? "Michael Brown"
                                : "Emily Davis"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {i === 1
                                ? "April 2025"
                                : i === 2
                                ? "March 2025"
                                : "February 2025"}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < 5
                                    ? "fill-primary text-primary"
                                    : "fill-muted stroke-muted-foreground"
                                }`}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="text-sm">
                        {i === 1
                          ? "Amazing car! Super clean and fun to drive. The owner was very responsive and helpful. Will definitely rent again."
                          : i === 2
                          ? "Great experience from start to finish. The car was in perfect condition and performed flawlessly. Charging was easy with the provided guide."
                          : "This was my first time driving a Tesla and I'm hooked! The car was immaculate and the owner provided clear instructions for everything."}
                      </p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  View All 42 Reviews
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Panel */}
          <div className="lg:row-start-1">
            <div className="sticky top-6 rounded-lg border shadow-sm p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">$75</span>
                    <span className="text-muted-foreground"> / day</span>
                  </div>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                    Instant Book
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  $225 total for 3 days
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pick-up Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Book Now</Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    You won't be charged yet
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>$75 x 3 days</span>
                  <span>$225.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Service fee</span>
                  <span>$22.50</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Insurance</span>
                  <span>Included</span>
                </div>
                <div className="border-t pt-4 flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>$247.50</span>
                </div>
              </div>

              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cancellation">
                    <AccordionTrigger className="text-sm">
                      Cancellation Policy
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Free cancellation up to 24 hours before your trip
                        starts. After that, you'll be charged 50% of the booking
                        fee.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="insurance">
                    <AccordionTrigger className="text-sm">
                      Insurance & Protection
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Your booking includes insurance coverage with a $500
                        deductible. Additional protection plans are available
                        during checkout.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg bg-muted p-4">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  This car is verified by LXCars and meets our quality
                  standards.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=JD"
                      alt="Owner"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="ml-1 text-xs">4.9 • 56 trips</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Car className="h-6 w-6" />
              <span>LXCars</span>
            </Link>
            <nav className="flex gap-4 md:gap-6">
              <Link
                href="#"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
          </div>
          <FooterYear />
        </div>
      </footer>
    </div>
  );
}
