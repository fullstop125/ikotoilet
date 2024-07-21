import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col w-4/5 mx-auto dark:bg-black bg-white gap-2">
      <div className="hero-section-content w-11/12 mx-auto flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5">
        <h1 className="hero-section-title text-4xl font-semibold font-serif w-2/5">
          Unlock the Power of AI
          <br />
          With -
          <br />
          <span className="text-red-500 text-5xl font-bold">PromptVerse</span>
        </h1>
        <div className="hero-section-context flex flex-col gap-6 w-3/5">
          <p className="hero-section-description text-lg mt-4">
            Welcome to PromptVerse, the ultimate AI toolkit and community hub
            where innovation meets creativity. Dive into a world of endless
            possibilities with access to a vast library of AI tools, expertly
            crafted tutorials, and a vibrant community of AI enthusiasts.
            Whether you&apos;re looking to learn, create, or collaborate,
            PromptVerse is your gateway to mastering AI technology. Join us
            today and start transforming your ideas into reality.
          </p>
          <Link href="https://forms.gle/dhkAnDvazZh1dCg96">
            <span className="hero-section-cta-button mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Join Us Now
            </span>
          </Link>
        </div>
      </div>
      <div className="hero-section-image w-4/5 my-5 mx-auto">
        <Image
          src="https://i.postimg.cc/nrdXrPhB/pixelcut-export.png"
          alt="Hero Image"
          width={950}
          height={400}
          quality={100}
          className="rounded-md object-contain w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
