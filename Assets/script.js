var startBtn = document.querySelector(".start-btn");
var firstquestionEl= document.querySelector(".first-question");
var timerEl= document.querySelector(".timer-sec");
var questionsEl= document.querySelector(".questionare");
var winEl= document.querySelector(".wins")
var questionBox= document.querySelector(".question-box");
var timerCount = 30;
var winCount= 0;
var timer= 0;
var isWin=false;
var secondquestionEl= document.querySelector(".second-question"); 
var thirdquestionEl= document.querySelector(".third-question");
var fourthquestionEl= document.querySelector(".fourth-question");
var questionArray=[firstquestionEl, secondquestionEl, thirdquestionEl, fourthquestionEl];
var index=0;
var answerEl=document.querySelectorAll(".answer");
var resetBtn= document.querySelector (".reset-button");
var messageEl= document.querySelector("#message");
var initialsEl= document.querySelector(".initials");
var fillEl=document.querySelector("#fill");
var saveEl= document.querySelector("#save");
var dashboardEl= document.querySelector(".dashboard");
var orderlistEL= document.querySelector("#order-list");


// WHEN I click the start button 
// THEN a timer starts and I am presented with a question
startBtn.addEventListener("click", startGame);
function startGame() {
   isWin= true;
   displayQuestion()
  startTimer()
}

//When I select START while the game is going it adds on in a negative. 


function winGame() {
 winEl.textContent = "You Did It!Great!!";
  winCount++
  startBtn.disabled = false;
};

// The loseGame function is called when timer reaches 0
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function loseGame() {
  wordBlank.textContent = "Game Over";
  loseCounter++
  startButton.disabled = false;
  setLosses()
};

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over

function startTimer() {
  
  timer =setInterval (function() {
    timerCount--;
    console.log(timerCount);
    questionBox.classList.remove("hide")
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      
      if (timerCount > 0) {
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
     
    }
  }, 1000);
}
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
function displayQuestion(){
questionArray[index].classList.remove("hide")
}

firstquestionEl.addEventListener("click", nextQuestion)
secondquestionEl.addEventListener("click", nextQuestion)
thirdquestionEl.addEventListener("click", nextQuestion)
fourthquestionEl.addEventListener("click", nextQuestion)


function nextQuestion(event){
  index++
  if (index<questionArray.length){

      var answer=event.target.getAttribute("data-answer")
 
       messageEl.textContent=answer
       setTimeout(function(){
         messageEl.textContent=""
        var previousindex= index-1
        console.log(index, questionArray.length)
       questionArray[previousindex].classList.add("hide")
        displayQuestion()
       },500)
   
  }else{
    var previousindex= index-1
    questionArray[previousindex].classList.add("hide")
    initialsEl.classList.remove("hide")
    clearInterval(timer);
  }

}
// // THEN I can save my initials and my score
var initials=[]

function saveMe(){
    var user={
      initials:fillEl.value,
      score: timerCount
    }
    initials.push(user)

    localStorage.setItem("highscores", JSON.stringify(initials))
    initialsEl.classList.add("hide")
    dashboardEl.classList.remove("hide")
    showscores()
}
saveEl.addEventListener("click",saveMe)


function showscores(){
  if (localStorage.getItem("highscores")){
    initials=JSON.parse(localStorage.getItem("highscores"))
    for (i=0; i<initials.length; i++){
      var li=document.createElement("li")
      li.textContent= initials[i].initials+" "+initials[i].score
      dashboardEl.appendChild(li)
    }
  }
}



resetBtn.addEventListener("click", resetGame);
function resetGame() {
   location.reload();
}

 
  




