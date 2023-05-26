
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
            word7: 'harmful',
            definition7: [
                { definition: 'siarka', flag: false },
                { definition: 'sadza', flag: false },
                { definition: 'siarczan', flag: true }
            ],
            word8: 'harmful',
            definition8: [
                { definition: 'tlen', flag: false },
                { definition: 'dwutlenek', flag: true },
                { definition: 'tlenek', flag: false },
            ],
            word9: 'harmful',
            definition9: [
                { id: 1, definition: 'kwas', flag: true },
                { id: 2, definition: 'siarka', flag: false },
                { id: 3, definition: 'benzyna', flag: false },
            ],
            word10: 'harmful',
            definition10: [
                { definition: 'tlen', flag: false },
                { definition: 'dwutlenek', flag: true },
                { definition: 'tlenek', flag: false },
            ],
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
            word6: 'exhoust',
            definition6: [
                { definition: 'spaliny', flag: true },
                { definition: 'dwutlenek', flag: false },
                { definition: 'szkodliwy', flag: false }
            ],
            word7: 'harmful',
            definition7: [
                { definition: 'spaliny', flag: false },
                { definition: 'sadza', flag: false },
                { definition: 'szkodliwy', flag: true }
            ],
            word8: 'monoxide',
            definition8: [
                { definition: 'tlen', flag: false },
                { definition: 'tlenek', flag: true },
                { definition: 'dwutlenek', flag: false },
            ],
            word9: 'nitrogren',
            definition9: [
                { id: 1, definition: 'azot', flag: true },
                { id: 2, definition: 'siarka', flag: false },
                { id: 3, definition: 'kwas', flag: false },
            ],
            word10: 'particule',
            definition10: [
                { definition: 'benzyna', flag: false },
                { definition: 'cząsteczka', flag: true },
                { definition: 'sadza', flag: false },
            ],
            word11: 'archery',
            definition11: [
                { id: 1, definition: 'łucznictwo', flag: true },
                { id: 2, definition: 'szermierka', flag: false },
                { id: 3, definition: 'boks', flag: false },
            ],
            word12: 'basketball',
            definition12: [
                { definition: 'koszykówka', flag: true },
                { definition: 'baseball', flag: false },
                { definition: 'bramkarz', flag: false },
            ],
            word13: 'coach',
            definition13: [
                { definition: 'sędzia', flag: false },
                { definition: 'trener', flag: true },
                { definition: 'szkoleniowiec', flag: false },
            ],
            word14: 'draw',
            definition14: [
                { definition: 'remis', flag: true },
                { definition: 'przerwa', flag: false },
                { definition: 'siatka', flag: false },
            ],
            word15: 'fencing',
            definition15: [
                { definition: 'łucznictwo', flag: false },
                { definition: 'szermierka', flag: true },
                { definition: 'sztafeta', flag: false }
            ],
            word16: 'golkeeper',
            definition16: [
                { definition: 'bramkarz', flag: true },
                { definition: 'trener', flag: false },
                { definition: 'sędzia', flag: false }
            ],
            word17: 'net',
            definition17: [
                { definition: 'rakieta', flag: false },
                { definition: 'sztafeta', flag: false },
                { definition: 'siatka', flag: true }
            ],
            word18: 'pole vault',
            definition18: [
                { definition: 'szermierka', flag: false },
                { definition: 'skok o tyczce', flag: true },
                { definition: 'łucznictwo', flag: false },
            ],
            word19: 'racket',
            definition19: [
                { id: 1, definition: 'rakieta', flag: true },
                { id: 2, definition: 'siatka', flag: false },
                { id: 3, definition: 'kosz', flag: false },
            ],
            word20: 'relay',
            definition20: [
                { definition: 'remis', flag: false },
                { definition: 'sztafeta', flag: true },
                { definition: 'trener', flag: false },
            ],
            word21: 'to bring',
            definition21: [
                { definition: 'robic', flag: false },
                { definition: 'mówić', flag: false },
                { definition: 'przynieść', flag: true },
            ],
            word22: 'to menage',
            definition22: [
                { definition: 'zdołać', flag: true },
                { definition: 'robić', flag: false },
                { definition: 'znaleść', flag: false },
            ],
            word23: 'to predict',
            definition23: [
                { definition: 'dzwonic', flag: false },
                { definition: 'przewidzieć', flag: true },
                { definition: 'zdołać', flag: false },
            ],
            word24: 'to say',
            definition24: [
                { definition: 'mówić', flag: true },
                { definition: 'wiedzieć', flag: false },
                { definition: 'przynieść', flag: false },
            ],
            word25: 'to make',
            definition25: [
                { definition: 'zdołać', flag: false },
                { definition: 'robić', flag: true },
                { definition: 'zrobic', flag: false }
            ],
            word26: 'to know',
            definition26: [
                { definition: 'wiedzieć', flag: true },
                { definition: 'robić', flag: false },
                { definition: 'przewidywać', flag: false }
            ],
            word27: 'to come',
            definition27: [
                { definition: 'robić', flag: false },
                { definition: 'wiedzieć', flag: false },
                { definition: 'przyjść', flag: true }
            ],
            word28: 'to find',
            definition28: [
                { definition: 'przynieść', flag: false },
                { definition: 'znaleść', flag: true },
                { definition: 'przewidywać', flag: false },
            ],
            word29: 'to call',
            definition29: [
                { id: 1, definition: 'dzwonic', flag: true },
                { id: 2, definition: 'mówić', flag: false },
                { id: 3, definition: 'zdołać', flag: false },
            ],
            word30: 'to play',
            definition30: [
                { definition: 'dzwonić', flag: false },
                { definition: 'grać', flag: true },
                { definition: 'udawac', flag: false },
            ],

            pollution: [
                { word: 'acid', definition: 'kwas' },
                { word: 'petrol', definition: 'benzyna' },
                { word: 'dioxide', definition: 'dwutlenek' },
                { word: 'sulpour', definition: 'siarka' },
                { word: 'soot', definition: 'sadza' },

                { word: 'exhoust', definition: 'spaliny' },
                { word: 'harmful', definition: 'szkodliwy' },
                { word: 'monoxide', definition: 'tlenek' },
                { word: 'nitrogen', definition: 'azot' },
                { word: 'particule', definition: 'cząsteczka' },
            ],
            sport: [
                { word: 'archery', definition: 'łucznictwo' },
                { word: 'basketball', definition: 'koszykówka' },
                { word: 'coach', definition: 'trener' },
                { word: 'draw', definition: 'remis' },
                { word: 'fencing', definition: 'szermierka' },
                { word: 'goalkeeper', definition: 'bramkarz' },
                { word: 'net', definition: 'siatka' },
                { word: 'pole vault', definition: 'skok o tyczce' },
                { word: 'racket', definition: 'rakieta' },
                { word: 'relay', definition: 'sztafeta' },
            ],
            common: [
                { word: 'to bring', definition: 'przynieść' },
                { word: 'to manage', definition: 'zdołać' },
                { word: 'to predict', definition: 'przewidywać' },
                { word: 'to say', definition: 'mówić' },
                { word: 'to make', definition: 'robić' },
                { word: 'to know', definition: 'wiedzieć' },
                { word: 'to come', definition: 'przyjść' },
                { word: 'to find', definition: 'znalesc' },
                { word: 'to call', definition: 'dzwonić' },
                { word: 'to play', definition: 'grać' },
            ],

            // Pozostałe pytania i odpowiedzi
            showPopup: false,
            currentSlide: 0,
            correctAnswers: 0,
            showResult: false,
            showVocabulary: false,
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
        togglePopup() {
            this.showPopup = !this.showPopup;
        },

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
        },
        forWord11() {
            return this.word11;
        },

        forWord12() {
            return this.word12
        },
        forWord13() {
            return this.word13
        },
        forWord14() {
            return this.word14
        },
        forWord15() {
            return this.word15
        },
        forWord21() {
            return this.word21;
        },

        forWord22() {
            return this.word22
        },
        forWord23() {
            return this.word23
        },
        forWord24() {
            return this.word24
        },
        forWord25() {
            return this.word25
        }
    },
}).mount('#app');
