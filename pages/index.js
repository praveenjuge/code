import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 mx-auto max-w-7xl text-blue-700 font-medium space-y-3">
      <h1 className="font-semibold text-xl mb-4 text-gray-900">
        Code Examples
      </h1>
      <Link href="/hamburger">
        <a className="block">Hamburger v1 🍔</a>
      </Link>
      <Link href="/hamburger1">
        <a className="block">Hamburger v2 🍔</a>
      </Link>
      <Link href="/hamburger2">
        <a className="block">Hamburger v3 🍔</a>
      </Link>
    </main>
  );
}
