
module.exports = function solveEquation(equation) { 
  let arr = equation.split(' * x'); 
  let a= +arr[0]; 
  let b= + (arr[1].slice(3,4)+arr[1].slice(5, arr[1].length + 1)); 
  let c= + (arr[2].slice(1,2)+arr[2].slice(3, arr[2].length + 1)); 
  let x1; 
  let x2; 
  let d = (b*b)-(4*a*c); 
  let solutions = []; 
  x1 = Math.round(( -b - Math.sqrt(d) ) / (2*a)); 
  x2 = Math.round(( -b + Math.sqrt(d) ) / (2*a)); 
  
  if ( x1 > x2 ){ 
  solutions = [ x2 , x1 ] ; 
  } 
  else solutions = [ x1 , x2 ]; 
  return solutions;
}