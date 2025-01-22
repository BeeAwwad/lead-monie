"use client";

import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Bob Smith",
    role: "Designer, CreativeCo",
    content:
      "I've never used a more intuitive and powerful tool. It's a game-changer.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Carol Williams",
    role: "Marketing Manager, BrandBoost",
    content:
      "Our team's productivity has soared since we started using this. Amazing!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Brown",
    role: "CTO, InnovateTech",
    content:
      "The support team is fantastic, and the product itself is top-notch.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Eva Martinez",
    role: "Freelance Developer",
    content:
      "This tool has streamlined my projects and improved client satisfaction.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  content,
  avatar,
}) => (
  <div className="flex min-h-full w-full flex-shrink-0 flex-col space-y-4 rounded-lg border bg-white p-6">
    <div className="flex items-center border-b">
      <Image
        src={avatar || "/placeholder.svg"}
        alt={name}
        className="size-20 rounded-full"
        width={100}
        height={100}
      />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-slate-600">{role}</p>
      </div>
    </div>

    <p className="text-sm text-slate-700">{content}</p>
  </div>
);

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="px-4"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index + 1} {...testimonial} />
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
