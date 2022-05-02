// write js code here corresponding to favourites.html


// document.querySelector("#filterVenue")
// .addEventListener("change",filterVenue)

// function filterVenue(){
//     var selected=document.querySelector("#filterVenue").value;
//     console.log(selected);

//     var filteredList=matches.filter(function(elem){
//         return elem.venue==selected;
//     });
//     console.log(filteredList);
//     displayMatches(filteredList);
// } 
var favourites = JSON.parse(localStorage.getItem("favouriteMatches"));

displayMatches(favourites);
function displayMatches(matches) {
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
    td6.innerText = "Remove";
    td6.style.color = "red";
    td6.addEventListener("click", function () {
      removeItem(elem, i);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}

function removeItem(elem, index) {
  favourites.splice(index, 1);
  localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
  window.location.reload();
}

