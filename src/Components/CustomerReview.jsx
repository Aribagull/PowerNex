import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const reviews = [
  {
    name: "Emily Moledorf",
    text: `It's rare to find a store with such a diverse range of popular and quality products. I’ve purchased from tech gadgets to home decor, and everything’s been impressive.`,
    image: "https://plus.unsplash.com/premium_photo-1673984261102-7e44ace8745a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8", 
  },
  {
    name: "John Doe",
    text: `I love how easy it is to shop here! The products are amazing quality and delivery is always super quick. Highly recommended!`,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Sarah Walker",
    text: `Great experience every time I order. Excellent customer service, secure payment and fast shipping. Couldn’t ask for more!`,
    image: "https://plus.unsplash.com/premium_photo-1661538838831-d3833d9f22d3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-2 left-4 sm:left-32 bg-transparent z-10 text-xl"
    onClick={onClick}
  >
    <AiOutlineLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-2 left-16 sm:left-40 bg-transparent z-10 text-xl"
    onClick={onClick}
  >
    <AiOutlineRight />
  </button>
);

export default function CustomerReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#fef4e9] w-full py-16 my-5 px-4 sm:px-8 font-lora">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
              
              <div className="w-full lg:w-1/2 px-4 sm:px-8 py-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Why Our Customers Love Us
                </h3>
                <div className="flex space-x-1 my-6 text-[#FFB400]">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <p className="text-2xl sm:text-3xl md:leading-[50px] text-gray-700 mb-6">
                  {review.text}
                </p>
                <p className="text-sm font-medium text-gray-700">{review.name}</p>
              </div>

              <div className="w-full lg:w-1/2 px-4 sm:px-8 py-6 mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-lg w-full sm:w-[90%] h-64 sm:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
