import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchJournalPost } from "../lib/api";

export default function JournalPost() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  useEffect(() => {
    fetchJournalPost(id).then(setP).catch(() => setP(false));
  }, [id]);

  if (p === null) return <div className="py-40 text-center text-mutedink">Loading...</div>;
  if (p === false) return <div className="py-40 text-center text-mutedink">Post not found.</div>;

  return (
    <article className="ajrakh-pattern" data-testid="journal-post-page">
      <div className="aspect-[21/9] overflow-hidden">
        <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="eyebrow mb-5">{p.category}</p>
        <h1 className="serif-title text-4xl sm:text-6xl text-indigo mb-6 leading-[1.05]">{p.title}</h1>
        <p className="text-xs tracking-[0.3em] uppercase text-mutedink">By {p.author}</p>
      </header>
      <div className="max-w-2xl mx-auto px-6 pb-24 text-mutedink leading-loose text-[17px]" data-testid="journal-body">
        {p.body.split("\n\n").map((para, i) => (
          <p key={i} className="mb-6">{para}</p>
        ))}
      </div>
      <div className="text-center pb-24">
        <Link to="/journal" className="btn-outline" data-testid="back-to-journal">← Back to journal</Link>
      </div>
    </article>
  );
}
