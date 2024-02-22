import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if (loading)
    return (
      <h2 className="text-2xl font-semibold text-sky-400 max-w-2xl mx-auto pt-6">
        Loading user credentials...
      </h2>
    );
  if (error) return <h2> error occured.{error.message}</h2>;
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Sign out");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-2xl mx-auto h-screen pt-6">
      <div className="text-2xl font-semibold text-sky-400">
        Welcom, {user.email}
      </div>
      <button
        className="bg-sky-400 text-white rounded-md py-0.5 w-60 px-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
