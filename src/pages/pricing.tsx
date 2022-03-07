import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

const Prices = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex m-10 justify-center">
        <Card img="test.jpg" content="Tier1" />
        <Card img="test.jpg" content="Tier2" />
        <Card img="test.jpg" content="Tier3" />
      </div>
    </div>
  );
};

export default Prices;
