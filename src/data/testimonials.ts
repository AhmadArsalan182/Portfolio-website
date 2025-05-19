export interface Testimonial {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Thompson",
    company: "TechCorp Inc.",
    testimonial: "Working with this agency was a game-changer for our business. Their team delivered a stunning website that exceeded our expectations and helped us increase conversions by 45%.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer Lewis",
    company: "Innovate Solutions",
    testimonial: "The team's creativity and technical expertise are unmatched. They transformed our outdated platform into a modern, user-friendly application that our customers love.",
    image: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Garcia",
    company: "Nexus Retail",
    testimonial: "Their strategic approach to our e-commerce platform redesign resulted in a 60% increase in mobile sales within the first month. Highly recommended!",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4
  },
  {
    id: 4,
    name: "Amanda Chen",
    company: "Global Finance",
    testimonial: "The agency delivered a secure, compliant financial dashboard that simplified complex data for our users. Their attention to detail and commitment to quality is impressive.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  }
];

export default testimonials;