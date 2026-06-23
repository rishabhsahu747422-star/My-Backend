import empModel from "../models/employe.model";

export const createEmployeeController = async (req, res) => {
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

export const getAllEmployeeController = async (req, res) => {
  try {
    let allEmployee = await empModel.find();

    return res.json({
      success: true,
      message: "Employee Fetched",
      data: allEmployee,
    });
  } catch (error) {
    return res.json({
      success: false,
      Message: "Internal server error",
    });
  }
};

export const updateEmployeeController = async (req, res) => {
  try {
    let { empId } = req.params;

    let updatedEmp = await empModel.findByIdAndUpdate(empId);

    return res.json({
      success: true,
      message: "Employee updated",
      data: updatedEmp,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleEmployeeController = async (req, res) => {
  try {
    let { empId } = req.params;

    let singleEmp = await empModel.find(empId);

    return res.json({
      success: true,
      message: "Employee",
      data: singleEmp,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteEmployeeController = async (req, res) => {
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
