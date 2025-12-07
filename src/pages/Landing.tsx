import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import { DemoAnimation } from "../components/DemoAnimation";

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero animations (0 - 0.15)
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 100]);

  // Demo animations (0.15 - 0.6)
  const demoOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const demoScale = useTransform(scrollYProgress, [0.15, 0.3], [0.8, 1]);
  const demoY = useTransform(scrollYProgress, [0.15, 0.3], [100, 0]);

  // Description animations (0.6 - 0.8)
  const textY = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <div className="h-screen w-full snap-start relative z-0">
        <section className="h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden">
          <motion.div
            style={{ opacity, scale, y }}
            className="flex flex-col items-center justify-center w-full"
          >
            <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center select-none mix-blend-difference">
              DARWIN
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-neutral-400">
              "It is the one that is most adaptable to change"
            </p>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="absolute bottom-12 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-neutral-500" />
          </motion.div>
        </section>
      </div>

      {/* Demo Section */}
      <div className="h-screen w-full snap-start relative z-10">
        <section className="h-screen flex items-center justify-center sticky top-0 pointer-events-none">
          <motion.div
            style={{ opacity: demoOpacity, scale: demoScale, y: demoY }}
            className="w-full px-6 pointer-events-auto"
          >
            <DemoAnimation />
          </motion.div>
        </section>
      </div>

      {/* Description Section */}
      <div className="h-screen w-full snap-start relative z-20 bg-black">
        <section className="h-screen flex items-center justify-center relative">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-4xl px-6 md:px-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              No more difference between UX and UI
            </h2>
            <p className="text-2xl text-neutral-500 font-light mb-12">
              The UI that evolves with your users.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-neutral-400 font-light">
              <p>
                Darwin is a React library that uses on-device AI to analyze user
                interactions in real-time. It reorders and adapts your interface
                components based on usage patterns, ensuring the most relevant
                tools are always at hand.
              </p>
              <div className="flex flex-col gap-6">
                <p>
                  Privacy-first. No data leaves the browser. Powered by Web
                  Workers and Transformers.js for seamless performance without
                  blocking the main thread.
                </p>
                <Link
                  to="/docs"
                  className="inline-flex items-center gap-2 text-white border-b border-white pb-1 w-fit hover:opacity-70 transition-opacity"
                >
                  Start Integrating →
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
