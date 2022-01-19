var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

//IMPORTANT
/* Under the console.log portion of this function, it seemed at first that I should call the method with "donuts.type" (plural donuts, after the name of the array). However, since we are already calling the donuts array with the donuts.forEach() command, we now need to reference .type and .cost by "donut.type" and "donut.cost" (singular donut)respectively. This is because "donut" now refers to each element within the array "donuts" we have already called on. */

donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each.");
});