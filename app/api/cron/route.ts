// import { sendMail } from "@/lib/send-mail";
import { NextResponse } from "next/server";

export async function GET() {
  // sendMail({
  //   email: "leon.winde@gmail.com",
  //   subject: "testing",
  //   text: "testing",
  // });
  console.log("tesint");
  return NextResponse.json({ ok: true });
}

//api/cron/route.ts