"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["CV", "#cv"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  return (
    <nav
      aria-label="Main navigation"
      className="fixed mx-auto border border-outline top-0 left-0 right-0 z-20 bg-page"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 gap-3">
        <Link
          href="/"
          className="text-2xl md:text-3xl text-foreground font-semibold"
        >
          Ardi Wirya
        </Link>
        <div className="flex items-center gap-3 md:gap-5">
          <ul className="hidden md:flex gap-5 lg:gap-8">
            {links.map(([title, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-muted hover:text-foreground"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            ref={toggleRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 min-h-11 min-w-11 border rounded border-outline text-foreground"
          >
            {open ? (
              <XMarkIcon className="h-5 w-5 mx-auto" />
            ) : (
              <Bars3Icon className="h-5 w-5 mx-auto" />
            )}
          </button>
        </div>
      </div>
      <ul id="mobile-menu" hidden={!open} className="md:hidden px-4 pb-3">
        {links.map(([title, href]) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted hover:text-foreground"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
