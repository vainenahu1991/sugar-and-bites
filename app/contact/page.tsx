import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#faf9f7] text-[#1c1c1c] min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <p className="font-serif text-[#b8860b] text-sm uppercase tracking-[0.2em] mb-2">
          Get in touch
        </p>
        <h1 className="font-serif text-4xl font-light mb-4">Contact Us</h1>
        <p className="text-neutral-600 mb-10">
          Orders, quotes or any questions — we’d love to hear from you.
        </p>
        <section className="reflection rounded-2xl p-8 sm:p-10 space-y-8">
          <div>
            <p className="text-sm text-neutral-500 mb-1 uppercase tracking-wider">Email</p>
            <a
              href="mailto:hello@sugarandbites.store"
              className="text-lg text-[#1c1c1c] hover:text-[#b8860b] transition-colors underline underline-offset-4"
            >
              hello@sugarandbites.store
            </a>
          </div>
          <div>
            <p className="text-sm text-neutral-500 mb-1 uppercase tracking-wider">Phone</p>
            <a
              href="tel:0204821684"
              className="text-lg text-[#1c1c1c] hover:text-[#b8860b] transition-colors underline underline-offset-4"
            >
              020 482 1684
            </a>
          </div>
        </section>
        <Link
          href="/"
          className="inline-block mt-8 text-sm text-neutral-500 hover:text-[#b8860b] transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
