import { RentalChecklist } from "@/components/rental-checklist"

export default function RenterChecklistsPage() {
  // Pre-rental checklist items for renters
  const preRentalItems = [
    {
      id: "id-check",
      label: "Verify your identity with the owner",
      description: "Ensure the owner checks your ID against your account details",
      required: true,
      checked: false,
    },
    {
      id: "walk-around",
      label: "Complete a walk-around inspection with the owner",
      description: "Check for any existing damage and document it with photos",
      required: true,
      checked: false,
    },
    {
      id: "controls",
      label: "Learn the vehicle controls",
      description: "Have the owner explain all essential controls and features",
      required: true,
      checked: false,
    },
    {
      id: "fuel-level",
      label: "Confirm and document fuel/charge level",
      description: "Note the starting fuel or battery level",
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
      id: "emergency",
      label: "Review emergency procedures",
      description: "Understand what to do in case of accident, breakdown, or other issues",
      required: true,
      checked: false,
    },
    {
      id: "insurance",
      label: "Confirm insurance coverage details",
      description: "Understand what is covered and what isn't",
      required: true,
      checked: false,
    },
    {
      id: "return-process",
      label: "Understand the return process",
      description: "Confirm return time, location, and condition requirements",
      required: true,
      checked: false,
    },
    {
      id: "special-instructions",
      label: "Note any special instructions from the owner",
      description: "Such as parking restrictions, fuel type, etc.",
      required: false,
      checked: false,
    },
    {
      id: "contact-info",
      label: "Save owner's contact information",
      description: "Ensure you can reach the owner during your rental period",
      required: false,
      checked: false,
    },
  ]

  // Post-rental checklist items for renters
  const postRentalItems = [
    {
      id: "clean-interior",
      label: "Clean the interior of the vehicle",
      description: "Remove all personal items and trash",
      required: true,
      checked: false,
    },
    {
      id: "fuel-return",
      label: "Return with agreed-upon fuel/charge level",
      description: "Refuel/recharge as specified in your agreement",
      required: true,
      checked: false,
    },
    {
      id: "damage-report",
      label: "Report any new damage",
      description: "Document and report any incidents that occurred during your rental",
      required: true,
      checked: false,
    },
    {
      id: "mileage-return",
      label: "Record the ending mileage",
      description: "Take a photo of the final odometer reading",
      required: true,
      checked: false,
    },
    {
      id: "walk-around-return",
      label: "Complete a final walk-around with the owner",
      description: "Inspect the vehicle together to confirm its condition",
      required: true,
      checked: false,
    },
    {
      id: "return-keys",
      label: "Return all keys and accessories",
      description: "Ensure you've returned everything provided at pickup",
      required: true,
      checked: false,
    },
    {
      id: "feedback",
      label: "Provide feedback on your experience",
      description: "Rate the vehicle and the owner",
      required: false,
      checked: false,
    },
    {
      id: "future-booking",
      label: "Consider booking your next trip",
      description: "Save this car to your favorites if you enjoyed it",
      required: false,
      checked: false,
    },
  ]

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rental Checklists</h1>
        <p className="text-muted-foreground mt-2">
          Complete these checklists before and after your rental to ensure a smooth experience
        </p>
      </div>

      <div className="grid gap-6">
        <RentalChecklist
          title="Pre-Rental Checklist"
          description="Complete these items before driving away with your rental"
          items={preRentalItems}
          userType="renter"
          stage="pre"
          onComplete={() => console.log("Pre-rental checklist completed")}
          onSave={(items) => console.log("Pre-rental checklist saved", items)}
        />

        <RentalChecklist
          title="Post-Rental Checklist"
          description="Complete these items before returning the vehicle"
          items={postRentalItems}
          userType="renter"
          stage="post"
          onComplete={() => console.log("Post-rental checklist completed")}
          onSave={(items) => console.log("Post-rental checklist saved", items)}
        />
      </div>
    </div>
  )
}
