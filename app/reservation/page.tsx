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
  reservation_date: "",
reservation_time: "",
  note: "",
});
  }
};
const [bookedTimes, setBookedTimes] = useState<string[]>([]);
const availableTimes = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00", 
];
useEffect(() => {
  const fetchBookedTimes = async () => {
    if (!formData.reservation_date) return;

    const { data, error } = await supabase
      .from("reservations")
      .select("reservation_time")
      .eq("reservation_date", formData.reservation_date);
    if (data) {
      const times = data.map(
        (reservation) =>
          reservation.reservation_time.slice(0, 5)
      );


      setBookedTimes(times);
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
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>
<input
  type="text"
  placeholder="Příjmení"
  value={formData.surname}
  onChange={(e) =>
    setFormData({ ...formData, surname: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>
<input
  type="email"
  placeholder="Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>
<input
  type="tel"
  placeholder="Telefon"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
/>
         <select
  value={formData.service}
  onChange={(e) =>
    setFormData({ ...formData, service: e.target.value })
  }
  className="w-full p-4 rounded-2xl bg-white border border-[#d8cfc2]"
>
<option value="">
  -- Vyberte službu --
</option>
  <option>Relaxační masáž</option>
  <option>Těhotenská masáž</option>
  <option>Maderoterapie</option>
</select>
<input
  type="date"
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
  .filter((time) => !bookedTimes.includes(time))
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