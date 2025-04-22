import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
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
                  This Privacy Policy explains how LXCars PH collects, uses, and
                  protects your personal information in accordance with the Data
                  Privacy Act of 2012 (Republic Act No. 10173) and other
                  applicable Philippine laws.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                LXCars PH ("we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy describes how we collect, use,
                store, and disclose your personal information when you use our
                website, mobile application, and services (collectively, the
                "Platform").
              </p>
              <p>
                By accessing or using our Platform, you consent to the
                collection, use, and disclosure of your personal information as
                described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                2. Data Privacy Act Compliance
              </h2>
              <p>
                We comply with the Data Privacy Act of 2012 (DPA) of the
                Philippines and its Implementing Rules and Regulations. We have
                implemented appropriate organizational, physical, and technical
                security measures to protect your personal information.
              </p>
              <p>
                LXCars Philippines, Inc. is registered with the National Privacy
                Commission (NPC) as a personal information controller and
                processor.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                3. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.1 Personal Information
              </h3>
              <p>We collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Identity Information: Full name, date of birth, gender,
                  nationality, profile photo
                </li>
                <li>
                  Contact Information: Email address, phone number, residential
                  address
                </li>
                <li>
                  Government-Issued IDs: Driver's license, passport, or other
                  identification documents
                </li>
                <li>
                  Payment Information: Credit/debit card details, bank account
                  information, e-wallet information
                </li>
                <li>
                  Vehicle Information (for car owners): Vehicle registration,
                  insurance details, photos of the vehicle
                </li>
                <li>
                  Driving History: Driving record, previous accidents or
                  violations
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.2 Usage Information
              </h3>
              <p>
                We automatically collect certain information when you use our
                Platform:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Device Information: IP address, device type, operating system,
                  browser type
                </li>
                <li>
                  Log Data: Pages visited, time spent on pages, referring
                  website addresses
                </li>
                <li>Location Data: GPS information (with your consent)</li>
                <li>Transaction Data: Rental history, payments, reviews</li>
                <li>
                  Communication Data: Messages exchanged with other users or our
                  customer support
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                4. How We Use Your Information
              </h2>
              <p>
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To verify your identity and create your account</li>
                <li>To facilitate car rental transactions between users</li>
                <li>To process payments and manage billing</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>
                  To send important notifications about your account or rentals
                </li>
                <li>To improve our Platform and develop new features</li>
                <li>
                  To ensure the safety and security of our users and vehicles
                </li>
                <li>To comply with legal obligations and resolve disputes</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                5. Legal Basis for Processing
              </h2>
              <p>
                Under the Data Privacy Act, we process your personal information
                based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Contract: Processing necessary for the performance of our
                  contract with you
                </li>
                <li>Consent: Processing based on your explicit consent</li>
                <li>
                  Legitimate Interests: Processing necessary for our legitimate
                  business interests
                </li>
                <li>
                  Legal Obligation: Processing necessary to comply with our
                  legal obligations
                </li>
                <li>
                  Vital Interests: Processing necessary to protect your vital
                  interests or those of another person
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                6. Information Sharing and Disclosure
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                6.1 Sharing Between Users
              </h3>
              <p>
                To facilitate rentals, we share certain information between
                renters and car owners:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Names and profile photos</li>
                <li>Contact information (once a booking is confirmed)</li>
                <li>Vehicle details and location</li>
                <li>Rental history and ratings</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                6.2 Third-Party Service Providers
              </h3>
              <p>
                We may share your information with third-party service providers
                who help us operate our Platform:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment processors (e.g., PayMaya, GCash, banks)</li>
                <li>Identity verification services</li>
                <li>Cloud storage providers</li>
                <li>Customer support services</li>
                <li>Marketing and analytics providers</li>
                <li>Insurance partners</li>
              </ul>
              <p>
                These service providers are contractually obligated to protect
                your information and may only use it for the specific services
                they provide to us.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                6.3 Legal Requirements
              </h3>
              <p>
                We may disclose your information if required by law, regulation,
                legal process, or governmental request, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  In response to a court order, subpoena, or search warrant
                </li>
                <li>To law enforcement authorities or government agencies</li>
                <li>
                  To protect our rights, property, or safety, or that of our
                  users or others
                </li>
                <li>
                  To investigate potential violations of our Terms of Service
                </li>
                <li>To address fraud, security, or technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. The
                criteria used to determine our retention periods include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The duration of your account with us</li>
                <li>Legal obligations to retain data for certain periods</li>
                <li>Pending or potential legal claims</li>
                <li>Guidelines issued by the National Privacy Commission</li>
              </ul>
              <p>
                When we no longer need your personal information, we will
                securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                8. Your Data Privacy Rights
              </h2>
              <p>Under the Data Privacy Act, you have the following rights:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Right to Information:</strong> You have the right to
                  be informed about how we process your personal information.
                </li>
                <li>
                  <strong>Right to Access:</strong> You have the right to
                  request access to your personal information that we hold.
                </li>
                <li>
                  <strong>Right to Correction:</strong> You have the right to
                  correct inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong>Right to Erasure or Blocking:</strong> You have the
                  right to request the deletion or blocking of your personal
                  information.
                </li>
                <li>
                  <strong>Right to Object:</strong> You have the right to object
                  to the processing of your personal information.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You have the right
                  to obtain and reuse your personal information for your own
                  purposes.
                </li>
                <li>
                  <strong>Right to Damages:</strong> You have the right to be
                  indemnified for damages sustained due to inaccurate,
                  incomplete, outdated, false, unlawfully obtained, or
                  unauthorized use of your personal information.
                </li>
                <li>
                  <strong>Right to File a Complaint:</strong> You have the right
                  to file a complaint with the National Privacy Commission.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact our Data Protection
                Officer using the contact information provided at the end of
                this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Data Security</h2>
              <p>
                We implement appropriate technical, organizational, and physical
                security measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction.
                These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data privacy and security</li>
                <li>Physical security measures at our facilities</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                While we strive to protect your personal information, no method
                of transmission over the Internet or electronic storage is 100%
                secure. We cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                10. Cookies and Similar Technologies
              </h2>
              <p>
                We use cookies and similar technologies to enhance your
                experience on our Platform. Cookies are small text files that
                are stored on your device when you visit our website.
              </p>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the
                  operation of our Platform
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Allow us to
                  recognize and count visitors and analyze how users navigate
                  our Platform
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Enable us to
                  personalize content and remember your preferences
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Record your visit to our
                  Platform, the pages you visit, and the links you follow
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. However,
                disabling certain cookies may limit your ability to use some
                features of our Platform.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                11. Children's Privacy
              </h2>
              <p>
                Our Platform is not intended for children under 18 years of age.
                We do not knowingly collect personal information from children.
                If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us, and we
                will delete such information from our records.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                12. Third-Party Links
              </h2>
              <p>
                Our Platform may contain links to third-party websites or
                services that are not owned or controlled by LXCars PH. We have
                no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites or
                services. We encourage you to review the privacy policies of
                these third parties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                13. International Data Transfers
              </h2>
              <p>
                While we primarily store and process your personal information
                in the Philippines, we may transfer your information to service
                providers located in other countries. When we transfer your
                personal information outside the Philippines, we ensure that
                adequate safeguards are in place to protect your information in
                accordance with the Data Privacy Act.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                14. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated Privacy Policy on our Platform or by
                sending you an email. The date of the latest revision will be
                indicated at the top of the Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                15. Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact our Data
                Protection Officer:
              </p>
              <p>
                Data Protection Officer
                <br />
                LXCars Philippines, Inc.
                <br />
                123 Bonifacio Global City
                <br />
                Taguig City, Metro Manila
                <br />
                Philippines 1634
                <br />
                Email: privacy@LXCarsph.com
                <br />
                Phone: (02) 8123-4567
              </p>
              <p>
                You may also file a complaint with the National Privacy
                Commission:
              </p>
              <p>
                National Privacy Commission
                <br />
                5th Floor, Delegation Building, PICC Complex
                <br />
                Roxas Boulevard, Pasay City, Metro Manila
                <br />
                Philippines 1307
                <br />
                Email: info@privacy.gov.ph
                <br />
                Website: privacy.gov.ph
              </p>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="mb-6">
                  By using the LXCars PH platform, you acknowledge that you have
                  read and understood this Privacy Policy and agree to the
                  collection, use, and disclosure of your personal information
                  as described herein.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/signup">Create Account</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/terms">Terms of Service</Link>
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
