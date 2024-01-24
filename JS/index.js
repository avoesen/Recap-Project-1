

 const answerBtns = document.querySelectorAll(".answer")
 const answerTexts = document.querySelectorAll(".answer-text") 

const questionCards = document.querySelectorAll(".question-card");
const questionCard = document.querySelector(".question-card");

answerBtns.forEach(function(answerBtn) {
    answerBtn.addEventListener("click", () => {
      if (answerBtn.textContent === "Show Answer") {
        answerBtn.textContent = "Hide Answer";
        answerBtn.nextElementSibling.style.display = "block";
      } else {
        answerBtn.textContent = "Show Answer";
        answerBtn.nextElementSibling.style.display = "none";
      }
    });
});

const bookmarkEls = document.querySelectorAll(".bookmark"); 
const bookmarkEl = document.querySelector(".bookmark");

//bookmark in anderes html speichern??
bookmarkEls.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.style.fill = "black";
    //mit local storage? geht auch mit addclass?? wird überschrieben? wie kann man random namen erstellen? damit die nicht überschrieben werden?
    localStorage.setItem("questionCardSave", questionCard.outerHTML);
  });
});

const formQuestion = document.querySelector("[data-js='form']");
const submitButton = document.querySelector("[data-js='submit-button']");

formQuestion.addEventListener("submit", (event) =>{
  event.preventDefault();
  const questionForm = new FormData(event.target);
  const questionData = Object.fromEntries(questionForm); 
  // return questionData;

  const newQuestion = document.createElement("section");
  newQuestion.classList.add("question-card");
  // p tag für Frage und Antwort nicht im InnerHtml ->sicherheitsrisko, da code mit übergeben werden kann
  newQuestion.innerHTML = `
            <a class="bookhead">
                <?xml version="1.0" encoding="utf-8"?>
                <svg class="bookmark" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V21L12 15L6 21V6Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>    
            <p>${questionData.question}</p>
            <button class="answer">Show Answer</button>
                <p class="answer-text">${questionData.answer}</p>               
            <div class="tags">
                <a class="tag">#css</a>
                <a class="tag">#html</a>
                <a class="tag">#flexbox</a>
            </div>
      `;
      // keine ahnung wie ich das einem anderen html zuordnen kann 
  const bodyIndexHTML = document.querySelector("[data-js='body-index']");
  bodyIndexHTML.append(newQuestion); 
})

