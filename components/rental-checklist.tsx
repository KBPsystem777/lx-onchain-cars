"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  required: boolean;
  checked: boolean;
}

interface ChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  userType: "renter" | "owner";
  stage: "pre" | "post";
  onComplete?: () => void;
  onSave?: (items: ChecklistItem[]) => void;
}

export function RentalChecklist({
  title,
  description,
  items: initialItems,
  userType,
  stage,
  onComplete,
  onSave,
}: ChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);
  const [isOpen, setIsOpen] = useState(true);

  const handleItemChange = (id: string, checked: boolean) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked } : item
    );
    setItems(newItems);
    onSave?.(newItems);
  };

  const allRequiredChecked = items
    .filter((item) => item.required)
    .every((item) => item.checked);
  const allItemsChecked = items.every((item) => item.checked);
  const progress = Math.round(
    (items.filter((item) => item.checked).length / items.length) * 100
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Collapsible open={isOpen}>
            <CollapsibleTrigger asChild onClick={() => setIsOpen(!isOpen)}>
              <Button variant="ghost" size="sm">
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
            aria-label={`${progress}% complete`}
          ></div>
        </div>
      </CardHeader>
      <Collapsible open={isOpen}>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 space-y-0"
              >
                <Checkbox
                  id={item.id}
                  checked={item.checked}
                  onCheckedChange={(checked) =>
                    handleItemChange(item.id, checked === true)
                  }
                />
                <div className="space-y-1 leading-none">
                  <label
                    htmlFor={item.id}
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                      item.required
                        ? "after:content-['*'] after:ml-0.5 after:text-red-500"
                        : ""
                    }`}
                  >
                    {item.label}
                  </label>
                  {item.description && (
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {!allRequiredChecked && (
              <div className="flex items-start space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-md w-full">
                <Info className="h-5 w-5 flex-shrink-0" />
                <p>
                  Please complete all required items marked with an asterisk (*)
                  before proceeding.
                </p>
              </div>
            )}
            <Button
              className="w-full"
              disabled={!allRequiredChecked}
              onClick={onComplete}
              variant={
                allItemsChecked
                  ? "default"
                  : allRequiredChecked
                  ? "outline"
                  : "secondary"
              }
            >
              {allItemsChecked ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Mark as Complete
                </>
              ) : allRequiredChecked ? (
                "Complete Required Items Only"
              ) : (
                "Complete Required Items"
              )}
            </Button>
          </CardFooter>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
