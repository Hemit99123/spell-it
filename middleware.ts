import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/lib/auth"

// Middleware function
export const middleware = async (request: NextRequest) => {
  // Check for authentication on specific routes
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ success: false, error: "Not authenticated", redirect_url: "/signin" }, { status: 401 });
  } 
  
  return NextResponse.next();
}

// Define the matcher to include the routes you want to apply the middleware to
export const config = {
  matcher: ['/', '/create-post', '/api/post'],
}
