'use strict';
//도서5권의 제목,저서, 가격

const bookArray = new Array(5);


//book 객체정의
// function Book(title, author, price){
// this.title = title;
// this.author = author;
// this.price = price
// }

//book class정의
class Book{
  constructor(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
  };
}
// get title(){
//   return this.title;
// }
// get author(){
//   return this.author;
// }
// get price(){
//   return this.price
// }

//도서가격이 가장 비싼 도서 반환
function max(arrays){
  let max = arrays[0];
  for(let i=0; i<array.length;i++) {
    if(maxBook.price <array[i].price){
      maxBook = arrays[i];
    }
  }
  return maxBook;
}
//도서정보등록
for(let i=0; i<bookArray.length; i++){
  const bookStr = prompt('도서정보를 입력하세요(제목, 저서, 가격)',"제목, 저서, 가격");
  const tokens = bookStr.split(",");
  bookArray[i] = new Book(tokens[0],tokens[1],tokens[2]);
  // const book = new Object();
  // const book = {};
  // book.title = token[0];
  // book.author = token[1];
  // book.price = token[2];
  // bookArray[i] = book;
  }

console.log(max(bookArray));