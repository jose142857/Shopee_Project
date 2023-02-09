// CLOSE MODAL LOGIN & RIGISTER

var modal = document.getElementById("id-modal");
var modalLogin = document.getElementById("id-modal-login");
var modalSearch = document.getElementById('id__modal__search');

window.onclick = function (event) {

  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
  if (event.target != modalSearch) {
    modalSearch.style.display = "none";
    console.log(123)
  }
  console.log(event.target)
  console.log(modalSearch)




};

// OPEN MODAL SEARCH

function fnc_openModalSearch() {
  document.getElementById('id__modal__search').style.display = 'block';
}

