import { Star } from "lucide-react";

const reviews = [
  { name: "Alex M.", text: "Incredibly fast delivery. My website was done in under 2 hours and looked amazing." },
  { name: "Sarah K.", text: "Professional work at an unbeatable price. Highly recommend EK Development." },
  { name: "James R.", text: "The attention to detail was impressive. Every pixel was perfect." },
  { name: "Emily T.", text: "Got my business site up and running same day. Couldn't be happier." },
  { name: "Michael D.", text: "Clean code, responsive design, great communication throughout." },
  { name: "Lisa W.", text: "Third project together and the quality keeps getting better." },
  { name: "Chris P.", text: "My app came out better than I imagined. Smooth process from start to finish." },
  { name: "Nina S.", text: "The animations and design made my portfolio stand out from the crowd." },
  { name: "David L.", text: "Fast, affordable, and professional. The trifecta of web development." },
  { name: "Rachel B.", text: "Turned my rough idea into a polished product. Exceptional skill." },
  { name: "Tom H.", text: "My e-commerce site looks premium. Customers love the design." },
  { name: "Jessica F.", text: "Best investment for my small business. The site pays for itself." },
  { name: "Ryan O.", text: "Quick turnaround and the final result exceeded all expectations." },
  { name: "Amanda G.", text: "Clean, modern, and exactly what I asked for. Five stars all around." },
  { name: "Kevin C.", text: "The mobile responsiveness is flawless. Works perfectly on every device." },
  { name: "Maria J.", text: "Second time ordering and still blown away by the quality and speed." },
  { name: "Brandon Y.", text: "Professional communication and delivered ahead of schedule." },
  { name: "Stephanie N.", text: "My landing page converts way better now. Great design instincts." },
];

const ReviewCard = ({ name, text }: { name: string; text: string }) => (
  <div className="flex-shrink-0 w-[300px] rounded-xl border border-border bg-card p-5">
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-secondary-foreground mb-3 leading-relaxed">"{text}"</p>
    <p className="text-xs font-semibold text-foreground">{name}</p>
  </div>
);

const ReviewCarousel = () => {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((r, i) => (
          <ReviewCard key={i} name={r.name} text={r.text} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
