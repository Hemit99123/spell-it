import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (request: NextRequest) => {
  try {
    const session = await auth()

    const post = await prisma.post.findMany({
      where: {
        owner: session?.user?.email || 'no owner'
      },
    });
    
    return NextResponse.json(post)

  } catch (err) {
    return NextResponse.json({error: err}, {status: 500})
  }
};

export const POST = async (request: NextRequest) => {
  try {

    const session = await auth()
    const { title, content } = await request.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        owner: session?.user?.email || 'no owner',
      },
    });

    return NextResponse.json({post})

  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500})
  }
}

export const DELETE = async (request: NextRequest) => {
  try {

    const session = await auth()

    const { id } = await request.json();

    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json({error: "post does not exist in the db"})
    }

    if (post.owner !== session?.user?.email) {
      return NextResponse.json({error: "you are not the owner so you cannot delete this post. nice try !!"})
    }

    const response = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({response})
  } catch (err) {
    return NextResponse.json({error: err}, {status: 500})
  }
}
