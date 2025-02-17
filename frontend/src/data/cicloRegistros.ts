interface Registro {
    id: number;
    data: string;
    materia: string;
    horasPausa: string;
    horasFeitas: string;
    metodo: string;
    tags: string[];
    foco: number;
    produtividade: number;
    cor: string;
    anotacoes: string;
    imagem?: string;
  }

export const cicloHistoryItems: Registro[] = [
    {
      id: 1,
      data: "2025-02-10",
      materia: "Matemática",
      horasPausa: "00:30:00",
      horasFeitas: "02:15:30",
      metodo: "Resolução de exercícios",
      tags: ["Revisar", "Simulado"],
      foco: 4.5,
      produtividade: 4.2,
      cor: "#007BFF",
      anotacoes: "Revisar a questão 5 da prova passada.",
      imagem: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      data: "2025-02-10",
      materia: "História",
      horasPausa: "00:25:00",
      horasFeitas: "01:45:00",
      metodo: "Leitura e resumos",
      tags: ["Leitura", "Dúvidas"],
      foco: 3.8,
      produtividade: 3.9,
      cor: "#FF5733",
      anotacoes: "Pesquisar mais sobre a Revolução Francesa.",
    },
    {
      id: 3,
      data: "2025-03-10",
      materia: "Português",
      horasPausa: "00:20:00",
      horasFeitas: "02:00:00",
      metodo: "Leitura e resumos",
      tags: ["Leitura", "Resumos"],
      foco: 4.0,
      produtividade: 4.0,
      cor: "#28A745",
      anotacoes: "Revisar a gramática.",
    }
  ];
  