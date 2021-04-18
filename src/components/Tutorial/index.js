import React, { useState } from "react";
// import Tab from "./Tab";
import TabButton from "./TabButton";

// const BaseContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   ${(props) => props.theme.breakpoints.up("sm")} {
//     flex-direction: row;
//   }
// `;

// const BaseButtonContainer = styled.div`
//   display: none;

//   ${(props) => props.theme.breakpoints.up("sm")} {
//     display: flex;
//     flex-direction: column;
//     margin-right: ${(props) => props.theme.spacing(2)}px;
//     margin-bottom: 1rem;
//   }
// `;

// const BaseTabs = styled(Tabs)`
//   ${(props) => props.theme.breakpoints.up("sm")} {
//     display: none;
//   }
// `;

// const BaseMuiTab = styled(MuiTab)`
//   flex-grow: 1;
// `;

// const BaseTabContainer = styled.div`
//   flex-grow: 1;
// `;

// export default function Tutorial() {
//   const [currentTab, setCurrentTab] = useState(0);

//   const args = [
//     {
//       variant: "phone",
//       slideDeck: [
//         {
//           icone: "/images/celular-passo1-icone.png",
//           passo: "/images/celular-passo1-orig.png",
//           titulo: "Acesse o site da receita",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Acesse/crie sua conta (clique no link){" "}
//                 <Link>www.nfp.fazenda.sp.gov.br/login</Link>
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 O cadastro pode ser feito pelo celular se você possuir o
//                 aplicativo da Receita.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo2-icone.png",
//           passo: "/images/celular-passo2-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Se estiver no site, clique em "Entidades" e depois em "Doação de
//                 cupons com CPF (automático)".
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Se estiver no aplicativo, clique em "Doação Cupom com CPF".
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo3-icone.png",
//           passo: "/images/celular-passo3-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 No campo "Período", selecione o prazo pelo qual deseja doar suas
//                 notas.
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Após esse prazo, caso queira continuar doando você precisará
//                 refazer esse passo-a-passo.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo4-icone.png",
//           passo: "/images/celular-passo4-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ
//                 04.955.194/0001-30
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Haverá mais de uma opção, selecione aquela que aparece ativa e
//                 clique em confirmar doação automática.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo5-icone.png",
//           passo: "/images/celular-passo5-orig.png",
//           titulo: "Pronto!",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Pronto! Agora quando fizer suas compras, não se esqueça de pedir
//                 o CPF e seus créditos irão para a AGENTE de forma automática!
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo6-icone.png",
//           passo: "/images/celular-passo6-orig.png",
//           titulo: "Compartilhe",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Compartilhe essa ideia com seus pais, irmãos, primos, amigos da
//                 facul, tios, vizinhos e vamos juntos ser agentes de
//                 transformação!
//               </Tab.SlideText>
//             </>
//           ),
//         },
//       ],
//     },
//     {
//       variant: "laptop",
//       slideDeck: [
//         {
//           icone: "/images/celular-passo1-icone.png",
//           passo: "/images/pc-passo1-orig.png",
//           titulo: "Acesse o site da receita",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Acesse/crie sua conta (clique no link){" "}
//                 <Link>www.nfp.fazenda.sp.gov.br/login</Link>
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 O cadastro pode ser feito pelo celular se você possuir o
//                 aplicativo da Receita.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo2-icone.png",
//           passo: "/images/pc-passo1-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Se estiver no site, clique em "Entidades" e depois em "Doação de
//                 cupons com CPF (automático)".
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Se estiver no aplicativo, clique em "Doação Cupom com CPF".
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo3-icone.png",
//           passo: "/images/pc-passo1-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 No campo "Período", selecione o prazo pelo qual deseja doar suas
//                 notas.
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Após esse prazo, caso queira continuar doando você precisará
//                 refazer esse passo-a-passo.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo4-icone.png",
//           passo: "/images/pc-passo1-orig.png",
//           titulo: "Acesse XXXXXXXXXXXX",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Procure a ASSOCIACAO METODISTA LIVRE AGENTE com nosso CNPJ
//                 04.955.194/0001-30
//               </Tab.SlideText>
//               <Tab.SlideText>
//                 Haverá mais de uma opção, selecione aquela que aparece ativa e
//                 clique em confirmar doação automática.
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo5-icone.png",
//           passo: "/images/pc-passo1-orig.png",
//           titulo: "Pronto!",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Pronto! Agora quando fizer suas compras, não se esqueça de pedir
//                 o CPF e seus créditos irão para a AGENTE de forma automática!
//               </Tab.SlideText>
//             </>
//           ),
//         },
//         {
//           icone: "/images/celular-passo6-icone.png",
//           passo: "/images/pc-passo6.png",
//           titulo: "Compartilhe",
//           texto: (
//             <>
//               <Tab.SlideText>
//                 Compartilhe essa ideia com seus pais, irmãos, primos, amigos da
//                 facul, tios, vizinhos e vamos juntos ser agentes de
//                 transformação!
//               </Tab.SlideText>
//             </>
//           ),
//         },
//       ],
//     },
//   ];

//   return (
//     <BaseContainer>
//       <BaseTabs
//         value={currentTab}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={(_, newTab) => setCurrentTab(newTab)}
//         aria-label="tutorial de doação"
//       >
//         <BaseMuiTab label="Celular" />
//         <BaseMuiTab label="Computador" />
//       </BaseTabs>
//       <BaseButtonContainer>
//         <TabButton
//           label="Celular"
//           image="/images/celular.png"
//           selected={currentTab === 0}
//           onClick={() => {
//             setCurrentTab(0);
//           }}
//         />
//         <TabButton
//           label="Computador"
//           image="/images/pc.png"
//           selected={currentTab === 1}
//           onClick={() => {
//             setCurrentTab(1);
//           }}
//         />
//       </BaseButtonContainer>
//       <BaseTabContainer>
//         <Tab {...args[currentTab]} />
//       </BaseTabContainer>
//     </BaseContainer>
//   );
// }

export default function index() {
  return <div></div>;
}
