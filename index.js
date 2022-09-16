const main = document.querySelector(".main")
const thanks = document.querySelector(".thank-you")
const submit = document.getElementById('submit')
const rateAgain = document.getElementById('rate-again')
const rate = document.getElementById('rate')
const rates = document.querySelectorAll('.btn')

submit.addEventListener("click", () => {
    thanks.classList.remove("hidden")
    main.style.display = "none"
})
rateAgain.addEventListener("click", () => {
    thanks.classList.add("hidden")
    main.style.display = "block"
})

rates.forEach((r) => {
    r.addEventListener("click", () =>{
        rate.innerHTML = r.innerHTML
    })
})