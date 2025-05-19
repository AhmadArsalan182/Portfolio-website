export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    icon: "code-2",
    description: "We build fast, responsive, and secure web applications using the latest technologies."
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "layout",
    description: "Pixel-perfect, user-first designs that provide exceptional user experiences."
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: "smartphone",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    id: 4,
    title: "Digital Marketing",
    icon: "megaphone",
    description: "Strategic digital marketing to grow your online presence and reach your target audience."
  },
  {
    id: 5,
    title: "Brand Strategy",
    icon: "target",
    description: "Develop a unique brand identity that resonates with your audience and stands out."
  },
  {
    id: 6,
    title: "Cloud Solutions",
    icon: "cloud",
    description: "Scalable cloud infrastructure and services to power your digital products."
  }
];

export default services;