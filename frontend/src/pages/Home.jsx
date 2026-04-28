import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://customer-assets.emergentagent.com/job_ajrakh-artistry/artifacts/8tbo8tr8_02-3.jpg";
const STORY_IMG = "https://customer-assets.emergentagent.com/job_ajrakh-artistry/artifacts/d3daizb3_972fa4_7bab48afcb49450cba799620b4dab7d1~mv2.avif";
const ARTISAN_IMG = "https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=1400";

export default function Home() {
  return (
    <div className="ajrakh-bg" data-testid="home-page">
      {/* Hero */}
      <section className="relative h-[92vh] overflow-hidden" data-testid="hero-section">
        <img src={HERO_IMG} alt="Ajrakh artisan dyeing fabric in indigo vat" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo/40 to-indigo-deep/30" />
        <div className="relative z-10 h-full flex items-end pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full fade-stagger">
            <p className="eyebrow text-ochre mb-6">Devasaya · Kutch · Gujarat</p>
            <h1 className="serif-title text-ivory text-5xl sm:text-7xl lg:text-8xl max-w-5xl mb-8" data-testid="hero-title">
              Ajrakh —<br />
              <em className="font-light">an ancient art of timeless elegance.</em>
            </h1>
            <p className="text-ivory/85 max-w-2xl text-lg leading-relaxed mb-10 tracking-wide">
              Reviving the heritage of Kutch, Gujarat through intricate block-printed textiles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary bg-ivory text-indigo hover:bg-ochre" data-testid="hero-shop-btn">
                Explore the Collection
              </Link>
              <Link to="/story" className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-indigo" data-testid="hero-story-btn">
                Read the Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ajrakh — Pillars */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 max-w-7xl mx-auto" data-testid="pillars-section">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Why Ajrakh</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-indigo">A weave of culture, craft & conscience</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 fade-stagger">
          {[
            { t: "Heritage Craft", d: "Traced back to the Indus Valley Civilisation — a living archaeology of textile." },
            { t: "Eco-Friendly", d: "Only natural, skin-safe dyes are used — drawn from plant, root and earth." },
            { t: "Ethical", d: "Supporting artisan livelihoods and preserving generational knowledge in Kutch." },
            { t: "Unique Designs", d: "Geometric & symmetrical patterns — no two pieces are ever quite alike." },
            { t: "Versatile", d: "Fashion, home decor, accessories — Ajrakh adapts gracefully to every form." },
          ].map((p) => (
            <div key={p.t} className="border-l border-subtle pl-5">
              <h3 className="serif-title text-2xl text-indigo mb-3">{p.t}</h3>
              <p className="text-mutedink leading-relaxed text-sm">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="serif-title italic text-2xl sm:text-3xl text-indigo tracking-wide" data-testid="brand-tagline">
            Handcrafted &nbsp;·&nbsp; Natural Dyes &nbsp;·&nbsp; Sustainable &nbsp;·&nbsp; Timeless &nbsp;·&nbsp; Conscious
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Our Atelier */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center" data-testid="story-strip">
        <div className="overflow-hidden">
          <img src={STORY_IMG} alt="Devasaya atelier — Ajrakh fabric" className="w-full h-[600px] object-cover transition-transform duration-[1.6s] hover:scale-105" />
        </div>
        <div>
          <p className="eyebrow mb-6">Our Atelier</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-indigo mb-8 leading-tight">
            Where passion meets craftsmanship.
          </h2>
          <p className="text-mutedink leading-relaxed mb-6 text-[17px]">
            From the dunes of Kutch, our artisan community carries forward Ajrakh printing with passion, precision, and pride. Each piece is a labour of love.
          </p>
          <p className="text-mutedink leading-relaxed mb-10 text-[17px]">
            To wear Devasaya is to wear unhurried craft, the rhythm of an artisan's hand, and a fragment of India's oldest textile memory.
          </p>
          <Link to="/story" className="inline-flex items-center gap-3 text-indigo group" data-testid="story-strip-link">
            <span className="link-underline tracking-[0.2em] uppercase text-xs">Discover the journey</span>
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* Reach Us */}
      <section className="py-20 px-6 lg:px-10 max-w-3xl mx-auto text-center" data-testid="reach-us-section">
        <p className="eyebrow mb-5">Reach Us</p>
        <h2 className="serif-title text-4xl text-indigo mb-8">Stay to the craft</h2>
        <p className="text-mutedink leading-relaxed mb-8">
          Follow our quiet daily journal of cloth, colour and conversation.
        </p>
        <a
          href="https://instagram.com/_devasaya_"
          target="_blank"
          rel="noreferrer"
          className="serif-title italic text-3xl text-madder link-underline"
          data-testid="instagram-handle"
        >
          Instagram — _devasaya_
        </a>
      </section>

      {/* Artisan callout */}
      <section className="relative py-32 mt-12" data-testid="artisan-callout">
        <img src={ARTISAN_IMG} alt="Artisan" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-indigo-deep/75" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow text-ochre mb-6">The Hands Behind the Cloth</p>
          <h2 className="serif-title text-ivory text-4xl sm:text-5xl mb-8 leading-tight">
            "Ajrakh is not just a print — it is a statement of culture, sustainability, and luxury."
          </h2>
          <Link to="/artisans" className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-indigo" data-testid="meet-artisans-btn">
            Meet our artisans
          </Link>
        </div>
      </section>
    </div>
  );
}
