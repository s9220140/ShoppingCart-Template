// 表單驗證
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

$(document).ready(function () {
  // removeModal
  $("#removeModal").on("show.bs.modal", function (e) {
    var btn = $(e.relatedTarget);
    var title = btn.data("title");
    var num = btn.data("num");
    var modal = $(this);
    modal.find(".modal-title").text(`確認刪除${title}?`);
    modal.find(".modal-num").text(`數量刪除:${num}個`);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
    } else {
        $('.go-top').fadeOut(200);
    }
});
// Animate the scroll to top
$('.go-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 300);
})
});