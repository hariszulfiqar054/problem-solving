function solution(arr, k) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      if (arr[j]) {
        sum += arr[j];
      } else break;
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

solution([100, 200, 300, 400], 2);
