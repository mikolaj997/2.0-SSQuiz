
//do po stromie html


const { createApp } = Vue;


//

createApp({



    data() {
        return {
            //do backendu
            words: [],
            definitions: [],
            //
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
            word6: 'exhaust',
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
                { definition: 'robić', flag: false },
                { definition: 'mówić', flag: false },
                { definition: 'przynieść', flag: true },
            ],
            word22: 'to manage',
            definition22: [
                { definition: 'zdołać', flag: true },
                { definition: 'robić', flag: false },
                { definition: 'znaleźć', flag: false },
            ],
            word23: 'to predict',
            definition23: [
                { definition: 'dzwonić', flag: false },
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
                { definition: 'zrobić', flag: false }
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
                { definition: 'znaleźć', flag: true },
                { definition: 'przewidywać', flag: false },
            ],
            word29: 'to call',
            definition29: [
                { id: 1, definition: 'dzwonić', flag: true },
                { id: 2, definition: 'mówić', flag: false },
                { id: 3, definition: 'zdołać', flag: false },
            ],
            word30: 'to play',
            definition30: [
                { definition: 'dzwonić', flag: false },
                { definition: 'grać', flag: true },
                { definition: 'udawać', flag: false },
            ],

            pollution: [
                { word: 'acid', definition: 'kwas' },
                { word: 'petrol', definition: 'benzyna' },
                { word: 'dioxide', definition: 'dwutlenek' },
                { word: 'sulpour', definition: 'siarka' },
                { word: 'soot', definition: 'sadza' },

                { word: 'exhaust', definition: 'spaliny' },
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
                { word: 'to find', definition: 'znaleźć' },
                { word: 'to call', definition: 'dzwonić' },
                { word: 'to play', definition: 'grać' },
            ],
            id1: 0,
            id2: 0,
            id3: 0,
            currentSlide: 0,
            correctAnswers: 0,
            rotateFiszka: false,
            selectedOption: '',
            showPopup: false,
            showPopup2: false,
            showPopupFC: false,
            showResult: false,
            showVocabulary: false,
            showAllWords: false,
            isAnswered: false,
            isCorrect: false,
            sportCategory1: false,
            showSport1: false,
            showCommon1: false,
            showPollution1: false,
            showFlashcardInfo1: false,
            flashcardCategoryClicked: false,
            userAnswer: [],
            userAnswer2: [],
            userAnswer3: [],
            userAnswer4: [],
            userAnswer5: [],
            userAnswer6: [],
            userAnswer7: [],
            userAnswer8: [],
            userAnswer9: [],
            userAnswer10: [],
            userAnswer11: [],
            userAnswer12: [],
            selectedAnswers: [],
            selectedAnswers2: [],
            selectedAnswers3: [],
            selectedAnswers4: [],
            selectedAnswers5: [],
            selectedAnswers6: [],
            selectedAnswers7: [],
            selectedAnswers8: [],
            selectedAnswers9: [],
            selectedAnswers10: [],
            selectedAnswers11: [],
            selectedAnswers12: [],
        };
    },
    methods: {
        FlashcardCategory() {
            this.selectedOption = event.target.id;
            if (this.selectedOption == 'option1') {
                this.showCommon1 = true;
                this.showSport1 = false;
                this.showPollution1 = false;

                this.flashcardCategoryClicked = true
            }
            if (this.selectedOption == 'option2') {
                this.showPollution1 = true;
                this.showSport1 = false;
                this.showCommon1 = false;

                this.flashcardCategoryClicked = true
            }
            if (this.selectedOption == 'option3') {
                this.showSport1 = true;
                this.showCommon1 = false;
                this.showPollution1 = false;

                this.flashcardCategoryClicked = true
            }

        },
        showFlashcardInfo() {
            this.showFlashcardInfo1 = !this.showFlashcardInfo1
        },
        showSport() {
            this.showSport1 = true;
            this.showCommon1 = false;
            this.showPollution1 = false;

            this.flashcardCategoryClicked = true
        },
        showCommon() {
            this.showCommon1 = true;
            this.showSport1 = false;
            this.showPollution1 = false;

            this.flashcardCategoryClicked = true
        },
        showPollution() {
            this.showPollution1 = true;
            this.showSport1 = false;
            this.showCommon1 = false;

            this.flashcardCategoryClicked = true
        },
        showResults() {
            this.showResult = true;
            // const slide3 = document.querySelector('.slide3')
            // const slide1 = document.querySelector('.slide1')
            // slide3.classList.remove('active')
            // slide1.classList.add('active')
        },
        showPollutionVocabulary() {
            this.showVocabulary = true;
        },
        showFiveDefinitionModifications() {
            this.fiveDefinitionModification = true;
        },
        showTenDefinitionModifications() {
            this.tenDefinitionModification = true;
        },
        toggleRotation() {
            this.rotateFiszka = !this.rotateFiszka;
        },
        togglePopup() {
            this.showPopup = !this.showPopup;
        },
        togglePopup2() {
            this.showPopup2 = !this.showPopup2;
        },
        showAllOfWords() {
            this.showAllWords = !this.showAllWords;
        },
        inscreaseId() {
            if (this.id1 < 9) {
                this.id1++
            }
            if (this.id2 < 9) {
                this.id2++
            }
            if (this.id3 < 9) {
                this.id3++
            }
        },
        decreaseId() {
            if (this.id1 <= 9) {
                this.id1--
            }
            if (this.id2 <= 9) {
                this.id2--
            }
            if (this.id3 <= 9) {
                this.id3--
            }
        },
        checkIfCorrect(definition) {

            this.selectedAnswers.push(definition)
            const [a, b] = [...this.selectedAnswers]
            this.userAnswer = a
            console.log(this.userAnswer.flag);

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect2(definition) {
            this.userAnswer2 = ''
            this.selectedAnswers2.push(definition)
            const [a, b] = [...this.selectedAnswers2]
            this.userAnswer2 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect3(definition) {
            this.userAnswer3 = ''
            this.selectedAnswers3.push(definition)
            const [a, b] = [...this.selectedAnswers3]
            this.userAnswer3 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect4(definition) {
            this.userAnswer4 = ''
            this.selectedAnswers4.push(definition)
            const [a, b] = [...this.selectedAnswers4]
            this.userAnswer4 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect5(definition) {
            this.userAnswer5 = ''
            this.selectedAnswers5.push(definition)
            const [a, b] = [...this.selectedAnswers5]
            this.userAnswer5 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect6(definition) {
            this.userAnswer6 = ''
            this.selectedAnswers6.push(definition)
            const [a, b] = [...this.selectedAnswers6]
            this.userAnswer6 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect7(definition) {
            if(inputLoginUsername === inputCloseUsername && inputLoginPin ===inputClosePin ){
        account.delete()
            }
            this.userAnswer7 = ''
            this.selectedAnswers7.push(definition)
            const [a, b] = [...this.selectedAnswers7]
            this.userAnswer7 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect8(definition) {
            this.userAnswer8 = ''
            this.selectedAnswers8.push(definition)
            const [a, b] = [...this.selectedAnswers8]
            this.userAnswer8 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect9(definition) {
            this.userAnswer9 = ''
            this.selectedAnswers9.push(definition)
            const [a, b] = [...this.selectedAnswers9]
            this.userAnswer9 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect10(definition) {
            this.userAnswer10 = ''
            this.selectedAnswers10.push(definition)
            const [a, b] = [...this.selectedAnswers10]
            this.userAnswer10 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect11(definition) {
            this.userAnswer11 = ''
            this.selectedAnswers11.push(definition)
            const [a, b] = [...this.selectedAnswers11]
            this.userAnswer11 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
        },
        checkIfCorrect12(definition) {
            this.userAnswer12 = ''
            this.selectedAnswers12.push(definition)
            const [a, b] = [...this.selectedAnswers12]
            this.userAnswer12 = a

            if (definition.flag && !this.showResult) {
                console.log('Poprawna odpowiedź!');
                this.correctAnswers++;
            } else {
                console.log('Niepoprawna odpowiedź!');
            }
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
        forWord6() {
            return this.word6;
        },
        forWord7() {
            return this.word7
        },
        forWord8() {
            return this.word8
        },
        forWord9() {
            return this.word9
        },
        forWord10() {
            return this.word10
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
        forWord16() {
            return this.word16;
        },
        forWord17() {
            return this.word17
        },
        forWord18() {
            return this.word18
        },
        forWord19() {
            return this.word19
        },
        forWord20() {
            return this.word20
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
        },
        forWord26() {
            return this.word26;
        },
        forWord27() {
            return this.word27
        },
        forWord28() {
            return this.word28
        },
        forWord29() {
            return this.word29
        },
        forWord30() {
            return this.word30
        }
    },
}).mount('#app');
