import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to PBR</h1>
      <p className="text-lg text-gray-700 mt-2">
        Track your pickleball rankings easily.
      </p>
      <Link href="/matches">
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          View Matches
        </button>
      </Link>
    </div>
  );
}
