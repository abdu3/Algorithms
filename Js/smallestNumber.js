function smallestNumber(arr) {
  // write your code here
  arr.sort((a,b)=> a-b);
  return arr[0];
}
smallestNumber([13 , 2 , 1 , 4 , 106])