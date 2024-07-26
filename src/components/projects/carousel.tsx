"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FC, Suspense, useState } from "react";
import { Image as sanityImage } from "sanity";

interface CarouselProps {
  images: sanityImage[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<string>(
    urlForImage(images[0])
  );
  return (
    <div className="space-y-2 ">
      <Image
        src={currentImage}
        width={320}
        height={320}
        className="w-full max-h-[30rem] shadow-md"
        alt={"current image"}
      />
      <div className=" grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Suspense key={index} fallback={<Loader2 />}>
            <div className="w-full max-h-28 overflow-hidden">
              <Image
                src={urlForImage(image)}
                width={120}
                height={120}
                alt="image"
                className="opacity-60 hover:opacity-100 cursor-pointer transition"
                onClick={()=>{setCurrentImage(urlForImage(image))}}
              />
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
