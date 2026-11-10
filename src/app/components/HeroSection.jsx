"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function HeroSection() {
  return (
    <section className="lg:py-16" id="cv">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-foreground mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
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
            className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-slate-500 to-secondary-300 mt-3"
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
          className="sm:col-span-4 place-self-center mt-12 lg:mt-0"
        >
          <div className="rounded-full bg-surface w-[250px] h-[250px] lg:w-[400px] relative">
            <Image
              src="/images/hero.png"
              alt="Ardi Wirya"
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              sizes="300px"
              preload
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
