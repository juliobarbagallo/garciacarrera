import React from "react";
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Mantengase en contacto!</h4>
              {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Encuentrenos en las siguientes redes sociales.
              </h5> */}
              <div className="mt-6 lg:mb-0 mb-6">
              {/* <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex flex-col items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                onClick={() => {
                  const phoneNumber = '1135612774';
                  const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
                  window.open(url, '_blank');
                }}
              >                 
                  <FaWhatsapp style={{ fontSize: '2rem', color: 'green' }} />
                </button> */}
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex flex-col items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => {
                    const instagramAccount = 'Garciacarreraehijos'; 
                    const url = `https://www.instagram.com/${instagramAccount}`;
                    window.open(url, '_blank');
                  }}
                >
                  {/* <FaInstagram style={{ fontSize: '2rem', }} /> */}
                  <Image
                      src="/img/instagram.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                </button>

                {/* <Image
                      src="/img/instagram.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    /> */}

                {/* <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button> */}
                {/* <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button> */}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Enlaces de utilidad
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                      >
                        Github
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                      >
                        Free Products
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Otros
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        link1
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terminos y condiciones
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Politica de privacidad
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                      >
                        Contact Us
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Garcia Carrera
                {/* <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a> */}
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
