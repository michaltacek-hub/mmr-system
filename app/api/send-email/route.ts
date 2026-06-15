import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = await resend.emails.send({
      from: "Masáže Michelle <rezervace@masazemichelle.cz>",
      to: "rezervace@masazemichelle.cz",
      subject: `📅 Nová rezervace: ${body.name} ${body.surname}`,
      html: `
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
  to: body.email,
  subject: "📅Potvrzení rezervace - Masáže Michelle",
  html:`
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">

   <div style="text-align:center;">
  <img
    src="https://masazemichelle.cz/navbar2.png"
    alt="Masáže Michelle"
    width="180"
  />
</div>

<h2>Děkujeme za rezervaci ❤️</h2>

<p>Zdravíme Vás z Masáží Michelle,</p>

<p>
  děkujeme za Vaši rezervaci.
  Termín byl úspěšně přijat a těšíme se na Vaši návštěvu.
</p>

<p><strong>Služba:</strong> ${body.service}</p>
<p><strong>Datum:</strong> ${body.reservation_date}</p>
<p><strong>Čas:</strong> ${body.reservation_time}</p>

<p>
  Pokud bude potřeba cokoliv změnit nebo upřesnit,
  budeme Vás kontaktovat.
</p>

<p>
  S pozdravem,<br>
  Masáže Michelle
</p>

<hr>

<p style="font-size:12px;color:#666;">
  Masáže Michelle<br>
  Nádražní 564, 563 01 Lanškroun<br>
  Tel.: 735 958 842<br>
  <a href="https://masazemichelle.cz">
    www.masazemichelle.cz
  </a>
</p>

  </div>
`,
});
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}