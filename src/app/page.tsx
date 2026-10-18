export default function Home() {
  // Stage 1–2: the shell (header/footer/skip link) is owned by the root
  // layout. Homepage sections — hero, services, process — arrive in Stage 3.
  return (
    <div className="shell gutter py-24">
      <p className="text-slate">Homepage sections arrive in Stage 3.</p>
    </div>
  );
}
