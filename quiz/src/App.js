
 import {useEffect, useState} from 'react'
import "./App.css";


function App() {
  return (
    <div className="App">
     <Flashcards></Flashcards>
    </div>
  );
}
function Quiz(){

}

function Flashcards(){
 const name = 'ssQuiz'

 const [showFlashcardInfo1, setShowFlashcardInfo1 ] = useState(false)
 const [showPopup, setShowPopup ] = useState(false)
 const [showAllWords, setShowAllWords] = useState(false)
 const [rotateFiszka, setRotateFiszka] = useState(false)
 const [selectedOption, setSelectedOption] = useState('')
 const [showSport1, setShowSport1 ] = useState(false)

 const [showCommon1, setShowCommon1 ] = useState(false)

 const [showPollution1, setShowPollution1 ] = useState(false)
 const [flashcardCategoryClicked, setFlashcardCategoryClicked ] = useState(false)
 



 let [id1, setId1] = useState(0)
 let [id2, setId2] = useState(0)
 let [id3, setId3] = useState(0)

 const [pollution] = useState([
        { word: 'acid', definition: 'kwas' },
        { word: 'petrol', definition: 'benzyna' },
        { word: 'dioxide', definition: 'dwutlenek' },
        { word: 'sulpour', definition: 'siarka' },
        { word: 'soot', definition: 'sadza' },
        { word: 'exhaust', definition: 'spaliny' },
        { word: 'harmful', definition: 'szkodliwy' },
        { word: 'monoxide', definition: 'tlenek' },
        { word: 'nitrogen', definition: 'azot' },
        { word: 'particule', definition: 'cząsteczka' }
    ]);

    const [sport] = useState([
        { word: 'archery', definition: 'łucznictwo' },
        { word: 'basketball', definition: 'koszykówka' },
        { word: 'coach', definition: 'trener' },
        { word: 'draw', definition: 'remis' },
        { word: 'fencing', definition: 'szermierka' },
        { word: 'goalkeeper', definition: 'bramkarz' },
        { word: 'net', definition: 'siatka' },
        { word: 'pole vault', definition: 'skok o tyczce' },
        { word: 'racket', definition: 'rakieta' },
        { word: 'relay', definition: 'sztafeta' }
    ]);

    const [common] = useState([
        { word: 'to bring', definition: 'przynieść' },
        { word: 'to manage', definition: 'zdołać' },
        { word: 'to predict', definition: 'przewidywać' },
        { word: 'to say', definition: 'mówić' },
        { word: 'to make', definition: 'robić' },
        { word: 'to know', definition: 'wiedzieć' },
        { word: 'to come', definition: 'przyjść' },
        { word: 'to find', definition: 'znaleźć' },
        { word: 'to call', definition: 'dzwonić' },
        { word: 'to play', definition: 'grać' }
    ]);

 const showAllOfWords = () => {
  setShowAllWords(!showAllWords)
}
 const  togglePopup = () => {
  setShowPopup(!showPopup);
}
const  showFlashcardInfo = () => {
  setShowFlashcardInfo1 (!showFlashcardInfo1)
}
const toggleRotation = () => {
   setRotateFiszka(!rotateFiszka);
}
const FlashcardCategory = (event) => {


  setSelectedOption(event.target.id)
              if (selectedOption == 'option1') {
                  setShowCommon1(true)
                  setShowSport1(false);
                  setShowPollution1 (false);
  
                  setFlashcardCategoryClicked(true)
                  
                  
                  
                  
              }
              if (selectedOption == 'option2') {
                  setShowPollution1(true);
                  setShowSport1(false);
                  setShowCommon1(false);
  
                  setFlashcardCategoryClicked(true)
              }
              if (selectedOption == 'option3') {
                  setShowSport1(true);
                  setShowCommon1(false);
                  setShowPollution1(false);
  
                  setFlashcardCategoryClicked(true)
              }
}

const inscreaseId = () =>{
  if (id1 < 9) {
    setId1(id1++);
} else {
  setId1(0);
}

if (id2 < 9) {
    setId2(id2++);
} else {
  setId2(0);
}

if (id3 < 9) {
    setId3(id3++);
} else {
  setId3(0);
}
}
const decreaseId = () =>{
  if (id1 < 10) {
    setId1(id1--);
} else {
  setId1(0);
}

if (id2 < 10) {
    setId2(id2--);
} else {
  setId2(0);
}

if (id3 < 10) {
    setId3(id3--);
} else {
  setId3(0);
}
}


useEffect(() => {
  if (selectedOption === 'option1') {
      setShowCommon1(true);
      setShowSport1(false);
      setShowPollution1(false);
  } else if (selectedOption === 'option2') {
      setShowCommon1(false);
      setShowSport1(false);
      setShowPollution1(true);
  }
  setFlashcardCategoryClicked(true);
  if (selectedOption == 'option3') {
    setShowSport1(true);
    setShowCommon1(false);
    setShowPollution1(false);

    setFlashcardCategoryClicked(true)
}
}, [selectedOption]);

  return(<>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{ name }
            <div class="navButtons">

                <button type="button" class="btn btn-outline-secondary">
                    pojęcia i definicje
                </button>
                <button onClick={togglePopup}  type="button" class="btn btn-outline-secondary category">kategorie
                </button>
                <button onClick={showFlashcardInfo} type="button" class="btn btn-outline-secondary">Fiszki</button>
            </div>

        </a>
    </nav>

   { showPopup && <div>
        <div  class="popup">
            <button class="btn btn-outline-secondary"><a href="common.html">common</a></button>
            <button class="btn btn-outline-secondary"> <a href="index.html">pollution</a></button>
            <button class="btn btn-outline-secondary"><a href="sport.html">sport</a></button>
        </div>
    </div>}


    <button onClick={showAllOfWords}>pojęcia</button>

    {showFlashcardInfo1 && <div  class="flashcardInfo">wybierz kategorię</div>}

    <div class="FlashcardAndDefinition">

<div class="flashcardArea">

    <div onClick={toggleRotation} class="flashcard" ClassName="{ rotate: rotateFiszka }">
       { !flashcardCategoryClicked && <div v-if="!flashcardCategoryClicked" class="flashcardCategory">wybierz kategorię i naciśnij na pole <p></p><p>pojęcie - definicja</p>
        </div>}
        {showPollution1 && <div >
            {(!showSport1 && !showCommon1 && !rotateFiszka) && <div className="front" v-show="!rotateFiszka">
                { pollution[id1].word }
            </div>}
           { (!showSport1 && !showCommon1 && rotateFiszka) && <div v-if="!showSport1 && !showCommon1" class="back" v-show="rotateFiszka">
                { pollution[id1].definition }
            </div>}
        </div>}
        {(showSport1) && <div >
            {!rotateFiszka && <div v-if="!showPollution1 && !showCommon1" class="front" v-show="!rotateFiszka">
                { sport[id2].word }
            </div>}
           { (!showPollution1 && !showCommon1 &&rotateFiszka) && <div class="back" >
                { sport[id2].definition }
            </div>}
        </div>}
        {(showCommon1 ) && <div >
            {!rotateFiszka && <div v-if="!showPollution1 && !showSport1" class="front" >
                { common[id3].word }
            </div>}
           { (!showPollution1 && !showSport1 &&rotateFiszka) &&<div v-if="!showPollution1 && !showSport1" className="back" v-show="rotateFiszka">
                { common[id3].definition }
            </div>}
        </div>}

    </div>


    <div onClick={(event)=>{
      return FlashcardCategory(event)}}

        class="btn-group btn-group-toggle flashcardButtons d-flex justify-content-center" data-toggle="buttons">
        <label id="option1" ClassName={`btn btn-outline-secondary ${selectedOption === 'option1' ? 'active' : ''}`} >
            <input type="radio" name="options" id="option1" autocomplete="off" checked={selectedOption === 'option1'}/> common
        </label>
        <label id="option2" ClassName={`btn btn-outline-secondary ${selectedOption === 'option2' ? 'active' : ''}`}>
            <input type="radio" name="options" id="option2" autocomplete="off" checked={selectedOption === 'option2'}/> pollution
        </label>
        <label ClassName={`btn btn-outline-secondary ${selectedOption === 'option3' ? 'active' : ''}`}>
            <input type="radio" name="options" id="option3" autocomplete="off" checked={selectedOption === 'option3'}/> sport
        </label>
    </div>


    <button class="d-flex justify-content-center nextFlashcard" onClick={inscreaseId}> następna</button>
    <button class="d-flex justify-content-center prevFlashcard" onClick={decreaseId}> poprzednia</button>
</div>

<div class="container definitions">
   { showAllWords && <ul class="allWords" v-if="showAllWords">
        {showPollution1 && <div v-if="showPollution1">
            <h1>pollution</h1>
            <div >
              <ul>
    {pollution.map((item, index) => (
        <li key={index}>
            {item.word} - {item.definition}
        </li>
    ))}
</ul>
            </div>
        </div>
}
       {showSport1 && <div v-if="showSport1">
            <h1>sport</h1>
            <div >
            <ul>
    {sport.map((item, index) => (
        <li key={index}>
            {item.word} - {item.definition}
        </li>
    ))}
</ul>
            </div>
        </div>}

       { showCommon1 && <div >
            <h1>common</h1>
            <div v-if="showCommon1"> <ul>
    {common.map((item, index) => (
        <li key={index}>
            {item.word} - {item.definition}
        </li>
    ))}
</ul>
            </div>
        </div>}

    </ul>}
</div>

</div>
  </>)
}

export default App;
