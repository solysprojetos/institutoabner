/* ============================================================
   INSTITUTO ABNER — conteúdo real do site

   Este é o único arquivo que precisa ser editado para publicar
   conteúdo novo. Cada lista vazia mantém a seção correspondente
   OCULTA no site e retira o link dela do menu e do rodapé.
   Assim o site nunca mostra "em breve", "espaço reservado" nem
   número inventado: ou existe conteúdo real, ou a seção não
   aparece.

   Depois de preencher, basta salvar e publicar. Não é preciso
   mexer em mais nenhum arquivo.
   ============================================================ */

window.CONTEUDO = {

  /* --------------------------------------------------------
     1) AÇÕES REALIZADAS
     Cada ação que já aconteceu, com foto real, data e local.
     As fotos daqui montam sozinhas a galeria, agrupada por ação.

     {
       titulo: 'Entrega de cestas no Bairro X',
       data: '2026-03-14',              // ano-mês-dia
       local: 'Bairro X, Cidade/UF',
       descricao: 'O que aconteceu, em duas ou três linhas.',
       resultado: '30 cestas entregues', // só se confirmado; senão apague a linha
       fotos: [
         { src: 'assets/fotos/acoes/exemplo-1.webp',
           alt: 'Descrição da foto para quem não enxerga',
           legenda: 'Legenda curta mostrada sob a foto' }
       ]
     }
     -------------------------------------------------------- */
  acoesRealizadas: [],

  /* --------------------------------------------------------
     2) PROJETOS (iniciativas contínuas)
     { titulo, publico, periodo, descricao, situacao }
     -------------------------------------------------------- */
  projetos: [],

  /* --------------------------------------------------------
     3) DEPOIMENTOS
     Publicar apenas com o nome e a autorização de quem escreveu.
     { texto, nome, papel }   papel: 'Voluntária', 'Parceiro'...
     -------------------------------------------------------- */
  depoimentos: [],

  /* --------------------------------------------------------
     4) INDICADORES
     Números conferidos, com o período a que se referem.
     Cada indicador conta uma coisa diferente: uma família
     atendida três vezes continua sendo UMA família.
     Deixe em null o que ainda não estiver apurado.

     periodo: 'Janeiro a dezembro de 2026'
     familias / criancas / acoes / voluntarios: número ou null
     observacao: nota opcional sobre como os dados foram contados
     -------------------------------------------------------- */
  indicadores: {
    periodo: null,
    familias: null,
    criancas: null,
    acoes: null,
    voluntarios: null,
    observacao: null
  },

  /* --------------------------------------------------------
     5) TRANSPARÊNCIA
     Relatórios e documentos já concluídos, com arquivo real.
     { titulo, periodo, arquivo: 'assets/documentos/x.pdf', tipo: 'PDF' }
     -------------------------------------------------------- */
  documentos: [],

  /* --------------------------------------------------------
     6) PIX
     Só preencha quando a chave for oficial do Instituto.
     O nome do beneficiário é obrigatório: sem ele o bloco
     continua oculto, porque quem doa precisa conferir para
     quem está pagando.

     pix: {
       chave: '00.000.000/0001-00',
       tipo: 'CNPJ',
       beneficiario: 'Instituto Abner',
       instituicao: 'Nome do banco'
     }
     -------------------------------------------------------- */
  pix: null,

  /* --------------------------------------------------------
     7) CANAIS DE CONTATO
     O Instagram é o canal confirmado. Os outros só aparecem
     no site depois de preenchidos aqui.
     -------------------------------------------------------- */
  contato: {
    instagram: 'institutoabner.r',
    whatsapp: null,   // '5511999999999' (só números, com DDI)
    email: null,      // 'contato@institutoabner.com.br'
    endereco: null    // 'Rua Exemplo, 100 — Cidade/UF'
  }
};
