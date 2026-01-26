import { Quote, Star } from "lucide-react";

function ReviewCard({ review }: any) {
  return (
    <div className="group p-8 bg-zinc-950 border border-zinc-900 hover:border-pink-500/20 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between">
      <Quote className="absolute -top-2 -right-2 w-16 h-16 text-white/[0.02] group-hover:text-pink-500/5 transition-colors" />

      <div>
        <div className="flex justify-center md:justify-start gap-1 mb-6">
          {[...Array(review.stars)].map((_, i) => (
            <Star key={i} size={10} className="fill-pink-500 text-pink-500" />
          ))}
        </div>

        <p className="text-zinc-400 italic mb-8 leading-relaxed text-[15px] text-center md:text-left">
          "{review.text}"
        </p>
      </div>

      <div className="text-center md:text-left border-t border-white/5 pt-6">
        <p className="text-white font-bold tracking-[0.2em] uppercase text-[11px]">
          {review.name}
        </p>
        <p className="text-zinc-600 text-[9px] uppercase tracking-widest mt-1">
          {review.role}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
