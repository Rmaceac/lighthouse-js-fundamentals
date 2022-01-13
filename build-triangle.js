function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(base) {
  let point = 0;
  for (let i = 1; i < base; i++) {
      point += 1;
     console.log(makeLine(point));
  } return makeLine(base);
}

// Udacity's official answer/function is as follows:
/*function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
*/
console.log(buildTriangle(10));