"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GraduationCap, ShieldCheck, BookOpen, User, Users } from "lucide-react";

const roles = [["Administrator", ShieldCheck], ["Teacher", BookOpen], ["Student", User], ["Parent", Users]] as const;

export default function PortalLogin() {
  const [role, setRole] = useState<string>("Administrator");
  const [info, setInfo] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
  return (
    <div className="flex min-h-screen items-center justify-center p-5">
      <div className="card w-full max-w-md">
        <div className="mb-6 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold"><GraduationCap /></span>
          <h1 className="mt-3 text-2xl">School Portal</h1><p className="text-sm">Sign in to continue</p></div>
        <div className="mb-5 grid grid-cols-4 gap-2" role="radiogroup" aria-label="Sign in as">
          {roles.map(([r, I]) => (<button key={r} type="button" role="radio" aria-checked={role === r} onClick={() => setRole(r)}
            className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-[11px] font-medium ${role === r ? "border-navy bg-navy text-white" : "hover:bg-navy-50"}`}><I size={18} />{r}</button>))}
        </div>
        <form onSubmit={handleSubmit(() => setInfo(true))} className="space-y-4" noValidate>
          <div><label htmlFor="pe" className="mb-1 block text-sm font-medium">Email</label><input id="pe" type="email" className="input" {...register("email", { required: "Email is required" })} />
            {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email.message}</p>}</div>
          <div><label htmlFor="pp" className="mb-1 block text-sm font-medium">Password</label><input id="pp" type="password" className="input" {...register("password", { required: "Password is required" })} />
            {errors.password && <p role="alert" className="mt-1 text-xs text-red-600">{errors.password.message}</p>}</div>
          <button className="btn-navy w-full">Sign in as {role}</button>
          {info && <p role="status" className="rounded-lg bg-gold-50 p-3 text-xs">The portal is coming soon. Authentication (e.g. Auth.js with PostgreSQL) will be connected in the next phase.</p>}
        </form>
        <Link href="/" className="mt-5 block text-center text-sm font-semibold text-navy">← Back to school website</Link>
      </div>
    </div>
  );
}
