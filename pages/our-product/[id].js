import React, { useEffect } from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Tabs from "components/Widgets/ProductTab"; 
import { useRouter } from "next/router";

export default function OurProduct() {

  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(1);

  useEffect(() => {
    // Perbarui nilai activeTab ketika router.query.id berubah
    const id = Number(router.query.id);
    if (id) {
      setActiveTab(id);
    }
  }, [router.query.id]);


  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 bg-violet flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-white"
            style={{
              backgroundImage:
                "url('/img/AssetSumber/cocoa.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Our Products.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Sumber Jaya Ekspor
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="p-16">
          <Tabs activeTab={activeTab}></Tabs>
        </section>

      </main>
      <Footer />
    </>
  );
}
