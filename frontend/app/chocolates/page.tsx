import Image from "next/image";

type Chocolate = {
  id: number;
  name: string;
  ingredients: string;
  photo_urls: string[]; // array of photo paths, e.g. "photos/dark_small_1.jpg"
};

async function getChocolates(): Promise<Chocolate[]> {
  const res = await fetch("http://backend-svc:3000/chocolates", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch chocolates");
  return res.json();
}

export default async function ChocolatesPage() {
  const chocolates = await getChocolates();

  // Base URL for photos on your backend
  const basePhotoUrl = "http://localhost:30718/";

  return (
    <main className="min-h-screen bg-[#fdfaf5] p-8">
      <h1 className="text-4xl font-bold text-[#5a2a27] mb-10 text-center">Our Chocolates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {
        chocolates.map((chocolate) => {
          // Safely get first photo url or null
          const firstPhotoUrl =
            chocolate.photo_urls && chocolate.photo_urls.length > 0
              ? basePhotoUrl + chocolate.photo_urls[0].replace(/^\/+/, "") // remove any leading slashes
              : null;

          return (
            <div
              key={chocolate.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
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
              <h2 className="text-2xl font-semibold text-[#5a2a27] mb-2">{chocolate.name}</h2>
              <p className="text-[#7a5a53] text-center">{chocolate.ingredients}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
