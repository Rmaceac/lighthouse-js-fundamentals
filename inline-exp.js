function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh() {
  const sound = "haha!";
  return sound;
});