"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Package, FolderOpen, Menu, LogOut, User } from 'lucide-react'
import Image from "next/image"
import { signOut } from "next-auth/react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    name: "Diensten",
    href: "/admin/diensten",
    icon: Package,
  },
  {
    name: "Projecten",
    href: "/admin/projecten",
    icon: FolderOpen,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-gray-200">
      <div className="flex h-16 shrink-0 items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image src="/images/logo.png" alt="VY Installatie Logo" width={32} height={32} className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Vy Installaties</h1>
            <p className="text-xs text-gray-500">Beheerportaal</p>
          </div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => mobile && setSidebarOpen(false)}
                      className={classNames(
                        isActive
                          ? "bg-red-50 text-red-700 border-r-2 border-red-600"
                          : "text-gray-700 hover:text-red-700 hover:bg-red-50",
                        "group flex gap-x-3 rounded-l-md p-3 text-sm leading-6 font-semibold transition-colors",
                      )}
                    >
                      <item.icon
                        className={classNames(
                          isActive ? "text-red-600" : "text-gray-400 group-hover:text-red-600",
                          "h-5 w-5 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin</p>
              <p className="text-xs text-gray-500 truncate">Beheerder</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-gray-700 hover:text-red-700 hover:bg-red-50"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Uitloggen
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <html lang="nl">
      <body>
        <div className="min-h-screen bg-gray-50">
          {/* Mobile sidebar */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetContent side="left" className="p-0 w-72">
              <Sidebar mobile />
            </SheetContent>
          </Sheet>

          {/* Desktop sidebar */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="lg:pl-72">
            {/* Top navigation */}
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              {/* Mobile menu button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open sidebar</span>
                  </Button>
                </SheetTrigger>
              </Sheet>

              {/* Page title */}
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-900">
                  {pathname === "/admin" && "Dashboard"}
                  {pathname === "/admin/diensten" && "Diensten Beheer"}
                  {pathname === "/admin/projecten" && "Projecten Beheer"}
                </h1>
              </div>
            </div>

            {/* Page content */}
            <main className="py-8">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
