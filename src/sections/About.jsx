import { Suspense, useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { Leva } from 'leva';
import { PerspectiveCamera } from '@react-three/drei';
import HeroCamera from '../components/HeroCamera.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Canvas } from '@react-three/fiber';
import { calculateSizes } from '../constants/index.js';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false); // Ensure animation runs only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Prevent re-triggering
          if (globeEl.current) {
            globeEl.current.pointOfView(
              { lat: 28.6139, lng: 77.209, altitude: 0.5 }, // Zoom to India
              3000, // Animation duration in ms
            );
          }
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const handleCopy = () => {
    navigator.clipboard.writeText('shubhamarora.devs@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about" ref={sectionRef}>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Shubham Arora</p>
              <p className="grid-subtext">
                With 2 years of experience, I specialize in building scalable, high-performance web applications with a
                focus on frontend development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.6139, lng: 77.209, text: 'Delhi, India', color: 'white', size: 105 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m based out of Delhi, India</p>
              <ul className="grid-subtext list-disc pl-5">
                <li>
                  <strong>B.Tech in Computer Science</strong>
                  <br />
                  <strong>Netaji Subhash University of Technology</strong> (<strong>2019-2023</strong>)
                  <br />
                  CGPA: <strong>8.17</strong>
                </li>
                <li>
                  <strong>High School</strong>
                  <br />
                  <strong>Delhi Public School, R.K. Puram</strong> (<strong>2019</strong>)
                  <br />
                  School CGPA: <strong>9.2</strong>
                </li>
              </ul>

              {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xxl md:text-xl font-medium text-gray_gradient text-white">
                  shubhamarora.devs@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// <div class="max-w-md md:max-w-lg lg:max-w-xs mx-auto">
// <div class="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(#fff))_0%,transparent_10%,transparent_90%,hsl(var(#fff))_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
// </div>
// </div>
// <div class="max-w-md md:max-w-lg lg:max-w-xs mx-auto">
// <div class="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(#fff))_0%,transparent_10%,transparent_90%,hsl(var(#fff))_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
// </div>
// </div>
// <div class="max-w-md md:max-w-lg lg:max-w-xs mx-auto">
// <div class="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(#fff))_0%,transparent_10%,transparent_90%,hsl(var(#fff))_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-left will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
// </div>
// </div>
// <div class="max-w-md md:max-w-lg lg:max-w-xs mx-auto">
// <div class="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(#fff))_0%,transparent_10%,transparent_90%,hsl(var(#fff))_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
//   <div class="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee-right will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="mozilla"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="github"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="langchain"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>

//     <div class="h-12 lg:h-12 w-max !inline-block">
//       <img
//         src="/images/mozilla.svg"
//         alt="resend"
//         class="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
//         draggable="false"
//       />
//     </div>
//   </div>
// </div>
// </div>
