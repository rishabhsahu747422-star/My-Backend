import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  const getAllEmployee = async () => {
    let res = await axios.get("http://localhost:3000/api/employees");
    setEmployees(res.data.data);
    console.log("all employees", res);
  };

  const handleCardClick = (employee) => {
    console.log(employee);
  };

  const handleDelete = async (employee) => {
    try {
      let res = await axios.delete(
        `http://localhost:3000/api/employees/delete/${employee._id}`,
      );
      console.log(res);

      setEmployees(employees.filter((elem) => elem._id !== employee._id));
    } catch (error) {
      console.log("error in deletion", error);
    }
  };

  let handleUpdate = async (employee) => {
    setFormData(employee);
    setEditId(employee._id);
  };

  useEffect(() => {
    getAllEmployee();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        let res = await axios.patch(
          `http://localhost:3000/api/employees/update/${editId}`,
          formData,
        );

        console.log("updated", res.data);
        setEditId(null);
      } else {
        let res = await axios.post(
          "http://localhost:3000/api/employees/create",
          formData,
        );

        console.log("created", res.data);
      }

      setFormData({});
      getAllEmployee();
    } catch (error) {
      console.log("error in api call", error);
    }
  };

  return (
    <div className="p-10">
      <h1>Hello</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          width: "300px",
          flexDirection: "column",
        }}
        className="mb-10"
        action=""
      >
        <input
          onChange={handleChange}
          value={formData.employeeName || ""}
          name="employeeName"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={formData.email || ""}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          value={formData.mobile || ""}
          name="mobile"
          type="text"
          placeholder="mobile"
        />
        <input
          onChange={handleChange}
          value={formData.address || ""}
          name="address"
          type="text"
          placeholder="address"
        />
        <input
          onChange={handleChange}
          value={formData.company || ""}
          name="company"
          type="text"
          placeholder="company"
        />
        <input
          onChange={handleChange}
          value={formData.designation || ""}
          name="designation"
          type="text"
          placeholder="designation"
        />
        <input
          name="employeeId"
          onChange={handleChange}
          value={formData.employeeId || ""}
          type="text"
          placeholder="Employee id"
        />
        <button>Submit</button>
      </form>

      <div className="grid grid-cols-3 gap-4 ">
        {employees.map((val) => {
          return (
            <EmployeeCard
              employee={val}
              handleCardClick={handleCardClick}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
