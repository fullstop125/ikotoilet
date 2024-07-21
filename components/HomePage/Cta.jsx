import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="why-section w-4/5 mx-auto flex flex-col gap-8 my-5 pb-5 dark:bg-black bg-white">
      <h2 className="why-section-title text-4xl font-semibold font-serif text-center">
        Be the First to Experience{" "}
        <span className="text-red-500 text-5xl font-bold">PromptVerse</span> ?
      </h2>
      <div className="why-section-content w-11/12 mx-auto flex flex-col justify-center items-center gap-6">
        <p className="text-black text-lg font-serif dark:text-white">
          Be the first to experience the power of PromptVerse and unlock a world
          of endless possibilities. Join our vibrant community of AI
          enthusiasts, developers, and researchers and gain access to a
          comprehensive suite of AI tools, expertly crafted tutorials, and
          cutting-edge resources. Whether you&apos;re looking to learn, create,
          or collaborate, PromptVerse is your gateway to mastering AI
          technology. Sign up today and start transforming your ideas into
          reality.
        </p>

        <Link href="https://forms.gle/dhkAnDvazZh1dCg96">
          <span className="cta-button mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Join Us Now
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
