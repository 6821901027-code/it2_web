"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register(){

    const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
        alert("ลงทะเบียนสำเร็จ");
      router.push("/login");
    } else {
      alert("Register failed");
    }
  }

    return(
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>สมัครสมาชิก</h1>
                <input type="name" placeholder="ชื่อ-นามสกุล"
                onChange={(e) => setForm({ ...form, name: e.target.value })}/>
                <input type="Password" placeholder="รหัส"
                onChange={(e) => setForm({ ...form, password: e.target.value })}/>
                <input type="Email" placeholder="อีเมล"
                onChange={(e) => setForm({ ...form, email: e.target.value })}/>
                <a href="">
                    <button>Register</button>
                </a>
            </form>
        </div>
    )
}