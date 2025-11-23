import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CustomChocolateCreator from "../components/CustomChocolateWizard";
import Footer from "../components/Footer";

export default function CreateChocolatePage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      <Header />

      <main className="py-12 px-6">
        <HeroSection
          title="Create Your Custom Chocolate Bar"
          description="Select your chocolate base and up to 3 premium ingredients to craft your perfect bar"
        />

        <CustomChocolateCreator />
      </main>

      <Footer />
    </div>
  );
}