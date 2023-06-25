"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "~/utils/axios";

const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const className = "rounded border border-gray-500/40 px-2 py-1";

  const handleLogin = async () => {
    const res = await api.post("signup", { username, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    router.push("/home");
  };

  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center gap-2 transition duration-300 ease-in-out">
      <input
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="Username"
        className={className}
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
        className={className}
      />
      <button
        className="w-32 rounded bg-teal-500 px-2 py-1 text-gray-50 hover:bg-teal-400/80 active:bg-teal-600"
        onClick={handleLogin}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
