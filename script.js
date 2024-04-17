let comp = Math.floor(Math.random() * 3) + 1;
let compTeam;
let team = prompt(`options :\n1 Rock \n2 Paper \n3 Scissors `);
function game() {
  switch (comp) {
    case 1:
      compTeam = "Rock";
      break;
    case 2:
      compTeam = "Paper";
      break;
    case 3:
      compTeam = "Scissors";
      break;
  }
  switch (team) {
    case "1":
      team = "Rock";
      break;
    case "2":
      team = "Paper";
      break;
    case "3":
      team = "Scissors";
      break;
  }
  if (
    (compTeam === "Rock" && team === "Rock") ||
    (compTeam === "Paper" && team === "Paper") ||
    (compTeam === "Scissors" && team === "Scissors")
  ) {
    alert(`tie`);
  } else if (
    (compTeam === "Rock" && team === "Paper") ||
    (compTeam === "Paper" && team === "Scissors") ||
    (compTeam === "Scissors" && team === "Rock")
  ) {
    alert(`you won`);
  } else if (
    (compTeam === "Rock" && team === "Scissors") ||
    (compTeam === "Scissors" && team === "Paper") ||
    (compTeam === "Paper" && team === "Scissors")
  ) {
    alert(`u lost`);
  }
}
game();
