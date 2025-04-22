import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg opacity-90">Last Updated: April 22, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                <p className="text-blue-700">
                  Please read these Terms of Service carefully before using the
                  CarRent PH platform. By accessing or using our service, you
                  agree to be bound by these terms.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to CarRent PH, a peer-to-peer car rental platform
                operating in the Philippines. These Terms of Service ("Terms")
                govern your access to and use of the CarRent PH website, mobile
                application, and services (collectively, the "Platform").
              </p>
              <p>
                CarRent PH is operated by CarRent Philippines, Inc., a
                corporation registered under the laws of the Republic of the
                Philippines with its principal office at 123 Bonifacio Global
                City, Taguig City, Metro Manila ("we," "us," or "our").
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                2. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Platform, you agree to be bound by
                these Terms and our Privacy Policy. If you do not agree to these
                Terms, you may not access or use the Platform.
              </p>
              <p>
                You represent and warrant that you are at least 18 years of age
                and possess the legal authority to enter into these Terms and to
                use the Platform in accordance with these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                3. Compliance with Philippine Laws
              </h2>
              <p>
                The Platform operates in compliance with applicable Philippine
                laws and regulations, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Republic Act No. 10173 (Data Privacy Act of 2012)</li>
                <li>Republic Act No. 7394 (Consumer Act of the Philippines)</li>
                <li>Republic Act No. 8792 (Electronic Commerce Act of 2000)</li>
                <li>Republic Act No. 10909 (No Shortchanging Act)</li>
                <li>
                  Land Transportation and Traffic Code (Republic Act No. 4136)
                </li>
                <li>
                  Relevant regulations from the Land Transportation Office (LTO)
                  and Land Transportation Franchising and Regulatory Board
                  (LTFRB)
                </li>
              </ul>
              <p>
                Users of the Platform must comply with all applicable laws and
                regulations when using our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. User Accounts</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                4.1 Registration
              </h3>
              <p>
                To use certain features of the Platform, you must register for
                an account. You agree to provide accurate, current, and complete
                information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                4.2 Account Security
              </h3>
              <p>
                You are responsible for safeguarding your password and for all
                activities that occur under your account. You agree to notify us
                immediately of any unauthorized use of your account or any other
                breach of security.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                4.3 KYC Requirements
              </h3>
              <p>
                In compliance with Philippine regulations, we require users to
                complete a Know Your Customer (KYC) verification process. This
                may include providing:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Valid government-issued ID (e.g., Philippine driver's license,
                  passport, UMID)
                </li>
                <li>Proof of address (e.g., utility bill, bank statement)</li>
                <li>Facial verification</li>
                <li>Additional documentation as required</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                5. Car Rental Terms
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                5.1 For Renters
              </h3>
              <p>As a renter, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Possess a valid Philippine driver's license or international
                  driving permit
                </li>
                <li>
                  Be at least 21 years of age (or as specified by the car owner)
                </li>
                <li>
                  Use the vehicle only for lawful purposes and in accordance
                  with the rental agreement
                </li>
                <li>
                  Return the vehicle in the same condition as received, except
                  for normal wear and tear
                </li>
                <li>
                  Pay all rental fees, security deposits, and any additional
                  charges as agreed
                </li>
                <li>
                  Comply with all traffic laws and regulations while operating
                  the vehicle
                </li>
                <li>
                  Not sublet or allow unauthorized drivers to operate the
                  vehicle
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                5.2 For Car Owners
              </h3>
              <p>As a car owner, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate information about your vehicle</li>
                <li>
                  Ensure your vehicle is legally registered with the LTO and has
                  valid comprehensive insurance
                </li>
                <li>Maintain your vehicle in safe and roadworthy condition</li>
                <li>
                  Provide all necessary documentation and equipment required by
                  Philippine law
                </li>
                <li>
                  Honor all confirmed bookings unless exceptional circumstances
                  arise
                </li>
                <li>
                  Comply with all tax obligations related to income earned
                  through the Platform
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                5.3 Rental Agreement
              </h3>
              <p>
                Each rental transaction is governed by a Rental Agreement
                between the renter and car owner. The Rental Agreement is a
                legally binding contract under Philippine law and includes
                specific terms regarding:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Rental duration and pricing</li>
                <li>Vehicle pickup and return procedures</li>
                <li>Fuel policy</li>
                <li>Mileage limitations (if any)</li>
                <li>Insurance coverage and liability</li>
                <li>Damage reporting and claims process</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                6. Payments and Fees
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                6.1 Payment Methods
              </h3>
              <p>We accept various payment methods including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Credit and debit cards</li>
                <li>Philippine e-wallets (GCash, Maya, etc.)</li>
                <li>Bank transfers</li>
                <li>Cryptocurrency (for selected transactions)</li>
              </ul>
              <p>
                All payments are processed in Philippine Pesos (PHP) unless
                otherwise specified.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                6.2 Service Fees
              </h3>
              <p>
                CarRent PH charges service fees for facilitating transactions on
                the Platform. These fees are clearly displayed before booking
                confirmation and may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Platform fee (percentage of the rental amount)</li>
                <li>Processing fee for payment transactions</li>
                <li>Insurance and protection fees</li>
                <li>Additional service fees for premium features</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Taxes</h3>
              <p>
                All applicable taxes, including Value Added Tax (VAT), are
                either included in the displayed prices or clearly indicated
                before payment. Car owners are responsible for reporting and
                remitting any income taxes related to their earnings on the
                Platform in accordance with Philippine tax laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                7. Insurance and Liability
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                7.1 Insurance Coverage
              </h3>
              <p>
                All vehicles listed on the Platform must have valid
                comprehensive insurance coverage in accordance with Philippine
                law. CarRent PH offers additional protection plans that may
                cover:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Collision damage</li>
                <li>Third-party liability</li>
                <li>Personal accident insurance</li>
                <li>Theft protection</li>
              </ul>
              <p>
                The specific coverage details are provided during the booking
                process and in the Rental Agreement.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                7.2 Damage Claims
              </h3>
              <p>In the event of damage to a vehicle:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  The incident must be reported immediately through the Platform
                </li>
                <li>Both parties must complete the damage reporting process</li>
                <li>
                  Claims will be processed according to the terms of the
                  applicable insurance policy
                </li>
                <li>
                  Renters may be responsible for the deductible amount as
                  specified in the Rental Agreement
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                8. Cancellation and Refund Policy
              </h2>
              <p>
                Our cancellation and refund policy varies based on the timing of
                cancellation and the specific rental:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Cancellations made 72+ hours before pickup: Full refund minus
                  processing fees
                </li>
                <li>
                  Cancellations made 24-72 hours before pickup: 50% refund
                </li>
                <li>
                  Cancellations made less than 24 hours before pickup: No refund
                </li>
                <li>
                  Special circumstances (natural disasters, emergencies) will be
                  evaluated on a case-by-case basis
                </li>
              </ul>
              <p>
                Car owners have their own cancellation policies which are
                displayed on their listings. Repeated cancellations by either
                party may result in penalties or account restrictions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                9. Prohibited Activities
              </h2>
              <p>
                The following activities are strictly prohibited on the
                Platform:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Using vehicles for illegal purposes</li>
                <li>Subletting or transferring rental agreements</li>
                <li>Providing false or misleading information</li>
                <li>Manipulating ratings or reviews</li>
                <li>Circumventing the Platform to avoid fees</li>
                <li>
                  Discriminating against users based on protected
                  characteristics
                </li>
                <li>Engaging in any activity that violates Philippine law</li>
              </ul>
              <p>
                Violations may result in immediate termination of your account
                and potential legal action.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                10. Intellectual Property
              </h2>
              <p>
                All content on the Platform, including but not limited to text,
                graphics, logos, icons, images, audio clips, digital downloads,
                and software, is the property of CarRent PH or its content
                suppliers and is protected by Philippine and international
                copyright laws.
              </p>
              <p>
                You may not use, reproduce, distribute, modify, or create
                derivative works from any content from the Platform without our
                express written permission.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                11. Dispute Resolution
              </h2>
              <p>In the event of a dispute between users:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Parties should first attempt to resolve the issue directly
                  through the Platform's messaging system
                </li>
                <li>
                  If unresolved, either party may request mediation through our
                  customer support
                </li>
                <li>
                  For formal disputes, we follow a structured resolution process
                  in accordance with Philippine law
                </li>
                <li>
                  Any legal proceedings shall be filed in the appropriate courts
                  in Metro Manila, Philippines
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                12. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, CarRent PH shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use or inability to use the Platform</li>
                <li>
                  Any unauthorized access to or use of our servers and/or any
                  personal information stored therein
                </li>
                <li>
                  Any interruption or cessation of transmission to or from the
                  Platform
                </li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be
                  transmitted to or through the Platform
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                13. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. If we
                make material changes, we will notify you through the Platform
                or by email. Your continued use of the Platform after such
                modifications constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                14. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                CarRent Philippines, Inc.
                <br />
                123 Bonifacio Global City
                <br />
                Taguig City, Metro Manila
                <br />
                Philippines 1634
                <br />
                Email: legal@carrentph.com
                <br />
                Phone: (02) 8123-4567
              </p>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="mb-6">
                  By using the CarRent PH platform, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms of
                  Service.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/signup">Create Account</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">Privacy Policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
