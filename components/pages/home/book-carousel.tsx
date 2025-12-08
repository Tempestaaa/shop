"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from "@/components/shared/book-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookCarousel() {
  const slides = Array.from({ length: 6 }, (_, id) => (
    <SwiperSlide key={id} className="*:h-full">
      <BookCard />
    </SwiperSlide>
  ));

  return (
    <section className="col-span-5 bg-card rounded-md overflow-hidden relative">
      <Swiper
        slidesPerView={2.4}
        spaceBetween={14}
        className="h-full"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: "#prev-btn",
          nextEl: "#next-btn",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
      >
        {slides}
      </Swiper>

      <Button
        id="prev-btn"
        variant="secondary"
        size="icon-lg"
        className="rounded-full absolute top-1/2 -translate-y-1/2 left-2 z-50"
      >
        <ChevronLeft />
      </Button>
      <Button
        id="next-btn"
        variant="secondary"
        size="icon-lg"
        className="rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-50"
      >
        <ChevronRight />
      </Button>
    </section>
  );
}
