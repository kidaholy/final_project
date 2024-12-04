import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-600 from-100% to-gray-100 to-0% space-y-6">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-wolkite bg-cover bg-center">
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <img className="w-28 object-fit" src="/wolkite.png" alt="logo" />
          <h2 className="font-pacifico text-5xl text-center text-white">
            Wolkite Human Resource Management System
          </h2>
          <div className="border shadow p-6 w-80 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            {/* {error && <p className="text-red-600">{error}</p>} */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full px-3 py-2 border rounded"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <label className="inline-flex items-center" htmlFor="remember">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="remember"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-teal-600">
                  Forgot password?
                </a>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
