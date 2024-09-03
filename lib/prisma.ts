import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

const prisma = new PrismaClient().$extends(withOptimize());

export default prisma
