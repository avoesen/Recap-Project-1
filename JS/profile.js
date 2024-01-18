const bodyElement = document.querySelector('[data-js="body"]');

const darkSwitch = document.querySelector('.switch input')

darkSwitch.addEventListener('click', () => {
        bodyElement.classList.toggle("dark")
  });  