const type1SentenceFirstPart = ["baba", "bibi", "bobo", "bebe"];
const type1SentenceSecondPart = ["tata", "titi", "toto", "tete"];
const type1SentenceThirdPart = ["lala", "lili", "lolo", "lele"];

const type2SentenceFirstPart = ["baba*", "bibi*", "bobo*", "bebe*"];
const type2SentenceSecondPart = ["tata*", "titi*", "toto*", "tete*"];
const type2SentenceThirdPart = ["lala*", "lili*", "lolo*", "lele*"];

const quotesGenerator = () => {
  const quotesDisplay = document.getElementById("quotes-display");
  const selectNbQuotes = document.getElementById("nb-quotes-select");
  quotesDisplay.innerHTML = "";
  let quotes = [];
  for (let i = 0; i < selectNbQuotes.selectedIndex; i++) {
    quotes.push(singleQuote());
  }
  quotes.forEach((quote) => {
    quotesDisplay.innerHTML += quote + "</br>";
  });
};

const singleQuote = () => {
  console.log("please");
  let quote = "";
  const selectType = document.getElementById("type-select");
  const sentencesCollection = initSentencesCollection(selectType.selectedIndex);
  sentencesCollection.forEach((sentencePart) => {
    quote += " " + sentencePart[getRandomInt(4)];
  });
  return quote;
};

const initSentencesCollection = (type) => {
  console.log("init" + type);
  let sentencesCollection = [];
  if (type === 1) {
    sentencesCollection = [
      type1SentenceFirstPart,
      type1SentenceSecondPart,
      type1SentenceThirdPart,
    ];
  } else if (type === 2) {
    sentencesCollection = [
      type2SentenceFirstPart,
      type2SentenceSecondPart,
      type2SentenceThirdPart,
    ];
  }

  console.log(sentencesCollection);
  return sentencesCollection;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);
