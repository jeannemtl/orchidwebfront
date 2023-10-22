import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default function Home() {
  const stars = 1000; // Example stars count. You can get this dynamically as before.

  return (
    <div className="container mx-auto">
      {/* Title and Prompt */}
      <div className="py-10 text-center">
        <h1 className="font-display text-4xl font-bold md:text-7xl">
          Building blocks for your Next project
        </h1>
        <p className="mt-6 text-gray-500 md:text-xl">
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
      </div>

      {/* Two Columns */}
      <div className="flex flex-wrap justify-between">
        {/* Left Column */}
        <div className="w-full p-5 md:w-1/2">
          {features.slice(0, Math.ceil(features.length / 2)).map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full p-5 md:w-1/2">
          {features.slice(Math.ceil(features.length / 2)).map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
