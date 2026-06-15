import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = await resend.emails.send({
      from: "Masáže Michelle <rezervace@masazemichelle.cz>",
      to: "rezervace@masazemichelle.cz",
      subject: "Nová rezervace - Masáže Michelle",
      html: `
        <h2>Nová rezervace</h2>

        <p><strong>Jméno:</strong> ${body.name} ${body.surname}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Služba:</strong> ${body.service}</p>
        <p><strong>Datum:</strong> ${body.reservation_date}</p>
        <p><strong>Čas:</strong> ${body.reservation_time}</p>
        <p><strong>Poznámka:</strong> ${body.note || "-"}</p>
      `,
    });
await resend.emails.send({
  from: "Masáže Michelle <rezervace@masazemichelle.cz>",
  to: "body.email",
  subject: "Potvrzení rezervace - Masáže Michelle",
  html: `
    <h2>Děkujeme za rezervaci ❤️</h2>

    <p>Dobrý den ${body.name},</p>

    <p>Vaše rezervace byla úspěšně přijata.</p>

    <p><strong>Služba:</strong> ${body.service}</p>
    <p><strong>Datum:</strong> ${body.reservation_date}</p>
    <p><strong>Čas:</strong> ${body.reservation_time}</p>

    <p>V případě potřeby Vás budeme kontaktovat.</p>

    <p>Masáže Michelle</p>
  `,
});
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}