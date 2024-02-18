import React from "react";

const Product = () => {
  const products = [
    {
      name: "Fût moins de 20L",
      description: "Pour toute quantité en dessous de 20 litres",
      imagePath: "/images/product-1.jpg",
    },
    {
      name: "Fûts de 20L – 25L – 210 L",
      description: "Pour toute quantité comprise entre 20 et 200 litres",
      imagePath: "/images/product-2.jpg",
    },
    {
      name: "Conteneur 1000L",
      description: "Capacité de 1000 litres",
      imagePath: "/images/product-3.jpg",
    },
    {
      name: "Eau en Citerne",
      description: "Service de livraison d'eau distillée en citernes",
      imagePath: "/images/product-4.png",
    },
  ];
  return (
    <div className="container mx-auto mt-8" id="products">
      <h2 className="mb-12 px-6 text-3xl font-bold text-center">
        Nos Produits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={product.imagePath}
              alt={product.name}
              className="w-full h-72 rounded-t-lg object-fill"
            />

            <div className="p-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>

              <p className="text-gray-600 mb-4 truncate">
                {product.description}
              </p>

              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Acheter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
