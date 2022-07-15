$(function () {
  $('.dropdown__btn').on('click', function () {
    $('.dropdown__content').toggleClass('dropdown__content--open');
  });
});

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropdown__btn')) {
    var dropdowns = document.getElementsByClassName('dropdown__content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown__content--open')) {
        openDropdown.classList.remove('dropdown__content--open');
      }
    }
  }
};
