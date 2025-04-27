import {
  CalendarDays,
  Car,
  CheckCircle,
  ChevronRight,
  Shield,
  Star,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { useCurrentYear } from "@/hooks/use-current-year";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  const currentYear = useCurrentYear();

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

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Rent Your Car or Find Your Perfect Ride
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our community of car owners and renters. Earn money by
                  sharing your car or find the perfect vehicle for your next
                  adventure.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/cars">
                  <Button size="lg">Find a Car</Button>
                </Link>
                <Link href="/owner/register">
                  <Button size="lg" variant="outline">
                    List Your Car
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden">
              <Image
                src="/models/1.webp?height=500&width=800"
                alt="Modern car on a scenic road"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px] space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Find Your Perfect Ride
              </h2>
              <p className="text-muted-foreground">
                Search from hundreds of cars in your area
              </p>
            </div>
            <div className="grid gap-4 p-6 border rounded-xl shadow-sm">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Location
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter city or address"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Pick-up Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Select date"
                      type="date"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Return Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Select date"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full">Search Available Cars</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tighter">
                Featured Cars
              </h2>
              <Link
                href="/cars"
                className="flex items-center text-sm font-medium text-primary"
              >
                View all cars
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`/models/everest.jpg?height=300&width=500&text=Car+${i}`}
                      alt={`Featured car ${i}`}
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Ford Everest</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 text-sm">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      SUV • Automatic • 7 Seats
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg">PHP 3,000</span>
                        <span className="text-sm text-muted-foreground">
                          {" "}
                          / day
                        </span>
                      </div>
                      <Link href={`/cars/${i}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                How It Works
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our platform makes car rental simple, secure, and convenient for
                everyone
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4">
                <div className="rounded-full bg-primary p-3">
                  <Car className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">List or Find a Car</h3>
                <p className="text-muted-foreground text-center">
                  Car owners list their vehicles with details and availability.
                  Renters browse and find their perfect match.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4">
                <div className="rounded-full bg-primary p-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Verify and Book</h3>
                <p className="text-muted-foreground text-center">
                  Complete our simple KYC process. Car owners approve bookings
                  and renters confirm their dates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4">
                <div className="rounded-full bg-primary p-3">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Secure and Protected</h3>
                <p className="text-muted-foreground text-center">
                  Our platform ensures secure payments, insurance coverage, and
                  24/7 customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
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
          <p className="text-xs text-muted-foreground">
            {`© ${currentYear} LXCars. All rights reserved`}
          </p>
        </div>
      </footer>
    </div>
  );
}
