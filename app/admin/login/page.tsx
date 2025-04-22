"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login API call
    try {
      // In a real app, this would be an API call to your authentication endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to admin dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-white p-4 md:p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/placeholder.svg?height=60&width=200"
              alt="LXCars PH Admin"
              width={200}
              height={60}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-2xl font-bold mt-4 text-gray-800">
            Admin Portal
          </h1>
          <p className="text-gray-600 mt-2">
            Secure access to LXCars PH administration
          </p>
        </div>

        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <ShieldAlert size={20} className="text-slate-600" />
              Administrator Login
            </CardTitle>
            <CardDescription>
              Authorized personnel only. All login attempts are logged.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 pt-6">
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Authentication Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@LXCarsph.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-slate-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="admin-password">Password</Label>
                  <Link
                    href="/admin/forgot-password"
                    className="text-sm text-slate-600 hover:text-slate-800"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-slate-300"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 bg-slate-50 border-t border-slate-100">
              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Log in to Admin Portal"}
              </Button>

              <p className="text-xs text-center text-slate-500">
                This is a secure system for authorized personnel only.
                Unauthorized access is prohibited and may be subject to legal
                action.
              </p>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-slate-800"
          >
            ← Return to LXCars PH Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
