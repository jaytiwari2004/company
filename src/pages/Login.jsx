import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Show welcome immediately (hide login page)
      setShowWelcome(true);

      const res = await axios.post("https://company00.onrender.com/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("storage"));

      setTimeout(() => navigate("/"), 1500);

    } catch (err) {
      setShowWelcome(false);
      setMessage(err.response?.data?.msg || "Login Failed ❌");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login Coming Soon 🌐");
  };

  // ⭐ If welcome is active → SHOW ONLY WELCOME SCREEN (no blinking)
  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-[#0e3940] text-white flex items-center justify-center text-5xl sm:text-6xl font-bold z-50 animate-pulse">
        WELCOME 👋
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e3940] flex items-center justify-center px-4 sm:px-6 md:px-8 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#144047]">
          Compliance<span className="text-teal-500">Bro</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 text-gray-700">
          Login to Your Account
        </h2>

        {message && (
          <p className="text-center mb-4 font-semibold text-[#144047] text-sm sm:text-base">
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          
          <div>
            <label className="block font-medium mb-1 text-gray-700 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-3 sm:px-4 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md px-3 sm:px-4 py-2 sm:py-3 outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-teal-400 transition-all text-base"
          >
            Login →
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full flex items-center justify-center gap-3 border border-gray-300 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-logo-vector-png-image_12256710.png"
            alt="Google"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>

        <div className="text-center my-4 text-gray-500 text-sm sm:text-base">
          OR
        </div>

        <p className="text-center text-gray-700 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-teal-500 font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
