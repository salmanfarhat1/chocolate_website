import Header from "../components/Header"; // Ensure this path is correct or adjust it to the actual location of the Header component
import Link from "next/link";

type Chocolate = {
  id: number;
  name: string;
  ingredients: string;
  photo_urls: string[];
};

async function getChocolates(): Promise<Chocolate[]> {
  try {
    const res = await fetch("http://backend-svc:3000/chocolates", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch chocolates");
    const data = await res.json();
    // Ensure the returned value is always an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching chocolates:", error);
    return [];
  }
}

export default async function ChocolatesPage() {
  const chocolates = await getChocolates() ?? [];
  const basePhotoUrl = "http://localhost:30718/";

  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      <Header /> {/* ✅ Reusable header here */}

      <main className="p-8">
        {/* <h1 className="text-4xl font-bold text-[#5a2a27] mb-10 text-center">
          Our Chocolates
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chocolates.length === 0 ? (
            <p className="text-center text-[#7a5a53] col-span-full">Out of stock.</p>
          ) : (
            chocolates.map((chocolate) => {
              const firstPhotoUrl =
                chocolate.photo_urls && chocolate.photo_urls.length > 0
                  ? basePhotoUrl + chocolate.photo_urls[0].replace(/^\/+/, "")
                  : null;

              return (
                <Link href={`/chocolates/${chocolate.id}`} key={chocolate.id}>
                  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                    {firstPhotoUrl ? (
                      <img
                        src={firstPhotoUrl}
                        alt={chocolate.name}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover mb-4"
                      />
                    ) : (
                      <div className="w-72 h-44 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                        No image available
                      </div>
                    )}
                    <h2 className="text-2xl font-semibold text-[#5a2a27] mb-2">
                      {chocolate.name}
                    </h2>
                    <p className="text-[#7a5a53] text-center">
                      {chocolate.ingredients}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
