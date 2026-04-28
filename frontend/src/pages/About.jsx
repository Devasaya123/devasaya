const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_a9492608-2cdd-4d5d-810f-d98256e3feb7/artifacts/byue0uy1_ChatGPT%20Image%20Apr%2020%2C%202026%2C%2012_35_22%20AM.png";

export default function About() {
  return (
    <div className="ajrakh-bg" data-testid="about-page">
      <header className="pt-20 pb-6 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <img src={LOGO_URL} alt="Devasaya" className="h-24 w-24 object-contain mx-auto mb-5 opacity-90" />
        <p className="eyebrow mb-4">About Devasaya</p>
        <h1 className="serif-title text-5xl sm:text-6xl text-indigo mb-2 leading-[1.05]">
          Custodians of an<br /><em className="font-light">ancient cloth.</em>
        </h1>
      </header>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-20 space-y-8 text-mutedink leading-loose text-[17px]">
        <p>
          Devasaya was born from a simple, stubborn belief: that the cloth our ancestors wore — printed by hand, dyed with plants, finished by sunlight — has a place in the modern wardrobe, not just in museums.
        </p>
        <p>
          We work directly with master Khatri printers in Ajrakhpur and Dhamadka, the twin villages of Kutch where Ajrakh has been practiced for ten generations. Every piece you see on our site has spent at least three weeks in their hands. We do not have a factory. We have an atelier.
        </p>
        <h2 className="serif-title text-4xl text-indigo pt-4">Our Promise</h2>
        <ul className="space-y-3 list-none">
          <li>· Hand-block printed, no machines, no shortcuts.</li>
          <li>· Natural, plant-based dyes — fully traceable to source.</li>
          <li>· Fair, pre-agreed wages for every artisan we work with.</li>
          <li>· Garments made to last decades, not seasons.</li>
          <li>· Custom orders welcomed — yardage, tailoring, and export-ready packaging.</li>
        </ul>
      </section>
    </div>
  );
}
