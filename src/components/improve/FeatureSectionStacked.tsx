"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export interface StackedFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  image: string;
  imageAlt: string;
  isAnimated?: boolean;
  badge?: string;
  highlightCallout?: boolean;
  /** Aspect ratio as width/height (e.g., 16/9 = 1.78) */
  aspectRatio?: number;
}

interface FeatureSectionStackedProps {
  feature: StackedFeature;
}

export function FeatureSectionStacked({ feature }: FeatureSectionStackedProps) {
  // Default to 16:10 if not specified
  const aspectRatio = feature.aspectRatio ?? 1.6;

  return (
    <section id={feature.id} className="mt-16">
      {/* Image - Full Width */}
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-3 sm:p-4 overflow-hidden">
        <Zoom>
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio }}
          >
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              className="object-contain cursor-zoom-in"
              loading="lazy"
              unoptimized={feature.isAnimated}
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </Zoom>
      </div>

      {/* Text Content - Below Image */}
      <div className="mt-6 max-w-3xl">
        {feature.badge && (
          <div className="inline-block bg-brand-100 text-brand-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {feature.badge}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-neutral-900">
          {feature.title}
        </h2>
        <p className="text-lg text-neutral-700 mb-4">{feature.tagline}</p>
        <p
          className="text-neutral-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: feature.description }}
        />

        <div
          className={`mt-5 p-4 border border-dashed rounded-xl text-sm ${
            feature.highlightCallout
              ? "border-brand-300 bg-brand-50 text-brand-800"
              : "border-neutral-300 bg-neutral-50 text-neutral-600"
          }`}
        >
          <strong
            className={`font-semibold ${feature.highlightCallout ? "" : "text-neutral-900"}`}
          >
            Why it matters:
          </strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: feature.whyItMatters }} />
        </div>
      </div>
    </section>
  );
}
