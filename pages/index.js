import React, { useEffect } from "react";
import { GiChampions, GiRelationshipBounds, GiFarmTractor } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { MdOutlineHomeRepairService, MdFamilyRestroom } from "react-icons/md";
import { BsFillRocketTakeoffFill, BsFillCarFrontFill, BsFillPersonCheckFill, BsFillBuildingFill,
  BsFillBriefcaseFill } from "react-icons/bs";
import { VscWorkspaceTrusted, VscLaw } from "react-icons/vsc";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatarImg from '../public/img/gc.png'
import logo from '../public/img/garciacarrera-logo.png'
import Link from "next/link";

import AOS from 'aos';
import 'aos/dist/aos.css';

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false, 
    });
    AOS.refresh();
  });
  
  return (
    <>
    <div>
      <img src={logo.src} alt="Garcia Carrera logo" />
    </div>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Tu tranquilidad empieza con nosotros.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Brindamos soluciones a medida en materia de seguros.
                    Orientamos a Empresas, Pymes, flota de vehículos, comercios,
                     productores agrícolas, consorcios, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4" >
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-right">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">30 años de experiencia construyendo confianza</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Construimos confianza a lo largo de 30 años de experiencia en el sector de seguros. Nuestra dedicación constante 
                    a proporcionar soluciones personalizadas y servicio excepcional nos ha permitido establecer relaciones sólidas 
                    con nuestros clientes. Confíe en nuestra experiencia y disfrute de la 
                    tranquilidad de una compañía comprometida con su seguridad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center" data-aos="fade-down">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <GiChampions />
                    </div>
                    <h6 className="text-xl font-semibold">Trabajamos con compañias lideres</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Trabajamos en estrecha colaboración con compañías líderes en la industria para ofrecer a nuestros clientes 
                    soluciones de seguros de la más alta calidad. Nuestro compromiso con la excelencia nos impulsa a asociarnos 
                    con las principales aseguradoras, lo que nos permite brindar una amplia gama de opciones y coberturas 
                    adaptadas a las necesidades individuales de nuestros clientes. Al trabajar con estas compañías líderes, 
                    podemos garantizar la confiabilidad, estabilidad y respaldo necesarios para proteger lo que más valoran 
                    nuestros asegurados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center" data-aos="fade-left">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <TbRulerMeasure />
                    </div>
                    <h6 className="text-xl font-semibold">Servicios a la medida de tus necesidades</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Reconocemos que cada cliente es único y tiene requisitos específicos cuando se trata de seguros. Es por eso 
                    que nos esforzamos por adaptar nuestros servicios para brindarte soluciones personalizadas que se ajusten 
                    perfectamente a tu situación. Trabajamos de cerca para entender tus necesidades y diseñar un plan que te brinde la tranquilidad y 
                    la seguridad que mereces. Obtendrás un servicio excepcional y una atención individualizada para satisfacer tus 
                    requerimientos específicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto" data-aos="fade-right">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <MdOutlineHomeRepairService style={{ fontSize: '2.5rem', color: 'blue' }} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Coberturas
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-800">
                Comprendemos que al igual que las personas, cada empresa es única. Nuestro desafío es entender a fondo tu negocio para ofrecerte un servicio a 
                medida. Nos tomamos el tiempo necesario para conocer tus necesidades y desafíos específicos, lo que nos permite diseñar soluciones de seguros 
                personalizadas que se adapten perfectamente a tu empresa. Ya sea que requieras protección para tus activos, responsabilidad civil, seguro de empleados 
                o cualquier otra cobertura, nuestro enfoque "Taylor Made" garantiza que obtengas la protección adecuada y un servicio excepcional que respalde el éxito 
                continuo de tu negocio. Confía en nosotros para adaptarnos a tu empresa y brindarte la tranquilidad y seguridad que necesitas para avanzar con confianza en el mercado.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p> */}
                {/* <Link href="/">
                  <a href="#pablo" className="font-bold text-blueGray-700 mt-8">
                    Check Notus NextJS!
                  </a>
                </Link> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" data-aos="fade-left">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg " style={{ backgroundColor: "#094988" }}>
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4 my-important-class" style={{ backgroundColor: "#094988" }}>
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                      
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current"
                        style={{ color: "#094988" }}
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Taylor made
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Asi como las personas, cada empresa es distinta. Nuestro desafio es entender su negocio para 
                    brindarles un servicio taylor made.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/img/family-business.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <MdFamilyRestroom style={{ fontSize: '2.5rem', color: 'blue' }}/>
                  </div>
                  <h3 className="text-3xl font-semibold">Una empresa familiar</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Somos una empresa familiar con raíces arraigadas en la pasión y el compromiso generacional. Nos distinguimos por nuestros valores fundamentales de 
                  integridad, confianza y dedicación. Nos enorgullece ofrecer un enfoque cercano y personalizado, construyendo 
                  relaciones a largo plazo basadas en la confianza mutua..
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <BsFillRocketTakeoffFill style={{ fontSize: '1rem', color: 'black' }} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Impulsados por la pasión y el compromiso generacional.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <VscWorkspaceTrusted style={{ fontSize: '1rem', color: 'black' }} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Valores fundamentales: integridad, confianza y dedicación.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <GiRelationshipBounds style={{ fontSize: '1rem', color: 'black' }} />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Enfoque cercano y personalizado, construyendo relaciones basadas en la confianza mutua.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nos respaldan</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Las empresas #1.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/patronal.jpg"
                    className="shadow-lg mx-auto max-w-600-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-m font-bold">FEDERACION PATRONAL</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    En el año 1921 abría sus puertas FEDERACIÓN PATRONAL C.S.L. iniciando sus actividades con un objetivo concreto: brindar cobertura al personal obrero de las empresas que administraban sus fundadores
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button> */}
                      {/* <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button> */}
                      <button
                        className="bg-lightBlue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/experta.jpg"
                    className="shadow-lg mx-auto max-w-600-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-m font-bold">EXPERTA</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Nuestra mision es ofrecer un servicio de alta calidad, incorporando sostenidamente capacidades, habilidades y 
                    tecnologías que permitan establecer un claro liderazgo en la cobertura de riesgos laborales, otorgando seguridad 
                    y soluciones a nuestros clientes.
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button> */}
                      <button
                        className="bg-lightBlue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/provincia-art.jpg"
                    className="shadow-lg mx-auto max-w-600-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-m font-bold">PROVINCIA ART</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Trabajamos para proteger el trabajo de los otros, respaldando a las empresas, los organismos y las instituciones que hacen al 
                    crecimiento de nuestro país. Somos la Aseguradora de Riesgos del Trabajo del Grupo Provincia, n° 1 de la 
                    Provincia de Buenos Aires y una de las más importantes de la Argentina.
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button> */}
                      <button
                        className="bg-lightBlue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/galeno.jpg"
                    className="shadow-lg mx-auto max-w-600-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-m font-bold">GALENO ART</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Cuidamos la salud de tu trabajo, porque brindamos un respaldo real en el ámbito laboral, una cobertura 
                    integral e interdisciplinaria, con prevención - capacitación y gestión -, asesoramiento técnico y legal, 
                    calidad prestacional y calidad médica superior.
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button> */}
                      <button
                        className="bg-lightBlue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block " style={{ backgroundColor: "#094988" }}>
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
                className="fill-current"
                points="2560 0 2560 100 0 100"
                style={{ color: "#094988" }}
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                Coberturas
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Ofrecemos una amplia variedad de opciones de cobertura diseñadas específicamente para adaptarse a tus necesidades. Nuestro enfoque personalizado nos permite brindarte la protección adecuada para tus bienes y tu tranquilidad. Confía en nosotros para asegurar lo que más valoras.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <BsFillCarFrontFill />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Automotor
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                Asegura tu auto con nuestra cobertura automotor y viaja con total confianza. Nuestro objetivo es proteger tu vehículo y brindarte la tranquilidad que mereces en cada trayecto. Con nuestras opciones de cobertura, estarás respaldado ante cualquier imprevisto.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <BsFillPersonCheckFill />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Personales
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                Tanto sus bienes personales como su vida y la de su familia necesitan que usted les brinde seguridad. Brindamos coberturas personales y contamos con una amplia oferta de compañías.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <BsFillBuildingFill />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Consorcios y Comercios
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Administrar un edificio o un emprendimiento comercial implica la obligación de garantizar la seguridad a toda persona involucrada y proteger sus capitales de trabajo y patrimonio.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <BsFillBriefcaseFill />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Pymes y Empresas
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Como empresa se expone a múltiples riesgos que ocasionarían problemas de índole económico y financiero. Ofrecemos un plan de administración de riesgos para mantener su empresa segura.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <GiFarmTractor />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Agricolas
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Son conocidos los imprevistos que afectan en la mayoría de los casos el trabajo de toda una temporada. Por eso mismo creemos adecuado ofrecerle las compañías especialistas en el mercado agrícola y las coberturas que ofrecemos.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center" data-aos="flip-up">
                  <VscLaw />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Seguros Obligatorios
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Lo ayudamos a elegir la mejor compañía para lograr el cumplimiento de la obligación legal así como la incorporación de los beneficios que generen identificación y satisfacción de sus empleados.
                </p>
              </div>
              {/* <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Automotores
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                El seguro más completo para tu auto. Con Todo Riesgo tenés todas las coberturas en una sola póliza. La mejor opción sin dudas.
                </p>
              </div> */}
              
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 " style={{ backgroundColor: "#094988" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Pongase en contacto.
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete el siguiente formulario y nos estaremos comunicando a la brevedad.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nombre completo"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Ingrese su mensaje..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FloatingWhatsApp {...{accountName: "A. Garcia Carrera e Hijos SA", phoneNumber: "1135612774",
         avatar:avatarImg.src, statusMessage:"Disponible Lun a Vier de 09:00 a 18:00",
         chatMessage: "Hola, mi nombre es Garcia Carrera.",
         placeholder: "Mensaje"}}/>
      </main>
      <Footer />
    </>
  );
}
