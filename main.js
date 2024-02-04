const mainContainer = document.querySelector('.main-container');
const  thanksContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn')
submitBtn.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden')
})
rateAgain.addEventListener('click', () => {
    mainContainer.classList.remove('hidden');
    thanksContainer.classList.add('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})