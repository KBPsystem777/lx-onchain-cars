"use client";

import { createContext, useContext, type ReactNode } from "react";

// This interface represents the structure of car content that would come from a CMS
export interface CarContent {
  id: string;
  name: string;
  description: string;
  features: string[];
  specifications: {
    type: string;
    transmission: string;
    seats: number;
    fuelType: string;
    mileage?: number;
    year: number;
  };
  ownerNotes?: string;
  includedItems?: string[];
  images: {
    main: string;
    gallery: string[];
  };
  pricing: {
    base: number;
    markup: number;
    total: number;
  };
}

// Mock data that would come from a CMS like Strapi or Sitecore
const mockCarContent: Record<string, CarContent> = {
  "car-1": {
    id: "car-1",
    name: "Ford Everest",
    description:
      "Experience the future of driving with this Ford Everest. This all-terrain SUV combines luxury, performance, and cutting-edge technology to deliver an exceptional driving experience. With ample space for passengers and luggage, this Everest is perfect for both city commutes and adventurous road trips. The advanced all-wheel drive provides excellent handling in all weather conditions.",
    features: [
      "Autopilot",
      "15-inch Touchscreen",
      "Panoramic Glass Roof",
      "Premium Sound System",
      "Heated Seats",
      "Keyless Entry",
      "Mobile App Access",
      "Supercharger Access",
    ],
    specifications: {
      type: "Electric Sedan",
      transmission: "Automatic",
      seats: 5,
      fuelType: "Electric",
      mileage: 12450,
      year: 2022,
    },
    ownerNotes:
      "Please return the car with at least 20% charge. Superchargers are available throughout the city. No smoking in the vehicle. Pets are allowed but please use the provided seat covers.",
    includedItems: [
      "Insurance Coverage",
      "24/7 Roadside Assistance",
      "Unlimited Mileage",
      "Car Charger",
      "Phone Mount",
      "Cleaning Supplies",
      "First-time Renter Support",
      "Contactless Pickup",
    ],
    images: {
      main: "/placeholder.svg?height=500&width=800&text=Tesla+Model+3",
      gallery: [
        "/placeholder.svg?height=150&width=200&text=Image+1",
        "/placeholder.svg?height=150&width=200&text=Image+2",
        "/placeholder.svg?height=150&width=200&text=Image+3",
        "/placeholder.svg?height=150&width=200&text=Image+4",
      ],
    },
    pricing: {
      base: 70,
      markup: 5,
      total: 75,
    },
  },
  "car-2": {
    id: "car-2",
    name: "Ford Everest",
    description:
      "Enjoy luxury and performance with this BMW X5 SUV. Perfect for family trips or business travel, this vehicle offers a smooth ride and plenty of space for passengers and luggage. The powerful engine and advanced suspension system ensure excellent handling on any road.",
    features: [
      "Leather Seats",
      "Panoramic Sunroof",
      "Navigation System",
      "Bluetooth Connectivity",
      "Backup Camera",
      "Heated Seats",
      "Apple CarPlay/Android Auto",
      "Premium Sound System",
    ],
    specifications: {
      type: "SUV",
      transmission: "Automatic",
      seats: 5,
      fuelType: "Gasoline",
      mileage: 28320,
      year: 2021,
    },
    ownerNotes:
      "Please return with a full tank of premium fuel. No smoking in the vehicle. Keep all receipts for fuel purchases.",
    includedItems: [
      "Insurance Coverage",
      "24/7 Roadside Assistance",
      "GPS Navigation",
      "Phone Charger",
      "Umbrella",
      "First Aid Kit",
      "Tire Pressure Gauge",
      "Parking Pass for Downtown",
    ],
    images: {
      main: "/placeholder.svg?height=500&width=800&text=BMW+X5",
      gallery: [
        "/placeholder.svg?height=150&width=200&text=Image+1",
        "/placeholder.svg?height=150&width=200&text=Image+2",
        "/placeholder.svg?height=150&width=200&text=Image+3",
        "/placeholder.svg?height=150&width=200&text=Image+4",
      ],
    },
    pricing: {
      base: 85,
      markup: 5,
      total: 90,
    },
  },
};

// Create a context for car content
const CarContentContext = createContext<{
  getCarContent: (id: string) => CarContent | null;
  getAllCars: () => CarContent[];
}>({
  getCarContent: () => null,
  getAllCars: () => [],
});

// Provider component that would fetch from CMS in a real implementation
export function CarContentProvider({ children }: { children: ReactNode }) {
  // In a real implementation, this would fetch from Strapi, Sitecore, etc.
  const getCarContent = (id: string) => {
    return mockCarContent[id] || null;
  };

  const getAllCars = () => {
    return Object.values(mockCarContent);
  };

  return (
    <CarContentContext.Provider value={{ getCarContent, getAllCars }}>
      {children}
    </CarContentContext.Provider>
  );
}

// Hook to use car content
export function useCarContent() {
  return useContext(CarContentContext);
}
