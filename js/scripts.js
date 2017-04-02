$(document).ready(function() {
  $("form#information").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val().toUpperCase();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("#state").val();
    var phone = $("input#phone").val();
    var type = $("input:radio[name=phone]:checked").val();
    var email = $("input#email").val().toLowerCase();

    $("#person").prepend("<li>" + "<a>" + name + "</a>" + "</li>");
    $("#contact").show();

    $("#person").children("li").first().click(function() {
      $(".name").text(name);
      $(".address").text(street + ", " + city + ", " + state);
      $(".type").text("(" + type + ")");
      $(".number").text(phone);
      $(".email").text(email);
      $("#detail").show();
    });
  });
});
