import { useState } from "react";
import { submitContact, buildWhatsAppLink } from "../lib/api";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContact(form);
      toast.success("Your note has reached the atelier. We'll write back soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try WhatsApp or email.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ajrakh-bg" data-testid="contact-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">In Conversation</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">Write to us</h1>
        <p className="text-mutedink leading-relaxed italic">
          For custom orders, wholesale enquiries, press, or simply to say hello.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8" data-testid="contact-info">
          <div className="border-l-2 border-ochre pl-6">
            <p className="eyebrow mb-2 flex items-center gap-2"><Phone size={14} /> Phone</p>
            <p className="text-indigo serif-title text-2xl">+91 93408 53746</p>
          </div>
          <div className="border-l-2 border-ochre pl-6">
            <p className="eyebrow mb-2 flex items-center gap-2"><Mail size={14} /> Email</p>
            <p className="text-indigo serif-title text-2xl">devasaya.24@gmail.com</p>
          </div>
          <div className="border-l-2 border-ochre pl-6">
            <p className="eyebrow mb-2 flex items-center gap-2"><MapPin size={14} /> Atelier</p>
            <p className="text-indigo">Ajrakhpur · Kutch · Gujarat · India</p>
          </div>
          <a
            href={buildWhatsAppLink("Namaste Devasaya, I have an enquiry.")}
            target="_blank"
            rel="noreferrer"
            className="btn-madder mt-4"
            data-testid="contact-whatsapp-btn"
          >
            <MessageCircle size={16} className="mr-2" /> Message on WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 space-y-6 border border-subtle p-10 bg-ivory" data-testid="contact-form">
          <div>
            <label className="eyebrow block mb-2">Name</label>
            <input name="name" value={form.name} onChange={onChange} required className="w-full bg-transparent border-b border-indigo/30 py-3 focus:outline-none focus:border-indigo" data-testid="contact-name-input" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="eyebrow block mb-2">Email</label>
              <input name="email" type="email" value={form.email} onChange={onChange} required className="w-full bg-transparent border-b border-indigo/30 py-3 focus:outline-none focus:border-indigo" data-testid="contact-email-input" />
            </div>
            <div>
              <label className="eyebrow block mb-2">Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={onChange} className="w-full bg-transparent border-b border-indigo/30 py-3 focus:outline-none focus:border-indigo" data-testid="contact-phone-input" />
            </div>
          </div>
          <div>
            <label className="eyebrow block mb-2">Your message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows="6" className="w-full bg-transparent border-b border-indigo/30 py-3 resize-none focus:outline-none focus:border-indigo" data-testid="contact-message-input" />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50" data-testid="contact-submit-btn">
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}
