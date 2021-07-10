---
description: "Javascript_08 - 유용한 10가지 배열 함수들. Array APIs 총정리"
date: 2021-07-10
tags: ["Javascript"]
---

# Javascript_08 - 유용한 10가지 배열 함수들. Array APIs 총정리

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Array APIs

### make a string out of an array

- join()
  - join(separator?: string): string;
  - 구분자가 없으면 기본적으로 `,`로 구분한다.

```js
const fruits = ["apple", "banana", "orange"];
const result = fruits.join();
console.log(result); //apple,banana,orange
```

### make an array out of a string

- split()
  - split(separator: string | RegExp, limit?: number): string[];
  - 구분자가 없으면 그냥 문자열 하나가 배열 인덱스 하나로 들어간다.

```js
const fruits = "🍎, 🥝, 🍌, 🍒";
const result = fruits.split(",", 2);
console.log(result); //["🍎", " 🥝"]
```

### make this array look like this: [5, 4, 3, 2, 1]

- reverse()
  - 본 배열을 뒤집는다.

```js
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result);
console.log(array);
```

### make new array without the first two elements

- splice()
  - 배열 자체를 수정한다.
- slice()
  - slice(start?: number, end?: number): T[];
  - 배열에서 원하는 부분만 리턴해서 받아온다.

```js
const array = [1, 2, 3, 4, 5];
const result = array.splice(0, 2);
console.log(result); //[1,2]
console.log(array); //[3,4,5]

const array2 = [1, 2, 3, 4, 5];
const result2 = array2.slice(2, 5);
console.log(result2);
console.log(array2);
```

## class에서 다뤄보자

```js
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
```

### find a student with the score 90

- find()
  - find는 각 요소를 하나씩 불러온다.
  - 처음 true를 리턴하면, find는 멈춘다.

```js
const result = students.find((student) => student.score === 90);
console.log(result);
```

### make an array of enrolled students

- filter()
  - Returns the elements of an array that meet the condition specified in a callback function.

```js
const result = students.filter((student) => student.enrolled);
console.log(result);
```

### make an array containing only the students' scores

- map()
  - 배열의 모든 요소들을 콜백함수를 호출하면서 원하는 값으로 변경

```js
const result = students.map((student) => student.score);
console.log(result);
```

### check if there is a student with the score lower than 50

- some()
  - 배열의 요소 중 조건에 맞는 요소가 하나 이상 있는 지 확인
- every()
  - 모든 배열의 요소가 조건에 맞는지 확인한다. 하나라도 맞지 않다면 false

```js
const result = students.some((student) => student.score < 50);
console.log(result);

const result2 = !students.every((student) => student.score >= 50);
console.log(result2);
```

### compute students' average score

- reduce()
  - 배열의 요소들의 값을 누적한다.
  - initial value를 추가할 수 있다.
  - 이전의 콜백함수 리턴 값은 다음 함수의 prev로 들어간다.
  - curr는 배열의 item을 순차적으로 전달받는다.

```js
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length);
```

### make a string containing all the scores

```js
const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50) //50점 이상 필터링 추가
  .join();

console.log(result);
```

### sorted in ascending order

- result should be: '45, 66, 80, 88, 90'

```js
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();

const result2 = students
  .map((student) => student.score)
  .sort((a, b) => b - a)
  .join();

console.log(result);
console.log(result2);
```
