import express from "express";
import {
  createEmployeController,
  deleteEmployeController,
  getAllEmployeController,
  getSingleEmployeController,
  updateEmployeController,
} from "../controller/employe.controller.js";

let router = express.Router();

router.post("/create", createEmployeController);
router.get("/view", getAllEmployeController);
router.patch("/update/:empId", updateEmployeController);
router.get("/:empId", getSingleEmployeController);
router.delete("/delete/:empId", deleteEmployeController);

export default router;
