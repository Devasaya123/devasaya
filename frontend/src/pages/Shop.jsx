import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../lib/api";

const CATEGORIES = ["All", "Sarees", "Shirts", "Cordsets", "Kaftans", "Modal 3 Piece Suits"];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(filter === "All" ? {} : { category: filter })
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div className="ajrakh-bg" data-testid="shop-page">
      <header className="pt-32 pb-12 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">The Collection</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-6">Hand-block printed apparel</h1>
        <p className="text-mutedink leading-relaxed italic">
          Sarees, dupattas, fabrics and kaftans — each piece a quiet conversation between artisan and earth.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12" data-testid="shop-filters">
        <div className="flex flex-wrap gap-3 justify-center border-y border-subtle py-5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                filter === c ? "bg-indigo text-ivory" : "text-mutedink hover:text-indigo"
              }`}
              data-testid={`filter-${c.toLowerCase()}-btn`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        {loading ? (
          <p className="text-center text-mutedink py-20">Unfolding the cloth...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-mutedink py-20" data-testid="empty-state">No pieces in this collection yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" data-testid="products-grid">
            {products.map((p) => (
              <Link key={p.id} to={`/shop/${p.id}`} className="group" data-testid={`product-card-${p.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-sand mb-5">
                  <img
                    src={p.images?.[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow text-mutedink mb-2">{p.category}</p>
                <h3 className="serif-title text-2xl text-indigo mb-1 group-hover:text-madder transition-colors duration-500">{p.name}</h3>
                <p className="text-xs text-mutedink mb-2">{p.fabric}</p>
                <p className="text-sm text-indigo">₹ {p.price.toLocaleString("en-IN")}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
