"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function HeroSection() {
  return (
    <section className="lg:py-16" id="cv">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 min-w-0 text-center md:text-left"
        >
          <h1 className="text-foreground mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r/srgb from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="sr-only">Ardi Wirya, Frontend Developer</span>
            <span aria-hidden="true">
              <span className="typewriter">
                <TypeAnimation
                  sequence={["Ardi Wirya", 2000, "a Front-End Dev", 1500]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  preRenderFirstString
                />
              </span>
              <span className="reduced-motion-name">Ardi Wirya</span>
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg mb-6 lg:text-xl">
            {profile.headline}
          </p>
          <a
            href={profile.cv}
            download
            className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br/srgb from-primary-500 via-slate-500 to-secondary-300 mt-3"
          >
            <span className="block bg-page hover:bg-chip rounded-full px-5 py-2 text-foreground">
              Download CV
            </span>
          </a>
        </motion.div>
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 place-self-center w-full max-w-[320px] lg:max-w-[400px] mt-4 md:mt-0"
        >
          <div className="rounded-full bg-surface aspect-square relative overflow-hidden border border-outline">
            <Image
              src="/images/ardi-hero.webp"
              alt="Ardi Wirya Indarto"
              className="object-cover scale-[1.6] origin-[50%_30%]"
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 320px"
              preload
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
