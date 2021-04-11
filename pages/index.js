import React, { useState } from "react";
import Head from "next/head";
import AppBar from "../src/components/AppBar";
import AppDrawer from "../src/components/AppDrawer";
import Hero from "../src/components/Hero";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      </main>
    </div>
  );
}
