import { useRouter } from "next/router";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

const Prices = () => {
  const router = useRouter();

  return (
    <div className="bg-black h-screen text-center text-white">
      <Navbar />
      <div className="grid grid-cols-3 m-10 gap-8">
        <div className="bg-negru rounded-lg hover:scale-105 hover:border-2 border-gri">
          <div className="px-10">
            <h2 className="text-portocaliu text-xl my-4">Standard Tier</h2>
            <p className="">Publicarea jocului sub numele brand-ului nostru</p>
            <p className="mt-3">Cost: 7% din venit</p>
            <button className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black hover:text-white">
              Incepe Acum
            </button>
          </div>
        </div>

        <div className="bg-negru rounded-lg hover:scale-105 hover:border-2 border-gri">
          <div className="px-10">
            <h2 className="text-portocaliu text-xl my-4">Advanced Tier</h2>
            <p className="">
              Publicarea jocului si mentinerea relatilor pe termen de 1 an
            </p>
            <p className="mt-3">Cost: 20% din primul milion de dolari/joc</p>
            <button className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black hover:text-white">
              Incepe Acum
            </button>
          </div>
        </div>

        <div className="bg-negru rounded-lg hover:scale-105 hover:border-2 border-gri">
          <div className="px-10">
            <h2 className="text-portocaliu text-xl my-4">Partnership</h2>
            <p className="">
              Publicarea jocului sub brand-ul nostru si crearea unui parteneriat
              cu echipa noastra
            </p>
            <p>Feedback si ajutor in creearea jocurilor</p>
            <p className="mt-3">Cost personalizat</p>
            <button
              className="mt-4 bg-portocaliu px-2 py-1 mb-4 rounded-md text-black hover:text-white"
              onClick={() => {
                router.push("mailto:contact@pheonix.gq");
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
