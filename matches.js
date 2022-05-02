// write js code here corresponding to matches.html
var matches = JSON.parse(localStorage.getItem("schedule"));
var favourites = JSON.parse(localStorage.getItem("favouriteMatches")) || [];
displayMatches(matches);

document
  .querySelector("#filterVenue")
  .addEventListener("change", filterVenue);

function filterVenue() {
  var selected = document.querySelector("#filterVenue").value;
  console.log(selected);

  var filteredList = matches.filter(function (elem) {
    return elem.venue == selected;
  });

  console.log(filteredList);
  displayMatches(filteredList);
}

function displayMatches(matches) {
  document.querySelector("tbody").innerHTML = "";
  matches.forEach(function (elem, i) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.matchNum;
    var td2 = document.createElement("td");
    td2.innerText = elem.teamA;

    var td3 = document.createElement("td");
    td3.innerText = elem.teamB;

    var td4 = document.createElement("td");
    td4.innerText = elem.date;

    var td5 = document.createElement("td");
    td5.innerText = elem.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Add as Favourite";
    td6.addEventListener("click", function () {
      addToFavourite(elem);
      removeItem(elem, i);
    });

    

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}

function removeItem(elem, index) {
  matches.splice(index, 1);
  localStorage.setItem("schedule", JSON.stringify(matches));
  window.location.reload();
}

function addToFavourite(elem) {
  favourites.push(elem);
  localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
}