</>  JavaScript

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/speaking">Speaking</Link>
      <Link href="/media">Media</Link>
      <Link href="/publications">Publications</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}