// if click outside then close  modal

var modal = document.getElementById("id-modal");

var modalLogin = document.getElementById("id-modal-login");
window.onclick = function (event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function closeModal() {
//     document.querySelector(".modal").style.display = "none"
// }
// document.addEventListener(
//     "click",
//     function (event) {
//         // If user clicks outside the modal window, then close modal by calling closeModal()
//         if (event.target.closest('.modal__body')) {
//             closeModal()
//         }
//     },
//     false
// )
