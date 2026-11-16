export type Tour = {
  id: string;
  image: number;
  name: string;
  location: string;
  days: number;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    id: "iconic-brazil",
    image: require("../../assets/images/tour-brazil.jpg"),
    name: "Iconic Brazil", location: "Brazil", days: 8, price: 659,
    rating: 4.6, reviews: 56,
    description: "Discover Brazil on an eight-day sample adventure. Explore city neighbourhoods, enjoy mountain views, and spend time by the coast. This relaxed trip leaves room for local food, photos, and time to explore at your own pace.",
    highlights: ["City walks and local food", "Mountain viewpoints", "Time by the coast"],
  },
  {
    id: "tropical-escape",
    image: require("../../assets/images/tour-beach.jpg"),
    name: "Tropical Escape", location: "Tropical coast", days: 5, price: 499,
    rating: 4.8, reviews: 82,
    description: "Take a five-day break beside turquoise water. Enjoy slow mornings, sandy beaches, and coastal walks. This sample tour balances time outdoors with plenty of rest, making it a gentle escape from a busy week.",
    highlights: ["Beach walks", "Coastal viewpoints", "Free time to relax"],
  },
  {
    id: "mountain-adventure",
    image: require("../../assets/images/tour-mountains.jpg"),
    name: "Mountain Adventure", location: "Mountain region", days: 7, price: 749,
    rating: 4.9, reviews: 104,
    description: "Spend seven days exploring mountain scenery, walking trails, and quiet viewpoints. This sample adventure is for travellers who enjoy fresh air and active days. Take breaks along the way to rest and enjoy the landscape.",
    highlights: ["Scenic walking trails", "Mountain photo stops", "Outdoor exploration"],
  },
  {
    id: "forest-retreat",
    image: require("../../assets/images/tour-forest.jpg"),
    name: "Forest Retreat", location: "Forest and lakes", days: 4, price: 389,
    rating: 4.7, reviews: 38,
    description: "Slow down on a four-day sample retreat surrounded by trees and peaceful water. Follow gentle forest paths, enjoy quiet mornings, and take a break from your usual routine. There is time to explore and time to simply rest.",
    highlights: ["Gentle forest walks", "Lakeside views", "Quiet time in nature"],
  },
];
