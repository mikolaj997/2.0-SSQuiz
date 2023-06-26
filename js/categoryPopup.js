// app.component('category-popup', {
//     template:
//         /*html*/
//         `
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <a class="navbar-brand" href="#">{{ name }}
//                 <div class="navButtons">

//                     <button v-on:click="showAllOfWords" type="button" class="btn btn-outline-secondary"> <a
//                             href="vocabularyList.html">pojęcia i definicje</a></button>
//                     <button @click="togglePopup" type="button" class="btn btn-outline-secondary category">kategorie
//                     </button>
//                     <button @click="togglePopup2" type="button" class="btn btn-outline-secondary">modyfikacje</button>
//                 </div>
//                 <span class="  relutlCount" v-if="showResult">Liczba poprawnych odpowiedzi: {{ correctAnswers }}</span>
//             </a>
//     </nav>
//         <div>
//     <div v-if="showPopup" class="popup">
//     <button class="btn btn-outline-secondary comman"><a class="comman" href="common.html">common</a></button>
//     <button class="btn btn-outline-secondary pollution"> <a href="index.html">pollution</a></button>
//     <button class="btn btn-outline-secondary sport"><a href="sport.html">sport</a></button>
//     </div>
//     </div>
// `,
// data() {
//     return {
//         showPopup:false,
//         showPopup2:false,
//     }
// },
// methods:{
//     togglePopup() {
//         this.showPopup = !this.showPopup;
//     },
//     togglePopup2() {
//         this.showPopup2 = !this.showPopup2;
//     },
// },
// })