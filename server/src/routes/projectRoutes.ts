import { Router } from "express";
import { getProjects } from "../controllers/projectController"; // fix casing

const router = Router();

router.get("/", getProjects);

export default router;
