"use client";

import { useSubmissions } from "../context/SubmissionsContext";
import ArtistTable from "../components/ArtistTable";

export default function DashboardPage() {
  const { submissions } = useSubmissions();

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>
      {submissions.length === 0 ? (
        <p className="text-gray-600">No submissions yet</p>
      ) : (
        <ArtistTable artists={submissions} />
      )}
    </main>
  );
}
