import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import { addSalary } from "../controllers/salaryController.js"

const router = express.Router()
router.post("/add", authMiddleware, addSalary)

export default router