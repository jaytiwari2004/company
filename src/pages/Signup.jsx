import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      setMessage("Account Created Successfully ✔");

      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Signup Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#0e3940] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6 text-[#144047]">
          Compliance<span className="text-teal-500">Bro</span>
        </h1>

        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Create Your Account
        </h2>

        {/* Message */}
        {message && (
          <p className="text-center mb-4 font-semibold text-[#144047]">
            {message}
          </p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-400 transition-all"
          >
            Sign Up →
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">OR</div>

        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-500 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
