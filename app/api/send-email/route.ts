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
  subject: "📅 Potvrzení rezervace - Masáže Michelle",
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333; line-height: 1.6;">

    <div style="text-align:center;">
      <img
        src="https://masazemichelle.cz/navbar2.png"
        alt="Masáže Michelle"
        width="180"
      />
    </div>

    <h2 style="margin-top:30px;">❤️ Děkujeme za rezervaci</h2>

    <p>Zdravíme Vás z Masáží Michelle,</p>

    <p>
      Děkujeme za Vaši rezervaci.
      Termín byl úspěšně přijat a těšíme se na Vaši návštěvu.
    </p>

    <div style="
      background:#f8f8f8;
      border-left:4px solid #d4af37;
      padding:15px;
      margin:25px 0;
      border-radius:6px;
    ">
      <p style="margin:5px 0;">
        💆 <strong>Služba:</strong> ${body.service}
      </p>

      <p style="margin:5px 0;">
        📅 <strong>Datum:</strong> ${body.reservation_date}
      </p>

      <p style="margin:5px 0;">
        🕒 <strong>Čas:</strong> ${body.reservation_time}
      </p>
    </div>

    <p>
      Pokud bude potřeba cokoliv změnit nebo upřesnit,
      budeme Vás kontaktovat.
    </p>

    <p>
      V případě dotazů nás neváhejte kontaktovat.
    </p>

    <p>
      S pozdravem,<br>
      <strong>Masáže Michelle</strong>
    </p>

    <hr style="margin:30px 0; border:none; border-top:1px solid #ddd;">

    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="vertical-align:top; padding-right:15px;">
          <img
            src="https://masazemichelle.cz/navbar2.png"
            alt="Masáže Michelle"
            width="70"
          />
        </td>

        <td style="font-size:13px; color:#666; vertical-align:top;">
          <strong style="color:#333;">Masáže Michelle</strong><br>
          📍 Nádražní 564, 563 01 Lanškroun<br>
          📞 735 958 842<br>
          ✉️ rezervace@masazemichelle.cz<br>
          🌐 <a href="https://masazemichelle.cz">www.masazemichelle.cz</a>
        </td>
      </tr>
    </table>

  </div>
`,
});
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}