const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let x = 0;
  let y = 0;
  let lastStop = [x, y];
  for (const move of moves) {
    if (move === "north") {
      lastStop[1]++;
    } else if (move === "south") {
      lastStop[1]--;
    } else if (move === "east") {
      lastStop[0]++;
    } else if (move === "west") {
      lastStop[0]--;
    }
  } return lastStop;
}

console.log(finalPosition(moves));