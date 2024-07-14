import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "../../lib/auth";

export const GET = async (req: NextRequest) => {
  try {
    await authenticate();
    return NextResponse.json({ message: 'top secret msg' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
};
