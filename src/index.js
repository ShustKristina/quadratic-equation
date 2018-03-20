module.exports = function solveEquation(equation) {
  // your implementation
  
  var arr = equation.replace(/\s/g, '').split('x'); //space remove and split x
  var arrOfSolutions = [];

  var a = parseFloat(arr[0]);
  var b = parseFloat(arr[1].slice(2));
  var c = parseFloat(arr[2]);
  var D = b * b - 4 * a * c;

  if (D > 0) {
    var x1 = Math.round((-b - Math.sqrt(D)) / 2 / a); //округляем посчитаное значение
    var x2 = Math.round((-b + Math.sqrt(D)) / 2 / a); //округляем посчитаное значение
    if (x1 > x2) {
      arrOfSolutions.push(x2, x1); //если х1 больше, то сначала в массив заносится х2
    }
    else {
      arrOfSolutions.push(x1, x2); //если х1 меньше, то оно и заносится в массив первым
    }

    return arrOfSolutions; //возвращаем массив со значениями
  }
}