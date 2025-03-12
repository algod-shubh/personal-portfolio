export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AvatarMe - 3D Avatar Creator',
    desc: 'AvatarMe is an innovative platform that redefines avatar creation. With a vast library of 3D assets and real-time customization, users can compose, animate, and capture lifelike avatars effortlessly.',
    subdesc:
      'Built with cutting-edge technologies like Three.js, React, and WebGL, AvatarMe ensures high-performance rendering and seamless integration into various projects, making it the go-to solution for 3D character design.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Ryde App - Real-Time Uber Clone',
    desc: 'Ryde App is a full-stack Uber clone designed for seamless ride-hailing experiences. It integrates real-time navigation, secure authentication, and instant payments, offering a smooth and reliable transportation solution.',
    subdesc:
      'Built with React Native, Next.js, and Serverless PostgreSQL, Ryde App features authentication powered by Clerk, navigation via Google Maps, and payments handled through Stripe. The app ensures real-time communication with a scalable chat system using Socket.io, Kafka, and Redis.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Data Nexus : Analytics tool',
    desc: ' Data Nexus is a centralized portal for an entire firm that automates data access requests, enabling users to query production data and download structured responses seamlessly.',
    subdesc:
      'With a focus on efficiency, Data Nexus integrantes complex forms and SMS notifications, by using Next.js, that streamlines data operations, serving over 150+ employees with real-time insights and access management.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Affiliates Portal',
    desc: 'The Affiliates Portal is a comprehensive platform designed for onboarding and managing affiliate partners, allowing them to track business performance and upload new leads effortlessly.',
    subdesc:
      'Developed with a scalable architecture, the portal features creative dashboards, enhanced calculators, role-based access control, and real-time analytics, supporting a business pipeline exceeding ₹600 crore in monthly revenue.',
    href: 'https://affiliates.paisabazaar.com/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.05,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -1, -10],
    
    aboutSectionPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -1, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Paisabazaar.com',
    pos: 'Full Stack Software Engineer',
    duration: 'Jun,2023 - Present',
     title : "\u2022 Revamped and optimized MyAccount UI, improving page load speed by 35% through lazy loading, tree shaking, and WebP conversions.\n\u2022 Redesigned the Home Loan journey UI, handling 100,000+ daily users, ensuring a smooth and efficient application process.\n" +
"\u2022 Developed an enterprise-grade data access portal, replacing Hive workflows, automating queries, and improving analytics team efficiency.\n" +
"\u2022 Built a scalable affiliate onboarding portal, enabling role-based document verification and lead tracking, supporting a ₹600 crore+ monthly revenue business.\n" +
"\u2022 Created a role-based lead management system for 250+ agents, automating workflows and contributing to a ₹90 crore+ monthly revenue impact.\n" ,

    icon: '/assets/pb_logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Profound Tech',
    pos: 'Software Developer Intern',
    duration: 'May, 2022 - July, 2022',
  title: "Developed secure backend modules with RSA encryption and Win32 APIs, ensuring robust authentication. Achieved 95%+ code coverage through Jest test cases in a TDD framework, reducing production defects.",
    icon: '/assets/notion.svg',
    animation: 'clapping',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: 'May,2022 - July,2022',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];
