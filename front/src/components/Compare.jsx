import React from "react";

const Compare = () => {
  return (
    <section className="body-font" id="compare">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-12 px-6 text-3xl font-bold text-center">
            Eau distillée et déminéralisée
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Vous voulez connaître la différence entre{" "}
            <span className="text-blue-500">
              {" "}
              l’eau distillée et l’eau déminéralisée
            </span>{" "}
            ?
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded p-4">
              <div className=" flex  h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-2xl font-medium">Eau déminéralisée</span>
              </div>
              <p>
                L’eau  Afaldis est une eau déminéralisée ayant une
                conductivité inférieure à 1.00 µS/cm.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded p-4">
              <div className=" flex  h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-2xl font-medium">
                  Eau déminéralisée plus
                </span>
              </div>
              <p>
                Péremption au terme de 1 an.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded p-4">
              <div className=" flex  h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-2xl font-medium">
                  Industrie et Usage domestique
                </span>
              </div>
              <p>
                Eau optimale aussi bien pour l’industrie pharmaceutiques et cosmétiques et cabinets dentaires.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded p-4">
              <div className=" flex  h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-2xl font-medium">
                  Grande qualité et contrôle
                </span>
              </div>
              <p>
                Notre processus de production est de grande qualité et contrôle,
                et il est accrédité par le certificat ISO 9001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
