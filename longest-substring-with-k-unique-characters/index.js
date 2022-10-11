function solution(str, k) {
  const arr = str.split('');
  let maxLen = 0;
  let resultStr = '';
  const hashMap = {};
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] ? (hashMap[arr[i]] += 1) : (hashMap[arr[i]] = 1);
    if (Object.keys(hashMap).length > k) {
      const { str, hash } = buildStr(j, i, arr);
      const strLen = str.length;
      if (strLen > maxLen && Object.keys(hash).length == k) {
        maxLen = strLen;
        resultStr = str;
      }
      removeValue(j, hashMap, arr);
      j++;
    }
  }
  return { maxLen, resultStr };
}

function removeValue(value, hashMap, arr) {
  for (let j = 0; j <= value; j++) {
    const getValue = hashMap[arr[j]];
    if (getValue) {
      if (getValue > 1) {
        hashMap[arr[j]] -= 1;
        return;
      }
      if (getValue == 1) {
        delete hashMap[arr[j]];
        return;
      }
    }
  }
}

function buildStr(start, end, arr) {
  let str = '';
  const hash = {};
  for (let i = start; i < end; i++) {
    str = str + arr[i];
    hash[arr[i]] ? (hash[arr[i]] += 1) : (hash[arr[i]] = 1);
  }

  return { str, hash };
}

const { maxLen, resultStr } = solution('aabcbcdbca', 2);
