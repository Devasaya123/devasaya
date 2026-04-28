import { useEffect, useState } from "react";
import { fetchProducts, createProduct, deleteProduct, fetchJournal, createJournal, deleteJournal } from "../lib/api";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

const emptyProduct = { name: "", category: "Sarees", price: 0, fabric: "", description: "", images: "", featured: false };
const emptyPost = { title: "", excerpt: "", body: "", cover_image: "", category: "Heritage", author: "Devasaya Atelier" };

export default function Admin() {
  const [tab, setTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pForm, setPForm] = useState(emptyProduct);
  const [jForm, setJForm] = useState(emptyPost);

  const reload = () => {
    fetchProducts().then(setProducts);
    fetchJournal().then(setPosts);
  };
  useEffect(reload, []);

  const submitProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...pForm,
        price: Number(pForm.price),
        images: pForm.images.split(",").map((s) => s.trim()).filter(Boolean),
      };
      await createProduct(payload);
      toast.success("Product added");
      setPForm(emptyProduct);
      reload();
    } catch {
      toast.error("Could not save product");
    }
  };

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      await createJournal(jForm);
      toast.success("Journal post published");
      setJForm(emptyPost);
      reload();
    } catch {
      toast.error("Could not save post");
    }
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    reload();
  };
  const removePost = async (id) => {
    await deleteJournal(id);
    reload();
  };

  return (
    <div className="ajrakh-bg pt-24 pb-24 px-6 lg:px-10" data-testid="admin-page">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">Atelier Admin</p>
        <h1 className="serif-title text-5xl text-indigo mb-10">Manage Devasaya</h1>

        <div className="flex gap-3 border-b border-subtle mb-10">
          {["products", "journal"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-[11px] tracking-[0.25em] uppercase ${tab === t ? "text-indigo border-b-2 border-indigo" : "text-mutedink"}`}
              data-testid={`admin-tab-${t}`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "products" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <form onSubmit={submitProduct} className="space-y-4 border border-subtle p-8 bg-ivory" data-testid="admin-product-form">
              <h2 className="serif-title text-2xl text-indigo">Add Product</h2>
              <input className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Name" value={pForm.name} onChange={(e) => setPForm({ ...pForm, name: e.target.value })} required data-testid="admin-product-name" />
              <select className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" value={pForm.category} onChange={(e) => setPForm({ ...pForm, category: e.target.value })} data-testid="admin-product-category">
                {["Sarees", "Shirts", "Cordsets", "Kaftans", "Modal 3 Piece Suits"].map((c) => <option key={c}>{c}</option>)}
              </select>
              <input type="number" className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Price (INR)" value={pForm.price} onChange={(e) => setPForm({ ...pForm, price: e.target.value })} required data-testid="admin-product-price" />
              <input className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Fabric" value={pForm.fabric} onChange={(e) => setPForm({ ...pForm, fabric: e.target.value })} data-testid="admin-product-fabric" />
              <textarea className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none resize-none" rows="4" placeholder="Description" value={pForm.description} onChange={(e) => setPForm({ ...pForm, description: e.target.value })} data-testid="admin-product-description" />
              <input className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Image URLs (comma-separated)" value={pForm.images} onChange={(e) => setPForm({ ...pForm, images: e.target.value })} data-testid="admin-product-images" />
              <label className="flex items-center gap-2 text-sm text-mutedink">
                <input type="checkbox" checked={pForm.featured} onChange={(e) => setPForm({ ...pForm, featured: e.target.checked })} data-testid="admin-product-featured" /> Featured on homepage
              </label>
              <button type="submit" className="btn-primary" data-testid="admin-product-submit">Add Product</button>
            </form>
            <div className="space-y-3" data-testid="admin-products-list">
              {products.map((p) => (
                <div key={p.id} className="flex items-center gap-4 border border-subtle p-4 bg-ivory" data-testid={`admin-product-row-${p.id}`}>
                  <img src={p.images?.[0]} alt="" className="w-16 h-20 object-cover" />
                  <div className="flex-1">
                    <p className="serif-title text-lg text-indigo">{p.name}</p>
                    <p className="text-xs text-mutedink">{p.category} · ₹{p.price}</p>
                  </div>
                  <button onClick={() => removeProduct(p.id)} className="text-madder" data-testid={`admin-product-delete-${p.id}`}><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <form onSubmit={submitPost} className="space-y-4 border border-subtle p-8 bg-ivory" data-testid="admin-journal-form">
              <h2 className="serif-title text-2xl text-indigo">New Journal Post</h2>
              <input className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Title" value={jForm.title} onChange={(e) => setJForm({ ...jForm, title: e.target.value })} required data-testid="admin-journal-title" />
              <select className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" value={jForm.category} onChange={(e) => setJForm({ ...jForm, category: e.target.value })} data-testid="admin-journal-category">
                {["Heritage", "Styling", "Sustainability", "Behind the Scenes"].map((c) => <option key={c}>{c}</option>)}
              </select>
              <input className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none" placeholder="Cover Image URL" value={jForm.cover_image} onChange={(e) => setJForm({ ...jForm, cover_image: e.target.value })} required data-testid="admin-journal-cover" />
              <textarea className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none resize-none" rows="2" placeholder="Excerpt" value={jForm.excerpt} onChange={(e) => setJForm({ ...jForm, excerpt: e.target.value })} required data-testid="admin-journal-excerpt" />
              <textarea className="w-full border-b border-indigo/30 py-2 bg-transparent focus:outline-none resize-none" rows="6" placeholder="Body (paragraphs separated by blank line)" value={jForm.body} onChange={(e) => setJForm({ ...jForm, body: e.target.value })} required data-testid="admin-journal-body" />
              <button type="submit" className="btn-primary" data-testid="admin-journal-submit">Publish</button>
            </form>
            <div className="space-y-3" data-testid="admin-journal-list">
              {posts.map((p) => (
                <div key={p.id} className="flex items-center gap-4 border border-subtle p-4 bg-ivory" data-testid={`admin-post-row-${p.id}`}>
                  <img src={p.cover_image} alt="" className="w-20 h-14 object-cover" />
                  <div className="flex-1">
                    <p className="serif-title text-lg text-indigo">{p.title}</p>
                    <p className="text-xs text-mutedink">{p.category}</p>
                  </div>
                  <button onClick={() => removePost(p.id)} className="text-madder" data-testid={`admin-post-delete-${p.id}`}><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
