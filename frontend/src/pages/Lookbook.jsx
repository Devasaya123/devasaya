import SectionDivider from "../components/SectionDivider";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1768803968260-3dab844c1476?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Saanjh — drape study no. 04" },
  { src: "https://images.unsplash.com/photo-1766043071333-5d82991da1ea?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Madder Earth — Kutch, dawn" },
  { src: "https://images.unsplash.com/photo-1768651925876-637f68cd64f6?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Twilight Indigo — atelier" },
  { src: "https://images.unsplash.com/photo-1764583473949-4645bbb6a2d0?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Indigo Sky — folded yardage" },
  { src: "https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Block & cloth" },
  { src: "https://images.pexels.com/photos/4566670/pexels-photo-4566670.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Ochre Bloom" },
  { src: "https://images.unsplash.com/photo-1761808070278-dd73772be230?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Sun-drying" },
  { src: "https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=1200", caption: "Devi Kaftan in indigo" },
];

export default function Lookbook() {
  return (
    <div className="ajrakh-bg" data-testid="lookbook-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">Lookbook · Spring/Summer</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">Worn slowly. Loved long.</h1>
        <p className="text-mutedink leading-relaxed italic">
          A visual journal of how Devasaya is lived in — across light, across season, across the rhythms of an unhurried life.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24" data-testid="lookbook-grid">
        <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[280px] gap-4">
          {IMAGES.map((img, i) => {
            const spans = [
              "col-span-2 lg:col-span-7 row-span-2",
              "col-span-2 lg:col-span-5",
              "col-span-1 lg:col-span-5",
              "col-span-1 lg:col-span-7 row-span-2",
              "col-span-2 lg:col-span-4",
              "col-span-2 lg:col-span-4",
              "col-span-1 lg:col-span-8 row-span-2",
              "col-span-1 lg:col-span-4",
            ];
            return (
              <figure key={i} className={`${spans[i]} group overflow-hidden relative bg-sand`} data-testid={`lookbook-img-${i}`}>
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-deep/85 to-transparent p-5 text-ivory text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {img.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}
