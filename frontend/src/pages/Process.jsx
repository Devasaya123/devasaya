import SectionDivider from "../components/SectionDivider";

const STEPS = [
  { n: "01", t: "Saaj — The First Wash", d: "Raw cloth is washed repeatedly in the river to remove starch, oil and impurities. The fibre learns to drink." },
  { n: "02", t: "Kasanu — The Mordant", d: "Soaked in a bath of camel dung, soda ash and seed oil. This step softens the cloth and prepares it to receive colour." },
  { n: "03", t: "Harde — Myrobalan", d: "Treated with harde (myrobalan) to set the mordant. The cloth turns a soft pale yellow." },
  { n: "04", t: "Kat — Resist Printing I", d: "Outline blocks are printed with a paste of clay, gum and lime — the first resist that protects whites from dye." },
  { n: "05", t: "Kariyanu — Black Outline", d: "A second resist of iron filings and jaggery prints in deep black, defining motif geometry." },
  { n: "06", t: "Gachh — Wax Resist", d: "Hot wax-paste resist preserves areas to remain undyed in subsequent vats." },
  { n: "07", t: "Rang — First Indigo Dip", d: "The cloth descends into the fermented indigo vat. It emerges green and oxidises in the air to deep blue." },
  { n: "08", t: "Vichharnu — River Wash", d: "Dipped, rinsed, and laid flat in the river — the resist paste is gently coaxed away by flowing water." },
  { n: "09", t: "Rangrez — Madder Pot", d: "Boiled with madder root, alizarin and alum. The pre-printed mordant lifts deep red wherever the resist failed." },
  { n: "10", t: "Tapai — Sun Drying", d: "Laid flat under the Kutch sun. The desert light deepens and fixes the pigment." },
  { n: "11", t: "Wash & Repeat", d: "The cloth is rewashed, reprinted with new resists, and dyed again — sometimes three or four times more." },
  { n: "12", t: "Mina — Detail Printing", d: "Smaller infill blocks add the final layers of intricate detail." },
  { n: "13", t: "Final Indigo", d: "A last visit to the indigo vat — the deepest blue is reserved for the end." },
  { n: "14", t: "Final Madder", d: "A final madder bath lifts the warm tones to their fullest saturation." },
  { n: "15", t: "Khatu — Final Wash", d: "The cloth is washed of all remaining resist and impurities. The pattern emerges, fully revealed." },
  { n: "16", t: "Tapai — The Final Sun", d: "Dried one last time under open sky. Three weeks have passed. The cloth is ready." },
];

export default function Process() {
  return (
    <div className="ajrakh-pattern" data-testid="process-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">Sixteen Stages · Three Weeks</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">The Craftsmanship Journey</h1>
        <p className="text-mutedink leading-relaxed text-lg italic">
          From raw cloth to heirloom — a step-by-step meditation on patience.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24" data-testid="process-steps">
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-subtle pt-6" data-testid={`process-step-${s.n}`}>
              <p className="serif-title text-5xl text-ochre mb-3">{s.n}</p>
              <h3 className="serif-title text-2xl text-indigo mb-3">{s.t}</h3>
              <p className="text-mutedink text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
