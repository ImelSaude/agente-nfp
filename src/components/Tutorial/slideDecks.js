import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default {
  phone: [
    {
      img: "/images/cel1.png",
      titulo: "Acesse o site da receita",
      texto: (
        <>
          <p className="font-bold">Acesse sua conta com seu CPF e senha</p>
          <p className="text-gray-dark">
            Se não tiver uma conta, você pode criá-la em{" "}
            <br className="hidden md:inline" />
            <a
              href="https://www.nfp.fazenda.sp.gov.br/login"
              className="underline"
              style={{ lineBreak: "anywhere" }}
              target="_blank"
            >
              www.nfp.fazenda.sp.gov.br/login
            </a>
          </p>
        </>
      ),
    },
    {
      img: "/images/cel2.png",
      titulo: "Clique em ☰",
      texto: (
        <>
          <p>
            Então clique em{" "}
            <span className="font-bold">Doação Cupom com CPF.</span>
          </p>
        </>
      ),
    },
    {
      img: "/images/cel3.png",
      titulo: "Escolha o período de doação",
      texto: (
        <>
          <p>
            No campo <span className="font-bold">Período</span>, selecione o
            prazo pelo qual deseja doar suas notas.
          </p>
          <p className="text-gray-dark">
            Após esse prazo, você precisará refazer esse passo-a-passo caso
            queira continuar doando.
          </p>
        </>
      ),
    },
    {
      img: "/images/cel4.png",
      titulo: "Procure a Agente",
      texto: (
        <>
          <p>
            Clique em <span className="font-bold">Selecione uma entidade</span>.
            Procure a{" "}
            <span className="font-bold">ASSOCIACAO METODISTA LIVRE AGENTE</span>{" "}
            ou <span className="font-bold">PROJETO GIRASSOL</span>
          </p>
          <p className="bg-red text-white font-bold text-center py-2">
            IMPORTANTE!!!
            <br />
            CNPJ 04.955.194/0001-30
          </p>
          <p>
            Se houver mais de uma opção, selecione aquela que aparece ativa.
          </p>
        </>
      ),
    },
    {
      img: "/images/cel5.png",
      titulo: "Confirme a doação",
      texto: (
        <>
          <p>
            Clique em{" "}
            <span className="font-bold">Confirmar Doação Automática</span> e
            pronto!!!
          </p>
          <p>
            Agora quando fizer suas compras,{" "}
            <span className="bg-red text-white font-bold p-1">
              peça sempre o CPF.
            </span>
          </p>
        </>
      ),
    },
    {
      img: "/images/cel6.png",
      titulo: "Compartilhe essa ideia!",
      texto: (
        <>
          <p>
            <span className="bg-red text-white font-bold p-1">Compartilhe</span>{" "}
            a doação nas suas redes e vamos juntos ser{" "}
            <span className="font-bold">agentes de transformação!</span>
          </p>
          <div className="flex flex-wrap justify-center">
            <FacebookShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              quote="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </>
      ),
    },
  ],
  laptop: [
    {
      img: "/images/pc1.png",
      titulo: "Acesse o site da receita",
      texto: (
        <>
          <p>
            Acesse sua conta com seu CPF e senha. Clique no link abaixo:
            <br />
            <a
              href="https://www.nfp.fazenda.sp.gov.br/login"
              className="underline"
              style={{ lineBreak: "anywhere" }}
              target="_blank"
            >
              www.nfp.fazenda.sp.gov.br/login
            </a>
          </p>
          <p>Se não tiver uma conta, você pode criá-la nesse mesmo site.</p>
        </>
      ),
    },
    {
      img: "/images/pc2.png",
      titulo: "Selecione o tipo da doação",
      texto: (
        <>
          <p>
            Clique em <span className="font-bold">Entidades</span> e depois em{" "}
            <span className="font-bold">
              Doação de cupons com CPF (automático)
            </span>
            .
          </p>
        </>
      ),
    },
    {
      img: "/images/pc3.png",
      titulo: "Procure a Agente",
      texto: (
        <>
          <p>
            Procure a AGENTE pelo nosso CNPJ
            <br />
            <span className="bg-red text-white font-bold text-center py-2">
              04.955.194/0001-30
            </span>
          </p>
          <p>
            Se houver mais de uma opção, selecione aquela que aparece ativa.
          </p>
        </>
      ),
    },
    {
      img: "/images/pc4.png",
      titulo: "Selecione o período da doação",
      texto: (
        <>
          <p>
            No campo <span className="font-bold">Período</span>, selecione o
            prazo pelo qual deseja doar suas notas.
          </p>
          <p className="text-gray-dark">
            Após esse prazo, você precisará refazer esse passo-a-passo caso
            queira continuar doando. Se escolher{" "}
            <span className="bg-red text-white font-bold p-1">
              Indeterminado
            </span>
            , poderá cancelar a doação a hora que quiser.
          </p>
        </>
      ),
    },
    {
      img: "/images/pc4.png",
      titulo: "Confirme a doação",
      texto: (
        <>
          <p>
            Clique em{" "}
            <span className="font-bold">Confirmar Doação Automática</span> e
            pronto!!!
          </p>
          <p>
            Agora quando fizer suas compras,{" "}
            <span className="bg-red text-white font-bold p-1">
              peça sempre o CPF.
            </span>
          </p>
        </>
      ),
    },
    {
      img: "/images/pc5.png",
      titulo: "Compartilhe essa ideia!",
      texto: (
        <>
          <p>
            <span className="bg-red text-white font-bold p-1">Compartilhe</span>{" "}
            a doação nas suas redes e vamos juntos ser{" "}
            <span className="font-bold">agentes de transformação!</span>
          </p>
          <div className="flex flex-wrap justify-center">
            <FacebookShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              quote="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url="https://doesuanota.org.br"
              className="m-2"
              title="Acabei de doar as notas fiscais para a AGENTE. Doe também e transforme seus gastos em impacto social!"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </>
      ),
    },
  ],
};
