"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Sugar", href: "/sugar" },
  { label: "Bites", href: "/bites" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header className="nav">
      <div className="navInner">
        <Link className="brand" href="/">
          Sugar <span className="brandAmp">&</span> Bites
        </Link>

        <div className="navLinks" aria-label="Primary navigation">
          {links.map((l) => {
            const active = pathname === l.href;
            const isCart = l.href === "/cart";
            const label = isCart && totalItems > 0 ? `${l.label} (${totalItems})` : l.label;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`navLink ${active ? "navLinkActive" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}