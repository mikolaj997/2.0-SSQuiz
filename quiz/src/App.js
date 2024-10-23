
 import {useState} from 'react'
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
 let showFlashcardInfo1 = false
 const [showPopup, setShowPopup ] = useState(false)
 let showAllWords = useState(false)

 const  showAllOfWords = () => {
  showAllWords = !showAllWords
}
 const  togglePopup = () => {
  setShowPopup(!showPopup);
}
const  showFlashcardInfo = () => {
  showFlashcardInfo1 = !showFlashcardInfo1
}

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
  </>)
}

export default App;
