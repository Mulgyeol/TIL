---
description: "JavaScript의 탄생"
date: 2021-07-06
tags: ["Javascript"]
---

# Javascript의 탄생 배경

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## 자바스크립트의 역사와 현재 그리고 미래 (JavaScript, ECMAScript, JQuery, Babel, Node.js)

### 연도별 웹 브라우저와 스크립트 언어

- 1993년 : Marc Andreessen(Netscape사)의 Mosaic Web Brower
- 1994년 : Netscape Navigator Browser, HTML과 CSS로 간단히 웹페이지 만들기 가능
  - 어떻게 하면 동적인 웹사이트를 만들 수 있을까? 고민 => Scripting 언어를 추가하자!
  - 고려대상
    1. Java => 다소 무겁고 어려워서 pass
    2. 기존에 존재하던 Scheme Script 언어를 변경 => 새로운 언어를 만들자! => `Mocha`탄생 => 추후 `LiveScript`로 변경 => Netscape Navigator안에 LiveScript Interpreter 포함
       - DOM요소 조작이 가능해짐
       - Java 언어의 인기가 치솟자 이름을 `JavaScript`로 변경
- 1995년 : Netscape Navigator Browser안에 공식적으로 JavaSCript와 LiveScript Interpreter(엔진)이 포함되어 출시
  - MS사에서 Netscape Navigator Browser를 Reverse engineering(만들어진 프로그램의 바이너리 코드를 분석해서 소스 코드를 복원해내는 과정)하여 Javascript와 그 엔진의 소스코드를 복원 후 그대로 베껴와서 일부 수정 후 `Jscript`라고 이름 지음
  - Internet explorer 출시 => 개발자 고통의 시발점
  - 브라우저 별 사이트 지원/성능이 달라짐.. (ex. This site best viewd with Netscape Navigator)
- 1996년 : Netscape가 ECMA International이라는 단체에 찾아가 표준안을 만들자 제안
- 1997년 : `ECMAScript 1` 등장
  - ECMAScript : 브라우저에서 동작하는 언어를 만들 때, 그리고 엔진이 언어를 이해하기 위해서 지켜야할 문법적인 사항을 정리한 문서
- 2000년~ : 그동안 `Internet explorer`가 시장 점유율을 넓혀감
  - MS사의 불만 => ECMAScript 표준화에 참여하지 않음 => 표준화 진행 더뎌짐
- 2004년~ : Mozila사에서 Firefox가 출시, ECMA International에 찾아가서 ActionScript3 언어와 Tamarin 엔진으로 표준안 만들자 제시 => X
  - 세 브라우저 사이에서 개발자들 고통
  - Jesse James Garrett `AJAX(Asynchronous JavaScript and XML)` 비동기 처리 도입
  - 다른 브라우저들도 출시
  - 고통받는 개발자들 사이 커뮤니티 생성 => jQuery, dojo, mootools같은 라이브러리 탄생
    - API를 이용하면, 다른 브라우저간 다른 규칙을 신경 쓸 필요 없이 사이트 제작 가능
- 2008년 : Google이 `JIT(just-in-time compilation)`을 탑재한 `Chrome`브라우저 출시
  - JIT(just-in-time compilation) : Javascript를 실행하는 속도가 엄청 빠른 엔진
  - 7월에, 브라우저들이 모여 회의
- 2009년 : ECMAScript5
- 2015년 : ECMAScript6

## Javascript Engines

- Chrome : V8(node와 electron에서도 사용)
- Firefox : SpiderMonkey
- Safari : JSCore
- MS Edge : Chakra => V8
- Opera : Carakan
- Adobe Flash : Tamarin

## 현재 가고있는 방향

- SPA(Single Page Application) : 필요한 부분만 부분적으로 업데이트
- Node.js(Back-End)
- ReactNative(Mobile)
- Electron(Desktop Application)
- WA(WebAssembly, 다양한 언어로 Web Application 제작)
