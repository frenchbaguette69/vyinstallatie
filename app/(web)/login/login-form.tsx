"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Check for error in URL params (from NextAuth redirect)
  const error = searchParams.get("error")

  // Show error toast if there's an error in URL
  useEffect(() => {
    if (error) {
      if (error === "CredentialsSignin") {
        toast.error("Email of wachtwoord onjuist")
      } else {
        toast.error("Er is een fout opgetreden bij het inloggen")
      }
      // Clean URL without error parameter
      router.replace("/login")
    }
  }, [error, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error("Email of wachtwoord onjuist")
      } else if (result?.ok) {
        toast.success("Succesvol ingelogd")
        router.push("/admin")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Er is een fout opgetreden")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-96 py-32 flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              placeholder="uwmailadres@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Wachtwoord</label>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3" disabled={loading}>
            {loading ? "Bezig met inloggen..." : "Inloggen"}
          </Button>
        </form>
      </div>
    </div>
  )
}
