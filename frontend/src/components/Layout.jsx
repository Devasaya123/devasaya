import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Toaster } from "sonner";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/story", label: "The Ajrakh Story" },
  { to: "/shop", label: "Shop" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_a9492608-2cdd-4d5d-810f-d98256e3feb7/artifacts/byue0uy1_ChatGPT%20Image%20Apr%2020%2C%202026%2C%2012_35_22%20AM.png";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ivory text-[#111] flex flex-col">
      <Toaster position="bottom-center" theme="light" />

      {/* Top announcement bar */}
      <div className="bg-indigo text-ivory text-[11px] tracking-[0.3em] uppercase text-center py-2.5" data-testid="announcement-bar">
        Hand-block printed in Kutch · Natural dyes · Free shipping across India
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-ivory/85 backdrop-blur-xl border-b border-subtle" data-testid="site-header">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <img src={LOGO_URL} alt="Devasaya" className="h-11 w-11 object-contain" />
            <span className="serif-title text-2xl text-indigo tracking-wider hidden 2xl:block">DEVASAYA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" data-testid="primary-nav">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-[11px] xl:text-[12px] tracking-[0.18em] xl:tracking-[0.22em] uppercase whitespace-nowrap transition-colors duration-500 link-underline ${
                    isActive ? "text-indigo" : "text-mutedink hover:text-indigo"
                  }`
                }
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden text-indigo"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-subtle bg-ivory animate-fade-in" data-testid="mobile-nav">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="text-[13px] tracking-[0.22em] uppercase text-mutedink"
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-subtle bg-sand mt-24" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 flex flex-col items-start" data-testid="footer-brand">
            <img src={LOGO_URL} alt="Devasaya — Handicraft Apparel" className="h-40 w-40 object-contain mb-6 opacity-95" />
            <p className="serif-title text-3xl text-indigo mb-2 tracking-wider">DEVASAYA</p>
            <p className="text-xs uppercase tracking-[0.3em] text-mutedink">Handicraft Apparel</p>
          </div>

          <div>
            <p className="eyebrow mb-4">Atelier</p>
            <ul className="space-y-2 text-sm text-mutedink">
              <li><Link to="/story" className="link-underline">The Ajrakh Story</Link></li>
              <li><Link to="/sustainability" className="link-underline">Sustainability</Link></li>
              <li><Link to="/about" className="link-underline">About Devasaya</Link></li>
              <li><Link to="/shop" className="link-underline">Shop</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Reach Us</p>
            <ul className="space-y-3 text-sm text-mutedink">
              <li className="flex items-center gap-2"><Phone size={14} /> +91 93408 53746</li>
              <li className="flex items-center gap-2"><Mail size={14} /> devasaya.24@gmail.com</li>
              <li className="flex items-center gap-2"><Instagram size={14} /> _devasaya_</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-mutedink tracking-wider">
            <p>© {new Date().getFullYear()} Devasaya · Handicraft Apparel · Kutch, Gujarat</p>
            <p className="opacity-70">Reviving the heritage of Kutch through intricate block-printed textile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
