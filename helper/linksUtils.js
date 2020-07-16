const SuperExpressive = require('super-expressive');

const guiaLink = `Guia de Sobrevivência - ${process.env.URL_GUIA}`;
const valoresLink = `Valores - ${process.env.URL_VALORES}`;
const salariosLink = `Salário & Benefícios - ${process.env.URL_SALARIO}`;
const eventosLink = `Eventos & Treinamentos - ${process.env.URL_EVENTOS}`;
const materiaisLink = `Materiais Padrão - ${process.env.URL_MATERIAL}`;
const viagensLink = `Viagens - ${process.env.URL_VIAGENS}`;
const maloteLink = `Malote - ${process.env.URL_MALOTE}`;
const reembolsoLink = `Reembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`;
const pontoLink = `Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`;
const dpLink = `Departamento Pessoal - ${process.env.URL_DP}`;
const tutorialExpensesLink = `Tutorial Expenses - ${process.env.URL_EXPENSES}`;
const tutorialMyTeLink = `Tutorial MyTe - ${process.env.URL_MYTE}`;
const talksInternasLink = `Talks Internas - ${process.env.URL_TALKS}`;

const linkSelector = function(keyWord) {
  if (!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          guiaLink + '\n' +
          valoresLink + '\n' +
          dpLink + '\n' +
          salariosLink + '\n' +
          pontoLink + '\n' +
          eventosLink + '\n' +
          materiaisLink + '\n' +
          maloteLink + '\n' +
          reembolsoLink + '\n' +
          viagensLink + '\n' +
          tutorialExpensesLink + '\n' +
          tutorialMyTeLink + '\n' +
          talksInternasLink;
  }
  const guiaRegex = SuperExpressive()
      .caseInsensitive
      .startOfInput
      .string('guia')
      .endOfInput
      .toRegex();

  const valoresRegex = SuperExpressive()
      .caseInsensitive
      .startOfInput
      .string('valores')
      .endOfInput
      .toRegex();

  const dpRegex = SuperExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
        .group
          .optional.string('departamento ')
          .string('pessoal')
        .end()
        .string('pessoas')
        .string('dp')
      .end()
      .endOfInput
      .toRegex();

  if (keyWord.match(guiaRegex)) {
    return guiaLink;
  }

  if (keyWord.match(valoresRegex)) {
    return valoresLink;
  }

  if (keyWord.match(dpRegex)) {
    return dpLink;
  }
  // Match malote and malotes.
  if (keyWord.match(/^malotes?$/)) {
    return maloteLink;
  }
  // Match viagem and viagens.
  if (keyWord.match(/^viage(m|ns)$/)) {
    return viagensLink;
  }
  // Match reembolso, reembolsos, adiantamento and adiantamentos.
  if (keyWord.match(/^reembolsos?|adiantamentos?$/)) {
    return reembolsoLink;
  }
  // Match padrão, padrao, material, materiais apresentação and apresentacao
  if (keyWord
      .match(/^padr(ão|ao)|materia(l|is)|apresenta(ção|cao)$/)) {
    return materiaisLink;
  }
  // Match benefício, benefícios, baneficio, beneficios, salário, salários,
  // salario and salarios.
  if (keyWord
      .match(/^benef(í|i)cios?|sal(á|a)rios?$/)) {
    return salariosLink;
  }
  // Match evento, eventos, treinamento, treinamentos.
  if (keyWord
      .match(/^eventos?|treinamentos?$/)) {
    return eventosLink;
  }
  // Match tutorial, tutoriais, expenses.
  if (keyWord
      .match(/^expenses?$/)) {
    return tutorialExpensesLink;
  }
  // Match tutorial, tutoriais, myte.
  if (keyWord
      .match(/^myte?$/)) {
    return tutorialMyTeLink;
  }
  // Match Talks Internas.
  if (keyWord
      .match(/^talks?|grava(ções|coes)?$/)) {
    return talksInternasLink;
  }
  // Match ponto eletrônico, ponto eletronico, ponto, horas & horas extras.
  if (keyWord.match(/^ponto.?(eletr(ô|o)nico)?|horas.?(extras)?$/)) {
    return pontoLink;
  }
};

module.exports = {
  messageBuilder: function(keyWord) {
    const greeting = 'Olá, seguem os links:\n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  },
};
