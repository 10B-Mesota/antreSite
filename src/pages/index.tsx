import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-negru h-screen">
      <Head>
        <title>Proiect Antre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-negru">
        <p className="mx-10 text-white py-4">
          Dorim sa oferim oportunitatea tinerilor pasionați de a crea jocuri
          video și nu numai de a-și face cunoscute creațiile și, de asemenea, sa
          poata castiga din munca lor. Acest proiect are ca scop promovarea
          jocurilor acestora. Pentru început, targetul pe care ni l-am propus
          este de 10 jocuri/luna, urmand apoi sa crească împreună cu firma.
        </p>
      </div>
    </div>
  );
};

export default Home;
