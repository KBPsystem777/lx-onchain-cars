"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Car,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  User,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FooterYear } from "@/components/footer-year";

export default function RenterSignupPage() {
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6" />
            <span>CarShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-3xl py-10 px-4 md:py-16 md:px-6">
        <Link
          href="/signup"
          className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to signup options
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Sign Up as a Renter
          </h1>
          <p className="text-muted-foreground">
            Create your account and get verified to start renting vehicles
          </p>
        </div>

        <div className="flex justify-between mb-8 px-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  step === i
                    ? "bg-primary text-primary-foreground"
                    : step > i
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > i ? "✓" : i}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 text-center">
                {i === 1
                  ? "Account"
                  : i === 2
                  ? "Personal Info"
                  : i === 3
                  ? window.innerWidth < 350
                    ? "Identity"
                    : "Identity Verification"
                  : "Payment"}
              </span>
            </div>
          ))}
        </div>

        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>
                  Enter your email and create a password
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters with a number and a
                    symbol.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleNextStep}>
                  Continue
                </Button>
              </CardFooter>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" />
                  <p className="text-xs text-muted-foreground">
                    You must be at least 21 years old to rent a car.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" placeholder="94103" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" placeholder="California" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextStep}
                  className="w-full sm:w-auto order-1 sm:order-2"
                >
                  Continue
                </Button>
              </CardFooter>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Identity Verification</CardTitle>
                <CardDescription>
                  For security and trust, we need to verify your identity and
                  driving record
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Driver's License</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload clear photos of the front and back of your valid
                    driver's license
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center justify-center h-40">
                        <FileText className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm font-medium">Front of License</p>
                        <p className="text-xs text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center justify-center h-40">
                        <FileText className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm font-medium">Back of License</p>
                        <p className="text-xs text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Driving Record</h3>
                  <div className="space-y-2">
                    <Label htmlFor="licenseDuration">
                      How long have you had your driver's license?
                    </Label>
                    <Select defaultValue="1-3">
                      <SelectTrigger id="licenseDuration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label>
                      Have you had any accidents or traffic violations in the
                      past 3 years?
                    </Label>
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no-violations" />
                        <Label htmlFor="no-violations">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes-violations" />
                        <Label htmlFor="yes-violations">Yes</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label htmlFor="drivingHistory">
                      If yes, please explain:
                    </Label>
                    <Textarea
                      id="drivingHistory"
                      placeholder="Please provide details about any accidents or violations..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="selfie">Selfie Verification</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Please upload a clear photo of yourself holding your
                    driver's license next to your face
                  </p>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-40">
                      <User className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">
                        Upload Selfie with ID
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <Input type="file" accept="image/*" className="hidden" />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
                  <p className="font-medium">Verification Process:</p>
                  <p>
                    Your documents will be reviewed by our team within 1-2
                    business days. You'll receive an email notification once
                    your identity has been verified.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextStep}
                  className="w-full sm:w-auto order-1 sm:order-2"
                >
                  Continue
                </Button>
              </CardFooter>
            </>
          )}

          {step === 4 && (
            <>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  Choose your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs
                  defaultValue="card"
                  onValueChange={(value) => setPaymentMethod(value)}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 mb-2">
                    <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
                    <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="saveCard" />
                      <Label htmlFor="saveCard" className="text-sm">
                        Save this card for future rentals
                      </Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="crypto" className="space-y-4 pt-4">
                    <div className="rounded-lg bg-muted p-4 text-sm">
                      <h3 className="font-medium mb-2">
                        Cryptocurrency Payments
                      </h3>
                      <p className="mb-4">
                        We accept various cryptocurrencies and stablecoins for
                        rental payments. Select your preferred option:
                      </p>

                      <RadioGroup defaultValue="usdc" className="space-y-3">
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="usdc" id="usdc" />
                          <Label htmlFor="usdc" className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>USDC (USD Coin)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="usdt" id="usdt" />
                          <Label htmlFor="usdt" className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>USDT (Tether)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="eth" id="eth" />
                          <Label htmlFor="eth" className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>ETH (Ethereum)</span>
                          </Label>
                        </div>
                      </RadioGroup>

                      <div className="mt-4 space-y-2">
                        <Label htmlFor="walletAddress">
                          Your Wallet Address (For Refunds)
                        </Label>
                        <Input id="walletAddress" placeholder="0x..." />
                        <p className="text-xs text-muted-foreground">
                          This address will be used for any refunds.
                        </p>
                      </div>

                      <div className="mt-4 bg-amber-50 p-3 rounded-md text-amber-800 text-xs">
                        <p className="font-medium">Coming Soon:</p>
                        <p>
                          In the future, your identity will be managed as an
                          NFT, and all transactions will be handled on-chain for
                          enhanced security and transparency.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Security Deposit</h3>
                  <p className="text-sm text-muted-foreground">
                    A security deposit may be required for certain vehicles. The
                    amount will vary based on the vehicle type and rental
                    duration.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms-payment" />
                    <Label htmlFor="terms-payment" className="text-sm">
                      I understand that my payment information will be securely
                      stored and used for future rentals and potential damage
                      claims.
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  Previous
                </Button>
                <Button className="w-full sm:w-auto order-1 sm:order-2">
                  Complete Registration
                </Button>
              </CardFooter>
            </>
          )}
        </Card>

        {step === 4 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              After completing registration, your account will be reviewed by
              our team. We'll notify you via email once your account is
              approved.
            </p>
          </div>
        )}
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Car className="h-6 w-6" />
              <span>CarShare</span>
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
