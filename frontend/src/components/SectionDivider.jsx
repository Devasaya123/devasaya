export default function SectionDivider({ symbol = "✦" }) {
  return (
    <div className="divider-ornament max-w-md mx-auto my-14" aria-hidden>
      <span className="text-base">{symbol}</span>
    </div>
  );
}
