"use client";

import { useState } from "react";
import api from "~/utils/axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const className = "rounded border border-gray-500/40 px-2 py-1";

  const handleLogin = async () => {
    const res = await api.post("api/login", { username, password });
    console.log(res.data);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 transition duration-300 ease-in-out">
      <input
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="Username"
        className={className}
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="text"
        placeholder="Password"
        className={className}
      />
      <button
        className="w-32 rounded bg-teal-500 px-2 py-1 text-gray-50 hover:bg-teal-400/80 active:bg-teal-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default SignIn;
