import SectionDivider from "../components/SectionDivider";

const ARTISANS = [
  {
    name: "Ismail-bhai Khatri",
    title: "Master Block Printer · 10th generation",
    img: "https://images.unsplash.com/photo-1761808070278-dd73772be230?crop=entropy&cs=srgb&fm=jpg&w=1200",
    quote: "My grandfather's blocks still print my cloth. The wood remembers what the hands forget.",
    bio: "Trained under his father from the age of seven, Ismail-bhai is one of the senior-most printers in Ajrakhpur. His hand is unmistakable in the precision of the eight-petalled rosette.",
  },
  {
    name: "Sufiyan Khatri",
    title: "Natural Dyer & Indigo Vat Keeper",
    img: "https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=1200",
    quote: "The vat is alive. You feed it, you wait, and one morning it is ready to give you blue.",
    bio: "Sufiyan tends the fermented indigo vats — the heart of any Ajrakh workshop. He reads colour the way others read poetry.",
  },
  {
    name: "Razia-ben",
    title: "Mordanting & Finishing",
    img: "https://images.pexels.com/photos/4566670/pexels-photo-4566670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    quote: "Cloth is patient. It accepts what you give it and remembers everything.",
    bio: "Razia-ben oversees the myrobalan mordant and final wash — the steps that lock pigment into fibre and give Ajrakh its decades-long lifespan.",
  },
];

export default function Artisans() {
  return (
    <div className="ajrakh-bg" data-testid="artisans-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">The Human Thread</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">Artisans of Kutch</h1>
        <p className="text-mutedink leading-relaxed text-lg italic">
          Behind every piece — a name, a lineage, a rhythm of hands that has not changed in centuries.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-32" data-testid="artisans-list">
        {ARTISANS.map((a, i) => (
          <div
            key={a.name}
            className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 ? "lg:flex-row-reverse" : ""}`}
            data-testid={`artisan-${i}`}
          >
            <div className={`overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={a.img} alt={a.name} className="w-full h-[600px] object-cover transition-transform duration-[1.6s] hover:scale-105" />
            </div>
            <div className={i % 2 ? "lg:order-1" : ""}>
              <p className="eyebrow mb-4">{a.title}</p>
              <h2 className="serif-title text-4xl sm:text-5xl text-indigo mb-6">{a.name}</h2>
              <blockquote className="serif-title italic text-2xl text-madder border-l-2 border-ochre pl-5 mb-6">
                "{a.quote}"
              </blockquote>
              <p className="text-mutedink leading-relaxed">{a.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
