// app/components/ArtistCard.tsx

type Artist = {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{artist.name}</h3>
      <p className="text-gray-600">{artist.category}</p>
      <p className="text-gray-500">{artist.priceRange}</p>
      <p className="text-gray-400">{artist.location}</p>
      <button className="bg-blue-600 text-white mt-2 px-2 py-1 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
