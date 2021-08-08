class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

   background("orange")

    //write code to show a heading for showing the result of Quiz

    getContestantInfo()


    //write condition to check if contestantInfor is not undefined

    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("Note: The contestant(s) who answered correctly are highlighted in GREEN.",130,230);
    }

    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("Red");
      
    }
    
  }

}
