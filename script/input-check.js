  $(document).ready(function() {
    $(".changeDiv").on("input", function() {
      var userInput = $(this).val().toLowerCase();
      var correctOptions = JSON.parse($(this).data("correct-options").toLowerCase().replace(/'/g, "\""));

      if (correctOptions.includes(userInput)) {
        $(this).css("background-color", "lightgreen");
      } else {
        $(this).css("background-color", "lightcoral");
      }
    });
  });
