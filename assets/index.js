// var modal = document.getElementById('id-modal');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";

//     }
// }
// console.log(modal);


function closeModal() {
    document.querySelector(".modal").style.display = "none"
}
document.addEventListener(
    "click",
    function (event) {
        // If user clicks outside the modal window, then close modal by calling closeModal()
        if (event.target.closest(".modal__body")) {
            closeModal()
        }
    },
    false
)

