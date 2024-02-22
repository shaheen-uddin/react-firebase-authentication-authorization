import React, { useState } from "react";
import { sendPasswordReset } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-xl mx-auto  p-2 h-screen flex justify-center items-start">
      <form className="w-full mt-8 space-y-2 border border-gray-200 p-16 rounded-lg shadow-md ">
        <h1 className="text-3xl my-4 font-semibold text-sky-400 text-center">
          Reset your email
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

        <div className="flex justify-start items-center mb-8">
          <button
            className="border border-slate-400 rounded-md px-3 py-0.5 w-full text-xl bg-sky-400 hover:bg-sky-500 text-white"
            type="submit"
            onClick={() => sendPasswordReset(email)}
          >
            Reset password.
          </button>
        </div>
      </form>
    </div>
  );
}
