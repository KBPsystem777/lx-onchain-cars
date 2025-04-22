import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About CarRent PH
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Transforming car rental in the Philippines through technology and
              community
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                CarRent PH was founded in 2022 by a group of Filipino
                entrepreneurs who recognized the challenges of car rental and
                ownership in the Philippines. With traffic congestion in major
                cities, high costs of car ownership, and limited rental options,
                we saw an opportunity to create a solution.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects car owners with people who need vehicles,
                creating a win-win situation: owners earn from their idle cars,
                while renters get affordable, convenient access to quality
                vehicles without the burden of ownership.
              </p>
              <p className="text-lg text-gray-600">
                Starting in Metro Manila with just 50 cars, we've now expanded
                to major cities across the Philippines with thousands of
                vehicles and a growing community of satisfied users.
              </p>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="CarRent PH team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To revolutionize transportation in the Philippines by
                  providing a secure, accessible platform that connects car
                  owners with renters, creating economic opportunities while
                  reducing the environmental impact of vehicle ownership.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Make car rental accessible to all Filipinos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Empower car owners to monetize their assets</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Reduce traffic congestion through shared mobility
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To become the leading peer-to-peer car sharing platform in
                  Southeast Asia, known for innovation, trust, and community
                  impact, while helping build a more sustainable transportation
                  ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Create the largest vehicle sharing network in the
                      Philippines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Pioneer blockchain-based vehicle rental solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Expand to other Southeast Asian markets by 2025</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming transportation
              in the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Miguel Reyes",
                role: "Chief Executive Officer",
                bio: "Former tech executive with experience at Grab and Lazada. Miguel leads our vision and strategy.",
              },
              {
                name: "Sofia Lim",
                role: "Chief Technology Officer",
                bio: "Blockchain specialist and software architect who previously built fintech solutions for major Philippine banks.",
              },
              {
                name: "Antonio Garcia",
                role: "Chief Operations Officer",
                bio: "Logistics expert with 15 years of experience in the automotive and transportation industries across the Philippines.",
              },
              {
                name: "Isabella Cruz",
                role: "Chief Marketing Officer",
                bio: "Digital marketing strategist who has helped scale multiple Filipino startups from launch to market leadership.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CarRent PH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-gray-600">
                  We build technology that strengthens connections between
                  Filipinos and creates economic opportunities for our community
                  members.
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
                <p className="text-gray-600">
                  We prioritize security in every aspect of our platform, from
                  rigorous verification to comprehensive insurance coverage that
                  meets Philippine standards.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push boundaries with technology solutions
                  tailored for the unique challenges of the Philippine
                  transportation landscape.
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing the environmental impact of
                  transportation in the Philippines through resource sharing and
                  efficient utilization.
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear communication, fair pricing, and honest
                  business practices that build long-term relationships with our
                  users.
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
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Filipino Pride</h3>
                <p className="text-gray-600">
                  We celebrate Filipino ingenuity and resilience, building
                  solutions that address the unique needs of our country and
                  culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in the CarRent PH story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600">2022</h3>
                  <p className="text-gray-500">January</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">CarRent PH Founded</h4>
                  <p className="text-gray-600">
                    Launched in Metro Manila with 50 cars and a mission to
                    transform car rental in the Philippines.
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600">2022</h3>
                  <p className="text-gray-500">June</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Seed Funding Round</h4>
                  <p className="text-gray-600">
                    Secured ₱25 million in seed funding from Filipino tech
                    investors to expand operations.
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600">2023</h3>
                  <p className="text-gray-500">March</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">
                    Expansion to Cebu and Davao
                  </h4>
                  <p className="text-gray-600">
                    Launched operations in two major Philippine cities with 200+
                    cars available.
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600">2023</h3>
                  <p className="text-gray-500">October</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">
                    Blockchain Integration
                  </h4>
                  <p className="text-gray-600">
                    Pioneered cryptocurrency payments and blockchain-based
                    contracts for car rentals in the Philippines.
                  </p>
                </div>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600">2024</h3>
                  <p className="text-gray-500">Present</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Growing Community</h4>
                  <p className="text-gray-600">
                    Now serving thousands of Filipinos with 1,000+ vehicles
                    across major cities in the Philippines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working together to build a better transportation ecosystem in the
              Philippines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="h-16 w-32 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Be part of the transportation revolution in the Philippines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-700"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
