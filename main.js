const type1SentenceFirstPart = [
  "La crise",
  "La conjoncture",
  "La baisse de confiance",
  "La restriction",
];
const type1SentenceSecondPart = [
  "présente",
  "actuelle",
  "qui est la nôtre",
  "de cette fin de siècle",
];
const type1SentenceThirdPart = [
  "ne doit pas être négligée",
  "doit être prise en considération.",
  "est a étudier.",
  "est préocuppante.",
];

const type2SentenceFirstPart = [
  "Toutes les",
  "Chacune des",
  "La majorité des",
  "La globalité des",
];
const type2SentenceSecondPart = [
  "solutions",
  "issues",
  "problématiques",
  "alternatives",
];
const type2SentenceThirdPart = [
  "sont envisageables.",
  "relèvent du bon sens.",
  "sont inamagineables.",
  "sont réalisables.",
];

const quotesGenerator = () => {
  const quotesDisplay = document.getElementById("quotes-display");
  const selectNbQuotes = document.getElementById("nb-quotes-select");
  quotesDisplay.innerHTML = "";
  const quotes = [];
  for (let i = 0; i < selectNbQuotes.selectedIndex; i++)
    quotes.push(singleQuote());
  quotes.forEach(
    (quote) =>
      (quotesDisplay.innerHTML += `<div class="quote-display-container">${quote}</div>`)
  );
};

const singleQuote = () => {
  let quote = "";
  const selectType = document.getElementById("type-select");
  const sentencesCollection = initSentencesCollection(selectType.selectedIndex);
  sentencesCollection.forEach(
    (sentencePart) => (quote += " " + sentencePart[getRandomInt(4)])
  );
  return quote;
};

const initSentencesCollection = (type) => {
  let sentencesCollection = [];
  switch (type) {
    case 1:
      sentencesCollection = [
        type1SentenceFirstPart,
        type1SentenceSecondPart,
        type1SentenceThirdPart,
      ];
      break;
    case 2:
      sentencesCollection = [
        type2SentenceFirstPart,
        type2SentenceSecondPart,
        type2SentenceThirdPart,
      ];
      break;
  }
  return sentencesCollection;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);
