// app/artists/page.tsx

import ArtistCard from "../components/ArtistCard";
import FilterBlock from "../components/FilterBlock";
import artists from "../data/artists.json";

export default function ArtistListing() {
  return (
    <main className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Browse Artists</h1>

      {/* Filter block */}
      <FilterBlock />

      {/* Artist grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </main>
  );
}
