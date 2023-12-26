$(".hamburger").click((e) => {
  e.preventDefault();
  $(".hamburger").toggleClass("active");
  $(".menu ul").toggleClass("active");
});

$(".arrow-icon").on("click", function () {
  $(this).siblings(".drop-down-menu").toggleClass("hidden");
});
