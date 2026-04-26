import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProduct, buildWhatsAppLink } from "../lib/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetchProduct(id).then(setP).catch(() => setP(false));
  }, [id]);

  if (p === null) return <div className="py-40 text-center text-mutedink">Loading...</div>;
  if (p === false) return <div className="py-40 text-center text-mutedink">Piece not found. <Link to="/shop" className="link-underline text-indigo">Return to shop</Link></div>;

  const wa = buildWhatsAppLink(`Namaste, I am interested in "${p.name}" (₹ ${p.price.toLocaleString("en-IN")}). Could you share more details?`);

  return (
    <div className="ajrakh-bg pt-24 pb-24 px-6 lg:px-10" data-testid="product-detail-page">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <div data-testid="product-gallery">
          <div className="aspect-[3/4] overflow-hidden bg-sand mb-4">
            <img src={p.images?.[active]} alt={p.name} className="w-full h-full object-cover" />
          </div>
          {p.images?.length > 1 && (
            <div className="flex gap-3">
              {p.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-20 h-24 overflow-hidden ${active === i ? "ring-1 ring-indigo" : "opacity-60"}`}
                  data-testid={`thumb-${i}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:pl-8">
          <Link to="/shop" className="text-xs eyebrow text-mutedink link-underline" data-testid="back-to-shop">← Collection</Link>
          <p className="eyebrow mt-8 mb-4">{p.category}</p>
          <h1 className="serif-title text-4xl sm:text-5xl text-indigo mb-5" data-testid="product-name">{p.name}</h1>
          <p className="text-2xl text-indigo mb-8" data-testid="product-price">₹ {p.price.toLocaleString("en-IN")}</p>

          <div className="border-t border-subtle pt-8 space-y-6">
            <div>
              <p className="eyebrow mb-2">Fabric</p>
              <p className="text-mutedink">{p.fabric}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">The Story</p>
              <p className="text-mutedink leading-relaxed">{p.description}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-madder" data-testid="enquire-whatsapp-btn">
              Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline" data-testid="enquire-email-btn">Enquire by Email</Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center border-t border-subtle pt-8">
            <div><p className="text-xs eyebrow mb-1">Hand</p><p className="text-xs text-mutedink">block printed</p></div>
            <div><p className="text-xs eyebrow mb-1">Natural</p><p className="text-xs text-mutedink">dyes only</p></div>
            <div><p className="text-xs eyebrow mb-1">Made in</p><p className="text-xs text-mutedink">Kutch, India</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
