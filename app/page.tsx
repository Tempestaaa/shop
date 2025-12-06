import BestsellersCard from "@/components/pages/home/bestsellers-card";
import BookCarousel from "@/components/pages/home/book-carousel";
import HeroCard from "@/components/pages/home/hero-card";
import PromotionCard from "@/components/pages/home/promotion-card";
import SalesCard from "@/components/pages/home/sales-card";

export default function HomePage() {
  return (
    <article className="grid grid-cols-12 gap-4 py-4">
      <HeroCard />
      <BestsellersCard />
      <PromotionCard />
      <BookCarousel />
      <SalesCard />
    </article>
  );
}
