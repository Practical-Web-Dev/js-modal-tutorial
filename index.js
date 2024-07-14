//DOM ELEMENTS
const body = document.querySelector("body")
const content = document.getElementById("content")
const readMoreBtn = document.getElementById("read-more-btn")
const modal = document.getElementById("modal")
const closeModalBtn = document.getElementById("close-modal-btn")

//Display modal on read more btn click
//Add dark BG to body
//Put display none on content div
//Display Modal

//EVENT LISTENERS
readMoreBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal)



//FUNCTIONS

function openModal () {

body.classList.add("dark-bg")
content.classList.add("display-none")
modal.classList.remove("display-none")


}

function closeModal () {


body.classList.remove("dark-bg")
content.classList.remove("display-none")
modal.classList.add("display-none")

}
