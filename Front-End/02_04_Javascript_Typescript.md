---
description: "Javascript와 Typescript"
date: 2021-06-28
tags: ["Front-End"]
---

# Javascript & Typescript

> 이 문서는 [김민태의 프론트엔드 아카데미](https://fastcampus.co.kr/category_academy_kmt) 강의를 바탕으로 작성되었습니다.

## TypeScript는 왜 필요한가?

JavScript가 존재하고 점점 더 좋아지고 있는데 왜 TypeScript가 필요할까?

- Javascript는 Typescript의 superset이다.
  - 하휘 호완성을 지원한다.
  - Typescript는 Javascript의 모든 기능을 지원한다.
- Javascript가 제공하지 못하는 것, 그리고 앞으로도 제공하지 못할 것을 지원한다.
  - `명시적인 유형 설명`, `데이터에 대한 설명`은 앞으로도 Javscript는 지원하지 못할 것이다.

## 코드로 비교해 보자

```javascript
//javscript

let age = 10;
let x = 10; // 여기서 10은 어떤 데이터일까?

// weight 변수를 사용하게 되는 상황에서 weight에는 문자열이 들어가 있는지, 숫자가 들어가 있는지 알지 못한다.
let weight = 80;
```

```typescript
//typescript

//4. type을 생성한다.(의미를 부여한 타입을 생성)
type Centimeter = number;
type RainbowColor = "red" | "orage" | "yellow" | "green" | "blue" | "indigo" | "violet";

let weight: number = 80; // 1. typescript에서는 어떤 유형의 데이터가 들어가는지 명시적으로 보여준다.

//2. weight이 숫자라는 명시가 그렇게 효과적일까?
//3. typescript는 한 단계 더 나아간다.

//5.키는 176이라는 number 값이고, centimeter라는 단위를 쓴다는 것을 코드로 제공한다.
let height: Centimeter = 176;
let color: RainbowColor = "orange";

colot = "black"; // 에러 발생(RainbowColor에 없기 때문)
```

### 장점

- 코드을 읽었을 때, 어떤 일을 하는지 손 쉽게 알 수 있다.
- 따라서 버그를 줄이고, 수정도 용이하다.

## 위와 같은 작업들이 어떻게 가능한가?

- TypeScript가 `트랜스파일러`이기 때문이다.

## 데이터 유형 정의의 중요성

1. 프론트엔드의 구성요소 중 데이터가 차지하는 비중은 크다.
2. 데이터는 상황에 따라서 어떤 이유로 변하기도 한다.
3. 작성된 코드는 서비스가 진행되는 동안 유지되고, 개발자는 바뀌기도 한다.
4. 때문에 다른 사람이 작성한 코드를 새로운 개발자가 수정해야 하는 일도 발생한다.
5. 이때, 데이터 유형의 설명이 명확하지 않다면 그 데이터를 수정하기 위해서 많은 시간이 투자 될 수 있고, 정확하지 않은 정보로 수정될 수 있다.(장애 상황 발생)
