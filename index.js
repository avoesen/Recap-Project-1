

document.getElementById('answer').addEventListener('click', function() {
    document.getElementById("answer").textContent = "Hide Answer";
    document.getElementById('answer-text').style.display = 'block';
})

document.getElementsByClassName("bookmark").addEventListener('click', function() {
    document.getElementsByClassName("bookhead").innerHTML =
    <svg width="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
})
