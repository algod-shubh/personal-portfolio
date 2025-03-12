import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const MARQUEE_TEXT = 'React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,';
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="relative w-full flex flex-col overflow-hidden" id="home">
      {/* Hero Container */}
      <div className="relative w-full min-h-screen flex items-center justify-end px-10">
        {/* Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }} 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[4px] opacity-50 -z-10"
          style={{ backgroundImage: "url('/assets/hero_bg_1.jpg')" }}
        ></motion.div>

        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, x: 150 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.8, ease: "easeInOut" }} 
          className="relative bg-black/50 backdrop-blur-lg p-10 rounded-lg text-white max-w-md z-10"
        >
          <h3 className="text-5xl font-extrabold">Shubham Arora</h3>
          <p className="text-2xl mt-2">Crafting seamless digital experiences</p>
        </motion.div>
      </div>

      {/* Marquee Animation */}
      <div className="relative z-20 mt-auto w-full bg-lime-300 text-black lg:py-6">
        <div className="flex overflow-hidden whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <motion.h1
              initial={{ x: '-100%' }}
              animate={{ x: '0' }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
              key={i}
              className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-5xl"
            >
              {MARQUEE_TEXT}
            </motion.h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
