import axios from "axios";
export const fetchDepartments = async () => {
    let departments
  try {
    const response = await axios.get("http://localhost:5000/api/departments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.success) {
        departments = response.data.departments
    }
  } catch (error) {
    if (error.response && !error.response.data.success) {
      console.log(error.response.data.error);
    }
  }
  return departments
};
