import React from "react";

const Industry = () => {
  const industries = [
    {
      image: "/images/industry-1.jpg",
      title: "Secteur Automobile",
    },
    {
      image: "/images/industry-2.jpg",
      title: "Industrie Pharmaceutique",
    },
    {
      image: "/images/industry-3.jpg",
      title: "Industrie Technique",
    },
    {
      image: "/images/industry-4.jpg",
      title: "Industrie Agricole",
    },
    {
      image: "/images/industry-5.jpg",
      title: "Remplissage Private Label",
    },
    {
      image: "/images/industry-6.webp",
      title: "Industrie Cosmétique",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl flex flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="mb-12 px-6 text-3xl font-bold text-center">
        Nos Secteurs
      </h2>
      <div className="grid gap-4  grid-cols-2 lg:grid-cols-3">
        {industries.map((e, index) => (
          <div
            key={e.title}
            className="col-span-1 group rounded-lg overflow-hidden relative grid last: "
          >
            <div className="aspect-square  w-full overflow-hidden">
              <img
                className="object-cover group-hover:scale-105 transition-all w-full h-full"
                src={e.image}
                alt=""
              />
            </div>
            <div className=" flex-col justify-end flex bg-gradient-to-b p-4 from-transparent to-sky-900 via-sky-900/50  items-end absolute inset-0  font-bold tracking-tight ">
              <div className=" mb-4 w-full text-2xl font-bold text-white    ">
                {e.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
