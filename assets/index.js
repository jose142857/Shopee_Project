// CLOSE MODAL LOGIN & RIGISTER & SEARCH

var modal = document.getElementById("id-modal");
var modalLogin = document.getElementById("id-modal-login");
var modalSearch = document.getElementById('id__modal__search');

window.onclick = function (event) {
  if (!event.target.closest('#id__modal__search') && !event.target.closest('.header__search-input-enter')) {
    modalSearch.style.display = 'none';
  }
}
modal.onclick = function (event) {
  if (!event.target.closest('#id-modal-body')) {
    modal.style.display = 'none';
  }
}

modalLogin.onclick = function (event) {
  if (!event.target.closest('#id-modal-body-login')) {
    modalLogin.style.display = 'none';
  }
}

// OPEN MODAL REGISTER & LOGIN & SEARCH

function fnc_openModalRegister() {
  document.getElementById('id-modal').style.display = 'block';
}



function fnc_openModalLogin() {
  document.getElementById('id-modal-login').style.display = 'block';
}



function fnc_openModalSearch() {
  document.getElementById('id__modal__search').style.display = 'block';
}

