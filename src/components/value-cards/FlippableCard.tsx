
import React, { useState } from 'react';

import { ArrowLeft } from 'lucide-react';

import Image, { StaticImageData } from 'next/image';

// Define the shape of the 'item' prop
interface CarouselItem {
  title: string;
  description: React.ReactNode; // Now supports rich text
  image?: string | StaticImageData;
  customContent?: React.ReactNode;
}

interface FlippableCardProps {
  item: CarouselItem;
}

export function FlippableCard({ item }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // This wrapper div provides the 3D perspective
  return (
    <div className="[perspective:1000px] h-full">
      {/* This inner div is what actually flips. Shadow is set to shadow-2xl */}
      <div
        className={`relative h-full w-full rounded-xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
      >
        {/* --- FRONT OF THE CARD --- */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="flex h-full flex-col rounded-xl bg-white relative overflow-hidden">
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] pointer-events-none"></div>
            <div className="relative z-10 flex h-full flex-col justify-center py-8 px-12 text-center pt-[8px] pb-[8px]">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              {item.customContent ? (
                <div className="mb-4 flex justify-center w-full">
                  {item.customContent}
                </div>
              ) : item.image ? (
                <div className="mb-4 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[165px] w-auto max-w-full object-contain"
                  />
                </div>
              ) : null}
              <p className="flex-grow text-lg text-gray-600 mb-6">{item.description}</p>

              {/* "Learn More" button (mt-auto) will now work */}
              <button
                onClick={() => setIsFlipped(true)}
                className="mt-auto inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* --- BACK OF THE CARD --- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Padding is set to py-8 px-12 */}
          <div className="flex h-full flex-col rounded-xl bg-gray-100 py-8 px-12 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              More about {item.title}
            </h4>
            <p className="flex-grow text-gray-600 mb-6">
              {/* You can add more detailed content here */}
              This is the back of the card, where you can add more in-depth
              information, charts, or links.
            </p>
            {/* This button will flip it back */}
            <button
              onClick={() => setIsFlipped(false)}
              className="mt-auto inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
