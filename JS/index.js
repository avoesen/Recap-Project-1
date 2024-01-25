

 const answerBtns = document.querySelectorAll(".answer")
 const answerTexts = document.querySelectorAll(".answer-text") 

const questionCards = document.querySelectorAll(".question-card");
const questionCard = document.querySelector(".question-card");

answerBtns.forEach((answerBtn) => {
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

console.log(bookmarkEls)
 
bookmarkEls.forEach((bookmark, index) => {
  bookmark.addEventListener("click", () => {
    if (bookmark.style.fill === "black"){
      bookmark.style.fill = "white";
    } else {
      bookmark.style.fill = "black";
    }
    //mit local storage? geht auch mit addclass?? wird überschrieben? wie kann man random namen erstellen? damit die nicht überschrieben werden?
    localStorage.setItem("questionCardSave"+ index, questionCard.outerHTML);
  });
});

const refreshButton = document.querySelector("[data-js='refresh']");

refreshButton.addEventListener("click", () => {
  const appendQuestionCard = localStorage.getItem("newQuestionCard");
  const bodyIndexHTML = document.querySelector("[data-js='body-index']");
  bodyIndexHTML.insertAdjacentHTML('beforeend', appendQuestionCard);
  console.log("ok");
});
