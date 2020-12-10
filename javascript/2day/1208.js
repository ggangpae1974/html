console.log('Hello World~!');

//한줄주석
/* 여러줄 주석*/

//변수선언
//es6 이전
var name= '홍길동';


//es6 이후버전
let x = 10;
let y =20;
console.log(x+y);

//상수 ->변경 불가능
const z = 30;
//z=40;

//함수선언문=>함수호이스팅(함수선언문을 위로 끌어올림.) 가능
function sum(a,b) {
  let result;
  result = a+b;
  return result;
}
let result = sum(x,y);
console.log(result); 

//함수표현식
let result2 = function(a,b) {
  let rusult;
  result = a+b;
  return result;
}
console.log(result2(x,y))

//배열생성 2가지 방법 ->배열은 대괄호
const array = [1,2,3,4,5];
const array2 = new Array (1,2,3,4,5);

console.log (array.toString());
console.log (array2.toString());

//js에서 배열은 동적으로 요소추가 가능
array[5]=6;
console.log(array.toString());
console.log(array.length);
array.length = 3;  //->배열줄이기
console.log(array.toString());
array.length = 10;  //->배열늘이기
console.log(array.toString());
array[7]=8;
console.log(array.toString());

//빈 배열생성 ->const이어도 오류가 없음.
const array3=[];
array4= new Array();
array3[0]=1;
array3[1]=2;
array3[2]=3;
console.log(array3.toString());
array3[5]=6;
console.log(array3.toString());
console.log(array3.length);
//array3 = ['a','b','c'];

//객체생성 ->중괄호
//1)리터럴 표현식 : 1회성 객체 생성시 사용
const person ={
  name:'홍길동',
  age:30,
  eat:function (){
    console.log('먹다');
  },
  smile:function(){
    console.log('웃다');
  }
};
console.log(person.name);
console.log(person.age);
person.eat();
person.smile();
//2)new Objent()로 객체생성
const person2 = new Object();
person2.name = '홍길순';
person2.age = 20;
person2.smile = function (){
  console.log('웃다');
}
person2.eat = function() {
  console.log('먹다')
}
console.log(person2);
person2.eat();
person2.smile();

//2) {} 빈객체생성
const person3 = {};   //->빈 객체생성
person3.name = '공지철';
person3.age = 42;
person3.smile = function(){
  console.log('웃다');
}
person3.eat = function(){
  console.log('먹다');
}
console.log(person3);

//4)생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.smile = function(){console.log('웃다');};
  this.eat = function(){console.log('먹다');};
}

const person10 = new Person('홍길서',40);
const person11 = new Person('홍길남',30);
const person12 = new Person('홍길북',28);

console.log(person10);
console.log(person11);
console.log(person12);

//5)class: 생성자함수의 syntax sugar(설탕문법)
class Person20 {
  //생성자
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  //메서드
  smile() {
    console.log('웃다');
  }
  eat (){
    console.group('먹다');
  }
}
const person30= new Person20('홍길동',10);
const person31= new Person20('홍길서',10);
const person32= new Person20('홍길남',10);
console.log(person30);
console.log(person31);
console.log(person32);







