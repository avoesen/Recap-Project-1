

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

const refreshButton = document.querySelector("[data-js='refresh']");
console.log(refreshButton)

refreshButton.addEventListener("click", () => {
  const appendQuestionCard = localStorage.getItem("newQuestionCard");
  const bodyIndexHTML = document.querySelector("[data-js='body-index']");
  bodyIndexHTML.insertAdjacentHTML('beforeend', appendQuestionCard);
  console.log("ok");
});
