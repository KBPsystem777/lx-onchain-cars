import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  CreditCard,
  Car,
  Shield,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How LXCars PH Works
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Your guide to renting and sharing cars in the Philippines -
              simple, secure, and hassle-free
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Renting a Car is Easy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to get on the road with LXCars PH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Search for Cars</h3>
              <p className="text-gray-600">
                Browse our extensive selection of vehicles from sedans to SUVs.
                Filter by location, date, and features to find your perfect
                match.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Book Your Dates</h3>
              <p className="text-gray-600">
                Select your pickup and return dates. Our real-time availability
                calendar ensures you see only cars that are ready when you need
                them.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                3. Verify Your Identity
              </h3>
              <p className="text-gray-600">
                Complete our simple KYC process with your Philippine driver's
                license and a valid ID. This keeps our community safe and
                trusted.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Make Payment</h3>
              <p className="text-gray-600">
                Secure payment options including credit cards, GCash, Maya, and
                even cryptocurrency. Pay in full or choose our flexible deposit
                system.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">5. Pick Up Your Car</h3>
              <p className="text-gray-600">
                Meet the car owner or our staff at the designated location.
                Complete the digital checklist together before hitting the road.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">6. Return & Review</h3>
              <p className="text-gray-600">
                Return the car at the agreed time and location. Complete the
                return checklist and share your experience to help our
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Owner Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Earn Money as a Car Owner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Turn your idle vehicle into a source of income. Join thousands
                of car owners across the Philippines who are earning extra by
                sharing their cars on LXCars PH.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-100 rounded-full p-1">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      You decide when your car is available. Keep it for
                      personal use whenever you need it.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-100 rounded-full p-1">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Insurance Coverage</h3>
                    <p className="text-gray-600">
                      Our comprehensive insurance policy protects your vehicle
                      during all rentals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-100 rounded-full p-1">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Verified Renters</h3>
                    <p className="text-gray-600">
                      All renters undergo strict verification and KYC checks
                      before they can book your car.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-green-100 rounded-full p-1">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Fast Payments</h3>
                    <p className="text-gray-600">
                      Receive payments directly to your bank account or e-wallet
                      within 24 hours after each rental.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/signup/owner">Register Your Car</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Car owner with vehicle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              LXCars PH implements multiple layers of security to ensure a safe
              experience for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Users</h3>
                <p className="text-gray-600">
                  Every user undergoes a thorough verification process including
                  government ID checks and facial recognition, compliant with
                  Philippine regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Contracts</h3>
                <p className="text-gray-600">
                  Digital rental agreements are legally binding under Philippine
                  e-commerce laws and provide clear terms for both parties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our Philippine-based customer support team is available around
                  the clock to assist with any issues during your rental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users across the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Santos</h4>
                    <p className="text-sm text-gray-600">Manila</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a car owner, I was hesitant at first, but LXCars PH made
                  it so easy to list my car and start earning. The verification
                  process made me feel secure about who was renting my vehicle."
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Carlo Reyes</h4>
                    <p className="text-sm text-gray-600">Cebu</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I needed a car for a weekend trip to Bohol, and the process
                  was seamless. The digital checklist made pickup and return
                  super easy, and the car was exactly as described."
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Jasmine Tan</h4>
                    <p className="text-sm text-gray-600">Davao</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The cryptocurrency payment option was a game-changer for me!
                  As someone who prefers digital currencies, it was refreshing
                  to find a car rental service that accepts them."
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join the LXCars PH community today and experience a new way to rent
            or share cars in the Philippines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup/renter">Rent a Car</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-700"
              asChild
            >
              <Link href="/signup/owner">List Your Car</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
