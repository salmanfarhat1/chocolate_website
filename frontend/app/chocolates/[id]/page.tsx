import { Chocolate, Variants } from "@/types";

type Params = { params: { id: string } };

async function getChocolate(id: string): Promise<Chocolate> {
  const res = await fetch("http://backend-svc:3000/chocolates", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch chocolates");

  const chocolates: Chocolate[] = await res.json();
  const chocolate = chocolates.find((c) => c.id === Number(id));
  if (!chocolate) throw new Error("Chocolate not found");

  return chocolate;
}

async function getVariants(chocolateId: string): Promise<Variants[]> {
  const res = await fetch(
    `http://backend-svc:3000/chocolates/${chocolateId}/variants`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch variants");
  return res.json();
}

export default async function ChocolatePage({ params }: Params) {
  const chocolate = await getChocolate(params.id);
  const variants = await getVariants(params.id);

  const basePhotoUrl = "http://localhost:30718/";

  return (
    <main className="min-h-screen bg-[#fdfaf5] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#5a2a27] mb-6">{chocolate.name}</h1>

      {/* Panoramic photo viewer */}
      <div className="w-full max-w-4xl h-72 mb-6 overflow-x-auto flex space-x-4 snap-x snap-mandatory">
        {chocolate.photo_urls.map((photo, idx) => (
          <img
            key={idx}
            src={basePhotoUrl + photo.replace(/^\/+/, "")}
            alt={chocolate.name}
            className="rounded-2xl object-cover w-full h-72 flex-shrink-0 snap-center"
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
          {variants && variants.length > 0 ? (
            variants.map((v) => (
              <tr key={v.id}>
                <td className="border p-2 text-center">{v.size}</td>
                <td className="border p-2 text-center">{v.weight}</td>
                <td className="border p-2 text-center">{v.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="border p-2 text-center text-gray-500">
                No variants available
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </main>
  );
}
