import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getSession } from "next-auth/react";

export const authenticate = async () => {
  const session = await getServerSession(options);

  if (!session) {
    const error:any = new Error();
    error.statusCode = 401; // Unauthorized status code
    throw error;
  }

  return session;
};


export const authenticateClient = async () => {

  const session = await getSession();


  if (!session) {
    window.location.href = '/signin'
  }

  return session;
};
