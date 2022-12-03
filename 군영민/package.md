<pre>1. this </pre>

this 는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
<strong>즉 this의 binding은 함수 호출 방식에 의해 동적으로 결정된다.</strong>
```js
ex)
  const circle = {
    radius : 5,
    getDiameter(){
      return 2 * this.radius;
      // 여기서의 this 는 circle을 가르킨다.
    }
  }
```

<pre> 함수 호출 하는 방식에 따라 어떻게 불러와지는지 확인해보자.</pre>
```js
  const test = function(){
    console.log(this)
  }
  //1. 일반 함수 호출
  test(); // window

  //2. 메소드 호출
  const obj = { test };
  obj.test(); // obj, test 함수 내부의 this가 메소드를 호출한 객체를 가르킨다. 즉 함수호출 방식에 의해 동적으로 결정된다.
  
  //3. 생성자 함수
  new test(); // test {}
  
  //4. call, apply, bind
  const nameTest = { name : 'kwon' };
  test.call(nameTest); // kwon
  test.apply(nameTest); // kwon
  test.bind(nameTest)(); // kwon
```

```js
var value = 1;

const ojb = {
  value : 100,
  foo() {
    console.log("foo's this : " , this); // {value : 100, foo: f}
    console.log("foo's this.value : " , this.value) // 100
  function bar() {
    console.log("bar's this: ", this); // window
    console.log("bar's this.value : " , this.value ) // 1
  }
  bar(); 
  }

}
// 중첩함수도 일반함수로 호출되면 this에는 전역 객체가 바인딩된다.
```

<pre> 만약 바로 상위로 this를 바인딩 시키려면 어떻게 해야하나요?<br>
call,apply,bind,화살표 함수를 사용한다. <strong>화살표 함수 내부의 this은 상위 스코프 this를 가르킨다. </srong>
</pre>

<details>
  <summary>Solution</summary>
  <strong>에러가 발생합니다 - </strong>Error: Cannot read property 'name' of undefined
  <pre>에러가 발생하는 이유는 this 값을 설정할 땐 객체 정의가 사용되지 않기 때문입니다. this 값은 호출 시점에 결정됩니다.
위 코드에서 makeUser() 내 this는 undefined가 됩니다. 메서드로써 호출된 게 아니라 함수로써 호출되었기 때문입니다.
this 값은 전체 함수가 됩니다. 코드 블록과 객체 리터럴은 여기에 영향을 주지 않습니다.
따라서 ref: this는 함수의 현재 this 값을 가져옵니다.
this의 값이 undefined가 되게 함수를 다시 작성하면 다음과 같습니다.
</pre>

```js
function makeUser(){
  return this; // 이번엔 객체 리터럴을 사용하지 않았습니다.
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
```
<pre>
보시다시피 alert( makeUser().name )와 위쪽에서 살펴본 alert( user.ref.name )의 결과가 같은 것을 확인할 수 있습니다.
에러가 발생하지 않게 하려면 코드를 다음과 같이 수정하면 됩니다.</pre>

```js
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John
```

<pre>이렇게 하면 user.ref()가 메서드가 되고 this는 . 앞의 객체가 되기 때문에 에러가 발생하지 않습니다.</pre>

</details>
