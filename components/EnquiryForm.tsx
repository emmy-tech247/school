"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Values = { name: string; email: string; phone: string; childName?: string; level?: string; message: string };

export default function EnquiryForm({ kind }: { kind: "admission" | "contact" }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(v: Values) {
    setStatus("idle");
    const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, kind }) });
    if (res.ok) { setStatus("ok"); reset(); } else setStatus("error");
  }
  const err = (m?: string) => m && <p role="alert" className="mt-1 text-xs text-red-600">{m}</p>;

  if (status === "ok")
    return (<div className="card flex items-start gap-3" role="status"><CheckCircle2 className="text-green-600" />
      <div><h3 className="text-lg">Thank you</h3><p className="text-sm">We have received your message and will reply within two working days.</p></div></div>);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-4">
      <div><label htmlFor="name" className="mb-1 block text-sm font-medium">Parent / guardian name</label>
        <input id="name" className="input" {...register("name", { required: "Please enter your name" })} />{err(errors.name?.message)}</div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
          <input id="email" type="email" className="input" {...register("email", { required: "Please enter your email", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" } })} />{err(errors.email?.message)}</div>
        <div><label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
          <input id="phone" type="tel" className="input" {...register("phone", { required: "Please enter a phone number", minLength: { value: 7, message: "Phone number is too short" } })} />{err(errors.phone?.message)}</div>
      </div>
      {kind === "admission" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="childName" className="mb-1 block text-sm font-medium">Child&apos;s name</label>
            <input id="childName" className="input" {...register("childName", { required: "Please enter the child's name" })} />{err(errors.childName?.message)}</div>
          <div><label htmlFor="level" className="mb-1 block text-sm font-medium">Section</label>
            <select id="level" className="input" {...register("level", { required: "Select a section" })}><option value="">Select…</option><option>Nursery</option><option>Primary</option><option>Secondary</option></select>{err(errors.level?.message)}</div>
        </div>)}
      <div><label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
        <textarea id="message" rows={4} className="input" {...register("message", { required: "Please write a message", minLength: { value: 10, message: "Message should be at least 10 characters" } })} />{err(errors.message?.message)}</div>
      {status === "error" && <p role="alert" className="text-sm text-red-600">Something went wrong. Please try again.</p>}
      <button disabled={isSubmitting} className="btn-navy w-full disabled:opacity-60">{isSubmitting ? "Sending…" : kind === "admission" ? "Send admission enquiry" : "Send message"}</button>
    </form>
  );
}
