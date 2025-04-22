import Link from "next/link";
import type { ReactNode } from "react";
import {
  Calendar,
  Car,
  DollarSign,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface OwnerLayoutProps {
  children: ReactNode;
}

export function OwnerLayout({ children }: OwnerLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex items-center gap-2 border-b pb-4">
                  <Car className="h-6 w-6" />
                  <span className="text-lg font-semibold">LXCars</span>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-4">
                  <Link
                    href="/owner/dashboard"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/owner/cars"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Car className="h-5 w-5" />
                    My Cars
                  </Link>
                  <Link
                    href="/owner/bookings"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Calendar className="h-5 w-5" />
                    Bookings
                  </Link>
                  <Link
                    href="/owner/earnings"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <DollarSign className="h-5 w-5" />
                    Earnings
                  </Link>
                  <Link
                    href="/owner/messages"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Messages
                  </Link>
                  <Link
                    href="/owner/profile"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                  <Link
                    href="/owner/settings"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
                <div className="mt-auto border-t pt-4">
                  <Link
                    href="/logout"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Car className="h-6 w-6" />
              <span>LXCars</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/owner/dashboard"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Dashboard
            </Link>
            <Link
              href="/owner/cars"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              My Cars
            </Link>
            <Link
              href="/owner/bookings"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Bookings
            </Link>
            <Link
              href="/owner/earnings"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Earnings
            </Link>
            <Link
              href="/owner/messages"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Messages
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/owner/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <Link href="/owner/settings">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-12 px-4 md:px-6">{children}</div>
      </main>
    </div>
  );
}
