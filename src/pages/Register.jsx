import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="max-w-xl mx-auto  p-2 h-screen flex justify-center items-start">
      <form className="w-full mt-8 space-y-2 border border-gray-200 p-16 rounded-lg shadow-md ">
        <h1 className="text-3xl my-4 font-semibold text-sky-400 text-center">
          Register
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
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        <p className="mt-4 text-right font-mono">
          Already have an account.{" "}
          <span className="text-sky-400 font-semibold">
            <NavLink to="/login">Sign in</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
