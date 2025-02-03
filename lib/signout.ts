"use server";

import { signOut } from "@/lib/auth";

export const handleSignOut = async () => {
    await signOut({ redirectTo: '/signin' });
}