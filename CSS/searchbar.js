function searchbar() {
  var family = "family";
  var hatchback = "hatchback";
  var sedan = "sedan";
  var truck ="truck";
  var van ="van";
  var search = $(".searchbar").val().toLowerCase();
  var familyVal = family.search(search);
  var hatchbackVal = hatchback.search(search);
  var sedanVal = sedan.search(search);
  var truckVal = truck.search(search);
  var vanVal = van.search();

  if (familyVal == -1) {
    $(".family").addClass("hidden");
    }
  else if (familyVal != -1) {
    $(".family").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  if (hatchbackVal == -1) {
    $(".hatchback").addClass("hidden");
    }
  else if (hatchbackVal != -1) {
    $(".hatchback").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  if (sedanVal == -1) {
    $(".sedan").addClass(".hidden");
  }
  else if (sedanVal != -1) {
    $(".sedan").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  if (truckVal == -1) {
    $(".truck").addClass("hidden");
    }
  else if (truckVal != -1) {
    $(".truck").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  if (vanVal == -1) {
    $(".van").addClass("hidden");
    }
  else if (vanVal != -1) {
    $(".van").removeClass("hidden");
    $(".none").addClass("hidden");
  }
  if (familyVal == -1 && hatchbackVal == -1 && sedanVal == -1 && truckVal == -1 && vanVal == -1) {
    $(".none").removeClass("hidden");
    alert("no results found");

  }}
