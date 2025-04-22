import Link from "next/link";
import type { ReactNode } from "react";
import {
  BarChart,
  Car,
  FileText,
  Home,
  LogOut,
  Menu,
  Settings,
  Shield,
  User,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
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
                  <Shield className="h-6 w-6" />
                  <span className="text-lg font-semibold">LXCars Admin</span>
                  <Button variant="outline" size="icon" className="ml-auto">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-4">
                  <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/users"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Users className="h-5 w-5" />
                    Users
                  </Link>
                  <Link
                    href="/admin/cars"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Car className="h-5 w-5" />
                    Car Listings
                  </Link>
                  <Link
                    href="/admin/kyc"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <FileText className="h-5 w-5" />
                    KYC Verification
                  </Link>
                  <Link
                    href="/admin/reports"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <BarChart className="h-5 w-5" />
                    Reports
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <Settings className="h-5 w-5" />
                    Platform Settings
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
              <Shield className="h-6 w-6" />
              <span>LXCars Admin</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/admin/dashboard"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Users
            </Link>
            <Link
              href="/admin/cars"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Car Listings
            </Link>
            <Link
              href="/admin/kyc"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              KYC Verification
            </Link>
            <Link
              href="/admin/reports"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Reports
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/admin/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <Link href="/admin/settings">
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
