import SectionDivider from "../components/SectionDivider";
import { Leaf, Droplets, HandHeart, Recycle } from "lucide-react";

const VALUES = [
  { icon: Leaf, t: "Natural Dyes Only", d: "Indigo, madder root, pomegranate rind, turmeric, iron filings — every pigment we use comes from the earth and returns to it." },
  { icon: Droplets, t: "Water-Conscious", d: "Wastewater is filtered through reed beds before it returns to the soil. No chemical effluent leaves our workshop." },
  { icon: HandHeart, t: "Fair Wages", d: "Our artisans set their own pace and price. We pay above the regional average and ensure year-round work." },
  { icon: Recycle, t: "Made to Outlast", d: "An Ajrakh saree, well kept, will outlive its owner. Slow fashion is a refusal of waste." },
];

export default function Sustainability() {
  return (
    <div className="ajrakh-pattern" data-testid="sustainability-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">Sustainability & Values</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">A quieter kind of luxury</h1>
        <p className="text-mutedink leading-relaxed text-lg italic">
          We believe the most radical thing a brand can do today is slow down.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 pb-16" data-testid="values-grid">
        {VALUES.map((v) => (
          <div key={v.t} className="border border-subtle p-10 bg-ivory/60" data-testid={`value-${v.t.toLowerCase().replace(/\s+/g, "-")}`}>
            <v.icon className="text-madder mb-6" size={28} strokeWidth={1.2} />
            <h3 className="serif-title text-3xl text-indigo mb-4">{v.t}</h3>
            <p className="text-mutedink leading-relaxed">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <blockquote className="serif-title italic text-3xl sm:text-4xl text-indigo leading-snug">
          "We do not chase trends — we tend to a tradition."
        </blockquote>
      </section>
    </div>
  );
}
