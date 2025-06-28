import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4 py-8 space-y-8">
      <header className="w-full flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Artistly</h1>
        <nav>
          <Link href="/artists" className="px-4 py-2 text-blue-600 hover:underline">
            Explore Artists
          </Link>
        </nav>
      </header>

      <section className="text-center mt-12">
        <h2 className="text-4xl font-bold mb-4">Find Your Next Performer</h2>
        <p className="text-gray-600 mb-6">
          Connecting event planners with amazing artists.
        </p>
        <Link
          href="/artists"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Browse Artists
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
          <div
            key={category}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-center">{category}</h3>
            <p className="text-center text-sm text-gray-500">
              Discover {category}
            </p>
          </div>
        ))}
      </section>

      <footer className="text-center text-gray-400 py-4 mt-12">
        © 2025 Artistly
      </footer>
    </main>
  );
}
