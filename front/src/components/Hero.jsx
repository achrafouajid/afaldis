import React from "react";

const Hero = () => {
  return (
    <section className="dark:text-gray-100 relative" id="hero">
      {/* Image as background */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/adescosa.jpg"
        alt=""
      />

      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">
          Anfale Distribution
        </h1>
        <h1 className="text-4xl font-bold leadi sm:text-5xl mt-6">Afaldis</h1>
        <p className="px-8 mt-8 mb-12 text-2xl font-bold">
          Spécialiste dans la production et distribution de l'eau déminéralisée
          distillée et traitement des Eaux
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            className="text-white bg-blue-500 border-0 px-8 py-3 m-2 focus:outline-none hover:bg-blue-600 rounded text-lg"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Acheter eau distillée
          </button>
          <button
            className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-blue-500"
            onClick={() =>
              document
                .getElementById("compare")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Apprendre plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
