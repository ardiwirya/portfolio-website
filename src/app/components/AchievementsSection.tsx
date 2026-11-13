"use client";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { certificates } from "../data/certificates";
import { projects } from "../data/projects";

function Count({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const count = useMotionValue(value);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    if (!inView || reduced) return;
    count.set(0);
    const controls = animate(count, value, { duration: 1 });
    return () => controls.stop();
  }, [inView, reduced, count, value]);
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden="true">{rounded}</motion.span>
    </span>
  );
}
export default function AchievementsSection() {
  const achievements = [
    { metric: "Certificates & Achievements", value: certificates.length },
    { metric: "Projects", value: projects.length },
    { metric: "Years Freelancing", value: 3 },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-outline sm:border rounded-md py-8 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
        {achievements.map((item) => (
          <div
            key={item.metric}
            className="flex flex-col items-center justify-center text-center mx-4 my-4 sm:my-0"
          >
            <p className="text-foreground text-4xl font-bold flex">
              <Count value={item.value} />
            </p>
            <p className="text-muted text-base">{item.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
