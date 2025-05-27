export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  department: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
  };
}

// Import the team member images at the top of the file
import danish from '../assets/danish.png';
import malik from '../assets/shazain.png';
import naveed from '../assets/naveed.png';
import huzaifa from '../assets/huzaifa.png';
import muneeb from '../assets/muneeb.png';
import qutaiba from '../assets/qutaiba.png';
import jadoon from '../assets/jadoon.png';

const team: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Danish",
    role: "Full Stack Developer",
    bio: "As a full stack developer at Devloop, I turn ideas into reliable, user-friendly web solutions. I focus on building clean, modern applications that help businesses grow and stand out. Clients value my mix of technical skill, clear communication, and commitment to delivering real results.",
    image: danish, // Use the imported variable instead of a string path
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/emdanish/",
      github: "https://github.com/emdanish75/",
      portfolio: "https://emdanish.vercel.app/"
    }
  },
  {
    id: 2,
    name: "Malik Shazain Iqbal",
    role: "Full Stack Developer | Data Analyst",
    bio: "I'm a Full Stack Developer and Data Analyst with a passion for building smart, scalable web solutions. I integrate AI into development and data workflows to accelerate delivery and maximize impact. From clean UI/UX to deep data insights, I focus on solving real problems with efficient, end to end solutions. Ultimate goal is to achieve your level of satisfaction deliver high quality and fast results with smart work that turn your visitors into customers.",
    image: malik,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/malikshazain/",
      github: "https://github.com/devShazain",
      portfolio: "https://shazain-portfolio-hub.lovable.app/"
    }
  },
  {
    id: 3,
    name: "Naveed Ahmed",
    role: "Full Stack Developer",
    bio: "As a full stack developer at Devloop, I specialize in transforming innovative ideas into high-performance, user-centric web applications. My expertise lies in architecting streamlined, cutting-edge solutions that empower businesses to scale and differentiate in competitive markets. Renowned for my technical proficiency, articulate communication, and unwavering commitment, I consistently deliver measurable results that exceed client expectations.",
    image: naveed,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/naveed-a-82401a136/",
      github: "https://github.com/naveed4real",
      portfolio: "https://naveedwork.lovable.app/"
    }
  },
  {
    id: 4,
    name: "Huzaifa Shahab",
    role: "Full Stack Developer | Data Analyst",
    bio: "As a Full Stack Developer and Data Analyst at Devloop, I specialize in delivering end-to-end web solutions and actionable data insights. I've successfully completed multiple projects for clients, combining modern development stacks with analytical tools to create applications that are not only robust but also data-driven. My focus is on building scalable applications, streamlining workflows, and enabling smarter business decisions through data analysis.",
    image: huzaifa,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/huzaifashahab/",
      github: "https://github.com/HuzaifaShahab",
      portfolio: "https://swehuzaifa.vercel.app/"
    }
  },
  {
    id: 5,
    name: "Hafiz Muneeb Shahid",
    role: "Full Stack Developer | Python Web Scraping Specialist",
    bio: "As a Full Stack Developer with expertise in Python-based web scraping, I specialize in creating modern, scalable web applications and extracting meaningful data from the web for actionable insights. I've delivered multiple client and personal projects using MERN stack, JavaScript frameworks, and Python automation tools. My goal is to build robust systems that not only serve functional purposes but also offer data-driven value through intelligent automation and analysis.",
    image: muneeb,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hafiz-muneeb-shahid-9426562b8/",
      github: "https://github.com/Muneeb081"
    }
  },
  {
    id: 6,
    name: "Qutaiba Zahoor Hashmi",
    role: "Full Stack Developer",
    bio: "I’m a passionate Full Stack Developer with a strong foundation in Java and modern web technologies. With hands-on experience across both front-end and back-end development, I specialize in building scalable, user-centric applications from concept to deployment. My tech stack includes Java, Spring Boot, React.js, Node.js, Express, and MySQL, along with proficiency in REST APIs, version control (Git), and responsive UI design.",
    image: qutaiba,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/qutaiba-zahoor-76121b253/",
      github: "https://github.com/qutaibazahoor"
    }
  },
  {
    id: 7,
    name: "Ahmad Arsalan Jadoon",
    role: "Full Stack Developer",
    bio: "I'm a Computer Science undergraduate with a strong foundation in full stack web development and a passion for artificial intelligence. I specialize in building efficient, user-focused digital solutions and have hands-on experience developing projects in Java and Python. I bring a blend of technical expertise and creative problem-solving to every project I work on.",
    image: jadoon,
    department: "Development",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ahmad-arsalan-jadoon-615a19260/",
      github: "https://github.com/AhmadArsalan182"
    }
  }
];

export default team;