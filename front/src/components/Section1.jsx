import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="container mx-auto mt-8" id="section1">
        <h2 className="mb-12 px-6 text-3xl font-bold text-center">
          Nos Principes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/controle.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Contrôle</h2>
            </div>
            <p>
              Notre site est équipé d’un système de contrôle de paramètres
              automatisé et informatisé pour un contrôle périodique (chaque 7
              jours) par LPEE.
            </p>
          </div>
          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/rapidite.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Rapidité</h2>
            </div>
            <p>
              Nous disposons d’un site propre de traitement et fabrication pour
              un service rapide et efficace. Nous nous adaptons à tous les types
              et tailles de clients.
            </p>
          </div>
          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/purete.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Pureté</h2>
            </div>
            <p>
              Nous produisons de l’eau de grande qualité en respectant tous les
              standards et réglementations.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/durable.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">
                Développement durable
              </h2>
            </div>
            <p>
              Nous produisons en recherchant toujours l’utilisation minimum de
              ressources et le plus faible impact environnemental possible.
            </p>
          </div>
        </div>

        <h2 className="mb-12 px-6 text-3xl font-bold text-center">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/qualite.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Qualité</h2>
            </div>
            <p>
              Nous fabriquons et distribuons eau déminéralisée et d’autres types
              d’eau de haute qualité garantie.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/expertise.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Expertise</h2>
            </div>
            <p>
              On a une expérience de 35 ans dans l'industrie, ce qui nous a
              permis de développer une expertise solide.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/satisfaction.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">
                Satisfaction Client
              </h2>
            </div>
            <p>
              La satisfaction de nos clients est notre priorité absolue. On fait
              tout notre possible pour comprendre leurs besoins spécifiques et
              leur fournir des solutions adaptées.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <img src="/images/livraison.png" className="w-20 h-20 m-3" />
              <h2 className="text-xl font-bold text-center mb-2">Livraison</h2>
            </div>
            <p>
              Nous avons mis en place un système de logistique efficace qui
              garantit que nos produits arrivent à destination dans les délais
              les plus courts possibles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
