const start = document.querySelector(".start");
const text1 = document.querySelector(".text1");
const danNegru = document.querySelector(".danNegru");
const questionwWrapper = document.querySelector(".question-wrapper");
const intrebare = document.querySelector(".intrebare");
const raspunsuri = document.querySelectorAll(".raspuns");
const show = document.querySelector(".show");
const money = document.querySelector(".money");
const moneyMulti = document.querySelector(".moneyMulti");
const greseli = document.querySelector(".numarGreseli");
const wallet = document.querySelector(".wallet");
const textGreseli = document.querySelector(".greseli");

let index = 0;
let corect = 0;
let greselii = 3;

const intrebari = [
  {
    intrebare: "Care este capitala Angliei",
    raspunsuri: ["A. Glasglow", "B. Heathrow", "C. Oxford", "D. London"],
    corect: "D. London",
  },
  {
    intrebare: "Cine a realizat prima călătorie în jurul lumii?",
    raspunsuri: [
      "A. Mihai Eminescu",
      "B. Heathrow",
      "C. Fernando Magellan",
      "D. Robert Oppenheimer",
    ],
    corect: "C. Fernando Magellan",
  },
  {
    intrebare: "Care este cel mai înalt munte de pe Glob",
    raspunsuri: [
      "A. Mont Everest",
      "B. K2",
      "C. Saltoro Kangri",
      "D. Dealul Polonic",
    ],
    corect: "A. Mont Everest",
  },
  {
    intrebare: "Cate stele sunt pe stegul USA",
    raspunsuri: ["A. 15", "B. 50", "C. 100", "D. 38"],
    corect: "B. 50",
  },
  {
    intrebare: " Din ce țară izvorăște Dunărea?",
    raspunsuri: ["A. Bucegi", "B. USA", "C. Germania", "D. Romania"],
    corect: "C. Germania",
  },
  {
    intrebare: "În ce capitală europeană poți vizita Colosseum?",
    raspunsuri: ["A. Bucuresti", "B. Berlin", "C. Roma", "D. Budapesta"],
    corect: "C. Roma",
  },
];

const question = () => {
  intrebare.innerHTML = intrebari[index].intrebare;
  for (let i = 0; i < raspunsuri.length; i++) {
    raspunsuri[i].innerHTML = intrebari[index].raspunsuri[i];
  }
};

start.addEventListener("click", () => {
  text1.style.visibility = "hidden";
  start.style.visibility = "hidden";
  danNegru.style.position = "absolute";
  danNegru.style.bottom = "20px";
  danNegru.style.right = "30px";
  textGreseli.style.visibility = "visible";
  questionwWrapper.style.visibility = "visible";
  question();
});

for (let i = 0; i < raspunsuri.length; i++) {
  raspunsuri[i].addEventListener("click", () => {
    if (raspunsuri[i].innerHTML === intrebari[index].corect) {
      corect++;
      index++;
      show.style.visibility = "visible";
      show.innerHTML = "Felicitari, este corect!";
      setTimeout(() => {
        show.style.visibility = "hidden";
        if (index !== 6) {
          question();
        }
      }, 10);
      if (corect === 6) {
        intrebare.style.visibility = "hidden";
        for (let i = 0; i < raspunsuri.length; i++) {
          raspunsuri[i].style.visibility = "hidden";
        }
        danNegru.style.bottom = "";
        danNegru.style.right = "";
        danNegru.style.position = "relative";
        money.style.visibility = "visible";
        moneyMulti.style.visibility= "visible";
      }
    } else {
      show.innerHTML = `Gresit, din pacate raspunsul corect era ${intrebari[index].corect}`;
      show.style.visibility = "visible";
      index++;
      setTimeout(() => {
        show.style.visibility = "hidden";
        if (index !== 6) {
          question();
        }
      }, 2000);
      greselii--;
      greseli.innerHTML = parseInt(greseli.innerHTML) - 1;
      if(greselii === 0){
        intrebare.style.visibility = "hidden";
        for (let i = 0; i < raspunsuri.length; i++) {
          raspunsuri[i].style.visibility = "hidden";
        }
        wallet.style.visibility = "visible";
        textGreseli.style.visibility= "hidden";
        danNegru.style.bottom = "";
        danNegru.style.right = "";
        danNegru.style.position = "relative";
      }
    }
  });
}

//Cand incepem jocul nu vedem greselile, dupa ce apasam pe butonul de start ele o sa apara.
//Daca ajungem cu greselile la 0 atunci o sa ne apara portofelul gol si o sa se ascunda text-ul cu greseli.
