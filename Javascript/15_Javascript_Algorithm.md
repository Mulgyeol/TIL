---
description: "자바스크립트로 백준 문제 푸는 법"
date: 2021-07-18
tags: ["Javascript"]
---

# 초보자가 자바스크립트로 백준 알고리즘 문제 푸는 법

- [백준4344 - 평균은 넘겠지](https://www.acmicpc.net/problem/4344)

## 입력 처리하기

### 1. input.txt 파일에 입력을 넣어준다.

```js
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
// console.log(input); // 확인
```

### 2. 각 열을 배열로 구분해준다.

```js
input = input.split("\n"); // 구분자로 나눠 배열의 인덱스로 각각 넣어준다.
// console.log(input); // 확인
```

### 3. 배열의 인덱스를 상황에 맞게 정리해서 사용한다.

- 입력된 문자를 정수화하기

```js
// 첫 번째 인덱스로 테스트 케이스의 갯수가 주어진다고 하자.
// const testCaseNum = input[0]; //문자열이 입력받아진다.
// 방법 1. Number
const testCaseNum = Number(input[0]);
console.log("testCaseNum :", testCaseNum);
// 방법 2. 단항연산자 +
const testCaseNum2 = +input[0];
console.log("testCaseNum :", testCaseNum2);
```

- 공백으로 분리하기

```js
for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(" ").map((item) => +item);

  //   위 내용을 세부적으로 살펴보기, 위 코드 한줄은 아래와 같다.
  //   const arr2 = input[i].split(' ');
  //   let newArr = [];
  //   for(let i = 0; i < arr.length; i++){
  //       newArr.push(+arr[i]);
  //   }
}
```

## 프로그래머스처럼 입력을 정제하기

> Input을 정제하는 과정과, 문제를 푸는 로직을 분리하면 좋다.

### Input 정제 과정 아이디어

1. `solution`이라는 함수를 만든다.

```js
function solution() {}
```

2. 입력 값을 설정한다.

- 테스트 케이수 C,
- testCast별 학생 수, 점수

```js
/*
C = 5
testCase = [
    {
        N: 5,
        arr: [50, 50, 70, 80, 100]
    },
    {
        N: 7,
        arr: [100, 95, 90, 80, 70, 60, 50]
    }
    ...
]
*/

function(C, testCase){}
```

### 적용해서 만들어보기

- 풀이용

```js
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  const newArr = [];
  for (let j = 1; j <= arr[0]; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

function solution(C, testCase) {
  for (let i = 0; i < C; i++) {
    let studentsNum = testCase[i].N;
    let sum = 0;

    for (let j = 0; j < studentsNum; j++) {
      sum += testCase[i].arr[j];
    }

    let avg = sum / studentsNum;
    let overAvg = 0;

    for (let j = 0; j < studentsNum; j++) {
      if (testCase[i].arr[j] > avg) {
        overAvg++;
      }
    }

    let answer = ((overAvg / studentsNum) * 100).toFixed(3);
    console.log(answer + "%");
  }
}

solution(inputC, inputTestCase);
```

- 제출용

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  const newArr = [];
  for (let j = 1; j <= arr[0]; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

function solution(C, testCase) {
  for (let i = 0; i < C; i++) {
    let studentsNum = testCase[i].N;
    let sum = 0;

    for (let j = 0; j < studentsNum; j++) {
      sum += testCase[i].arr[j];
    }

    let avg = sum / studentsNum;
    let overAvg = 0;

    for (let j = 0; j < studentsNum; j++) {
      if (testCase[i].arr[j] > avg) {
        overAvg++;
      }
    }

    let answer = ((overAvg / studentsNum) * 100).toFixed(3);
    console.log(answer + "%");
  }
}

solution(inputC, inputTestCase);
```

## 보완할 점

- 콘솔에서 `fs.readFileSync("/dev/stdin")`이 사용되지 않는 이유?
- Java스러운 풀이를 Javascript에 맞게 해결해보기
