import React from "react";
import Header from "@components/CommonComponents/Header";
import Hero from "@components/HomePage/Hero";
import Footer from "@components/CommonComponents/Footer";
import Who from "@components/HomePage/Who";
import Gallery from "@components/HomePage/Gallery";

const page = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <Gallery />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <Who />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </main>
      <Footer />
    </>
  );
};

export default page;
