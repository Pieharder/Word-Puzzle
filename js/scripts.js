$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    var words = $("input#wordInput").val();
    var letters = words.split("");
    var replacedLetters = [];
    console.log(words);
    for (var index = 0; index < letters.length; index += 1) {
      if(letters[index] === "a" || letters[index] === "e" || letters[index] === "i" || letters[index] === "o" || letters[index] === "u") {
        letters.splice(index, 1, "-");
      console.log(letters);
      };
    };
    letters.forEach(function(letter) {
      replacedLetters.push(letter);
    })
    var result = replacedLetters.join("");
    console.log(result);
    $(".final").text(result);
  });
});
