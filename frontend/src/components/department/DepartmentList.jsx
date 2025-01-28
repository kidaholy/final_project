import React from 'react'

const DepartmentList = () => {
  return (
    <div>
        <h3 className="text-2xl font-bold">Department List</h3>
        <div className="mt-6">
            <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p className="font-semibold">Department Name</p>
            <p className="font-semibold">Total Employees</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4">
            <p>HR</p>
            <p>5</p>
            </div>
            <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p>Finance</p>
            <p>5</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4">
            <p>Marketing</p>
            <p>5</p>
            </div>
            <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p>Operations</p>
            <p>5</p>
            </div>
        </div>
    </div>
  )
}

export default DepartmentList