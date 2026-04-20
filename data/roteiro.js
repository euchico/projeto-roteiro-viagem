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
      titulo: "Dia 1 — Cataratas",
      data: "24 de Abril — Sexta-feira",
      observacao: "Dia focado na principal atração da viagem, as Cataratas do Iguaçu.",
      passeios: [
        {
          nome: "Parque Nacional do Iguaçu",
          prioridade: "Alta",
          endereco: "Rodovia BR-469, KM 18",
          mapa: "https://maps.app.goo.gl/4uwBSY9uVCUJikzz6",
          ingresso: {
            valor: "R$ 121,00",
            comprado: true,
            oficial: "https://cataratasdoiguacu.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "8:30* às 16:00"
          },
          planejamento: {
            distancia: "~ 15km",
            tempo: "~ 25min",
            valor: "~ R$ 33"
          },
          checklist: ["Repelente", "Protetor solar", "Roupa extra", "Bolsa impermeável"],
          notas: "Colocar 'Parque Nacional do Iguaçu' no Uber."
        },
        {
          nome: "Macuco Safari",
          prioridade: "Média",
          endereco: "Rodovia BR-469, KM 18",
          mapa: "https://maps.app.goo.gl/4uwBSY9uVCUJikzz6",
          ingresso: {
            valor: "R$ 384,00",
            comprado: true,
            oficial: "https://macucosafari.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "8:30* às 16:00"
          },
          planejamento: {
            distancia: "~ 15km",
            tempo: "~ 25min",
            valor: "~ R$ 33"
          },
          checklist: ["Repelente", "Protetor solar", "Roupa extra", "Bolsa impermeável"],
          notas: "Passeio molhado. Levar troca de roupa obrigatoriamente."
        },
        {
          nome: "Parque das Aves",
          prioridade: "Alta",
          endereco: "Av. das Cataratas, 12450 - KM 17",
          mapa: "https://maps.app.goo.gl/BbPbadtnaaNb7vvbA",
          ingresso: {
            valor: "R$ 110,00",
            comprado: true,
            oficial: "https://www.parquedasaves.com.br"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "8:30 às 16:00"
          },
          planejamento: {
            distancia: "~ 15km",
            tempo: "~ 25min",
            valor: "~ R$ 33"
          },
          checklist: ["Repelente", "Celular carregado"],
          notas: "Pode ser feito após as Cataratas."
        },
        {
          nome: "Avenida Pedro Basso",
          prioridade: "Baixa",
          endereco: "Av. Pedro Basso",
          mapa: "https://maps.app.goo.gl/S8knFJHUwZ6fAHNY9",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "https://g1.globo.com/pr/oeste-sudoeste/noticia/2023/01/25/avenida-considerada-mais-bonita-de-foz-do-iguacu-tem-tunel-verde-com-mais-de-150-arvores-conheca-historia.ghtml"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "Livre"
          },
          planejamento: {
            distancia: "~ 3km",
            tempo: "5min",
            valor: "~ R$ 17"
          },
          checklist: [],
          notas: "Um passeio 'Coringa' que podemos deixa para qualquer dia por ser próximo."
        }
      ]
    },
    {
      id: "dia-2",
      label: "Dia 2",
      titulo: "Dia 2 — Compras no Paraguai",
      data: "25 de Abril - Sábado",
      observacao: "Dia focado no Paraguai devido aos dias de funcionamento do comercio local.",
      passeios: [
        {
          nome: "Paraguai (Ciudad del Este)",
          prioridade: "Alta",
          endereco: "Ciudad del Este, Paraguai",
          mapa: "https://maps.app.goo.gl/nYXSRAFVahBMG1d49",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "https://www.comprasparaguai.com.br"
          },
          funcionamento: {
            dias: "Seg — Sab",
            entrada: "7:00 às 16:00"
          },
          planejamento: {
            distancia: "~ 6km",
            tempo: "~ 25min",
            valor: "~ R$ 17"
          },
          checklist: ["Documentos", "Lista de compras"],
          notas: "Seguir roteiro, do Google Docs, para compras no Paraguai."
        },
        {
          nome: "Shopping Paris",
          prioridade: "Média",
          endereco: "Av. Dr. Luis Maria Argaña",
          mapa: "https://maps.app.goo.gl/VKGDkocAsrNs4zDJ6",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "https://www.shoppingparis.com.py"
          },
          funcionamento: {
            dias: "Todos os dias",
            entrada: "7:00 às 17:00"
          },
          planejamento: {
            distancia: "~ 8km",
            tempo: "~ 25min",
            valor: "???"
          },
          checklist: [""],
          notas: "Verificar a possibilidade de ir diretamente de Uber."
        },
        {
          nome: "Mesquita Omar Ibn Al-Khattab",
          prioridade: "Baixa",
          endereco: "Rua Meca, 599",
          mapa: "https://maps.app.goo.gl/AbSf1j47AzkNhwGA9",
          ingresso: {
            valor: "R$ 40",
            comprado: false,
            oficial: "https://www.instagram.com/mesquitafoz"
          },
          funcionamento: {
            dias: "Seg — Sab",
            entrada: "8:30 às 17:30"
          },
          planejamento: {
            distancia: "~ 2,5km",
            tempo: "~ 5min",
            valor: "~ R$ 10"
          },
          checklist: ["Roupas adequadas"],
          notas: "Passeio de encaixe caso sairmos cedo do Paraguai."
        },
        {
          nome: "Marco das Três Fronteiras",
          prioridade: "Alta",
          endereco: "Ac. Três Fronteiras",
          mapa: "https://maps.app.goo.gl/qTQmt75bTMx8dYzQ7",
          ingresso: {
            valor: "R$ 55",
            comprado: false,
            oficial: "https://marcodastresfronteiras.com.br"
          },
          funcionamento: {
            dias: "Ter — Dom",
            entrada: "13:30 às 21:00"
          },
          planejamento: {
            distancia: "~ 10km",
            tempo: "~ 23min",
            valor: "~ R$ 22"
          },
          checklist: ["Câmera"],
          notas: "Passei muito indicado que tem como horario ideal de chegada por volta das 17hs."
        }
      ]
    },
    {
      id: "dia-3",
      label: "Dia 3",
      titulo: "Dia 3 — Dia de Descanso",
      data: "26 de Abril - Domingo",
      observacao: "Dia mais flexível devido a possibilide de chuva.",
      passeios: [
        {
          nome: "Catedral Nossa Senhora de Guadalupe",
          prioridade: "Média",
          endereco: "Av. Paraná, 5440 - Vila A",
          mapa: "https://maps.app.goo.gl/fyqkHKRcBm1qZRef8",
          ingresso: {
            valor: "Grátis",
            comprado: true,
            oficial: "https://catedraldefoz.org.br/"
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
    },
    {
      id: "dia-4",
      label: "Dia 4",
      titulo: "Dia 4 — Lado argentino e encerramento",
      data: "27 de abril",
      observacao: "Dia de bastante caminhada. Reservar energia.",
      passeios: [
        {
          nome: "Itaipu Binacional",
          prioridade: "Alta",
          endereco: "Av. Tancredo Neves 6702",
          mapa: "https://maps.app.goo.gl/LPXGjZKzP4VV7wV86",
          ingresso: {
            valor: "R$ 188,00",
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
    }
  ]
};