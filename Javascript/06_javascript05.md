---
description: "Javascript_05 - 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리"
date: 2021-07-08
tags: ["Javascript"]
---

# Javascript_05 - 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리

> 이 문서는 [드림코딩 by 엘리의 자바스크립트 기초 강의 (ES5+)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)를 바탕으로 작성되었습니다.

## Class

- 클래스는 ES6에 도입되었다.
- 조금 더 연관있는 데이터(fields)와 메서드(methods)를 묶어놓은 것
- 클래스는 template이고, object는 클래스의 객체이다.
- 클래스는 정의만 해놓은 것이라 메모리에 올라가진 않는다.
- 클래스로 생성한 객체는 메모리에 올라간다.
- 기존에 존재하던 프로토타입을 베이스로 문법만 클래스로 추가된 것이다.
  - syntactical sugar : 문법적으로 달콤한.. 편하게 만든 것.

### Class 선언

```js
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const mulgyeol = new Person("mulgyeol", 28);
console.log(mulgyeol.name); // mulgyeol
console.log(mulgyeol.age); //28;
mulgyeol.speak(); // mulgyeol: hello!
```

### Getter and Setter

- 캡슐화와 관련이 있다.
- 객체지향적 관점에서 임의로 값을 변경, 수정하는 것을 방지
- 변수 내용을 조금 다르게 만들어준다. (앞에 `_` 붙여주기)

```js
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter 정의하는 순간 constuctor의 this.age는 메모리의 올라가있는 데이터를 읽어오는 것이 아니라 getter를 호출하게 된다.
  // 이를 위해 get 안의 변수는 조금 다르게 _를 앞에 붙여준다.
  get age() {
    return this._age;
  }

  // getter 정의하는 순간 constuctor의 this.age 뒷부분의 `= age`는 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 된다.
  // setter의 내용은 setter을 계속해서 호출해서 콜스택이 꽉차게 된다.
  // 이를 방지 위해 set 안의 변수는 조금 다르게 _를 앞에 붙여준다.
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // 0, 내부적으로 getter와 setter를 이용한다.
```

### Field(public, private)

- 최근에 추가되어서 많이 사용되지는 않는다.

```js
class Experiment {
  publicField = 2; //public
  #privateField = 0; //private
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
```

### Static properties and methods

- object에 상관없이 class가 가지고 있는 고유한 값
- object에 상관없이 동일하게 반복적으로 사용되어지는 메소드

```js
class Article {
  static publisher = "Mulgyeol Jung";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Mulgyeol Jung
Article.printPublisher(); // Mulgyeol Jung
```

## 상속과 다형성

```js
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //이걸 지우면 부모 클래스의 draw는 실행되지 않는다.
    console.log("🔺");
  }

  //overriding
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
```

### instanceOf

- A instanceOf B : A가 B의 객체인가?

```js
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color: red
```

### Javascript objects

- [MDN Javascript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
