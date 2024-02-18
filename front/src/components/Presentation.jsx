import React from "react";

const Presentation = () => {
  return (
    <section className="body-font" id="presentation">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-12 px-6 text-3xl font-bold text-center">
            Qui sommes-nous ?
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Afaldis filliale prospère de la Société Atbir sarl qui a créé en
            2012 . C'est grâce à la vision et à l'expertise d'Atbir que Afaldis
            a pu voir le jour et devenir une entreprise prospère dans la
            production d'eau déminéralisée de haute qualité. Atbir a joué un
            rôle essentiel dans le développement et la croissance d'Afaldis, en
            lui offrant les ressources et le soutien nécessaires pour devenir un
            leader de la production d’eau déminéralisée . C'est une relation
            solide entre les deux sociétés, avec Atbir en tant que société mère
            .
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Notre Mission
              </h2>
              <p className="leading-relaxed text-base">
                Notre mission principale, c'est de répondre aux besoins de nos
                clients en leur offrant une eau déminéralisée de qualité
                supérieure. Pour y arriver, on utilise des technologies avancées
                pour enlever les impuretés et les minéraux indésirables, et
                ainsi garantir une eau excellente. La satisfaction de nos
                clients est notre priorité absolue. On fait tout notre possible
                pour comprendre leurs besoins spécifiques et leur fournir des
                solutions adaptées. Notre équipe dévouée est là pour répondre à
                toutes leurs questions et les accompagner tout au long du
                processus. On est fiers de la confiance que nos clients nous
                accordent et on s'engage à maintenir des normes élevées de
                qualité et de service.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Expérience
              </h2>
              <p className="leading-relaxed text-base">
                On a une expérience de 35 ans dans l'industrie, ce qui nous a
                permis de développer une expertise solide. On est toujours à
                l'affût des dernières avancées technologiques et des meilleures
                pratiques pour améliorer constamment nos processus de
                production. Notre engagement envers l'innovation nous permet de
                rester à la pointe de l'industrie de l'eau déminéralisée.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Nos Valeurs
              </h2>
              <p className="leading-relaxed text-base">
                Chez Afaldis, on est guidés par des valeurs telles que
                l'intégrité, la transparence et le respect de l'environnement.
                On s'engage à opérer de manière responsable et durable, en
                minimisant notre impact sur l'environnement. La préservation des
                ressources naturelles est une priorité pour nous. En résumé,
                Afaldis est une entreprise familiale qui se consacre à la
                production d'eau déminéralisée de haute qualité. On est fiers de
                notre expertise de 35 ans, de notre engagement envers
                l'innovation et de notre service client exceptionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
