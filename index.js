

document.getElementById('answer').addEventListener('click', function() {
    document.getElementById("answer").textContent = "Hide Answer";
    document.getElementById('answer-text').style.display = 'block';
})

document.getElementById("bookmark").addEventListener('click', function() {
    document.getElementById('bookmark').style.fill = "black"
})