import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/lib/auth"

// Middleware function
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  // Apply authentication check only to paths not starting with '/api'
  if (!pathname.startsWith('/api')) {
    const session = await auth();

    if (!session?.user) {
      // Redirect to /signin if not authenticated
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }

  return NextResponse.next();
}

// Define the matcher to include the routes you want to apply the middleware to
export const config = {
  matcher: ['/', '/create-post', '/api/post'],
}
