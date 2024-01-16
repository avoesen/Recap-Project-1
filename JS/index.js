

 const answerBtn = document.querySelector("#answer")
 const answerText = document.querySelector("#answer-text") 
 const bookmarkEl = document.querySelector("#bookmark") 
 
 console.log(answerText)

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
    bookmarkEl.style.fill = "black"
})

