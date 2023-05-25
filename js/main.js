
const { createApp } = Vue;

createApp({
data() {
return {
name: 'SSMindGames',
word1: 'acid',
definition1: [
{ id: 1, definition: 'kwas', flag: true },
{ id: 2, definition: 'siarka', flag: false },
{ id: 3, definition: 'benzyna', flag: false },
],
word2: 'petrol',
definition2: [
{ definition: 'benzyna', flag: true },
{ definition: 'kwas', flag: false },
{ definition: 'sadza', flag: false },
],
word3: 'dioxide',
definition3: [
{ definition: 'tlen', flag: false },
{ definition: 'dwutlenek', flag: true },
{ definition: 'tlenek', flag: false },
],
word4: 'sulpour',
definition4: [
{ definition: 'siarka', flag: true },
{ definition: 'sadza', flag: false },
{ definition: 'siarczan', flag: false },
],
word5: 'soot',
definition5: [
{ definition: 'siarka', flag: false },
{ definition: 'sadza', flag: true },
{ definition: 'siarczan', flag: false }
],
word6: 'coal',
definition6: [
{ definition: 'węgiel', flag: true },
{ definition: 'dwutlenek', flag: false },
{ definition: 'siarczan', flag: false }
],
pollution: [
    {word: 'acid', definition: 'kwas'},
    {word: 'petrol', definition: 'benzyna'},
    {word: 'dioxide', definition: 'dwutlenek'},
    {word: 'sulpour',definition: 'siarka'},
    {word: 'soot',definition: 'sadza'},

    {word: 'exhoust', definition: 'spaliny'},
    {word: 'harmful', definition: 'szkodliwy'},
    {word: 'monoxide', definition: 'tlenek'},
    {word: 'nitrogen',definition: 'azot'},
    {word: 'particule',definition: 'cząsteczka'},
],
sport: [
    {word: 'archery', definition: 'łucznictwo'},
    {word: 'basketball', definition: 'koszykówka'},
    {word: 'coach', definition: 'trener'},
    {word: 'draw',definition: 'remis'},
    {word: 'fencing',definition: 'szermierka'},
    {word: 'goalkeeper', definition: 'bramkarz'},
    {word: 'net', definition: 'siatka'},
    {word: 'pole vault', definition: 'skok o tyczce'},
    {word: 'racket',definition: 'rakieta'},
    {word: 'relay',definition: 'sztafeta'},
],
common: [
    {word: 'to bring', definition: 'przynieść'},
    {word: 'to manage', definition: 'zdołać'},
    {word: 'to predict', definition: 'przewidywać'},
    {word: 'to say',definition: 'mówić'},
    {word: 'to make',definition: 'robić'},
    {word: 'to know', definition: 'wiedzieć'},
    {word: 'to come', definition: 'przyjść'},
    {word: 'to find', definition: 'znalesc'},
    {word: 'to call',definition: 'dzwonić'},
    {word: 'to play',definition: 'grać'},
],

// Pozostałe pytania i odpowiedzi
currentSlide: 0,
correctAnswers: 0,
showResult: false,
showVocabulary:false,
showAllWords: false,
isAnswered: false,
userAnswer: [],
selectedAnswers: [],
};
},
methods: {
//     theUserAnswer(definition){
//         this.userAnswer = definition
// // p.write(this.userAnswer)
// console.log(userAnswer);
//     },

checkIfCorrect(definition) {

if (definition.flag) {
console.log('Poprawna odpowiedź!');
this.correctAnswers++;

// const correctAnswer = document.querySelectorAll('.answer')

// correctAnswer.classList.add('correct')
if (this.isAnswered) {
return 'correct';
}
} else {
console.log('Niepoprawna odpowiedź!');
}

},
// metoda handleKeyDown do obsługi zdarzenia keydown
handleKeyDown(event) {
if (event.keyCode === 37) {
// strzałka w lewo - poprzedni slajd
this.$refs.carousel.prev();
} else if (event.keyCode === 39) {
// strzałka w prawo - następny slajd
this.$refs.carousel.next();
}
}
,

goToPrevSlide() {
if (this.currentSlide > 0) {
this.currentSlide--;
}
},

goToNextSlide() {
if (this.currentSlide < 2) {
this.currentSlide++;
}
},
showResults() {
this.showResult = true;
},
showPollutionVocabulary() {
this.showVocabulary = true;
},
showAllOfWords() {
this.showAllWords = true;
}
,
submitAnswers() {
this.isAnswered = true; 


this.correctAnswers = 0;
for (const definition of this.definition1) {
if (definition.flag) {
this.correctAnswers++;
}
}


this.isAnswered = true; 


this.correctAnswers = 0;
for (const definition of this.definition2) {
if (definition.flag) {
this.correctAnswers++;
}
}


this.isAnswered = true; 

this.correctAnswers = 0;
for (const definition of this.definition3) {
if (definition.flag) {
this.correctAnswers++;
}
}

this.isAnswered = true; 

// obliczanie liczby poprawnych odpowiedzi
this.correctAnswers = 0;
for (const definition of this.definition4) {
if (definition.flag) {
this.correctAnswers++;
}
}


this.isAnswered = true; 
this.correctAnswers = 0;
for (const definition of this.definition5) {
if (definition.flag) {
this.correctAnswers++;
}
}

console.log('Liczba poprawnych odpowiedzi:', this.correctAnswers);
},

},
computed: {
forWord1() {
return this.word1;
},

forWord2() {
return this.word2
},
forWord3() {
return this.word3
},
forWord4() {
return this.word4
},
forWord5() {
return this.word5
}
},
}).mount('#app');
