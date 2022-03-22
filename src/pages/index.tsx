import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-max">
      <Head>
        <title>Proiect Antre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="">
        <p className="mx-20 text-white py-4 text-center text-xl">
          Dorim sa oferim oportunitatea tinerilor pasionați de a crea jocuri
          video și nu numai de a-și face cunoscute creațiile și, de asemenea, sa
          poata castiga din munca lor.
        </p>
        <p className="mx-20 text-white py-4 text-center text-xl">
          Oferim un mod simplu de publicare a jocurilor, monetizarea prin
          reclame si achizitii in aplicatie, marketing eficient si transparenta
          completa cu profiturile.
        </p>
        <p className="mx-20 text-white py-4 text-center text-xl">
          Pentru început, targetul pe care ni l-am propus este de 5 jocuri/luna,
          urmand apoi sa crească împreună cu firma.
        </p>
      </div>

      <div className="text-portocaliu font-bold text-2xl text-center mt-2">
        Roadmap
      </div>
      <div className="timeline text-white">
        <div className="container left">
          <div className="content">
            <h2 className="text-portocaliu font-semibold">Q1 2022</h2>
            <p>
              Primele 6 luni compania isi va folosi toate resursele pentru a
              ajuta la dezvoltarea proiectelor mici. Dorim ca produsele noastre
              sa aiba o calitate superioara astfel incat consumatorii sa se
              bucure de experiente inedite.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="text-portocaliu font-semibold">Q4 2022</h2>
            <p>
              Dupa 6 luni de functionare, Phoenix Games isi va mari forta de
              munca angajand specialisti din diferite domenii. Dorim sa ni se
              alature in echipa 40 de programatori, 5 tehnicieni, 4 specialisti
              in marketing si un contabil.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="text-portocaliu font-semibold">Q1 2024</h2>
            <p>
              Timp de 2 ani vom continua sa lucram din greu la definirea
              brandului nostru si cresterea in popularitate.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="text-portocaliu font-semibold">Q4 2026</h2>
            <p>
              La 4 ani dupa infiintarea companiei consideram ca avem destula
              experienta in creerea de jocuri si imbunatatirea lor incat sa
              putem concepe propiul nostru game engine. Acesta va fi usor de
              folosit si plin de ghiduri interactive care ii vor ajuta pe cei
              care au o viziune dar nu stiu sa programeze.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="text-portocaliu font-semibold">Q1 2028</h2>
            <p>
              In aceasta perioada vom incerca sa integram pentru prima data
              tehnologia de tip blockchain. Aceasta vine la pachet cu un sistem
              mult mai usor de efectuat plati si smart contracts prin care
              jucatorii se vor bucura de o experienta mult mai personala.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
