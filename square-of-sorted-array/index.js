function solution(arr) {
  const squaredArr = arr
    .map((data) => Math.abs(data * data))
    .sort((a, b) => a - b);
  return squaredArr;
}

const result = solution([-4, -1, 0, 3, 10]);
