import Image from "next/image";

type Chocolate = {
  id: number;
  name: string;
  ingredients: string;
  photo_urls: string[];
};

type Variant = {
  id: number;
  chocolate_id: number;
  size: string;
  weight: number;
  price: number;
};

async function getChocolate(id: string): Promise<Chocolate> {
  const res = await fetch(`http://backend-svc:3000/chocolates/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch chocolate");
  return res.json();
}

async function getVariants(id: string): Promise<Variant[]> {
  const res = await fetch(`http://backend-svc:3000/chocolates/${id}/variants`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch variants");
  return res.json();
}

export default async function ChocolatePage({ params }: { params: { id: string } }) {
  const chocolate = await getChocolate(params.id);
  const variants = await getVariants(params.id);
  const basePhotoUrl = "http://localhost:30718/";

  return (
    <main className="min-h-screen bg-[#fdfaf5] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#5a2a27] mb-6">{chocolate.name}</h1>

      {/* Slideshow */}
      <div className="w-96 h-64 mb-6">
        {chocolate.photo_urls.map((photo, idx) => (
          <img
            key={idx}
            src={basePhotoUrl + photo.replace(/^\/+/, "")}
            alt={chocolate.name}
            className="rounded-lg object-cover w-full h-full mb-2"
          />
        ))}
      </div>

      <p className="text-[#7a5a53] text-center mb-6">{chocolate.ingredients}</p>

      {/* Variants */}
      <table className="w-full max-w-md border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Size</th>
            <th className="border p-2">Weight (g)</th>
            <th className="border p-2">Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((v) => (
            <tr key={v.id}>
              <td className="border p-2 text-center">{v.size}</td>
              <td className="border p-2 text-center">{v.weight}</td>
              <td className="border p-2 text-center">{v.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
