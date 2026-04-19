export const roteiro = {
  viagem: {
    titulo: "Roteiro — Foz do Iguaçu",
    periodo: "24 — 27 de Abril",
    local: "Foz do Iguaçu"
  },
  dias: [
    {
      id: "dia-1",
      label: "Dia 1",
      titulo: "Dia 1 — Natureza e primeiros impactos",
      data: "24 de abril",
      observacao: "Dia intenso com principais atrações naturais. Priorizar energia e organização.",
      passeios: [
        {
          nome: "Cataratas do Iguaçu (Brasil)",
          prioridade: "Alta",
          endereco: "Rodovia BR-469, Km 18, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Cataratas+do+Iguacu+Brasil",
          ingresso: {
            valor: "R$ 118,00",
            comprado: false,
            oficial: "https://cataratasdoiguacu.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "2h a 3h",
            valor: "R$ 118,00"
          },
          checklist: ["Repelente", "Protetor solar", "Garrafa d'água"],
          notas: "Passeio principal do dia. Pode ter bastante caminhada."
        },
        {
          nome: "Macuco Safari",
          prioridade: "Alta",
          endereco: "Dentro do Parque Nacional do Iguaçu",
          mapa: "https://maps.google.com/?q=Macuco+Safari",
          ingresso: {
            valor: "R$ 384,00",
            comprado: false,
            oficial: "https://macucosafari.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "Mesmo local das Cataratas",
            tempo: "1h30",
            valor: "R$ 384,00"
          },
          checklist: ["Roupa extra", "Capa de chuva", "Protetor solar"],
          notas: "Passeio molhado. Levar troca de roupa obrigatoriamente."
        },
        {
          nome: "Parque das Aves",
          prioridade: "Média",
          endereco: "Av. das Cataratas, 12450, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Parque+das+Aves+Foz+do+Iguacu",
          ingresso: {
            valor: "R$ 110,00",
            comprado: false,
            oficial: "https://www.parquedasaves.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "Ao lado das Cataratas",
            tempo: "1h30 a 2h",
            valor: "R$ 110,00"
          },
          checklist: ["Repelente", "Celular carregado"],
          notas: "Pode ser feito após as Cataratas."
        },
        {
          nome: "Avenida Pedro Basso",
          prioridade: "Baixa",
          endereco: "Av. Pedro Basso, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Avenida+Pedro+Basso",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "Livre"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "Livre",
            valor: "Grátis"
          },
          checklist: [],
          notas: "Passeio leve ou deslocamento. Verificar intenção real no roteiro."
        }
      ]
    },
    {
      id: "dia-2",
      label: "Dia 2",
      titulo: "Dia 2 — Cultura e Itaipu",
      data: "25 de abril",
      observacao: "Dia equilibrado entre passeio técnico e cultural.",
      passeios: [
        {
          nome: "Itaipu Especial",
          prioridade: "Alta",
          endereco: "Av. Tancredo Neves, 6731, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Itaipu+Binacional",
          ingresso: {
            valor: "R$ 185,00",
            comprado: false,
            oficial: "https://www.turismoitaipu.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "2h a 3h",
            valor: "R$ 185,00"
          },
          checklist: ["Documento", "Chegar com antecedência"],
          notas: "Escolher o passeio mais completo conforme planejado."
        },
        {
          nome: "Templo Chen Tien",
          prioridade: "Média",
          endereco: "Rua Dr. Josivalter Vila Nova, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Templo+Chen+Tien",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "1h",
            valor: "Grátis"
          },
          checklist: ["Respeitar o ambiente", "Câmera"],
          notas: "Local tranquilo, bom para fotos e contemplação."
        },
        {
          nome: "Mercado Barrageiro",
          prioridade: "Baixa",
          endereco: "{{SEM INFORMAÇÃO}}",
          mapa: "{{SEM INFORMAÇÃO}}",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "{{SEM INFORMAÇÃO}}",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "Livre",
            valor: "Variável"
          },
          checklist: ["Dinheiro ou cartão"],
          notas: "Parada opcional para compras ou alimentação."
        },
        {
          nome: "Mesquita Omar Ibn Al-Khattab",
          prioridade: "Média",
          endereco: "Rua Meca, 599, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Mesquita+Omar+Ibn+Al+Khattab",
          ingresso: {
            valor: "R$ 40",
            comprado: false,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "{{SEM INFORMAÇÃO}}",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "1h",
            valor: "R$ 40"
          },
          checklist: ["Roupas adequadas"],
          notas: "Respeitar regras de vestimenta e horários."
        }
      ]
    },
    {
      id: "dia-3",
      label: "Dia 3",
      titulo: "Dia 3 — Compras e fronteira",
      data: "26 de abril",
      observacao: "Dia mais flexível, focado em compras e deslocamentos.",
      passeios: [
        {
          nome: "Paraguai (Ciudad del Este)",
          prioridade: "Média",
          endereco: "Ciudad del Este, Paraguai",
          mapa: "https://maps.google.com/?q=Ciudad+del+Este",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "Meio dia ou mais",
            valor: "Variável"
          },
          checklist: ["Documento original", "Cuidado com compras"],
          notas: "Verificar cotação e evitar horários de pico."
        },
        {
          nome: "Marco das Três Fronteiras",
          prioridade: "Baixa",
          endereco: "Av. General Meira, Foz do Iguaçu - PR",
          mapa: "https://maps.google.com/?q=Marco+das+Tres+Fronteiras",
          ingresso: {
            valor: "R$ 60",
            comprado: false,
            oficial: "https://marcodastresfronteiras.com.br"
          },
          funcionamento: {
            dias: "{{SEM INFORMAÇÃO}}",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "2h",
            valor: "R$ 60"
          },
          checklist: ["Câmera"],
          notas: "Passeio coringa. Ideal para pôr do sol."
        }
      ]
    },
    {
      id: "dia-4",
      label: "Dia 4",
      titulo: "Dia 4 — Lado argentino e encerramento",
      data: "27 de abril",
      observacao: "Dia de bastante caminhada. Reservar energia.",
      passeios: [
        {
          nome: "Parque Nacional Iguazú (Argentina)",
          prioridade: "Alta",
          endereco: "Puerto Iguazú, Argentina",
          mapa: "https://maps.google.com/?q=Parque+Nacional+Iguazu",
          ingresso: {
            valor: "R$ ~170",
            comprado: false,
            oficial: "https://iguazuargentina.com"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "Dia inteiro",
            valor: "R$ ~170"
          },
          checklist: ["Documento", "Tênis confortável", "Água"],
          notas: "Caminha bastante. Dia mais cansativo da viagem."
        },
        {
          nome: "Feira de Porto Iguazú",
          prioridade: "Baixa",
          endereco: "Puerto Iguazú, Argentina",
          mapa: "https://maps.google.com/?q=Feira+Puerto+Iguazu",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "{{SEM INFORMAÇÃO}}",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "1h",
            valor: "Variável"
          },
          checklist: ["Dinheiro"],
          notas: "Boa opção para comprar lembranças."
        },
        {
          nome: "Restaurante Tarobá",
          prioridade: "Média",
          endereco: "{{SEM INFORMAÇÃO}}",
          mapa: "{{SEM INFORMAÇÃO}}",
          ingresso: {
            valor: "Variável",
            comprado: true,
            oficial: "{{SEM INFORMAÇÃO}}"
          },
          funcionamento: {
            dias: "{{SEM INFORMAÇÃO}}",
            entrada: "{{SEM INFORMAÇÃO}}"
          },
          planejamento: {
            distancia: "{{SEM INFORMAÇÃO}}",
            tempo: "1h30",
            valor: "Variável"
          },
          checklist: [],
          notas: "Encerramento da viagem."
        }
      ]
    }
  ]
};