import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Why = () => {
  return (
    <section className="why-section w-4/5 mx-auto flex flex-col gap-8 my-5 dark:bg-black bg-white">
      <h2 className="why-section-title text-4xl font-semibold font-serif text-center">
        Why <span className="text-red-500 text-5xl font-bold">PromptVerse</span>{" "}
        ?
      </h2>
      <div className="why-section-content w-11/12 mx-auto flex sm:flex-row flex-col gap-6">
        <Card className="sm:w-[30%] w-11/12 p-1">
          <CardHeader>
            <CardTitle>
              <Image
                src="https://i.postimg.cc/52v7LtPt/Data-extraction-bro-1.png"
                alt="AI Toolkit"
                width={300}
                height={300}
                quality={100}
                className="rounded-md object-contain w-full"
              />
            </CardTitle>
            <CardDescription className="text-black text-lg uppercase  font-semibold font-serif dark:text-white">
              Comprehensive AI Toolkit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover an extensive library of cutting-edge AI tools designed to
              meet all your creative and analytical needs. From natural language
              processing and machine learning models to advanced image
              recognition and data analysis tools, our toolkit is equipped to
              handle a wide range of AI applications.
            </p>
          </CardContent>
        </Card>
        <Card className="sm:w-[30%] w-11/12 p-1">
          <CardHeader>
            <CardTitle>
              <Image
                src="https://i.postimg.cc/DZCBn4zx/Chat-bot-amico.png"
                alt="AI Toolkit"
                width={300}
                height={300}
                quality={100}
                className="rounded-md object-contain w-full"
              />
            </CardTitle>
            <CardDescription className="text-black text-lg uppercase  font-semibold font-serif dark:text-white">
              AI Art and Chat Prompts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Unleash your creativity with AI-generated art and engaging chat
              prompts. Create stunning visuals and interactive conversations
              with AI effortlessly. Share your unique creations with the
              community and discover new inspirations from fellow AI
              enthusiasts.
            </p>
          </CardContent>
        </Card>
        <Card className="sm:w-[30%] w-11/12 p-1">
          <CardHeader>
            <CardTitle>
              <Image
                src="https://i.postimg.cc/YSHX3wVz/people-using-robots-bro.png"
                alt="AI Toolkit"
                width={300}
                height={300}
                quality={100}
                className="rounded-md object-contain w-full"
              />
            </CardTitle>
            <CardDescription className="text-black text-lg uppercase  font-semibold font-serif dark:text-white">
              Personalized Experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Enjoy a tailored experience that adapts to your needs. Customize
              your profile, save your favorite tools and prompts, and track your
              progress. Our platform ensures that your AI journey is
              personalized, efficient, and enjoyable.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Why;
