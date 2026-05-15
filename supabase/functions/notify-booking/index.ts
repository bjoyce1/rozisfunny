import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(async (req) => {
  try {
    const payload = await req.json();
    const row = payload.record;

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const text = [
      "New booking inquiry from rozisfunny.com",
      "",
      `Name:        ${row.name}`,
      `Email:       ${row.email}`,
      `Event date:  ${row.event_date || "—"}`,
      `Venue/City:  ${row.venue || "—"}`,
      `Event type:  ${row.event_type || "—"}`,
      `Budget:      ${row.budget || "—"}`,
      "",
      "Message:",
      row.message,
      "",
      "—",
      `Reply directly to ${row.email}`,
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Roz Bookings <bookings@rozisfunny.com>",
        to: "funnyroz@gmail.com",
        reply_to: row.email,
        subject: `[Booking] ${row.name} — ${row.event_type || "Inquiry"}`,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ error: err }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
