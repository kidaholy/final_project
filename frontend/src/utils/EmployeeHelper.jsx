import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
    width: "70px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "200px",
  },
  {
    name: "Image",
    cell: (row) => row.profileImage,
    width: "200px",
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    width: "200px",
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    sortable: true,
    width: "200px",
  },
  {
    name: "Actions",
    selector: (row) => row.action,
    width: "300px",
  },
];

export const fetchDepartments = async () => {
  let departments;
  try {
    const response = await axios.get(`http://localhost:5000/api/departments`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.success) {
      departments = response.data.departments;
    }
  } catch (error) {
    if (error.response && !error.response.data.success) {
      console.log(error.response.data.error);
    }
  }
  return departments;
};

export const EmployeeButtons = ({ _id }) => {
  return (
    <div className="flex gap-2">
      <Link
        to={`/admin-dashboard/employees/${_id}`}
        className="px-3 py-1 bg-teal-500 text-white hover:bg-red-600"
      >
        View
      </Link>
      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-red-600">
        Edit
      </button>
      <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-red-600">
        Salary
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Leave
      </button>
    </div>
  );
};
