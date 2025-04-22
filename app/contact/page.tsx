import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              We're here to help with any questions about our car rental
              services in the Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">Customer Service</p>
                <p className="font-medium">(02) 8123-4567</p>
                <p className="text-gray-600 mt-2">Technical Support</p>
                <p className="font-medium">0917-123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <p className="font-medium">info@carrentph.com</p>
                <p className="text-gray-600 mt-2">Support</p>
                <p className="font-medium">support@carrentph.com</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Office Location</h3>
                <p className="text-gray-600 mb-2">Main Office</p>
                <p className="font-medium">123 Bonifacio Global City</p>
                <p className="font-medium">Taguig City, Metro Manila</p>
                <p className="text-gray-600 mt-2">Philippines 1634</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-lg mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="font-medium">8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 mt-2">Saturday</p>
                <p className="font-medium">9:00 AM - 3:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Have a question or feedback? Fill out the form below and we'll
                get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Juan Dela Cruz" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="0917 123 4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Booking Inquiry" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full md:w-auto" size="lg">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                Located in the heart of Bonifacio Global City, our office is
                easily accessible via public transportation
              </p>
            </div>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* In a real implementation, this would be a Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">
                  Interactive Map Would Be Embedded Here
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-gray-600">
              <p>
                Nearby landmarks: SM Aura, Market Market, High Street, and The
                Fort Strip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Regional Offices
              </h2>
              <p className="text-gray-600">
                CarRent PH is expanding across the Philippines to serve you
                better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Cebu</h3>
                  <p className="text-gray-600 mb-4">IT Park, Cebu City</p>
                  <p className="text-sm text-gray-600">
                    <Phone className="inline h-4 w-4 mr-1" /> (032) 234-5678
                  </p>
                  <p className="text-sm text-gray-600">
                    <Mail className="inline h-4 w-4 mr-1" /> cebu@carrentph.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Davao</h3>
                  <p className="text-gray-600 mb-4">
                    JP Laurel Ave, Davao City
                  </p>
                  <p className="text-sm text-gray-600">
                    <Phone className="inline h-4 w-4 mr-1" /> (082) 345-6789
                  </p>
                  <p className="text-sm text-gray-600">
                    <Mail className="inline h-4 w-4 mr-1" /> davao@carrentph.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Clark</h3>
                  <p className="text-gray-600 mb-4">
                    Clark Freeport Zone, Pampanga
                  </p>
                  <p className="text-sm text-gray-600">
                    <Phone className="inline h-4 w-4 mr-1" /> (045) 456-7890
                  </p>
                  <p className="text-sm text-gray-600">
                    <Mail className="inline h-4 w-4 mr-1" /> clark@carrentph.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  What documents do I need to rent a car?
                </h3>
                <p className="text-gray-600">
                  You'll need a valid Philippine driver's license or
                  international driving permit, a government-issued ID, and a
                  credit card for the security deposit.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  How do I report an issue with my rental?
                </h3>
                <p className="text-gray-600">
                  Contact our 24/7 customer support line at (02) 8123-4567 or
                  use the "Report Issue" feature in your account dashboard.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Can I extend my rental period?
                </h3>
                <p className="text-gray-600">
                  Yes, you can extend your rental through your account or by
                  calling our customer service, subject to vehicle availability.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
