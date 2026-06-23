import express from "express";
import {
  createEmployeeController,
  deleteEmployeeController,
  getAllEmployeeController,
  getSingleEmployeeController,
  updateEmployeeController,
} from "../controller/employe.controller";

let router = express.Router();

router.post("/create", createEmployeeController);
router.post("/", getAllEmployeeController);
router.post("/update/:empId", updateEmployeeController);
router.post("/:empId", getSingleEmployeeController);
router.post("/delete", deleteEmployeeController);
