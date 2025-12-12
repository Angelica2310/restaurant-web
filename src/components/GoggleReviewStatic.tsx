import Link from "next/link";
import { googleReviews } from "@/libs/reviews";

export default function GoogleReviewsStatic() {
  const { rating, total, googleReviewsUrl, highlights } = googleReviews;

  return (
    <section className="rounded-2xl bg-white/70 p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Google Reviews</h2>
          <p className="text-sm text-gray-600">
            ⭐⭐⭐⭐⭐ {rating} average • {total}+ reviews
          </p>
        </div>

        <Link
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium underline"
        >
          Read more on Google
        </Link>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {highlights.map((r) => (
          <figure key={r.name} className="rounded-xl bg-white p-4 shadow-sm">
            <blockquote className="text-sm text-gray-700">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-gray-900">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Review snippets are selected highlights. See all reviews on Google.
      </p>
    </section>
  );
}
