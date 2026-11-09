import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;
const emailRe = /^\S+@\S+\.\S+$/;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const d = { kind: b.kind === "admission" ? "admission" : "contact", name: clean(b.name, 120), email: clean(b.email, 160),
    phone: clean(b.phone, 40), childName: clean(b.childName, 120), level: clean(b.level, 40), message: clean(b.message) };

  if (!d.name || !emailRe.test(d.email) || d.phone.length < 7 || d.message.length < 10)
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });

  try {
    if (pool) {
      await pool.query(
        "INSERT INTO enquiries (kind, name, email, phone, child_name, level, message) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [d.kind, d.name, d.email, d.phone, d.childName || null, d.level || null, d.message]);
    } else console.log("Enquiry (no DATABASE_URL set):", d);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not save your enquiry." }, { status: 500 });
  }
}
