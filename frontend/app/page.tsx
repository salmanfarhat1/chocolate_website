// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5] flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-5xl font-extrabold text-[#5a2a27] mb-6">
        Welcome to Mold Chocolate
      </h1>
      <p className="max-w-xl text-lg text-[#7a5a53] mb-10">
        Handcrafted artisanal chocolates made with love and the finest ingredients.
        Discover unique flavors and experience chocolate like never before.
      </p>
      <a
        href="/chocolates"
        className="inline-block bg-[#a0522d] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#7a3e25] transition"
      >
        Explore Our Chocolates
      </a>
      <section className="mt-20 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-[#5a2a27]">Quality Ingredients</h3>
          <p className="text-[#7a5a53]">
            We source the best cocoa, nuts, and natural flavors to craft each bar.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-[#5a2a27]">Handmade with Care</h3>
          <p className="text-[#7a5a53]">
            Every chocolate is made by hand, ensuring attention to detail and quality.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-[#5a2a27]">Sustainable & Ethical</h3>
          <p className="text-[#7a5a53]">
            Supporting fair trade and sustainable practices for a better world.
          </p>
        </div>
      </section>
    </main>
  );
}
