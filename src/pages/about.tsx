import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";

const About = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen text-center">
      <Navbar />
      <div className="mt-6">
        <h1 className="font-bold text-portocaliu text-2xl">Cine suntem?</h1>
        <p>
          O mica echipa devotata din Romania care incearca sa realizeze un brand
          inedit si onorabil.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-center font-bold text-portocaliu text-2xl my-2">
          Fondatori
        </h2>
        <div className="grid-cols-2 grid gap-4 mx-2">
          <div className="bg-negru">
            <img
              src="logo_scipex.png"
              className="max-h-20 mx-auto rounded-full w-20 mt-2"
            />
            <div className="">
              <h2 className="text-portocaliu text-xl mb-4">Scipex</h2>
              <p className="text-lg">Developer</p>
              <p className="">Nu am uitat niciodata ; la final de rand.</p>
              <button
                className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black"
                onClick={() => {
                  router.push("mailto:scipex@pheonix.gq");
                }}
              >
                scipex@phoenix.gq
              </button>
            </div>
          </div>

          <div className="bg-negru">
            <img
              src="logo_sera.jpg"
              className="max-h-20 mx-auto rounded-full w-20 mt-2"
            />
            <div className="">
              <h2 className="text-portocaliu text-xl mb-4">Jeff</h2>
              <p className="text-lg">Developer</p>
              <p className="">Stiu sa programez doar in sistem binar.</p>
              <button
                className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black"
                onClick={() => {
                  router.push("mailto:jeff@pheonix.gq");
                }}
              >
                jeff@phoenix.gq
              </button>
            </div>
          </div>

          <div className="bg-negru">
            <img
              src="logo_gabi.jpg"
              className="max-h-20 mx-auto rounded-full w-20 mt-2"
            />
            <div className="">
              <h2 className="text-portocaliu text-xl mb-4">Piscot</h2>
              <p className="text-lg">Director de marketing</p>
              <p className="">
                Am cumparat un martisor cu 8 lei in loc de 10 lei.
              </p>
              <button
                className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black"
                onClick={() => {
                  router.push("mailto:piscot@pheonix.gq");
                }}
              >
                piscot@phoenix.gq
              </button>
            </div>
          </div>

          <div className="bg-negru">
            <img
              src="logo_ghe.jpg"
              className="h-20 mx-auto rounded-full w-20 mt-2"
            />
            <div className="">
              <h2 className="text-portocaliu text-xl mb-4">Mr. Ghe</h2>
              <p className="text-lg">Tech guy</p>
              <p className="">
                Repar calculatoare de dinainte sa invat sa merg.
              </p>
              <button
                className="mt-4 bg-portocaliu px-2 py-1 mb-2 rounded-md text-black"
                onClick={() => {
                  router.push("mailto:mr.ghe@phoenix.gq");
                }}
              >
                mr.ghe@phoenix.gq
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
