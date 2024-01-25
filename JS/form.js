const formQuestion = document.querySelector("[data-js='form']");
const submitButton = document.querySelector("[data-js='submit-button']");

formQuestion.addEventListener("submit", (event) => {
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
  console.log(newQuestion)
  localStorage.setItem("newQuestionCard", newQuestion.outerHTML);
  console.log("yes");

  // const bodyIndexHTML = document.querySelector("[data-js='body-index']");
  // console.log(bodyIndexHTML);
  // bodyIndexHTML.append(newQuestion);
  // document.body.append(newQuestion);
});

// mit querySelctorAll beide spans als array 

//Question
const questionInput = document.querySelector('[data-js="question-input"]');
const questionCharacters = document.querySelector('[data-js="characters-left-q"]');
const maxLengthQuestion =  questionInput.getAttribute("maxlength");

const updateQuestion = (value) => {
    questionCharacters.innerText = value + " characters left";
};
updateQuestion(maxLengthQuestion)
questionInput.addEventListener("input", () =>{
    updateQuestion(maxLengthQuestion - questionInput.value.length);
})
//Answer
const answerInput = document.querySelector('[data-js="answer-input"]');
const answerCharacters = document.querySelector('[data-js="characters-left-a"]');
const maxLengthAnswer =  answerInput.getAttribute("maxlength");

// console.log(answerInput, answerCharacters, maxLengthAnswer)
const updateAnswer = (value) => {
    answerCharacters.innerText = value + " characters left";
};
updateAnswer(maxLengthAnswer);
answerInput.addEventListener("input", () =>{
    updateAnswer(maxLengthAnswer - answerInput.value.length);
})