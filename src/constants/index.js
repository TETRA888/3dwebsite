import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blender,
    clogo,
    conda,
    ue5,
    pytorch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "VR Developer",
      icon: web,
    },
    {
      title: "3D Mesh Developer",
      icon: mobile,
    },
    {
      title: "Pavement Sensor Developer",
      icon: backend,
    },
    {
      title: "Student Fees Co-Chair",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "C language",
      icon: clogo,
    },
    {
      name: "Unreal Engine 5",
      icon: ue5,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  ];
  
  const experiences = [
    {
      title: "R&D Engineer Intern",
      company_name: "UC Pavement Research Center | Davis • Berkeley",
      icon: starbucks,
      iconBg: "#FFFFFF ",
      date: "January 2022 - Present",
      points: [
        "HVS Setup: Assisted in building the Heavy Vehicle Simulator (HVS) for Caltrans.",
        "Data Logging System: Developed a system to monitor test tracks using strain gauge and thermocouple sensors.",
        "Technical Assembly: Used Campbell Scientific peripherals to build and program the data logger in C.",
        "Team Collaboration: Worked with Ph.D. and M.S. students on the Caltrans Fiber project.",
      ],
    },
    {
      title: "VR Research Developer",
      company_name: "UC Davis Graduate School of Management",
      icon: tesla,
      iconBg: "#FFFFFF",
      date: "November 2023 – Present",
      points: [
        "VR Environment Development: Creating a VR environment for E-Commerce research under Prof. Pantelis Loupos.",
        "Collaboration: Working with a former Meta Tech Lead on project development.",
        "Executive Engagement: Participating in technology integration meetings and merger discussions.",
        "VR Store Design: Designing and analyzing a VR grocery store layout to compare VR and in-person shopping experiences.",
      ],
    },
    {
      title: "Interim Co-Chair",
      company_name: "UC Davis Council on Student Affairs and Fees",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "October 2023 – Present",
      points: [
        "Fee Oversight: Advising UC Davis on the management and allocation of $112M in student fees, ensuring transparency and accountability.",
        "Fund Allocation: Overseeing the distribution of a $100K Student Programming fund to support key campus co-curricular programs.",
        "Financial Strategy: Collaborating with a staff accountant to prioritize and allocate funding effectively.",
        "System-wide Engagement: Traveling to other UC campuses to discuss broader issues within the system and campus-based fees.",
      ],
    },
    {
      title: "3D Procedural Artist",
      company_name: "Hobbyist",
      icon: meta,
      iconBg: "#FFFFFF",
      date: "November 2023 – Present",
      points: [
        "Text to 3D Mesh Pipeline: Created a basic pipeline to generate 3D meshes from text prompts using AI and depth maps.",
        "3D Mesh Creation: Developed 3D meshes through custom scripts, exploring procedural generation techniques.",
        "AI Integration: Used Stable Diffusion, Torch, and Transformers to convert images into depth maps for 3D mesh creation.",
        "Experimentation: Explored various algorithms and mathematical models to generate unique and intricate 3D forms.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Remote Controlled Rover",
      description:
        "A Crude RC rover that I made (mostly) from scratch. It utilizes basic analog transmitter and reciever circuits. It is controlled via the Arduino Mega and Nano.",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "Hardware Design",
          color: "green-text-gradient",
        },
        {
          name: "C",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/TETRA888/TetraDrive",
    },
    {
      name: "Crude 3D Mesh Reconstruction",
      description:
        "Designed a simple pipeline that creates a 3D model from an Ai generated image",
      tags: [
        {
          name: "Transformers",
          color: "blue-text-gradient",
        },
        {
          name: "Pytorch",
          color: "green-text-gradient",
        },
        {
          name: "Stable Diffusion",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.tetradrive.org/text-3d-mesh-generation",
    },
    {
      name: "Caltrans Data Logger",
      description:
        "Helped build and program the data logging electric panel in C to monitor test track locations using 16 strain gauge sensors and 21 thermocouples",
      tags: [
        {
          name: "Campbell Scientific",
          color: "blue-text-gradient",
        },
        {
          name: "Hardware Design",
          color: "green-text-gradient",
        },
        {
          name: "C",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://engineering.ucdavis.edu/news/uc-davis-partnered-pavement-research-center-receives-32-million-interagency-agreement-caltrans",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };