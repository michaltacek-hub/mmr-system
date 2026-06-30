"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
export default function BookingPage() {
const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  phone: "",
  service: "",
  duration: "",
  reservation_date: "",
reservation_time: "",
  note: "",
});
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
const { data: existingreservations, error: checkError } =
  await supabase
    .from("reservations")
    .select("*")
    .eq("reservation_date", formData.reservation_date)
    .eq(
  "reservation_time",
  `${formData.reservation_time}:00`
);

if (existingreservations && existingreservations.length > 0) {
  alert("Tento termín je již obsazen.");

  return;
}
const { error } = await supabase
  .from("reservations")
  .insert([formData]);

if (error) {
 alert(
  "Rezervaci se nepodařilo uložit. Zkuste to prosím znovu."
);
  console.log(error);
} else {
  await fetch("/api/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
    alert(
      `Rezervace pro ${formData.name} ${formData.surname} byla odeslána 🔥`
    );
    setBookedTimes([
  ...bookedTimes,
  formData.reservation_time,
]);
    setFormData({
  name: "",
  surname: "",
  email: "",
  phone: "",
  service: "",
  duration: "",
  reservation_date: "",
reservation_time: "",
  note: "",
});
  }
};
const [bookedTimes, setBookedTimes] = useState<string[]>([]);
const availableTimes = [];

for (let hour = 8; hour <= 20; hour++) {
  availableTimes.push(`${hour.toString().padStart(2, "0")}:00`);

  if (hour !== 20) {
    availableTimes.push(`${hour.toString().padStart(2, "0")}:15`);
    availableTimes.push(`${hour.toString().padStart(2, "0")}:30`);
    availableTimes.push(`${hour.toString().padStart(2, "0")}:45`);
  }
}
useEffect(() => {
  const fetchBookedTimes = async () => {
    if (!formData.reservation_date) return;

    const { data, error } = await supabase
      .from("reservations")
      .select("reservation_time, duration")
      .eq("reservation_date", formData.reservation_date);
if (data) {
  const blockedSlots: string[] = [];

  data.forEach((reservation) => {
    const startTime = reservation.reservation_time.slice(0, 5);

    const [hours, minutes] = startTime
      .split(":")
      .map(Number);

    const duration =
      Number(reservation.duration) + 15;

    const slotCount = duration / 15;

    for (let i = 0; i < slotCount; i++) {
      const slotDate = new Date();

      slotDate.setHours(hours, minutes, 0, 0);

      slotDate.setMinutes(
        slotDate.getMinutes() + i * 15
      );

      const blockedTime = `${slotDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${slotDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

      blockedSlots.push(blockedTime);
    }
  });

  setBookedTimes(blockedSlots);
}

    if (error) {
      console.log(error);
    }
  };

  fetchBookedTimes();

}, [formData.reservation_date]);
  return (
  
    <main className="min-h-screen bg-[#f5efe6] text-[#2f3e34] px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-semibold mb-6">
          Rezervace termínu
        </h1>

        <p className="text-[#7b6a58] mb-12">
          Vyberte službu a odešlete rezervační formulář.
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
  <option value="">
    -- Vyberte službu --
  </option>

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

  <option value="Maderoterapie + zábal">
    Maderoterapie + zábal
  </option>

  <option value="Zábal">
    Zábal
  </option>

  <option value="Záda + šíje">
    Záda + šíje
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
  <option value="">
    -- Vyberte délku --
  </option>

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

  {formData.service === "Maderoterapie + zábal" && (
    <option value="90">90 minut</option>
  )}

  {formData.service === "Zábal" && (
    <option value="30">30 minut</option>
  )}

  {formData.service === "Záda + šíje" && (
    <option value="45">45 minut</option>
  )}
</select>

<input
  type="date"
  required
  min={new Date().toISOString().split("T")[0]}
  value={formData.reservation_date}
  onChange={(e) =>
    setFormData({
      ...formData,
      reservation_date: e.target.value,
    })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>
<select
  required
  value={formData.reservation_time}
  onChange={(e) =>
    setFormData({
      ...formData,
      reservation_time: e.target.value,
    })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
>
  <option value="">Vyberte čas</option>

{availableTimes
  .filter((time) => {
    if (bookedTimes.includes(time)) return false;

    const [hours, minutes] = time.split(":").map(Number);

    const slotTime = new Date();
    slotTime.setHours(hours, minutes, 0, 0,);

    // +2 hodiny předstih
    const today = new Date().toISOString().split("T")[0];

    if (formData.reservation_date === today) {
      const minimumTime = new Date();
      minimumTime.setHours(minimumTime.getHours() + 2);

      if (slotTime < minimumTime) {
        return false;
      }
    }

    // kontrola konce pracovní doby
    const duration =
      Number(formData.duration || 0) + 15;

    const endTime = new Date(slotTime);
    endTime.setMinutes(
      endTime.getMinutes() + duration
    );

    const closingTime = new Date(slotTime);
    closingTime.setHours(20, 0, 0, 0);

    return endTime <= closingTime;
  })
  .map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ))}
</select>
          <textarea
  placeholder="Poznámka"
  rows={5}
  value={formData.note}
  onChange={(e) =>
    setFormData({ ...formData, note: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>

          <button
  type="submit"
  className="bg-[#2f3e34] text-[#f5efe6] px-8 py-4 rounded-full hover:opacity-90 transition"
>
  Odeslat rezervaci
</button>

        </form>

      </div>

    </main>
  );
}