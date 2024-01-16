const bodyElement = document.querySelector('[data-js="body"]');
console.log(bodyElement)

const darkSwitch = document.querySelector('.switch input')

console.log(darkSwitch)

darkSwitch.addEventListener('click', () => {
        bodyElement.classList.toggle("dark")
  });  