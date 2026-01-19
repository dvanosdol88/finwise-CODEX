"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface HeroImageProps {
  src: string;
  alt: string;
  caption: string;
}

export function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-sm border border-neutral-200 p-4 sm:p-6 max-w-4xl mx-auto overflow-hidden">
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={500}
          className="w-full h-auto rounded-lg cursor-zoom-in"
          loading="eager"
          unoptimized
        />
      </Zoom>
      <p className="mt-3 text-sm text-neutral-500 text-center">{caption}</p>
    </div>
  );
}
