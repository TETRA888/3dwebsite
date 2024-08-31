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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };