---
description: "HTML Tip2"
date: 2021-06-25
tags: ["HTML"]
---

# HTML Tip2

> 필요한 내용만 정리합니다.

## 태그

- 태그 안의 내용은 Content,
- 태그는 하나의 Element가 된다.

## HTML의 태그는 Box와 Item 2가지로 나뉜다.

- Item : 사용자가 볼 수 있는 item
  - a, button, input, label, img, video, audio, map, canvas, table 등
  - Block과 Inline을 기준으로 한 번 더 나눠볼 수 있다.
    - Block : block level의 element는 하나가 한 줄을 다 차지한다.
    - Inline : Inline level의 태그는 공간이 허용되면 바로 옆에 배치가 가능하다.
- Box : item들을 정리하는 section, CSS 적용 전까지는 보이지 않는다.
  - header, footer, nav, aside, main, section, article, div, span, form 등
  - article : section안에 들어가는 반복되고, 재사용이 가능한 녀석들
  - div : 묶어서 스타일링을 할 필요가 있을 때 묶어준다.

## Input 태그

- 보통 label(레이블)을 함께 사용한다.
- input은 페이지에 여러 개가 있을 가능성이 높기 때문에 id를 통해 고유한 식별자를 준다.
- lable에는 input의 id값을 알려줘서 그룹을 지어준다.

```HTML
<label for="input_name">Name:</label>
<input id="input_name" type="text">
```
