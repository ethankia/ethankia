import SectionHeading from "@/components/SectionHeading";
import ReviewCarousel from "@/components/ReviewCarousel";

const ReviewsPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-4">
      <SectionHeading title="Client Reviews" subtitle="See what our clients have to say about working with us." />
    </div>
    <ReviewCarousel />
  </div>
);

export default ReviewsPage;
