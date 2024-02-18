import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      qte: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container my-12 mx-auto px-2 md:px-4" id="contact">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Nous Contacter</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <form
            className="mb-12 md:mb-0 md:w-5/12 lg:px-6"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-blue-600"
                htmlFor="name"
              >
                Nom Prénom
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Nom complet"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-blue-600"
                htmlFor="companyName"
              >
                Nom de société
              </label>
              <input
                type="Nom de société"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="companyName"
                onChange={formik.handleChange}
                value={formik.values.company}
                placeholder="Entrez votre nom de société"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-blue-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Entrez votre addresse mail"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-blue-600"
                htmlFor="qte"
                placeholder="Entrez la quantité eblue-600"
              >
                Quantité en Litres
              </label>
              <input
                type="number"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="qte"
                onChange={formik.handleChange}
                value={formik.values.qte}
                placeholder="Entrez la quantité en litres"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-blue-600"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                name="message"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mb-6 inline-block w-full rounded bg-blue-500 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>

          <div className="w-full md:w-7/12 lg:px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start mb-10">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-3 font-bold"> Téléphone</p>

                    <p className="mb-3">
                      Tel :
                      <a
                        href="tel:+212 522 34 30 17"
                        className="text-blue-700 underline "
                      >
                        +212 522 34 30 17
                      </a>
                      <p className="">
                        Tel :
                        <a
                          href="tel:+212 522 35 99 25"
                          className="text-blue-700 underline "
                        >
                          +212 522 35 99 25
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">E-mail</p>
                    <a
                      href="mailto:Steafaldis@gmail.com"
                      className="text-blue-700 underline "
                    >
                      Steafaldis@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
