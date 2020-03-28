var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

  var wrongWords = [];

  var rightwords = ["___","___","___","___"];

  var userInputKey;

  var randomWord = Math.floor(Math.random() * words.length);;

  //Chooses random word from array
  var currentWord = words[randWord];

  //splits words so the length would be equal to 3 instead of 1
  var wordSplit = currentWord.split("");
  var wrongCount = 7;

  //Display the _ _ _ _ in the html which is also the rightWords array
  document.getElementById('rightGuess').textContent = rightWords;

  document.onkeyup = function()
    {
      console.log("wrong count= " + wrongCount);
      userInputKey = event.key;
      document.getElementById("lives").textContent = wrongCount;

        console.log(wrongCount);
        while(wrongCount > 0 && rightWords !== wordSplit)

        {
                if(currentWord.indexOf(userInputKey) > -1)

                {
                    if(userInputKey === currentWord.chartAt(0)){
                        rightWords.fill(userInputKey,0,1);
                        console.log("Right Words  "+ rightWords);

                        d0cument.getElementById("rightGuess").textContent = rightWords;
                    }
                    else if(userInputKey === currentWord.charAt(1)){

                        rightWords.fill(userInputKey, 1,2);
                        console.log("Right Words  " + rightwords);
                        document.getElementById("rightGuess").textContent = rightWords;
                    }
                    else if(userInputKey === currentWord.chartAt(2)){

                        rightWords.fill(userInputKey, 2,3);
                        console.log("Right Words  " 
                            + rightWords);
                            document.getElementById("rightGuess").textContent = rightWords;
                    }
                    else if(userInputKey === currentWord.charAt(3)){
                        rightWords.fill(userInputKey,3,4);
                        console.log("Right Words  " + rightWords);

                        document.getElementById("rightGuess").textContent = rightWords;
                    }
                }
                else{
                    wrongWords.push(userInputKey);
                    console.log("Wrong Words  " + wrongWords);
                    document.getElementById("wrongGuess").textContent = wrongWords;
                    wrongCount--;
                    document.getElementById('lives').textContent = wrongCount;
                }
                console.log("Wrong Count is =" + WrongCount)
                //console.log("wrongCount = " + wrongCount);
                //console.log("rightWords = " + rightWords);
                //console.log("wordSplit = " + wordSplit);

        }      // while(wrongCount > 0 && rightWords == wordSplit);

                if(wrongCount === 0){
                    console.log("Lose");
                    document,getElementById("lose").textContent = "Loser !!!";
                }
                else if(rightWords.join() === wordSplit.join()){
                    console.log("Win");
                    wrongContent = 7;
                    rightWords = ["___","___","___","___"];
                    document.getElementById("lives").textContent = wrongCount;
                    document.getElementById("rightGuess").textContent = rightWords;
                    document.getElementById("win").textContent = "WINNER !!!!";
                }
    }



