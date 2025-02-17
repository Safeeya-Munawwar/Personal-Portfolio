import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <button><Link href="/" className="text-lg">Home</Link></button>
        <button><Link href="/education" className="text-lg">Education</Link></button>
        <button><Link href="/certificates" className="text-lg">Certificates</Link></button>
        <button><Link href="/skills" className="text-lg">Skills</Link></button>
        <button><Link href="/projects" className="text-lg">Projects</Link></button>
        <button><Link href="/experiences" className="text-lg">Experiences</Link></button>
        <button><Link href="/about" className="text-lg">About Me</Link></button>
        <button><Link href="/contact" className="text-lg">Contact</Link></button>
      </nav>
    </header>
  );
}
