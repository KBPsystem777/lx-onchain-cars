import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Car, Filter, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FooterYear } from "@/components/footer-year";

export default function CarsPage() {
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
        {/* Search and Filter Bar */}
        <div className="mb-8 rounded-lg border p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2 md:col-span-4">
              <h2 className="text-xl font-bold">Find Available Cars</h2>
              <p className="text-sm text-muted-foreground">
                Search and filter to find your perfect rental
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Location or car model"
                className="pl-8"
              />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" placeholder="Pick-up date" className="pl-8" />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" placeholder="Return date" className="pl-8" />
            </div>
            <div>
              <Button className="w-full">Search</Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Filters</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Car Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Price Range (per day)
                  </label>
                  <div className="pt-2">
                    <Slider
                      defaultValue={[50, 150]}
                      min={0}
                      max={300}
                      step={10}
                    />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>$50</span>
                      <span>$150</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Features</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="automatic"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="automatic" className="text-sm">
                        Automatic
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="air-conditioning"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="air-conditioning" className="text-sm">
                        Air Conditioning
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="bluetooth"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="bluetooth" className="text-sm">
                        Bluetooth
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="gps"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="gps" className="text-sm">
                        GPS
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Rating</SelectItem>
                      <SelectItem value="4plus">4+ Stars</SelectItem>
                      <SelectItem value="3plus">3+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Available Cars</h2>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Link href={`/cars/${i}`} key={i} className="group">
                  <div className="overflow-hidden rounded-lg border transition-all hover:shadow-md">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Car+${i}`}
                        alt={`Car ${i}`}
                        width={500}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2 rounded-full bg-white px-2 py-1 text-xs font-medium">
                        {i % 2 === 0 ? "Instant Book" : "Owner Approval"}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">
                          {i % 3 === 0
                            ? "Tesla Model 3"
                            : i % 3 === 1
                            ? "BMW X5"
                            : "Toyota Camry"}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 text-sm">
                            {(4 + (i % 10) / 10).toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {i % 3 === 0
                          ? "Electric • Automatic • 5 Seats"
                          : i % 3 === 1
                          ? "SUV • Automatic • 5 Seats"
                          : "Sedan • Automatic • 5 Seats"}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold">${65 + i * 5}</span>
                          <span className="text-sm text-muted-foreground">
                            {" "}
                            / day
                          </span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Button variant="outline">Load More</Button>
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
