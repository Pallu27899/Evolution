// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", addMatch);
  var matches = JSON.parse(localStorage.getItem("schedule")) || [];
  function addMatch() {
    event.preventDefault();
    var matchObj = {
      matchNum: masaiForm.matchNum.value,
      teamA: masaiForm.teamA.value,
      teamB: masaiForm.teamB.value,
      date: masaiForm.date.value,
      venue: masaiForm.venue.value,
    };
    matches.push(matchObj);
    localStorage.setItem("schedule", JSON.stringify(matches));
  }