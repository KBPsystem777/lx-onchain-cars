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
  Shield,
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

export default function OwnerSignupPage() {
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("bank");

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
            Sign Up as a Car Owner
          </h1>
          <p className="text-muted-foreground">
            Register your vehicle and start earning
          </p>
        </div>

        <div className="flex justify-between mb-8 px-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
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
                  ? "Personal"
                  : i === 3
                  ? "Identity"
                  : i === 4
                  ? "Vehicle"
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
                    You must be at least 21 years old to list a car.
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
                  <h3 className="text-lg font-medium mb-2">
                    Government-Issued ID
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload a secondary form of identification (passport, state
                    ID, etc.)
                  </p>

                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-40">
                      <FileText className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">ID Document</p>
                      <p className="text-xs text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <Input type="file" accept="image/*" className="hidden" />
                    </div>
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
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>
                  Provide details about your car
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="carMake">Make</Label>
                  <Input
                    id="carMake"
                    placeholder="e.g., Toyota, Honda, Tesla"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carModel">Model</Label>
                  <Input
                    id="carModel"
                    placeholder="e.g., Camry, Civic, Model 3"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="carYear">Year</Label>
                    <Input
                      id="carYear"
                      placeholder="e.g., 2022"
                      type="number"
                      min="1990"
                      max="2025"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carColor">Color</Label>
                    <Input
                      id="carColor"
                      placeholder="e.g., Black, White, Silver"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carType">Vehicle Type</Label>
                  <Select defaultValue="sedan">
                    <SelectTrigger id="carType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="convertible">Convertible</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="wagon">Wagon</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transmission">Transmission</Label>
                  <Select defaultValue="automatic">
                    <SelectTrigger id="transmission">
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automatic">Automatic</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="cvt">CVT</SelectItem>
                      <SelectItem value="electric">
                        Electric (No Transmission)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fuelType">Fuel Type</Label>
                  <Select defaultValue="gasoline">
                    <SelectTrigger id="fuelType">
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="plugin_hybrid">
                        Plug-in Hybrid
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licensePlate">License Plate Number</Label>
                  <Input id="licensePlate" placeholder="e.g., ABC123" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vin">
                    Vehicle Identification Number (VIN)
                  </Label>
                  <Input id="vin" placeholder="17-character VIN" />
                  <p className="text-xs text-muted-foreground">
                    The VIN can typically be found on your registration or on
                    the driver's side dashboard.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mileage">Current Mileage</Label>
                  <Input id="mileage" type="number" placeholder="e.g., 25000" />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Vehicle Documentation
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Registration Document</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-40">
                          <FileText className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">
                            Upload Registration
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <Input
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Insurance Document</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-40">
                          <Shield className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">
                            Upload Insurance
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <Input
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Please ensure your insurance allows for car sharing or
                        rental use.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Vehicle Photos</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload clear photos of your vehicle from all angles to
                    attract potential renters
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "Front",
                      "Back",
                      "Driver Side",
                      "Passenger Side",
                      "Interior Front",
                      "Interior Back",
                      "Trunk",
                      "Other",
                    ].map((angle) => (
                      <div
                        key={angle}
                        className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-2 text-center hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex flex-col items-center justify-center h-28">
                          <Car className="h-6 w-6 text-muted-foreground mb-1" />
                          <p className="text-xs font-medium">{angle}</p>
                          <p className="text-[10px] text-muted-foreground">
                            Upload photo
                          </p>
                          <Input
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </div>
                      </div>
                    ))}
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

          {step === 5 && (
            <>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  How you'll receive your earnings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs
                  defaultValue="bank"
                  onValueChange={(value) => setPaymentMethod(value)}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="bank">Bank Account</TabsTrigger>
                    <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                  </TabsList>

                  <TabsContent value="bank" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountName">Account Holder Name</Label>
                      <Input id="accountName" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input id="routingNumber" placeholder="9 digits" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input id="accountNumber" placeholder="Account number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountType">Account Type</Label>
                      <Select defaultValue="checking">
                        <SelectTrigger id="accountType">
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="checking">Checking</SelectItem>
                          <SelectItem value="savings">Savings</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="crypto" className="space-y-4 pt-4">
                    <div className="rounded-lg bg-muted p-4 text-sm">
                      <h3 className="font-medium mb-2">
                        Cryptocurrency Payments
                      </h3>
                      <p className="mb-4">
                        We can send your rental earnings in cryptocurrency.
                        Select your preferred option:
                      </p>

                      <RadioGroup defaultValue="usdc" className="space-y-3">
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="usdc" id="usdc-payment" />
                          <Label
                            htmlFor="usdc-payment"
                            className="flex items-center"
                          >
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>USDC (USD Coin)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="usdt" id="usdt-payment" />
                          <Label
                            htmlFor="usdt-payment"
                            className="flex items-center"
                          >
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>USDT (Tether)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="eth" id="eth-payment" />
                          <Label
                            htmlFor="eth-payment"
                            className="flex items-center"
                          >
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>ETH (Ethereum)</span>
                          </Label>
                        </div>
                      </RadioGroup>

                      <div className="mt-4 space-y-2">
                        <Label htmlFor="cryptoWalletAddress">
                          Your Wallet Address
                        </Label>
                        <Input id="cryptoWalletAddress" placeholder="0x..." />
                        <p className="text-xs text-muted-foreground">
                          Double-check your wallet address to ensure it's
                          correct.
                        </p>
                      </div>

                      <div className="mt-4 bg-amber-50 p-3 rounded-md text-amber-800 text-xs">
                        <p className="font-medium">Coming Soon:</p>
                        <p>
                          In the future, your vehicle and identity will be
                          managed as NFTs, and all transactions will be handled
                          on-chain for enhanced security and transparency.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Pricing Your Car</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dailyRate">Daily Rate ($)</Label>
                      <Input
                        id="dailyRate"
                        type="number"
                        placeholder="e.g., 75"
                        min="10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weeklyRate">
                        Weekly Rate ($, optional)
                      </Label>
                      <Input
                        id="weeklyRate"
                        type="number"
                        placeholder="e.g., 450"
                        min="10"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Our platform fee is 10% of the rental price. You'll receive
                    90% of what renters pay.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Tax Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">
                      Social Security Number or Tax ID
                    </Label>
                    <Input id="taxId" placeholder="XXX-XX-XXXX or XX-XXXXXXX" />
                    <p className="text-xs text-muted-foreground">
                      Required for tax reporting purposes. Your information is
                      encrypted and secure.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms-payment" />
                    <Label htmlFor="terms-payment" className="text-sm">
                      I understand that I'm responsible for reporting income
                      earned through CarShare on my tax returns.
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

        {step === 5 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              After completing registration, your account will be reviewed by
              our team. We'll notify you via email once your account and vehicle
              are approved for listing.
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
