import Title from "./Title";
import { tourCards } from "./Data";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstPart="Featured" secondPart="Tours" />
      <div className="section-center featured-center">
        {tourCards.map((card) => {
          return (
            <TourCard key={card.id} {...card} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
