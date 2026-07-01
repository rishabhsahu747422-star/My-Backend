import empModel from "../models/employe.model.js";

export const createEmployeController = async (req, res) => {
  try {
    let { empName, email, mobile } = req.body;

    if (!empName || !email || !mobile)
      return res.json({
        success: false,
        Message: "All fields are Required",
      });

    let employee = await empModel.create({
      empName,
      email,
      mobile,
    });
    return res.json({
      success: true,
      message: "Employee created ",
      data: employee,
    });
  } catch (error) {
    return res.json({
      success: false,
      Message: "Internal server error",
    });
  }
};

export const getAllEmployeController = async (req, res) => {
  try {
    let allEmployee = await empModel.find();

    return res.json({
      success: true,
      message: "Employee Fetched",
      data: allEmployee,
    });
  } catch (error) {
    console.log("error in all employee", error);

    return res.json({
      success: false,
      Message: "Internal server error",
    });
  }
};

export const updateEmployeController = async (req, res) => {
  try {
    let { empId } = req.params;

    let updatedEmp = await empModel.findByIdAndUpdate(
      empId,
      { empName, email, mobile },
      {
        new: true,
        runvalidators: true,
      },
    );

    return res.json({
      success: true,
      message: "Employee updated",
      data: updatedEmp,
    });
  } catch (error) {
    console.log("error in updation", error);

    return res.json({
      success: false,
      message: "Something went wrong while updation",
    });
  }
};

export const getSingleEmployeController = async (req, res) => {
  try {
    let { empId } = req.params;

    let singleEmp = await empModel.find(empId);

    return res.json({
      success: true,
      message: "Employee",
      data: singleEmp,
    });
  } catch (error) {
    console.log("error in single Emp", error);

    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteEmployeController = async (req, res) => {
  try {
    let { empId } = req.params;

    await empModel.findByIdAndDelete(empId);
    return res.json({
      success: true,
      message: "Employee deleted",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};
