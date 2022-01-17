/*Calculates area of a rectangle. If area is negative, returns "undefined". */
const calculateRectangleArea = function(length, width) {
  const area = length * width;
  if (area <= 0) {
    return ;
  } else {
    return area;
  }
}

/*Calculates area of a triangle. If area is negative, returns "undefined". */
const calculateTriangleArea = function(base, height) {
  const area = (base * height) / 2;
  if (area <= 0) {
    return ;
  } else {
    return area;
  }
}

/*Calculates area of a circle. If area is less than pi, returns "undefined". */
const calculateCircleArea = function(radius) {
  const area = Math.PI * (radius * radius);
  if (area <= Math.PI) {
    return ;
  } else {
    return area;
  }
}