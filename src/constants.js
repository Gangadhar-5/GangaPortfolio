// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// DevOps Section Logo's
import linuxLogo from "./assets/tech_logo/linux.jpg";
import chefLogo from "./assets/tech_logo/chef.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import kubernetesLogo from "./assets/tech_logo/kubernetes.png";
import helmLogo from "./assets/tech_logo/helm.png";
import ansibleLogo from "./assets/tech_logo/ansible.jpg";
import terraformLogo from "./assets/tech_logo/terraform.png";
import jenkinsLogo from "./assets/tech_logo/jenkins.png";
import awsLogo from "./assets/tech_logo/aws.jpg";

// CS Fundamentals Section Logo's
import osLogo from "./assets/tech_logo/os.jpg";
import dbmsLogo from "./assets/tech_logo/dbms.jpg";
import oopsLogo from "./assets/tech_logo/oops.jpg";
import cnLogo from "./assets/tech_logo/cn.jpg";

// Experience Section Logo's

// Education Section Logo's
import dayaLogo from "./assets/edu-logo/dayanand.jpg";
import burnLogo from "./assets/edu-logo/burnpur.png";
import nitLogo from "./assets/edu-logo/NitDgp.png";

// Project Section Logo's
import chatLogo from "./assets/work-logo/chatapp.png";
import airbnbLogo from "./assets/work-logo/airbnb.png";
import notegLogo from "./assets/work-logo/noteg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Linux", logo: linuxLogo },
      { name: "Chef", logo: chefLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "Helm", logo: helmLogo },
      { name: "Ansible", logo: ansibleLogo },
      { name: "Terraform", logo: terraformLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "AWS", logo: awsLogo },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "OS", logo: osLogo },
      { name: "DBMS", logo: dbmsLogo },
      { name: "OOPS", logo: oopsLogo },
      { name: "CN", logo: cnLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nitLogo,
    school: "National Institute of Technology Durgapur, Durgapur, West Bengal",
    date: "Oct 2022 - July 2026",
    grade: "7.64 CGPA",
    desc: "Studying at NIT Durgapur has been a transformative journey. The vibrant campus life, supportive faculty, and diverse peer group enriched my academic and personal growth, fostering lifelong friendships, technical skills, and unforgettable memories. I am grateful for the experience.",
    degree: "B.Tech - Electronics and Communication Engineering",
  },
  {
    id: 1,
    img: burnLogo,
    school: "Burnpur Boys High School, Burnpur , West Bengal",
    date: "July 2019 - July 2021",
    grade: "79%",
    desc: "I completed my class 12 education from Burnpur Boys High School, Burnpur, under the West Bengal board, where I studied Physics, Chemistry, and Mathematics (PCM).Studying science in classes 11 and 12 at my school was a foundational experience. The dedicated teachers, disciplined environment, and strong academic focus helped me build a deep interest in science and prepared me well for competitive exams and future studies.",
    degree: "WBCHSE(XII) - PCM",
  },
  {
    id: 2,
    img: dayaLogo,
    school: "Dayanand Vidyalaya(H.S), Asansol, West Bengal",
    date: "Jan 2018 - Feb 2019",
    grade: "84%",
    desc: "I completed my class 10 education from Dayanand Vidyalaya, Asansol, under the West Bengal board. The school provided a solid foundation in academics and extracurricular activities, fostering a well-rounded development.",
    degree: "WBBSE(X) - General",
  },
];

export const projects = [
  {
    id: 0,
    title: "ChatApp",
    description:
      "Built with a modern tech stack, this chat app features a responsive frontend using Next.js, a robust Express.js and Node.js backend, and real-time communication via Socket.io. It supports image uploads via Cloudinary and securely stores data using MongoDB Atlas (cloud database). The application enables users to exchange messages instantly, share media, and experience seamless, real-time interactions across devices.",
    image: chatLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Next.js",
      "API",
      "socket.io",
      "cloudinary",
    ],
    github: "https://github.com/Gangadhar-5/chatbackend",
    webapp: "http://13.201.73.207:3000",
  },
  {
    id: 1,
    title: "GuestHome",
    description:
      "A full-stack Airbnb clone featuring a custom-designed frontend built with HTML, CSS, and JavaScript. The application allows users to browse, create, and view rental listings. The backend is powered by Node.js and Express, with MongoDB Atlas for cloud-based data storage and Cloudinary for handling image uploads. Key features include listing creation with images, property detail pages,and a fully responsive UI that mirrors Airbnb's design and user experience.",
    image: airbnbLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "cloudinary",
    ],
    github: "https://github.com/Gangadhar-5/Guesthome",
    webapp: "",
  },
  {
    id: 2,
    title: "NoteG-App",
    description:
      "A powerful Notion-style productivity app built with Next.js and styled using Tailwind CSS and shadcn/ui for a sleek, modern UI. It features real-time collaborative editing using BlockNote as a rich text editor, and Convex as the backend for seamless data management and sync. Clerk is integrated for authentication and user management, providing a secure and scalable full-stack solution. Users can create pages, write notes, organize content hierarchically, and collaborate effectively—just like in Notion.",
    image: notegLogo,
    tags: [
      "Reactjs",
      "Next.js",
      "TailwindCSS",
      "ShadcnUI",
      "Convex",
      "clerk",
      "blocknote",
      "sonner",
    ],
    github: "https://github.com/Gangadhar-5/NoteG-App",
    webapp: "",
  },
];
