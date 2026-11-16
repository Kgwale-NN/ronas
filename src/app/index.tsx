import DestinationDetails from "@/components/DestinationDetails";

const rio = {
  id: "rio",
  image: require("../../assets/images/destination.jpg"),
  name: "Rio de Janeiro",
  location: "Brazil",
  rating: 5,
  reviews: 143,
  description: "Rio de Janeiro, often simply called Rio, is one of Brazil’s most iconic cities. Explore its beaches, mountain views, and lively neighbourhoods. Discover local food and enjoy the sights at your own pace.",
};

export default function HomeScreen() {
  return <DestinationDetails destination={rio} />;
}
