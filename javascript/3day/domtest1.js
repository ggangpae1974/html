'user strict'
const $edu = document.getElementById('edu');
const $btn = document.getElementsByClassName("btn")[0];

$btn.addEventListener("click", function() {
  console.log('버튼 클릭됨!!')
  $edu.style.backgroundColor = "green";
  $edu.style.color = "white";
  $edu.style.fontSize = "2em";
});

$btn2.addEventListener ("click",function(){
  document.getElementById('contents').value;
});

// console.log($edu.parentElement);
// console.log($edu.nextElementSibling);
// console.log($edu.previousElementSibling);

// console.log($edu.parentElement.parentElement);

// console.log(doucument.getElementsByTagName('body')[0].chileren);

// const childrenOfbody = document.gerElementsByTagName('body')[0].chileren;

// for(let i=0; i<childrenOfbody.length;i++) {

// }



