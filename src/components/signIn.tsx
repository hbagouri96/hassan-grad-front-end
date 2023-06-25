/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import api from "~/utils/axios";

const SignIn = () => {
  const router = useRouter();

  const [_username, setUsername] = useState("");
  const [_password, setPassword] = useState("");

  const className = "rounded border border-gray-500/40 px-2 py-1";

  const handleLogin = async () => {
    try {
      const res = await api.post<{ username: string }>("login", {
        _username,
        _password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/home");
    } catch (err) {
      console.error(err);
    }
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
        Login
      </button>
    </div>
  );
};

export default SignIn;
