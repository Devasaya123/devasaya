import { Link } from "react-router-dom";
import { buildWhatsAppLink } from "../lib/api";
import { Package, Palette, Scissors, Ruler, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Package,
    t: "Bulk Production",
    d: "Whether you're launching a new collection or scaling your inventory, we handle bulk stitching with consistency, quality, and timely delivery.",
  },
  {
    icon: Palette,
    t: "Custom Design Development",
    d: "From fabric selection to final silhouettes, we collaborate closely to bring your vision to life — be it kaftans, shirts, coord sets, kurtas, or bespoke designs.",
  },
  {
    icon: Scissors,
    t: "Ajrakh Print Integration",
    d: "Choose from our curated Ajrakh prints or develop exclusive patterns tailored to your brand identity.",
  },
  {
    icon: Ruler,
    t: "Size & Fit Customisation",
    d: "We offer flexible sizing options to cater to diverse customer segments, ensuring comfort and precision in every piece.",
  },
];

export default function Customisation() {
  const wa = buildWhatsAppLink(
    "Namaste Devasaya, I'd like to discuss a bulk / custom order for my brand."
  );

  return (
    <div className="ajrakh-bg" data-testid="customisation-page">
      {/* Header */}
      <header className="pt-20 pb-10 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-5">For Brands & Boutiques</p>
        <h1 className="serif-title text-5xl sm:text-6xl text-indigo mb-4 leading-[1.05]" data-testid="customisation-title">
          Bulk Stitching & Customisation
        </h1>
        <p className="serif-title italic text-2xl text-madder">
          Tailored solutions for your brand.
        </p>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-14 text-center">
        <p className="text-mutedink leading-relaxed text-[17px]">
          At <span className="serif-title text-indigo">Devasaya</span>, we go beyond ready-to-wear. We offer end-to-end
          bulk stitching and customisation services designed for brands,
          boutiques, and businesses seeking distinctive, handcrafted apparel
          rooted in authentic Ajrakh artistry.
        </p>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16" data-testid="services-grid">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">What We Offer</p>
          <h2 className="serif-title text-4xl text-indigo">An atelier, at your service</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.t}
              className="border border-subtle bg-ivory/70 p-10 hover:border-indigo/40 transition-colors duration-500"
              data-testid={`service-${s.t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
            >
              <s.icon className="text-madder mb-5" size={28} strokeWidth={1.2} />
              <h3 className="serif-title text-2xl text-indigo mb-3">{s.t}</h3>
              <p className="text-mutedink leading-relaxed text-[15px]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 mt-8" data-testid="customisation-cta">
        <div className="absolute inset-0 ajrakh-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-5">Begin Your Journey</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-indigo mb-6 leading-tight">
            Partner with Devasaya to create collections that embody quiet luxury and enduring craftsmanship.
          </h2>
          <p className="text-mutedink leading-relaxed mb-10 max-w-xl mx-auto">
            Connect with us to initiate your production.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-madder" data-testid="cta-whatsapp-btn">
              Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline inline-flex items-center gap-2" data-testid="cta-contact-btn">
              Write to us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
