import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg"; 

export const pageLinks = [
  { id: 1, pageText: "home" },
  { id: 2, pageText: "about" },
  { id: 3, pageText: "services" },
  { id: 4, pageText: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.github.com", icon: "fab fa-github" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tourCards = [
  {
    id: 1,
    date: "August 26th, 2020",
    image: tour1,
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: "6 Days",
    price: "$2100",
  },
  {
    id: 2,
    date: "October 1th, 2020",
    image: tour2,
    title: "Best Of Java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: "11 Days",
    price: "$1400",
  },
  {
    id: 3,
    date: "September 15th, 2020",
    image: tour3,
    title: "Explore Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: "8 Days",
    price: "$5000",
  },
  {
    id: 4,
    date: "December 5th, 2019",
    image: tour4,
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: "20 Days",
    price: "$3300",
  },
];
