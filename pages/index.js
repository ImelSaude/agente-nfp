import React, { useState } from "react";
import Head from "next/head";
import AppBar from "../src/components/AppBar";
import AppDrawer from "../src/components/AppDrawer";
import Hero from "../src/components/Hero";
import Tab from "../src/components/Tutorial/Tab";
import slideDecks from "../src/components/Tutorial/slideDecks";
import TabButton from "../src/components/Tutorial/TabButton";
import Projeto from "../src/components/Projeto";
import { SocialIcon } from "react-social-icons";
import FAQ from "../src/components/FAQ";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tutorialVariant, setTutorialVariant] = useState("phone");

  return (
    <div className="min-h-screen">
      <Head>
        <meta
          property="og:title"
          content="Transforme seus gastos em impacto social"
        />
        <meta
          property="og:description"
          content="É simples, é rápido, não custa nada para você e ajuda muita gente! Doe suas notas fiscais."
        />
        <meta
          property="og:image"
          content="https://doesuanota.org.br/images/social-img.png"
        />
        <meta property="og:url" content="https://doesuanota.org.br" />
        <meta
          property="og:site_name"
          content="Doe Suas Notas Fiscais - Agente"
        />

        <title>Doe Suas Notas Fiscais - Agente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar onToggleMenu={() => setDrawerOpen(true)} />
        <AppDrawer
          isOpen={drawerOpen}
          onClickOutside={() => setDrawerOpen(false)}
        />
        <Hero />
        <section id="como-doar" className="mt-12 m-8 md:mt-16 md:m-12">
          <h3 className="text-red uppercase font-bold font-title text-3xl md:text-5xl text-center mb-4 md:mb-8">
            Como doar as notas fiscais?
          </h3>
          <div className="mb-2 mx-auto">
            <TabButton tabChanged={(variant) => setTutorialVariant(variant)} />
          </div>
          <Tab
            variant={tutorialVariant}
            slideDeck={slideDecks[tutorialVariant]}
          />
        </section>
        <section className="flex flex-col-reverse md:flex-row">
          <div className="bg-yellow p-8 md:p-12 flex-grow relative flex">
            <div className="max-w-1/2 md:max-w-3/4 max-h-full flex flex-col justify-center text-normal md:text-xl">
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
              <img
                src="/images/quadro1-amarelo.png"
                className="absolute inset-0"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row bg-gray-darker text-white text-center md:text-left md:mt-16">
          <div className="w-full md:w-1/2 p-8 pt-12 md:pb-0 md:p-12 text-lg flex flex-col justify-center">
            <h3 className="text-3xl md:text-6xl mb-4 md:mb-8 font-bold tracking-wide text-yellow uppercase font-title">
              Dúvidas ou problemas?
            </h3>
            <p>"Tenho dificuldade com tecnologia. Será que vou conseguir?"</p>
            <p>"Gasto muito pouco. Vale a pena mesmo assim?"</p>
            <p>"Quero fazer a doação, mas sempre me esqueço. O que fazer?"</p>
          </div>
          <div className="w-full md:w-1/2 p-8 pt-0 pb-12 md:p-12">
            <a
              href="https://www.youtube.com/watch?v=UjjUg1gHlJw"
              target="_blank"
            >
              <h5 className="text-xl md:text-3xl mb-2 text-center">
                Assista ao vídeo
              </h5>
              <div className="pt-video relative w-full">
                <div className="absolute inset-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/UjjUg1gHlJw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section
          id="sobre"
          className="flex flex-col md:mt-16 pt-12 text-gray-darker"
        >
          <h3 className="text-3xl md:text-5xl text-center font-bold tracking-wide text-red font-title">
            Quem é a AGENTE?
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:max-w-1/2 p-6 lg:p-12 lg:pr-6">
              <img src="/images/frente.png" alt="Foto da Agente" />
            </div>
            <div className="lg:max-w-1/2 p-6 pt-0 lg:p-12 lg:pl-6 text-xl flex flex-col justify-center">
              <div className="p-0 lg:p-12 text-lg lg:text-2xl flex flex-col justify-center lg:bg-gray-lighter lg:shadow-md h-full">
                <p>
                  Somos uma ONG que atua,{" "}
                  <span className="font-bold">desde 1993</span>, em{" "}
                  <span className="font-bold">São Remo</span>, onde moram cerca
                  de 8 mil pessoas e fica ao lado da USP.
                </p>
                <p>
                  Desenvolvemos <span className="font-bold">7 programas</span>{" "}
                  nas áreas de educação, esporte, música, artesanato e saúde e
                  atendemos <span className="font-bold">250 pessoas</span> por
                  mês.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-12 py-16">
          <h3 className="text-red uppercase font-bold font-title text-3xl md:text-5xl text-center mb-4 md:mb-8">
            Clique nos logos e veja o vídeo de nossos projetos
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Projeto
              src="/images/02-Espaco-Girassol.jpg"
              href="https://youtu.be/cYOENq6R1_Y"
            >
              Contra-turno para crianças de 6-12 anos
            </Projeto>
            <Projeto
              src="/images/01-PAPO-Jovem.jpg"
              href="https://youtu.be/8c1bP__mmk4"
            >
              Programa de Apoio ao Jovem
            </Projeto>
            <Projeto
              src="/images/03-MOVA.jpg"
              href="https://youtu.be/HEupPwGm8Pw"
            >
              Educação de jovens e adultos
            </Projeto>
            <Projeto
              src="/images/04-Acompanhamento-Nutricional.jpg"
              href="https://agente.org.br/projetos/acompanhamento-nutricional/"
            >
              Acompanhamento físico e nutricional (parceria com Pastoral da
              Criança)
            </Projeto>
            <Projeto
              src="/images/06-Agente-Joga.jpg"
              href="https://youtu.be/ClyW4t87uPQ"
            >
              Aulas de futebol para crianças e adolescentes
            </Projeto>
            <Projeto
              src="/images/07-Voz-DAgente.jpg"
              href="https://youtu.be/_8Zb7PjCgrI"
            >
              Aulas e apresentações musicais
            </Projeto>
            <Projeto
              src="/images/08-Delinearte.jpg"
              href="https://youtu.be/8kWxfSUMUt4"
            >
              Aulas de artesanato para mulheres
            </Projeto>
            <Projeto
              src="/images/00-Agente.jpg"
              href="https://youtu.be/yOiYJtd8MPU"
            >
              Animação com todos os nossos projetos
            </Projeto>
          </div>
        </section>
        <section id="faq" className="p-12 pt-16 bg-yellow">
          <h3 className="uppercase font-bold font-title text-3xl md:text-5xl text-center mb-8 md:mb-12">
            Dúvidas mais frequentes
          </h3>
          <FAQ pergunta="1. O que é o programa da Nota Fiscal Paulista?">
            <p>
              R: É um programa de estimulo à cidadania fiscal no Estado de São
              Paulo, que tem por objetivo estimular os consumidores a exigirem a
              entrega do documento fiscal na hora da compra. Além disso, visa
              gerar créditos aos consumidores, aos cidadãos e às empresas do
              Estado.
            </p>
          </FAQ>
          <FAQ pergunta="2. Fiz a doação automática, mas quero parar. Posso cancelar?">
            <p>
              R: Sim, você pode cancelar a doação automática de suas notas
              fiscais a qualquer momento. Basta acessar sua conta e parar a
              doação.
            </p>
          </FAQ>
          <FAQ pergunta="3. Não tenho conta. Como posso criar uma?">
            <p>
              R: Acesse o site da{" "}
              <a
                className="underline"
                href="https://www.nfp.fazenda.sp.gov.br/login.aspx"
              >
                secretaria da fazenda
              </a>{" "}
              e clicar em "Novos cadastros: pessoa física".
            </p>
            <p>
              Se estiver no celular, você também pode baixar o aplicativo
              oficial da Nota Fiscal Paulista na Play Store (Android) ou App
              Store (iPhone) e clicar em "Registre sua conta".
            </p>
          </FAQ>
          <FAQ pergunta="4. Criei uma conta no passado, mas nunca usei">
            <p>
              R: Se esse for o seu caso, você precisará realizar uma
              transferência de qualquer valor para sua conta. Se você não tiver
              nenhum saldo para transferir, basta pedir para inserir o CPF nas
              compras para gerar créditos.
            </p>
          </FAQ>
          <FAQ pergunta="5. Preciso gastar muito para gerar mais créditos?">
            <p>
              R: Não, qualquer nota fiscal doada pode gerar até R$ 265,30 em
              créditos para a AGENTE! Isso significa que um cafezinho na padaria
              de R$ 5,00 pode se transformar numa doação de R$ 265,30 para a
              AGENTE.
            </p>
            <p>
              Assim, o importante é sempre pedir o CPF na nota independente do
              valor da compra.
            </p>
          </FAQ>
          <FAQ pergunta="6. Como é calculado o valor da doação?">
            <p>
              R: O valor da doação está relacionado ao imposto de ICMS pago pelo
              estabelecimento no mês que você efetuou a sua compra. Você pode
              conferir as regras de cálculo no site da receita da fazenda.
              <a
                className="underline"
                href="https://portal.fazenda.sp.gov.br/servicos/nfp/Paginas/Como-%C3%A9-feito-o-c%C3%A1lculo-do-cr%C3%A9dito.aspx"
              >
                Clique aqui.
              </a>
            </p>
          </FAQ>
          <FAQ pergunta="7. A receita federal utilizará as notas fiscais doadas para me monitorar?">
            <p>
              R: Não. A receita federal possui seu próprio banco de dados para
              fiscalização e não precisa das informações do programa da Nota
              Fiscal Paulista.
            </p>
          </FAQ>
          <FAQ pergunta="8. Como o dinheiro doado é utilizado pela AGENTE?">
            <p>
              R: Todo dinheiro arrecado é utilizado para desenvolver os projetos
              da AGENTE. Cerca de 80% dos recursos vão para a equipe
              (educadores, cozinha, limpeza, administrativo e coordenadores) e
              os 20% restantes são despesas gerais (ex. materiais pedagógicos,
              alimentação, produtos de limpeza, escritório de contabilidade,
              contas de água e luz etc)
            </p>
            <p>
              Desde 2012, a AGENTE apresenta as demonstrações financeiras com os
              resultados do ano. Você pode conferi-las no{" "}
              <a
                className="underline"
                href="https://agente.org.br/"
                target="_blank"
              >
                nosso site.
              </a>
            </p>
          </FAQ>
          <FAQ pergunta="9. Ainda ficou alguma dúvida?">
            <p>
              Escreva para{" "}
              <a
                className="underline"
                href="mailto:comunicacao@agente.org.br"
                target="_blank"
              >
                comunicacao@agente.org.br
              </a>{" "}
              e teremos o maior prazer em falar com você!
            </p>
          </FAQ>
        </section>
        <section className="bg-red py-12">
          <h5 className="text-center font-title uppercase tracking-wide text-3xl md:text-5xl text-white">
            Quero saber mais!
          </h5>
          <div className="flex flex-wrap justify-center mt-4">
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              className="rounded-full border-2 border-white m-2"
              url="https://www.facebook.com/curta.agente/"
              target="_blank"
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              className="rounded-full border-2 border-white m-2"
              url="https://www.instagram.com/instaagente/"
              target="_blank"
            />
            <a
              href="https://agente.org.br/"
              className="social-icon rounded-full border-2 border-white flex flex-col justify-center text-white text-xs relative p-2 m-2"
              target="_blank"
            >
              WWW
            </a>
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              className="rounded-full border-2 border-white m-2"
              url="mailto:comunicacao@agente.org.br"
              target="_blank"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
