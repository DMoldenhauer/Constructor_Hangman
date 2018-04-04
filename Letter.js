// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function(underlyingCharacter, correct){
    // A string value to store the underlying character for the letter
    this.underlyingCharacter = null;
    // A boolean value that stores whether that letter has been guessed yet
    this.correct = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.guessResponse = function(){
        if (guess == this.underlyingCharacter) {
            return this.underlyingCharacter;
            //Testing
            console.log (this.underlyingCharacter); 
        }
        else {
            return "_";
            //Testing
            console.log ("_");
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.updateGuess = function(character){
        if (character == this.underlyingCharacter) {
            this.correct = true;
            //Testing
            console.log (this.correct);
        }
    }



};





