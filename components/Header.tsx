"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Send } from "lucide-react";
import Logo from "./Logo";
import TopBar from "./TopBar";

const navItems = [
  { label: "Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Categories", href: "/admin/job-categories" },
  { label: "Articles", href: "/articles" },
  { label: "Locations", href: "/admin/countries" },
  { label: "Packages", href: "/register" },
  { label: "About Us", href: "/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0B2B26]">
      <TopBar />
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3.5 flex items-center justify-between gap-6">
          <Link href="/">
            <Logo light />
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 border border-white/50 rounded-md px-4 py-2 hover:border-white hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hidden sm:inline-block text-sm font-medium text-white border border-white/50 rounded-md px-4 py-2 hover:bg-white/10"
            >
              Register
            </Link>
            <Link
              href="/employer-dashboard"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#0B2B26] bg-white rounded-md px-4 py-2 hover:bg-slate-100"
            >
              <Send className="w-3.5 h-3.5" />
              Post a Job
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-300 hover:bg-white/10 rounded-md"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-b border-white/10 bg-[#0B2B26]">
          <nav className="px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/10 text-sm font-medium text-slate-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="py-3 border-b border-white/10 text-sm font-medium text-white"
            >
              Register
            </Link>
            <Link
              href="/employer-dashboard"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-[#0B2B26] bg-white rounded-md px-4 py-2.5"
            >
              <Send className="w-3.5 h-3.5" />
              Post a Job
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
