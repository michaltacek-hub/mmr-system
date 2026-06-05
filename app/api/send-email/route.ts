import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "michal.tacek@gmail.com",
      subject: "Test email z MMR systému",
      html: "<h1>Email funguje 🎉</h1>",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}