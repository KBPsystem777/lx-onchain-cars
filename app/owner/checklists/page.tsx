import { RentalChecklist } from "@/components/rental-checklist"
import { OwnerLayout } from "@/components/owner-layout"

export default function OwnerChecklistsPage() {
  // Pre-rental checklist items for car owners
  const preRentalItems = [
    {
      id: "clean-vehicle",
      label: "Clean the vehicle inside and out",
      description: "Ensure the car is presentable and sanitized",
      required: true,
      checked: false,
    },
    {
      id: "maintenance-check",
      label: "Perform basic maintenance check",
      description: "Check oil, tire pressure, fluid levels, and lights",
      required: true,
      checked: false,
    },
    {
      id: "fuel-level",
      label: "Fill fuel tank or charge battery",
      description: "Document the starting fuel or battery level with photos",
      required: true,
      checked: false,
    },
    {
      id: "document-condition",
      label: "Document current vehicle condition",
      description: "Take detailed photos of exterior and interior",
      required: true,
      checked: false,
    },
    {
      id: "mileage",
      label: "Record the starting mileage",
      description: "Take a photo of the odometer reading",
      required: true,
      checked: false,
    },
    {
      id: "verify-renter",
      label: "Verify renter's identity",
      description: "Check ID against account information",
      required: true,
      checked: false,
    },
    {
      id: "explain-features",
      label: "Explain vehicle features and controls",
      description: "Ensure renter is comfortable operating the vehicle",
      required: true,
      checked: false,
    },
    {
      id: "review-policies",
      label: "Review rental policies and return procedures",
      description: "Discuss fuel requirements, return time, and condition expectations",
      required: true,
      checked: false,
    },
    {
      id: "provide-contact",
      label: "Provide emergency contact information",
      description: "Ensure renter knows how to reach you during the rental period",
      required: true,
      checked: false,
    },
    {
      id: "special-instructions",
      label: "Share any special instructions",
      description: "Parking restrictions, fuel preferences, etc.",
      required: false,
      checked: false,
    },
    {
      id: "accessories",
      label: "Provide necessary accessories",
      description: "Phone charger, GPS, etc. as advertised",
      required: false,
      checked: false,
    },
  ]

  // Post-rental checklist items for car owners
  const postRentalItems = [
    {
      id: "inspect-exterior",
      label: "Inspect exterior for new damage",
      description: "Compare to pre-rental photos and document any changes",
      required: true,
      checked: false,
    },
    {
      id: "inspect-interior",
      label: "Inspect interior condition",
      description: "Check for cleanliness and damage",
      required: true,
      checked: false,
    },
    {
      id: "check-fuel",
      label: "Verify fuel/charge level",
      description: "Confirm it matches the agreed-upon return level",
      required: true,
      checked: false,
    },
    {
      id: "check-mileage",
      label: "Record ending mileage",
      description: "Verify against rental agreement limits",
      required: true,
      checked: false,
    },
    {
      id: "collect-keys",
      label: "Collect all keys and accessories",
      description: "Ensure everything provided has been returned",
      required: true,
      checked: false,
    },
    {
      id: "document-condition-return",
      label: "Document vehicle condition at return",
      description: "Take detailed photos of exterior and interior",
      required: true,
      checked: false,
    },
    {
      id: "file-damage-claim",
      label: "File damage claim if necessary",
      description: "Submit within 24 hours if damage is discovered",
      required: false,
      checked: false,
    },
    {
      id: "rate-renter",
      label: "Rate and review the renter",
      description: "Provide feedback on their rental experience",
      required: false,
      checked: false,
    },
    {
      id: "maintenance-update",
      label: "Update maintenance records",
      description: "Record new mileage and schedule any needed service",
      required: false,
      checked: false,
    },
    {
      id: "prepare-next",
      label: "Prepare vehicle for next rental",
      description: "Clean, refuel, and address any issues",
      required: false,
      checked: false,
    },
  ]

  return (
    <OwnerLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Owner Checklists</h1>
          <p className="text-muted-foreground mt-2">
            Complete these checklists before and after each rental to ensure a smooth experience and protect your
            vehicle
          </p>
        </div>

        <div className="grid gap-6">
          <RentalChecklist
            title="Pre-Rental Handover Checklist"
            description="Complete these items before handing over your vehicle to the renter"
            items={preRentalItems}
            userType="owner"
            stage="pre"
            onComplete={() => console.log("Pre-rental checklist completed")}
            onSave={(items) => console.log("Pre-rental checklist saved", items)}
          />

          <RentalChecklist
            title="Post-Rental Inspection Checklist"
            description="Complete these items when the renter returns your vehicle"
            items={postRentalItems}
            userType="owner"
            stage="post"
            onComplete={() => console.log("Post-rental checklist completed")}
            onSave={(items) => console.log("Post-rental checklist saved", items)}
          />
        </div>
      </div>
    </OwnerLayout>
  )
}
