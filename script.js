const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// team stores a reference to players
const team = players;

// team1 is a copy of players (shallow copy)
const team1 = [...players];

// cap1 is a copy of the person object (shallow copy)
const cap1 = { ...person };

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
