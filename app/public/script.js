
$("#submit").on("click", function(e) {
  e.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select-no-single").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (validateForm() === true) {
    var results = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: []
    };

    $(".chosen-select-no-single :selected").each(function(i, sel){ 
      results.scores.push( $(sel).val() ); 
  
  });

    // AJAX post the data to the friends API
    $.post("/api/friends", results, function(data) {

      // Grab the match name and photo from the AJAX post
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // Dipslay modal
      $("modal").modal("toggle");
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
});