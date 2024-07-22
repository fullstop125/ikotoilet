import React from "react";
import Header from "@components/CommonComponents/Header";
import Hero from "@components/HomePage/Hero";

const page = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default page;
