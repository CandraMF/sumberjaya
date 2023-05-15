/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// import Slider from "react-slick";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Map from "components/Maps/GoogleMaps";
import MapExample from "components/Maps/MapExample";

export default function Index() {
  const images = [
    "https://source.unsplash.com/JzxOS6RcnJ0",
    "https://source.unsplash.com/ai5u_R_vIIQ",
    "https://source.unsplash.com/peHNL7YfMFY",
  ];

  return (
    <>
      <IndexNavbar fixed />
      <section >
        <Splide
          className="h-screen overflow-hidden"
          options={{
            rewind: true,
            autoWidth: true,
            autoplay: true,
            hasAutoplayProgress: true,
            hasAutoplayControls: true
          }}
        >
          <SplideSlide className="w-full ">
            <img src={images[0]} alt="Image 1" className="w-full object-cover" />
          </SplideSlide>
          <SplideSlide className="w-full">
            <img src={images[1]} alt="Image 2" className="w-full object-cover" />
          </SplideSlide>
          <SplideSlide className="w-full">
            <img src={images[2]} alt="Image 2" className="w-full object-cover" />
          </SplideSlide>
        </Splide>
      </section>


      <section className="mt-48 md:mt-40 pb-40 relative bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/AssetSumber/alexander-cifuentes-mwlgCABPa_Y-unsplash.jpg"
                  className="w-full align-middle rounded-lg"
                />

              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-12/12 px-4">
                  <div className="relative flex flex-col justify-center align-middle">
                    <div className="px-4 flex-auto">
                      {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div> */}
                      <h3 className="text-3xl font-bold text-black">
                        PT SUMBER JAYA EKSPOR
                      </h3>
                      <p className="mt-4 text-lg text-black-700">
                        PT SUMBER JAYA EKSPOR was begin in 2015 and located at Bandung. Our company is expanding in the field of exporters of domestic products such as Charcoal, Coco Peat & Coco Fiber, and Cocoa Powder.
                      </p>
                      <Link
                        href="profile">
                        <a
                          className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-black active:bg-orange-500 uppercase text-sm shadow hover:shadow-lg"
                        >
                          More Detail
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="pb-40 relative bg-blueGray-100">

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div> */}
                <h3 className="text-3xl font-bold text-black">
                  Our Products
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-black-500">
                  Our first product is  Charcoal Coconut Briquitte, coconut shell charcoal for hookah or incense in cubes form until now we export to Saudi Arabia, Yordania, Dubai. The second products are Coco Peat and Coco Fiber that export to Dubai, Japan, Australia, Korea, Kuwait and Turkey for Coco Peat. While Coco Fiber export to China, Germany, Turkey and USA.
                </p>
                <Link
                  href="our-product/1">
                  <a
                    className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-black active:bg-orange-500 uppercase text-sm shadow hover:shadow-lg"
                  >
                    More Products
                  </a>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/AssetSumber/rene-porter-IJyQ1us6MVM-unsplash.jpg"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-bold text-4xl text-black">Our Products</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-black-500">
              We take great pride in offering products that are innovative, reliable, and affordable, and we're committed to providing our customers with the best possible experience.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-orange-500">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4 cursor-pointer">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Charcoal Coconut Briquitte
                  </h5>
                  <Link href="/our-product/1">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/AssetSumber/Charcoal.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4 cursor-pointer">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Coco Peat and Coco Fiber
                  </h5>
                  <Link href="/our-product/2">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/AssetSumber/cocopeat.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4 cursor-pointer">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Cocoa Powder
                  </h5>
                  <Link href="/our-product/3">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/AssetSumber/cocoa.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-orange-500">
        <div className="container mx-auto pb-64 pt-32 text-center ">
          <h2 className="font-bold text-4xl text-black ">Find Us</h2>
          <div className="pt-24">
            <MapExample></MapExample>
          </div>
        </div>
      </div>

      <section className="pb-16 bg-blueGray-200 relative pt-32">

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Contact Us
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                We believe that communication is key to building strong relationships with our customers, and we encourage you to reach out to us with any questions or concerns you may have. So, whether you're looking for product information, need help with an order, or just want to provide feedback, we're here to listen and help.


              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                
                  href="mailto: sumberjaya.ekspor@gmail.com"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i className="far fa-envelope text-lg mr-1"></i>
                  sumberjaya.ekspor@gmail.com
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=6281320229969"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-orange-500 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-whatsapp text-lg mr-1"></i>
                  <span>+62 813-2022-9969</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
