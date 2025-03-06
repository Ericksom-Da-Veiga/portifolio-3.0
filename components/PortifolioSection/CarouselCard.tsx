"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselCard({
  image1,
  image2,
  image3,
}: {
  image1: string;
  image2: string;
  image3: string;
}) {
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

  const images = [image1, image2, image3];

  return (
    <Carousel className="max-h-[45rem] border-0" orientation="horizontal">
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card className="">
                <CardContent className=" flex aspect-square justify-center">
                  <span>
                    <Image src={img} alt="Image" width={500} height={500} />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
