import Link from "next/link";
import Image from "next/image";
import {
  Car,
  CreditCard,
  Key,
  Shield,
  User,
  DollarSign,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FooterYear } from "@/components/footer-year";

export default function SignupOptionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6" />
            <span>LXCars</span>
          </Link>
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

      <main className="flex-1 container max-w-5xl py-10 px-4 md:py-16 md:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Join the LXCars Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sign up as a renter to find your perfect ride, or as a car owner to
            share your vehicle and earn money.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto w-full px-4 sm:px-0">
          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Become a Renter</CardTitle>
              <CardDescription>
                Find and book vehicles for your next trip
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="aspect-square w-full max-w-[180px] sm:max-w-[200px] mx-auto relative">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Renter"
                  alt="Renter"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Key className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Access hundreds of vehicles in your area</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Verified by our rigorous KYC process</span>
                </li>
                <li className="flex items-start">
                  <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Multiple payment options including cryptocurrency</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/signup/renter" className="w-full">
                <Button size="lg" className="w-full">
                  <User className="mr-2 h-5 w-5" />
                  Sign Up as a Renter
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Become a Car Owner</CardTitle>
              <CardDescription>
                List your vehicle and start earning
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="aspect-square w-full max-w-[180px] sm:max-w-[200px] mx-auto relative">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Car+Owner"
                  alt="Car Owner"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Earn money when you're not using your car</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Protected by comprehensive insurance</span>
                </li>
                <li className="flex items-start">
                  <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>Get paid via bank transfer or cryptocurrency</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/signup/owner" className="w-full">
                <Button size="lg" className="w-full">
                  <Car className="mr-2 h-5 w-5" />
                  Sign Up as a Car Owner
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center px-4 sm:px-6">
          <h2 className="text-xl font-semibold mb-4">
            Future Blockchain Integration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're working on implementing blockchain technology for identity
            management and payments, providing enhanced security and flexibility
            for our users.
          </p>
          <div className="bg-muted rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="font-medium mb-2">Coming Soon:</h3>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span>NFT-based identity verification for seamless KYC</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                  <CreditCard className="h-4 w-4 text-primary" />
                </div>
                <span>Stablecoin and cryptocurrency payment options</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1 mr-2 mt-0.5">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <span>Smart contract-based rental agreements</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
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
