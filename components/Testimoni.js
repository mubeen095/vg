import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Anil Mehta",
      image: "/assets/people-1.png",
      city: "HR Manager",
      rating: "4.5",
      testimoni:
        "Skill Garage's tailor-made hiring solutions in the technology sector have been a game-changer for us. They quickly understood our needs and provided us with top-notch candidates. Their permanent recruitment service has saved us time and effort. Skill Garage is our trusted partner for tech talent.",
    },
    {
      name: "Sneha Gupta",
      image: "/assets/people-2.png",
      city: "VP, Finance",
      rating: "4.3",
      testimoni:
        "We've relied on Skill Garage for permanent recruitment in the finance domain. Their expertise in finance shared services recruitment is evident in the quality of candidates they deliver. Their service is efficient and professional, making them our preferred choice for finance talent.",
    },
    {
      name: "Rohit Verma",
      image: "/assets/people-3.png",
      city: "Head of Operations",
      rating: "4.4",
      testimoni:
        "Skill Garage's IT staffing service has been a boon for our digital transformation projects. They consistently provide us with skilled IT professionals who have added immense value to our initiatives. Skill Garage's IT staffing is seamless and reliable.",
    },
    {
      name: "Pooja Sharma",
      image: "/assets/people-4.png",
      city: "HR Director",
      rating: "4.3",
      testimoni:
        "Skill Garage's temporary staffing solution has been a lifesaver during our peak sales seasons. They source experienced sales professionals quickly, helping us manage high demand effectively. Skill Garage has become our go-to for temporary staffing needs.",
    },
    {
      name: "Manoj Patel",
      image: "/assets/people-5.png",
      city: "CIO",
      rating: "4.6",
      testimoni:"We've partnered with Skill Garage for engineering recruitment, and their executive search service has been outstanding. They've connected us with experienced engineers who have made a significant impact on our projects. Skill Garage is our trusted ally in engineering talent acquisition.",
    },
    {
      name: "Ritu Singh",
      image: "/assets/people-6.png",
      city: "Chief People Officer",
      rating: "4.8",
      testimoni: "Skill Garage's RPO service has revolutionized our HR recruitment process. They've handled end-to-end recruitment efficiently, allowing our HR team to focus on strategic initiatives. Skill Garage's expertise in human resource recruitment is unmatched, making them our preferred choice.",
    }
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-purple-600 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-purple-600 border hover:bg-purple-600 hover:text-white-500 transition-all text-purple-600 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-purple-600 border hover:bg-purple-600 hover:text-white-500 transition-all text-purple-600 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
