---
description: "Node.js와 NPM"
date: 2021-06-29
tags: ["Front-End"]
---

# Node.js & NPM

> 이 문서는 [김민태의 프론트엔드 아카데미](https://fastcampus.co.kr/category_academy_kmt) 강의를 바탕으로 작성되었습니다.

## Node.js

- 구글에서 크롬 브라우저를 만들고 나서 Javascript를 빠르게 실행할 수 있는 V8 엔진을 만들어 오픈 소스로 공개했다.
- 라이언 달이라는 사람은 V8 엔진을 가지고 있으면 Javascript를 브라우저에서 실행시키지 않고 일반 운영체제 환경에서 실행시킬 수 있는 Javascrip 런타임 환경을 만든다.
- 이 소프트웨어가 `Nodejs`이다.

### Node.js의 역할

- Javascript를 브라우저가 아니라, 운영체제 상에서 실행할 수 있게 되었다.

```js
//index.js

console.log("hello world");
```

```
//console
node index.js

//결과
hello world
```

## npm

- [npmjs.com](npmjs.com) : 필요한 소프트웨어를 검색한다.
- `npm update` : 적용했던 기능이 업그레이드되고 버전업이 되었다면, 자동으로 업데이트 된 파일을 다운 받아서 프로젝트에 적용.

### npm을 익혀보자

콘솔에 보여지는 문구를 예쁘게 꾸미고 싶다고 하자.

1. 위 사이트에서 colors를 찾아냈다.
2. 설치는 Installation 항목에 적혀져있다. `npm install colors`(npmjs.com에서 다운로드 받아라)
3. 콘솔에서 명령어를 입력하면, 설치가 된다.

- 현재 디렉토리 밑에 node_modules라고 하는 폴더를 만들고, 그 밑에 다운로드를 한다.
- 이 프로젝트 안에서 colors라는 것을 사용할 수 있게 된다.

4. Usage를 확인한 다음 사용한다.

```js
var colors = require("colors");
console.log("hello world".yellow);
```
