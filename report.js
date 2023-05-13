let correct = JSON.parse(localStorage.getItem("correct"));

let wrog = JSON.parse(localStorage.getItem("wrong"));

let score = localStorage.getItem("score");

let div = document.querySelector(".right");
let div2 = document.querySelector(".left");

console.log(correct);
let scoreContainer = document.querySelector(".score");
scoreContainer.innerHTML += score + " / 10";

correct.forEach((element) => {
  const answer = `
   <div class='ol'>
   <h3>${element.question}</h3>
    <ol type="A">
      <li> ${element.optionA}</li>
      <li> ${element.optionB}</li>
      <li> ${element.optionC}</li>
      <li> ${element.optionD}</li>
    </ol>
    <div>
      correct option : ${element.correctOption}
    </div>
  </div>
  `;
  div.innerHTML += answer;
});

wrog.forEach((element) => {
  const answer = `
    <div class='ol'>
    <h3>${element.question}</h3>
     <ol type="A">
       <li> ${element.optionA}</li>
       <li> ${element.optionB}</li>
       <li> ${element.optionC}</li>
       <li> ${element.optionD}</li>
     </ol>
     <div>
       correct option : ${element.correctOption}
     </div>
   </div>
    
   `;
  div2.innerHTML += answer;
});
