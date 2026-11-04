import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "-").replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = `${escapeHtml(body.name)} ${escapeHtml(body.surname)}`;
    const email = escapeHtml(body.email);
    const phone = escapeHtml(body.phone);
    const service = escapeHtml(body.service);
    const duration = escapeHtml(body.duration);

    const days = Array.isArray(body.preferred_days)
      ? body.preferred_days.map(escapeHtml).join(", ")
      : "-";

    const times = Array.isArray(body.preferred_times)
      ? body.preferred_times.map(escapeHtml).join("<br>")
      : "-";

    const note = escapeHtml(body.note || "-").replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: "Masáže Michelle <rezervace@masazemichelle.cz>",
      to: "rezervace@masazemichelle.cz",
      subject: `Nová poptávka: ${name}`,
      html: `
        <h2>Nová poptávka termínu</h2>

        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Služba:</strong> ${service}</p>
        <p><strong>Délka:</strong> ${duration} min</p>
        <p><strong>Preferované dny:</strong> ${days}</p>
        <p><strong>Preferované časy:</strong><br>${times}</p>
        <p><strong>Poznámka:</strong><br>${note}</p>
      `,
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const customerEmail = await resend.emails.send({
      from: "Masáže Michelle <rezervace@masazemichelle.cz>",
      to: body.email,
      subject: "Přijetí poptávky – Masáže Michelle",
      html: `
        <div style="
          background:#ffffff;
          color:#333333;
          padding:20px;
          font-family:Arial,sans-serif;
        ">

          <h2 style="margin:20px 0 30px;">
            Děkujeme za vaši poptávku ❤️
          </h2>

          <p>Dobrý den,</p>

          <p>
            děkujeme za váš zájem o služby Masáže Michelle.
          </p>

          <p>
            Vaši poptávku jsme přijali. Prověříme vaše časové preference
            a co nejdříve se vám ozveme s návrhem konkrétního termínu.
          </p>

          <p>
            <strong>
              Odesláním poptávky ještě nevzniká závazná rezervace.
            </strong>
          </p>

          <div style="
            background:#f8f8f8;
            border-left:4px solid #d4af37;
            padding:15px;
            margin:25px 0;
            border-radius:6px;
          ">

            <p><strong>Služba:</strong> ${service}</p>
            <p><strong>Délka:</strong> ${duration} min</p>
            <p><strong>Preferované dny:</strong> ${days}</p>
            <p><strong>Preferované časy:</strong><br>${times}</p>

          </div>

          <p>
            S pozdravem,<br>
            <strong>Masáže Michelle</strong>
          </p>

          <hr style="
            margin:30px 0;
            border:none;
            border-top:1px solid #ddd;
          ">

          <p style="font-size:13px;color:#666;">

            Masáže Michelle<br>
            Nádražní 564, 563 01 Lanškroun<br>
            735 958 842<br>
            rezervace@masazemichelle.cz<br>

            <a href="https://www.masazemichelle.cz">
              www.masazemichelle.cz
            </a>

          </p>

        </div>
      `,
    });

    if (customerEmail.error) {
      return Response.json(
        {
          error:
            "Poptávka byla odeslána, ale potvrzovací e-mail klientovi se nepodařilo odeslat.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });

  } catch (error) {
    console.error("Chyba při odesílání poptávky:", error);

    return Response.json(
      { error: "Nepodařilo se zpracovat poptávku." },
      { status: 500 }
    );
  }
}