import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="text-center">
      <div className="relative w-1/2 mx-auto h-screen overflow-hidden">
        <button
          className="absolute top-1/2 left-4 bg-gray-500 text-white p-2 rounded-full z-10 hover:bg-gray-700 -translate-y-72"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="relative w-full h-1/2 overflow-hidden flex">
          <div className="w-full h-full">
            <img
              style={{ height: "100%" }}
              className="w-full transition-transform duration-300"
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-700 to-gray-500 bg-opacity-30 p-4">
            <h3 className="text-3xl font-bold text-white">
              {items[currentIndex].title}
            </h3>
            <p className="text-lg text-white">
              {items[currentIndex].description}
            </p>
          </div>
        </div>
        <button
          className="absolute top-1/2 right-4 bg-gray-500 text-white p-2 rounded-full z-10 hover:bg-gray-700 -translate-y-72"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const carouselItems = [
    {
      title: "Item 1",
      description: "Description for Item 1",
      image: "images/product-1.jpg",
    },
    {
      title: "Item 2",
      description: "Description for Item 2",
      image: "images/product-2.jpg",
    },
    {
      title: "Item 3",
      description: "Description for Item 3",
      image: "images/product-3.jpg",
    },
    {
      title: "Item 4",
      description: "Description for Item 4",
      image: "images/product-4.png",
    },
  ];

  return <Carousel items={carouselItems} />;
};

export default CarouselComponent;
