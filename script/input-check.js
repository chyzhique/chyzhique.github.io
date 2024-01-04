  $(document).ready(function() {
    $(".changeDiv").on("input", function() {
      var userInput = $(this).val().toLowerCase();
      var correctOptions = JSON.parse($(this).data("correct-options").toLowerCase().replace(/'/g, "\""));
      var parentLi = $(this).closest("li");

      if (correctOptions.includes(userInput)) {
        parentLi.removeClass("incorrect").addClass("correct");
      } else {
        parentLi.removeClass("correct").addClass("incorrect");
      }
    });
  });
