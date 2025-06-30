import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  // Alleen doorgaan als user authenticated én admin email matcht
  if (!token || token.email !== process.env.ADMIN_EMAIL) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

// Configureer welke routes de middleware moet gebruiken
export const config = {
  matcher: ["/admin/:path*"],
}
