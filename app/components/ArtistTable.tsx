// app/components/ArtistTable.tsx

type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

export default function ArtistTable({ artists }: { artists: Artist[] }) {
  return (
    <table className="w-full border border-collapse mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Location</th>
          <th className="border p-2">Fee</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {artists.map((artist) => (
          <tr key={artist.id}>
            <td className="border p-2">{artist.name}</td>
            <td className="border p-2">{artist.category.join(", ")}</td>
            <td className="border p-2">{artist.location}</td>
            <td className="border p-2">{artist.feeRange}</td>
            <td className="border p-2">
              <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
