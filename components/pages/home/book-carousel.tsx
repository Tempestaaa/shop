"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from "@/components/shared/book-card";

export default function BookCarousel() {
  const slides = Array.from({ length: 6 }, (_, id) => (
    <SwiperSlide key={id} className="*:h-full">
      <BookCard />
    </SwiperSlide>
  ));

  return (
    <section className="col-span-5 bg-card rounded-md overflow-hidden">
      <Swiper
        slidesPerView={2.4}
        spaceBetween={14}
        className="h-full relative"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
      >
        {slides}
      </Swiper>
    </section>
  );
}
