'use strict';

const showModal = document.querySelectorAll(".show-modal")
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")


const openModel = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const hideModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModel)
}

closeModal.addEventListener('click', hideModal)
    
overlay.addEventListener('click', hideModal)


document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        hideModal()
    }
})