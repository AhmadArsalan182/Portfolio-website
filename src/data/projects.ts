// Import project images
import project1 from '../assets/1.png';
import project2 from '../assets/2.png';
import project3 from '../assets/3.png';
import project4 from '../assets/4.png';
import project5 from '../assets/5.png';
import project6 from '../assets/6.png';
import project7 from '../assets/7.png';
import project8 from '../assets/8.png';
import project9 from '../assets/9.png';
import project10 from '../assets/10.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Content Creation",
    description: "An innovative AI-powered content creation platform that streamlines your workflow. From crafting professional emails to generating engaging blog posts, this tool harnesses AI to boost your productivity and creativity.",
    image: project1,
    tags: ["AI", "Content Creation", "Web App"],
    link: "https://www.linkedin.com/posts/emdanish_webdevelopment-javascript-typescript-activity-7219236356324024320-73G4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzTFwcB-0e53F2eLpi9z4JxlppJQzH6DMA"
  },
  {
    id: 2,
    title: "Dynamic Blog Platform",
    description: "A fully-featured blog application with category filtering, email subscriptions, and an admin panel. Readers can explore posts by categories while admins manage content through an intuitive interface.",
    image: project2,
    tags: ["Web App", "Blog", "Next.js"],
    link: "https://www.linkedin.com/posts/emdanish_webdev-reactjs-nextjs-activity-7217255178536701952-cvC8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzTFwcB-0e53F2eLpi9z4JxlppJQzH6DMA"
  },
  {
    id: 3,
    title: "Dwell Dynamo – Real Estate Platform",
    description: "A comprehensive real estate web application that allows users to browse, search, and manage property listings efficiently. Built with a focus on user experience and responsive design to simplify property transactions.",
    image: project3,
    tags: ["Web App", "Real Estate"],
    link: "https://github.com/Muneeb081/dwell-dynamo-main"
  },
  {
    id: 4,
    title: "Digital Voting System",
    description: "A secure and user-friendly voting system developed in Java to enable digital elections with voter authentication, vote casting, and result tallying, ensuring integrity and transparency.",
    image: project4,
    tags: ["Java", "Desktop App", "Security"],
    link: "https://github.com/Muneeb081/Digital_Voting_System"
  },
  {
    id: 5,
    title: "School Management System",
    description: "A Java-based desktop application to manage school operations such as student records, attendance, grades, and staff management with a simple graphical user interface.",
    image: project5,
    tags: ["Java", "Desktop App", "Education"],
    link: "https://github.com/Muneeb081/School_Management_System-JAVA"
  },
  {
    id: 6,
    title: "Real-Time Chat Room",
    description: "A real-time chat application built using modern web technologies, enabling multiple users to communicate in dynamic chat rooms with live updates.",
    image: project6,
    tags: ["Web App", "Real-time", "Chat"],
    link: "https://github.com/HuzaifaShahab/RealtimeChatRoom"
  },
  {
    id: 7,
    title: "Desktop & Web Applications",
    description: "A collection of desktop-based and web applications built using JavaFX and Spring Boot, demonstrating my ability to build responsive and scalable software across platforms.",
    image: project7,
    tags: ["JavaFX", "Spring Boot", "Web App"],
    link: "https://www.linkedin.com/posts/huzaifashahab_javafx-springboot-javaprogramming-activity-7194023057995292672-5O8w"
  },
  {
    id: 8,
    title: "Spotify Analysis – Power BI Project",
    description: "An advanced data analysis project using Power BI to visualize Spotify streaming data, uncovering trends and insights from large datasets.",
    image: project8,
    tags: ["Data Analysis", "Power BI", "Spotify"],
    link: "https://github.com/HuzaifaShahab/Spotify-Anaysis-PowerBiProject"
  },
  {
    id: 9,
    title: "Embroidery Ateliers",
    description: "Custom and tailoring embroidery designs according to your specifications. A complete deployed web app scaling use of React, Vite and TS.",
    image: project9,
    tags: ["Web App", "React", "TypeScript"],
    link: "https://embroidery-ateliers.vercel.app/"
  },
  {
    id: 10,
    title: "Car Rental & Management System",
    description: "Developed for CT60A0203 Introduction to Programming at LUT University, Finland, this car rental program enables users to browse, rent, and return vehicles through a simple interface. Built in Python, it leverages file operations for efficient data management, ensuring reliable tracking of vehicle availability and rental transactions.",
    image: project10,
    tags: ["Python", "File Operations", "Management System"],
    link: "https://github.com/naveed4real/Projects_"
  }
];

export default projects;
