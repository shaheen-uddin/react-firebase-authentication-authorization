import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailPassword } from "../firebase";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithEmailPassword(email, password);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-xl mx-auto  p-2 h-screen flex justify-center items-start">
      <form className="w-full mt-8 space-y-2 border border-gray-200 p-16 rounded-lg shadow-md ">
        <h1 className="text-3xl my-4 font-semibold text-sky-400 text-center">
          Sign in
        </h1>
        <div className="flex flex-col justify-start">
          <label className="text-xl text-sky-400" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="border border-slate-400 px-2 rounded-md py-0.5 "
          />
        </div>
        <div className="flex justify-start flex-col">
          <label className="text-xl text-sky-400" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter a password"
            className="border border-slate-400 rounded-md px-3 py-0.5 "
          />
        </div>
        <div className="flex justify-start items-center mb-8">
          <button
            className="border border-slate-400 rounded-md px-3 py-0.5 w-full text-xl bg-sky-400 hover:bg-sky-500 text-white"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <p className=" font-mono">
            Haven't registered yet?{" "}
            <span className="text-sky-400 font-semibold">
              <NavLink to="/register">Sign up here.</NavLink>
            </span>
          </p>
          <p className=" font-mono">
            Forgot password?{" "}
            <span className="text-sky-400 font-semibold">
              <NavLink to="/reset">Reset password.</NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
