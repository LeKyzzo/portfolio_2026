"use client";

import React, { useState } from "react";

export default function ContactFormClient({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div>
      <form onSubmit={handleSend} className="space-y-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.14em] text-white/50">Nom</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white" placeholder="Votre nom" />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.14em] text-white/50">Entreprise</label>
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white" placeholder="Nom de l'entreprise" />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.14em] text-white/50">Email</label>
          <input value={mail} onChange={(e) => setMail(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white" placeholder="vous@entreprise.com" type="email" />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.14em] text-white/50">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white" rows={4} placeholder="Parlez-moi de votre projet, contexte, délais..." />
        </div>

        <div className="flex gap-3">
          <button type="submit" className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 font-semibold text-black">Envoyer</button>
          <a href={`mailto:${email}`} className="rounded-full border border-white/15 px-4 py-2 font-semibold text-white/80 hover:border-white/30">Ouvrir la boîte mail</a>
        </div>

        <p className="text-xs text-white/60">Merci de favoriser l'envoie du mail. (Formulaire en maintenance)</p>
      </form>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-[90%] max-w-md rounded-lg bg-black/90 p-6 text-white">
            <h3 className="text-lg font-semibold">Message non envoyé</h3>
            <p className="mt-3 text-sm">Le message n'est pas envoyé automatiquement pour l'instant. Contactez‑moi par email : <a className="text-primary underline" href={`mailto:${email}`}>{email}</a></p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setOpen(false)} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">OK</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
