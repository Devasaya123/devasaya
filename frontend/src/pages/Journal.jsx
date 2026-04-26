import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJournal } from "../lib/api";
import SectionDivider from "../components/SectionDivider";

export default function Journal() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchJournal().then(setPosts).catch(() => setPosts([]));
  }, []);

  return (
    <div className="ajrakh-bg" data-testid="journal-page">
      <header className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">The Journal</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8">Notes from the loom</h1>
        <p className="text-mutedink leading-relaxed italic">
          Stories, styling, and the quiet philosophies behind our craft.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 grid md:grid-cols-2 gap-x-10 gap-y-16" data-testid="journal-grid">
        {posts.map((p) => (
          <Link key={p.id} to={`/journal/${p.id}`} className="group" data-testid={`journal-card-${p.id}`}>
            <div className="aspect-[16/10] overflow-hidden bg-sand mb-6">
              <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105" />
            </div>
            <p className="eyebrow mb-3">{p.category}</p>
            <h2 className="serif-title text-3xl text-indigo mb-3 group-hover:text-madder transition-colors duration-500">{p.title}</h2>
            <p className="text-mutedink leading-relaxed">{p.excerpt}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
