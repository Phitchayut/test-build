import Image from "next/image";
import Homes from "../components/Home";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="mt-5 text-3xl font-bold text-center">Attractions</h1>
      <Homes />
    </div>
  );
}
