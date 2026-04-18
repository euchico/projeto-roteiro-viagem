export const roteiro = {
  viagem: {
    titulo: "Roteiro — Foz do Iguaçu",
    periodo: "23 — 28 de Abril",
    local: "Foz do Iguaçu"
  },
  dias: [
    {
      id: "dia-1",
      label: "Dia 1",
      titulo: "Dia 1 — Cataratas e Parque das Aves",
      data: "Segunda-feira, 12 de outubro",
      observacao: "Dia de contemplação e caminhadas leves, ideal para começar com calma.",
      passeios: [
        {
          nome: "Cataratas do Iguaçu (Brasil)",
          prioridade: "Alta",
          endereco: "Rodovia BR-469, Km 18, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Cataratas+do+Iguacu+Brasil",
          ingresso: {
            valor: "R$ 97,00",
            comprado: true,
            oficial: "https://cataratasdoiguacu.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "09:00 às 16:00"
          },
          planejamento: {
            melhorHorario: "Manhã",
            deslocamento: "30 min do centro",
            duracao: "3 a 4 horas"
          },
          checklist: ["Protetor solar", "Capa de chuva", "Garrafa d'água", "Documento"],
          notas: "Priorizar este passeio cedo para evitar filas e calor intenso."
        },
        {
          nome: "Parque das Aves",
          prioridade: "Média",
          endereco: "Av. das Cataratas, 12450, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Parque+das+Aves+Foz+do+Iguacu",
          ingresso: {
            valor: "R$ 80,00",
            comprado: false,
            oficial: "https://www.parquedasaves.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "08:30 às 16:30"
          },
          planejamento: {
            melhorHorario: "Após almoço",
            deslocamento: "5 min das Cataratas",
            duracao: "1h30 a 2h"
          },
          checklist: ["Celular carregado", "Repelente", "Boné"],
          notas: "Excelente sequência após as Cataratas por ser ao lado da entrada do parque."
        }
      ]
    },
    {
      id: "dia-2",
      label: "Dia 2",
      titulo: "Dia 2 — Fronteira e compras",
      data: "Terça-feira, 13 de outubro",
      observacao: "Dia para logística simples e ritmo mais flexível.",
      passeios: [
        {
          nome: "Marco das Três Fronteiras",
          prioridade: "Média",
          endereco: "Av. General Meira, s/n, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Marco+das+Tres+Fronteiras+Foz",
          ingresso: {
            valor: "R$ 55,00",
            comprado: true,
            oficial: "https://marcodastresfronteiras.com.br"
          },
          funcionamento: {
            dias: "Terça a domingo",
            entrada: "13:30 às 21:00"
          },
          planejamento: {
            melhorHorario: "Fim da tarde",
            deslocamento: "20 min do centro",
            duracao: "2 horas"
          },
          checklist: ["Documento", "Câmera", "Agasalho leve"],
          notas: "Chegar no pôr do sol para aproveitar a vista e o show noturno."
        },
        {
          nome: "Duty Free Puerto Iguazú",
          prioridade: "Baixa",
          endereco: "Ruta 12 Km 1645, Puerto Iguazú, Misiones, Argentina",
          mapa: "https://maps.google.com/?q=Duty+Free+Puerto+Iguazu",
          ingresso: {
            valor: "Sem ingresso",
            comprado: true,
            oficial: "https://www.dutyfreeshoppuertoiguazu.com"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "12:00 às 21:00"
          },
          planejamento: {
            melhorHorario: "Noite",
            deslocamento: "35 min do centro",
            duracao: "1h30"
          },
          checklist: ["Documento original", "Cartão habilitado internacional"],
          notas: "Verificar cotação antes e priorizar itens planejados para evitar compras por impulso."
        }
      ]
    },
    {
      id: "dia-3",
      label: "Dia 3",
      titulo: "Dia 3 — Lado argentino",
      data: "Quarta-feira, 14 de outubro",
      observacao: "Dia de caminhada longa e trilhas, reservar energia.",
      passeios: [
        {
          nome: "Cataratas do Iguaçu (Argentina)",
          prioridade: "Alta",
          endereco: "Parque Nacional Iguazú, Misiones, Argentina",
          mapa: "https://maps.google.com/?q=Parque+Nacional+Iguazu+Argentina",
          ingresso: {
            valor: "AR$ consultar no site",
            comprado: false,
            oficial: "https://iguazuargentina.com"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "08:00 às 16:00"
          },
          planejamento: {
            melhorHorario: "Manhã cedo",
            deslocamento: "50 min da fronteira",
            duracao: "Dia inteiro"
          },
          checklist: ["Passaporte ou RG", "Tênis confortável", "Lanche"],
          notas: "Checar fila da imigração e levar documento físico em bom estado."
        }
      ]
    },
    {
      id: "dia-4",
      label: "Dia 4",
      titulo: "Dia 4 — Itaipu e retorno",
      data: "Quinta-feira, 15 de outubro",
      observacao: "Dia de passeio técnico e encerramento da viagem.",
      passeios: [
        {
          nome: "Itaipu Panorâmica",
          prioridade: "Média",
          endereco: "Av. Tancredo Neves, 6731, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Itaipu+Panoramica+Foz+do+Iguacu",
          ingresso: {
            valor: "R$ 59,00",
            comprado: true,
            oficial: "https://www.turismoitaipu.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "08:30 às 17:00"
          },
          planejamento: {
            melhorHorario: "Manhã",
            deslocamento: "25 min do centro",
            duracao: "1h30"
          },
          checklist: ["Documento", "Chegar com 15 min de antecedência"],
          notas: "Ideal para finalizar a viagem com baixa exigência física."
        }
      ]
    }
  ]
};
