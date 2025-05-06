import { sendMail } from "@/lib/send-mail";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Sending mail...")
  try {
    await sendMail({
      email: "leon.winde@gmail.com",
      subject: "testing",
      text: "testing",
    });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ ok: true });
}

//api/cron/route.ts
