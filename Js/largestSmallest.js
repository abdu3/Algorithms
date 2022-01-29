function largestSmallest(array) {
  // write your code here
 array.sort((a, b) => b - a);
 return [array[0],array[array.length-1]];
}
largestSmallest([2 , 4 , 9 , 23 , 435]);