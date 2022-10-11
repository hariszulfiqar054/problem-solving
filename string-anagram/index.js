function solution(str1, str2) {
  const s1 = str1.split('').sort().join('');
  const s2 = str2.split('').sort().join('');
  return s1 === s2;
}

const result = solution('listen', 'silent');
console.log(result);
