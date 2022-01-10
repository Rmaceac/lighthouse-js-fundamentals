var num = 99;

while (num > 0) {
  if (num > 2) {
    console.log(num + " bottles of juice on the wall! " + num +" bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
    num = num - 1
  } else if (num === 2) {
  console.log("2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!")
  } else if (num === 1) {
  console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!")
}
}