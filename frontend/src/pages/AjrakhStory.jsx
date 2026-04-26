import SectionDivider from "../components/SectionDivider";

export default function AjrakhStory() {
  return (
    <article className="ajrakh-pattern" data-testid="story-page">
      <header className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto fade-stagger">
        <p className="eyebrow mb-6">Heritage</p>
        <h1 className="serif-title text-5xl sm:text-7xl text-indigo mb-8 leading-[1.05]">
          The Ajrakh Story
        </h1>
        <p className="text-mutedink leading-relaxed text-lg italic">
          A craft as old as the Indus, as deep as the indigo vat, as patient as the desert moon.
        </p>
      </header>

      <SectionDivider />

      <section className="max-w-3xl mx-auto px-6 pb-12 space-y-10 text-mutedink leading-loose text-[17px]">
        <p>
          Long before borders existed, before the Mughals, before language as we know it — there was Ajrakh.
          Fragments of indigo-dyed cloth uncovered at Mohenjo-daro suggest that the craft was practiced over
          four thousand years ago, making Ajrakh one of the oldest surviving textile traditions on earth.
        </p>
        <p>
          The name itself is contested — some say it comes from the Arabic <em>azrak</em>, meaning blue;
          others insist it is from the Sanskrit <em>aaj rakh</em>, "keep it today" — a request from the
          impatient lover to the artisan who would say, "wait, the cloth is not yet done."
        </p>
        <blockquote className="serif-title text-3xl text-indigo border-l-2 border-ochre pl-6 my-12 italic">
          To wear Ajrakh is to wear three weeks of unhurried craft — and four thousand years of memory.
        </blockquote>
        <h2 className="serif-title text-4xl text-indigo pt-6">Rooted in Kutch</h2>
        <p>
          The craft found its modern home in the salt-flat villages of Kutch, Gujarat — particularly in
          Ajrakhpur, a settlement founded after the 2001 earthquake by master printers determined to keep
          the art alive. The Khatri community has practiced Ajrakh here for ten generations, each son
          inheriting his father's blocks, his recipes, his rhythm of dipping and washing.
        </p>
        <h2 className="serif-title text-4xl text-indigo pt-6">A Resist of Patience</h2>
        <p>
          Ajrakh is a resist-print: the patterns are not painted on, but printed in stages with mud-paste
          and gum to <em>resist</em> the dye. The cloth visits the indigo vat, the madder pot, the river,
          and the sun a total of sixteen times. The artisan knows by smell when the indigo is ready,
          by feel when the cloth has soaked enough, by sight when the colour has bloomed.
        </p>
        <p>
          What emerges is geometry — but a geometry that breathes. Eight-pointed stars, lattices, jaali
          windows, mihrabs, almonds and trefoils — motifs that travelled from Persia, were adopted by Sindh,
          and finally took root in Kutch's red earth.
        </p>
        <h2 className="serif-title text-4xl text-indigo pt-6">Why It Matters Now</h2>
        <p>
          In an age of polyester and pollution, Ajrakh is an act of resistance. Every piece is dyed with
          plants — indigo for blue, madder for red, pomegranate rind for yellow, iron filings and jaggery
          for black. The wastewater nourishes the land. The artisans are paid fairly. The cloth lasts decades.
        </p>
        <p>
          When you wrap yourself in a Devasaya saree, you are participating in this lineage — a quiet,
          deliberate continuation of a craft that has outlived empires.
        </p>
      </section>

      <SectionDivider />
    </article>
  );
}
