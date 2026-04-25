"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-200">
        <div className="flex gap-8 text-sm text-gray-500">
          <Link href="/" className="border-b border-black text-black">Home</Link>
          <Link href="#" className="hover:text-black">About</Link>
          <Link href="#" className="hover:text-black">Features</Link>
          <Link href="#" className="hover:text-black">Contact</Link>
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/login" className="hover:text-black text-gray-500">Login</Link>
          <Link href="/signup" className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-24 max-w-6xl mx-auto">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Platform</p>
          <h1 className="text-6xl font-serif text-gray-900 leading-tight mb-6">
            DelosSantos App
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            A simple, elegant platform built for everyone. Stay organized,
            connected, and productive — all in one place.
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="/signup" className="bg-black text-white px-6 py-2.5 rounded-full text-sm hover:bg-gray-800">
              Get Started
            </Link>
            <Link href="/login" className="border border-black text-black px-6 py-2.5 rounded-full text-sm hover:bg-gray-100">
              Login
            </Link>
          </div>
        </div>

        {/* Decorative box */}
        <div className="hidden md:block w-80 h-80 bg-gray-200 rounded-2xl mt-10 md:mt-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100 flex items-center justify-center">
            <span className="text-6xl">✦</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-200">
        © 2026 DELOSSANTOS App. All rights reserved.
      </footer>
    </main>
  );
}