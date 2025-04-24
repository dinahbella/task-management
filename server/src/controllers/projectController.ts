import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
