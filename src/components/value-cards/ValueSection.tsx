import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Link } from 'next-view-transitions';
import { ArrowRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  description: React.ReactNode;
  image?: string | StaticImageData;
  customContent?: React.ReactNode;
  href?: string;
}

interface ValueSectionProps {
  item: CarouselItem;
}

export function ValueSection({ item }: ValueSectionProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16 md:py-24 px-4">
      {/* Icon / Image Area */}
      {item.customContent ? (
        <div className="mb-6 flex justify-center w-full">
          {item.customContent}
        </div>
      ) : item.image ? (
        <div className="mb-6 flex justify-center">
          <Image
            src={item.image}
            alt={item.title}
            className="h-32 w-auto object-contain"
          />
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {item.title}
      </h3>

      {/* Description */}
      <div className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
        {item.description}
      </div>

      {/* Learn More Link */}
      {item.href ? (
        <Link
          href={item.href as any}
          className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <button className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors group">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
