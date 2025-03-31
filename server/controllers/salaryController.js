import Salary from "../models/Salary.js";
const addSalary = async (req, res) => {
  try {
    const { employeeId, basicSalary, allowances, deductions, payDate } =
      req.body;
    const totalSalary =
      parseInt(basicSalary) + parseInt(allowances) - parseInt(deductions);
    const newSalary = new Salary({
      employeeId,
      basicSalary,
      allowances,
      deductions,
      netSalary: totalSalary,
      payDate,
    });

    await newSalary.save();
    return res.status(200).json({ success: true, message: "Salary added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "salary server error" });
  }
};

export { addSalary };
