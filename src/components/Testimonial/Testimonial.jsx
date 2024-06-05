import React from "react";
import Slider from "react-slick";
import BgImage from "../../app/assets/testimonial.png";
import { BiFace, BiSolidFlagCheckered } from "react-icons/bi";
import Image from "next/image";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ali",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Reza",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "James",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  // slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScrool: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScrool: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScrool: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScrool: 1,
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray800/90 py-14 dark:text-white">
        <div className="container">
          {/* headre section */}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold ">Testimonials</h1>
          </div>

          {/* testemonial card section */}
          <div data-aos="zoom-in">
  <Slider {...settings}>
    {TestimonialData.map(({ id, name, text, img }) => {
      return (
        <div key={id} className="my-6">
          <div className="flex felx-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative">
            {/* content section */}
            <div className="flex flex-col gap-4">
              <p className="text-xs">{text}</p>
              {/* Move the h1 element inside the space-y-2 div */}
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-black/60 dark:text-primary font-cursive">
                  {name}
                </h1>
                <p className="text-sm font-bold text-black/45 dark:text-white">
                  Developer
                </p>
              </div>
            </div>
            {/* Image section */}
            <div className="flex items-center gap-4">
              <img
                src={img}
                alt={name}
                className="rounded-full w-16 h-16"
              />
            </div>
          </div>
        </div>
      );
    })}
  </Slider>
</div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
