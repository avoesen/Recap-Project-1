

 const answerBtn = document.querySelector("#answer")
 const answerText = document.querySelector("#answer-text") 
 const bookmarkEl = document.querySelector("#bookmark") 

 const questionCard = document.querySelector(".question-card")
 
 console.log(questionCard)

 answerBtn.addEventListener('click', () => {
    if (answerBtn.textContent === "Show Answer"){
    answerBtn.textContent = "Hide Answer";
    answerText.style.display = 'block';}
    else {answerBtn.textContent = "Show Answer";
    answerText.style.display = 'none';
    }
})


//bookmark in anderes html speichern??
bookmarkEl.addEventListener('click', () => {
    bookmarkEl.style.fill = "black";
    //mit local storage? geht auch mit addclass??
    localStorage.setItem("questionCardSave", questionCard.outerHTML) 
})


