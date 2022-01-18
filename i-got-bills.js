var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(function(bill) {
  //adds 15% tax to the original bill element
  bill = bill *= 1.15;
  /*toFixed(2) rounds the bill to within 2 decimal points, but returns the number as a string. Inserting that within the Number() method, turns that string back into a number. */
  return Number(bill.toFixed(2));
})

console.log(totals);