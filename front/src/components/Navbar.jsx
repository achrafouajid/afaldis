import React, { useState } from "react";
import { FaStore, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar-1">
        <div className="logo">
          <img src="images/afaldis.png" alt="Afaldis Logo" />
        </div>
        <div className="nav">
          <ul className="menu">
            <li>
              <FaPhoneAlt className="icon" />
              <span className="nav-text">
                <a href="tel:+212 522 35 99 25">+212 522 35 99 25</a>
              </span>
            </li>
            <li>
              <IoIosMail className="icon" />
              <span className="nav-text">
                <a href="mailto:Steafaldis@gmail.com"> Steafaldis@gmail.com</a>
              </span>
            </li>
            <li>
              <TiSocialLinkedin className="icon" />

              <span className="nav-text">
                <a href=" https://www.linkedin.com/in/anfale-distribution-afaldis-sarl-39828682/">
                  LinkedIn
                </a>
              </span>
            </li>
            <li className="dropdown">
              <IoLanguage className="icon" />
              <span className="nav-text">Français</span>
              <span style={{ paddingLeft: "5px" }} className="arrow-down-icon">
                <IoIosArrowDown />
              </span>
              <div className="dropdown-content">
                <a href="#">English</a>
                <a href="#">العربية</a>
                <a href="#">Español</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-2">
        <nav>
          <ul>
            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("hero")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Afaldis
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("presentation")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("section1")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Principes & Valeurs
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("compare")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                eaux déminéralisée-distillée
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("products")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Nos Produits
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                contactez-nous
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
