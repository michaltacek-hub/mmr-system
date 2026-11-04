"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

const weekdays = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
];

const timePreferences = [
  { label: "Dopoledne", value: "Dopoledne (08:00–12:00)" },
  { label: "Odpoledne", value: "Odpoledne (12:00–16:00)" },
];

const initialFormData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  service: "",
  duration: "",
  preferred_days: [] as string[],
  preferred_times: [] as string[],
  note: "",
};

export default function BookingPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const toggleSelection = (
    field: "preferred_days" | "preferred_times",
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: current[field].includes(value)
        ? current[field].filter((item) => item !== value)
        : [...current[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (formData.preferred_days.length === 0) {
      setMessage("Vyberte prosím alespoň jeden preferovaný den.");
      return;
    }

    if (formData.preferred_times.length === 0) {
      setMessage("Vyberte prosím alespoň jedno preferované časové rozmezí.");
      return;
    }

    setSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from("booking_requests")
        .insert([
          {
            ...formData,
            duration: Number(formData.duration),
          },
        ]);

      if (insertError) throw insertError;

      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        throw new Error(
          "Poptávka byla uložena, ale e-mail se nepodařilo odeslat."
        );
      }

      setFormData(initialFormData);

      setMessage(
        "Děkujeme za vaši poptávku. Preferované termíny prověříme a co nejdříve vás kontaktujeme. Odesláním poptávky ještě nevzniká závazná rezervace."
      );
    } catch (error) {
      console.error("Chyba při odesílání poptávky:", error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5efe6] text-[#2f3e34] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Poptávka termínu
        </h1>

        <p className="text-[#7b6a58] mb-12">
          Vyberte službu a své časové preference. Ozveme se vám s návrhem
          konkrétního termínu.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Jméno"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          />

          <input
            type="text"
            placeholder="Příjmení"
            required
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          />

          <input
            type="tel"
            placeholder="Telefon"
            required
            minLength={9}
            pattern="[0-9+ ]+"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          />

          <select
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({
                ...formData,
                service: e.target.value,
                duration: "",
              })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          >
            <option value="">-- Vyberte službu --</option>

            <option value="Klasická masáž">
              Klasická masáž
            </option>

            <option value="Relaxační masáž">
              Relaxační masáž
            </option>

            <option value="Těhotenská masáž - kompletní relax">
              Těhotenská masáž - kompletní relax
            </option>

            <option value="Těhotenská masáž - základní uvolnění">
              Těhotenská masáž - základní uvolnění
            </option>

            <option value="Maderoterapie">
              Maderoterapie
            </option>

            <option value="Maderoterapie a anticelulitidní zábal">
              Maderoterapie a anticelulitidní zábal
            </option>

            <option value="Anticelulitidní zábal">
              Anticelulitidní zábal
            </option>

            <option value="Masáž zad a šíje">
              Masáž zad a šíje
            </option>
          </select>

          <select
            required
            value={formData.duration}
            onChange={(e) =>
              setFormData({
                ...formData,
                duration: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          >
            <option value="">-- Vyberte délku --</option>

            {formData.service === "Klasická masáž" && (
              <option value="90">90 minut</option>
            )}

            {formData.service === "Relaxační masáž" && (
              <option value="60">60 minut</option>
            )}

            {formData.service === "Těhotenská masáž - kompletní relax" && (
              <option value="60">60 minut</option>
            )}

            {formData.service === "Těhotenská masáž - základní uvolnění" && (
              <option value="45">45 minut</option>
            )}

            {formData.service === "Maderoterapie" && (
              <>
                <option value="60">60 minut</option>
                <option value="90">90 minut</option>
              </>
            )}

            {formData.service === "Maderoterapie a anticelulitidní zábal" && (
              <option value="90">90 minut</option>
            )}

            {formData.service === "Anticelulitidní zábal" && (
              <option value="30">30 minut</option>
            )}

            {formData.service === "Masáž zad a šíje" && (
              <option value="45">45 minut</option>
            )}
          </select>

          <fieldset className="rounded-2xl bg-white border border-[#d8cfc2] p-5">
            <legend className="px-2 font-medium">
              Preferované dny
            </legend>

            <p className="text-sm text-[#7b6a58] mb-4">
              Můžete vybrat více dnů.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {weekdays.map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.preferred_days.includes(day)}
                    onChange={() =>
                      toggleSelection("preferred_days", day)
                    }
                    className="h-4 w-4 accent-[#58794B]"
                  />

                  <span>{day}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="rounded-2xl bg-white border border-[#d8cfc2] p-5">
            <legend className="px-2 font-medium">
              Preferovaný čas
            </legend>

            <p className="text-sm text-[#7b6a58] mb-4">
              Můžete vybrat jedno nebo obě rozmezí.
            </p>

            <div className="space-y-3">
              {timePreferences.map((time) => (
                <label key={time.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.preferred_times.includes(time.value)}
                    onChange={() =>
                      toggleSelection("preferred_times", time.value)
                    }
                    className="h-4 w-4 accent-[#58794B]"
                  />

                  <span>
                    {time.label} ({time.value.match(/\((.*)\)/)?.[1]})
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <textarea
            placeholder="Poznámka (nepovinné)"
            rows={5}
            value={formData.note}
            onChange={(e) =>
              setFormData({ ...formData, note: e.target.value })
            }
            className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
          />

          {message && (
            <p
              role="status"
              className="rounded-xl bg-white p-4 text-[#58794B]"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#2f3e34] text-[#f5efe6] px-8 py-4 rounded-full hover:opacity-90 transition disabled:opacity-60"
          >
            {submitting ? "Odesílám…" : "Odeslat poptávku"}
          </button>
        </form>
      </div>
    </main>
  );
}