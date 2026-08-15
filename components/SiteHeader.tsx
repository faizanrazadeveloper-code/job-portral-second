"use client";

import Link from "next/link";
import { useState } from "react";
import { Flame, Mail, Phone, Menu, X } from "lucide-react";
import { Linkedin, Facebook, Twitter } from "@/components/Shared";

const navLinks = [
  { label: "Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Categories", href: "/admin/job-categories" },
  { label: "Articles", href: "/articles" },
  { label: "Locations", href: "#" },
  { label: "Packages", href: "#" },
  { label: "About Us", href: "#" },
];

export default function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B2B26]">
      {/* Top utility bar */}
      <div className="hidden lg:block text-slate-300 text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <p className="flex items-center gap-1.5">
            <Flame size={12} className="text-blue-400" />
            The Leading Job Portal for Oil, Gas &amp; Energy Professionals
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Mail size={12} /> info@energytail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={12} /> +971 50 123 4567
            </span>
            <span className="flex items-center gap-3 pl-3 border-l border-slate-600">
              <Linkedin className="hover:text-white cursor-pointer" />
              <Facebook className="hover:text-white cursor-pointer" />
              <Twitter className="hover:text-white cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Energy Tail" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative py-1 transition-colors hover:text-white ${
                  active === l.label ? "text-white" : ""
                }`}
              >
                {l.label}
                {active === l.label && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-white" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-semibold text-white border border-white/50 rounded-lg hover:bg-white/10"
            >
              Register
            </Link>
            <Link
              href="/employer-dashboard"
              className="px-4 py-2 text-sm font-semibold text-[#0B2B26] bg-white rounded-lg hover:bg-slate-100 flex items-center gap-1.5"
            >
              Post a Job
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block text-sm font-medium text-slate-300 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-white/10">
              <Link
                href="/register"
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white border border-white/50 rounded-lg"
              >
                Register
              </Link>
              <Link
                href="/employer-dashboard"
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-[#0B2B26] bg-white rounded-lg"
              >
                Post a Job
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}