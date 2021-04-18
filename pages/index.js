import React, { useState } from "react";
import Head from "next/head";
import AppBar from "../src/components/AppBar";
import AppDrawer from "../src/components/AppDrawer";
import Hero from "../src/components/Hero";
import Tab from "../src/components/Tutorial/Tab";
import slideDecks from "../src/components/Tutorial/slideDecks";
import TabButton from "../src/components/Tutorial/TabButton";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tutorialVariant, setTutorialVariant] = useState("phone");

  return (
    <div className="min-h-screen">
      <Head>
        <title>Agente - Campanha NFP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar onToggleMenu={() => setDrawerOpen(true)} />
        <AppDrawer
          isOpen={drawerOpen}
          onClickOutside={() => setDrawerOpen(false)}
        />
        <Hero />
        <section className="mt-12 m-8 md:mt-16 md:m-12">
          <div className="md:max-w-1/2 mb-4 md:mb-8 mx-auto">
            <TabButton tabChanged={(variant) => setTutorialVariant(variant)} />
          </div>
          <Tab
            variant={tutorialVariant}
            slideDeck={slideDecks[tutorialVariant]}
          />
        </section>
        <section className="flex flex-col-reverse md:flex-row">
          <div className="bg-yellow p-8 md:p-12 flex-grow relative flex">
            <div className="max-w-1/2 md:max-w-3/4 max-h-full flex flex-col justify-center text-normal md:text-lg">
              <p>Não se esqueça de pedir o CPF quando fizer qualquer compra.</p>
              <p>Se não, de nada vai adiantar.</p>
              <p>
                E já deixe o CPF salvo nos aplicativos (iFood, Rappi, Uber,
                etc.)
              </p>
            </div>
            <div className="max-h-3/4 max-w-1/2 md:max-w-1/4 absolute right-0 bottom-0 flex p-4">
              <div className="relative">
                <img src="/images/pessoa.png" className="max-h-full ml-auto" />
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-1/2 md:w-1/2 flex-grow">
            <div className="w-full pt-quadro relative">
              <img src="/images/quadro1.png" className="absolute inset-0" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
