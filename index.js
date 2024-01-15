

    //    function answer() {
    //        document.getElementById("answer").textContent = "Hide Answer";
    //        document.getElementsById("answer-text").style.display = "block";
    //    }

document.getElementById('answer').addEventListener('click', function() {
    document.getElementById("answer").textContent = "Hide Answer";
    document.getElementById('answer-text').style.display = 'block';
});
