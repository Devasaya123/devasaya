import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../lib/api";
import SectionDivider from "../components/SectionDivider";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1761808070278-dd73772be230?crop=entropy&cs=srgb&fm=jpg&w=1800";
const STORY_IMG = "https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=1400";
const ARTISAN_IMG = "https://images.unsplash.com/photo-1761808070515-bfb862a85011?crop=entropy&cs=srgb&fm=jpg&w=1400";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchProducts({ featured: true }).then(setFeatured).catch(() => setFeatured([]));
  }, []);

  return (
    <div className="ajrakh-bg" data-testid="home-page">
      {/* Hero */}
      <section className="relative h-[92vh] overflow-hidden" data-testid="hero-section">
        <img src={HERO_IMG} alt="Ajrakh fabric drying in the sun" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 via-indigo/30 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full fade-stagger">
            <p className="eyebrow text-ochre mb-6">Ajrakh · Kutch · Since the Indus Valley</p>
            <h1 className="serif-title text-ivory text-5xl sm:text-7xl lg:text-8xl max-w-4xl mb-8" data-testid="hero-title">
              An ancient art<br />
              <em className="font-light">of timeless elegance.</em>
            </h1>
            <p className="text-ivory/80 max-w-xl text-lg leading-relaxed mb-10">
              Each Devasaya piece is hand-block printed across sixteen unhurried stages — a labour of love passed through generations of Kutchi artisans.
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

      {/* Pillars */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 max-w-7xl mx-auto" data-testid="pillars-section">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Why Ajrakh</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-indigo">A weave of culture, craft & conscience</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 fade-stagger">
          {[
            { t: "Heritage Craft", d: "Traced back to the Indus Valley Civilization — a living archaeology of textile." },
            { t: "Eco-Friendly", d: "Only natural, skin-safe dyes drawn from indigo, madder, pomegranate and turmeric." },
            { t: "Ethical", d: "Supporting artisan livelihoods and preserving generational knowledge in Kutch." },
            { t: "Unique Designs", d: "Geometric, symmetrical, soulful — no two pieces are ever quite alike." },
          ].map((p) => (
            <div key={p.t} className="border-l border-subtle pl-6">
              <h3 className="serif-title text-2xl text-indigo mb-3">{p.t}</h3>
              <p className="text-mutedink leading-relaxed text-sm">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Story Strip */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center" data-testid="story-strip">
        <div className="overflow-hidden">
          <img src={STORY_IMG} alt="Ajrakh blocks" className="w-full h-[560px] object-cover transition-transform duration-[1.6s] hover:scale-105" />
        </div>
        <div>
          <p className="eyebrow mb-6">Our Atelier</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-indigo mb-8 leading-tight">
            We are proud custodians of a centuries-old textile tradition.
          </h2>
          <p className="text-mutedink leading-relaxed mb-6">
            From the dunes of Kutch, our artisan community carries forward Ajrakh printing with passion, precision, and pride. Each piece is a labour of love — washed in river water, mordanted with myrobalan, printed with carved teakwood blocks, and dyed in indigo vats fermented under the desert sun.
          </p>
          <p className="text-mutedink leading-relaxed mb-10">
            To wear Devasaya is to wear three weeks of unhurried craft, the rhythm of an artisan's hand, and a fragment of India's oldest textile memory.
          </p>
          <Link to="/story" className="inline-flex items-center gap-3 text-indigo group" data-testid="story-strip-link">
            <span className="link-underline tracking-[0.2em] uppercase text-xs">Discover the journey</span>
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto" data-testid="featured-section">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <p className="eyebrow mb-4">Featured Pieces</p>
            <h2 className="serif-title text-4xl sm:text-5xl text-indigo">Selections from the atelier</h2>
          </div>
          <Link to="/shop" className="text-indigo link-underline tracking-[0.2em] uppercase text-xs" data-testid="view-all-link">
            View all collections →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="featured-products-grid">
          {featured.slice(0, 6).map((p) => (
            <Link key={p.id} to={`/shop/${p.id}`} className="group" data-testid={`featured-product-${p.id}`}>
              <div className="aspect-[3/4] overflow-hidden bg-sand mb-5">
                <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105" />
              </div>
              <p className="eyebrow text-mutedink mb-2">{p.category}</p>
              <h3 className="serif-title text-2xl text-indigo mb-2">{p.name}</h3>
              <p className="text-sm text-mutedink">₹ {p.price.toLocaleString("en-IN")}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Artisan callout */}
      <section className="relative py-32 mt-12" data-testid="artisan-callout">
        <img src={ARTISAN_IMG} alt="Artisan" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-indigo-deep/70" />
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
