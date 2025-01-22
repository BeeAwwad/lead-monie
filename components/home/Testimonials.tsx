import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto py-20 md:py-24 lg:py-36">
        <h2 className="mb-5 px-4 text-center text-3xl font-medium sm:text-4xl md:mb-10 md:text-5xl lg:mb-20">
          Words From Satisfied Nigerians
        </h2>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
