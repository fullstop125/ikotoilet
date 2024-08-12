"use client";

import { useRef, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import Image from "next/image";

const Gallery = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/02/14/27/toilet-3368695_960_720.jpg"
          className="w-full h-full object-cover"
          fill
          quality={100}
          alt="Toilet"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/02/14/27/toilet-3368695_960_720.jpg"
          className="w-full h-full object-cover"
          fill
          quality={100}
          alt="Toilet"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/02/14/27/toilet-3368695_960_720.jpg"
          className="w-full h-full object-cover"
          fill
          quality={100}
          alt="Toilet"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/02/14/27/toilet-3368695_960_720.jpg"
          className="w-full h-full object-cover"
          fill
          quality={100}
          alt="Toilet"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/02/14/27/toilet-3368695_960_720.jpg"
          className="w-full h-full object-cover"
          fill
          quality={100}
          alt="Toilet"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
