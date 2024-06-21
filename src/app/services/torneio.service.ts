import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorneioService {

  private tournament = [
    { 
      id: 1, 
      nome: 'ASPPE 2024', 
      datas: '23/01/2024',  
      inscricoes: 'teste@gmail.com', 
      numeroInscritos: 23,
      imagemUrl: 'https://www.florinea.sp.gov.br/admin/globalarq/noticia/noticia/651_366/2709ab5194c46f625cb42d1d9c6f9cda.jpeg',
      localizacao: 'Pontal do Peba'
    },
    {
      id: 2, 
      nome: 'Festival do Massunim', 
      datas: '23/01/2024',  
      inscricoes: 'teste@gmail.com', 
      numeroInscritos: 23,
      imagemUrl: 'https://ecrie.com.br/sistema/conteudos/imagem/m_5_0_1_10032023103716.png',
      localizacao: 'Pontal do Peba'
    },
    { 
    id: 3, 
    nome: '1° Open de Pesca - Alagoas', 
    datas: '23/01/2024',  
    inscricoes: 'teste@gmail.com', 
    numeroInscritos: 23,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQjDnnv84hYUFLMKAY2oztVw98OhsUCit_g&s',
    localizacao: 'Pontal do Peba'
  },
  { 
    id: 4, 
    nome: 'Torneio de Verão', 
    datas: '15/03/2024',  
    inscricoes: 'verao@gmail.com', 
    numeroInscritos: 18,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBPKy5XLfUzCkmeDGriI8tHNOMFMI17oz9A&s',
    localizacao: 'Ilha do Mel'
  },
  { 
    id: 5, 
    nome: 'Copa das Águas', 
    datas: '10/04/2024',  
    inscricoes: 'copaaguas@gmail.com', 
    numeroInscritos: 42,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhcAKffwcq6fbgw6U5AFXyhE43_96hKr8RQ&s',
    localizacao: 'Bonito'
  },
  { 
    id: 6, 
    nome: 'Desafio do Cerrado', 
    datas: '05/05/2024',  
    inscricoes: 'desafiocerrado1234@gmail.com', 
    numeroInscritos: 27,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RI-foupSKHBFCNl4kCDSh6FqTPs1YfCgYw&s',
    localizacao: 'Chapada dos Veadeiros'
  },
  { 
    id: 7, 
    nome: 'Mundial de Surf', 
    datas: '20/06/2024',  
    inscricoes: 'mundialsurf5678@gmail.com', 
    numeroInscritos: 55,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre6sQHR7GoJ86UwuZ77RC2rRCcYkG3o3EGA&s',
    localizacao: 'Pipeline, Havaí'
  },
  { 
    id: 8, 
    nome: 'Circuito Nacional de Tênis', 
    datas: '12/07/2024',  
    inscricoes: 'tenniscircuito0923@gmail.com', 
    numeroInscritos: 38,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdti6Xk-KYSOo0R3PXlv_jU_Om5LhS_o-8fQ&s',
    localizacao: 'Florianópolis'
  },
  { 
    id: 9, 
    nome: 'Campeonato de Xadrez', 
    datas: '03/08/2024',  
    inscricoes: 'xadrezcampeonato@gmail.com', 
    numeroInscritos: 14,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5yTKHGFvvbjFq1gjcLB0qxtrmPL65vk1NQ&s',
    localizacao: 'Moscou, Rússia'
  },
  { 
    id: 10, 
    nome: 'Maratona de Nova York', 
    datas: '17/09/2024',  
    inscricoes: 'maratonanyc2356@gmail.com', 
    numeroInscritos: 70,
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQjDnnv84hYUFLMKAY2oztVw98OhsUCit_g&s',
    localizacao: 'Nova York, EUA'
  }
  ]

 private teams = [
  { id: 1, name: 'DanubioS', pontos: 20, setor: 1, peso: 1000, qnt: 20, maior: 3160 },
  { id: 2, name: 'Stebam', pontos: 18, setor: 2, peso: 980, qnt: 18, maior: 2900 },
  { id: 3, name: 'Maresias', pontos: 16, setor: 1, peso: 850, qnt: 17, maior: 2750 },
  { id: 4, name: 'Pescadores do Sul', pontos: 14, setor: 3, peso: 920, qnt: 19, maior: 3000 },
  { id: 5, name: 'Rios Vivos', pontos: 19, setor: 2, peso: 1050, qnt: 22, maior: 3300 },
  { id: 6, name: 'Tubarões Azuis', pontos: 22, setor: 3, peso: 1100, qnt: 23, maior: 3400 },
  { id: 7, name: 'Marlim Branco', pontos: 17, setor: 1, peso: 800, qnt: 15, maior: 2600 },
  { id: 8, name: 'Piranhas Douradas', pontos: 21, setor: 2, peso: 1150, qnt: 20, maior: 3600 },
  { id: 9, name: 'Botos Cor-de-Rosa', pontos: 15, setor: 1, peso: 900, qnt: 16, maior: 2700 },
  { id: 10, name: 'Atuns Velozes', pontos: 23, setor: 3, peso: 1250, qnt: 24, maior: 3800 },
  { id: 11, name: 'Garoupas Gigantes', pontos: 18, setor: 2, peso: 980, qnt: 19, maior: 3100 },
  { id: 12, name: 'Sardinhas Prateadas', pontos: 19, setor: 1, peso: 850, qnt: 18, maior: 2800 },
  { id: 13, name: 'Bagres Amarelos', pontos: 20, setor: 3, peso: 1100, qnt: 21, maior: 3500 },
  { id: 14, name: 'Dourados Dourados', pontos: 16, setor: 2, peso: 950, qnt: 17, maior: 2900 },
  { id: 15, name: 'Tilápias Roxas', pontos: 17, setor: 1, peso: 870, qnt: 16, maior: 2750 },
  { id: 16, name: 'Robalos Verdes', pontos: 22, setor: 3, peso: 1150, qnt: 23, maior: 3600 },
  { id: 17, name: 'Lulas Brilhantes', pontos: 18, setor: 2, peso: 930, qnt: 18, maior: 3000 },
  { id: 18, name: 'Enguias Elétricas', pontos: 21, setor: 1, peso: 1050, qnt: 20, maior: 3200 },
  { id: 19, name: 'Barracudas Prateadas', pontos: 19, setor: 2, peso: 980, qnt: 19, maior: 3100 },
  { id: 20, name: 'Anchovas Amarelas', pontos: 20, setor: 3, peso: 1100, qnt: 21, maior: 3400 }
];


  constructor() { }

  getTorneio() {
    return this.tournament;
  }

  getTournamentById(id: number) {
    return this.tournament.find(t => t.id === id);
  }

  getTeams() {
    return this.teams; 
  }
}
