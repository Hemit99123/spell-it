import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/lib/auth"

// Middleware function
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const session = await auth();


  // Apply authentication check only to paths not starting with '/api'
  if (!pathname.startsWith('/api')) {

    if (!session?.user) {
      // Redirect to /signin if not authenticated
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  } else {
    if (!session?.user) {
      // Return a JSON error as user is in API not client side
      return NextResponse.json({message: "Not authenticated, go to /signin", error: "no-auth"})
    }
  }

  return NextResponse.next();
}

// Define the matcher to include the routes you want to apply the middleware to
export const config = {
  matcher: ['/', '/create-post', '/api/post'],
}
