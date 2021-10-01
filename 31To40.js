 
/*31.  Find the Length of a String:
Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.
*/
var lastName="Pontapalli"
var lastNameLength=lastName.length
console.log(lastNameLength)

//32. Understand String Immutability:
var myStr="This is string"
var myStr="Hello World"
console.log(myStr)

//33. Use Bracket Notation to Find the Nth Character in a String:
var thirdLetterOfLastName =lastName[2]
console.log(thirdLetterOfLastName)

//34. Use Bracket Notation to Find the Last Character in a String:
var lastCharacterInTheLastName= lastName[lastName.length-1]
console.log(lastCharacterInTheLastName)

//35. Use Bracket Notation to Find the Nth-to-Last Character in a String:
//Use bracket notation to find the second-to-last character in the lastName string.
var secondToLastCharacter=lastName[lastName.length-2]
console.log(secondToLastCharacter)

//36. Word Blanks:
var sentence = "It was really " + "awesome!" + ", and we " + "enjoyed" + " ourselves " + "Luckyly" + ".";
console.log(sentence)

//37. Store Multiple Values in one Variable using JavaScript Arrays:
var myArray =["Rasika","Sonavane",783,"India"]

//38. Nest one Array within Another Array:
var myArray=[["Rasika", "Sonavane"],[1234567890]]
console.log(myArray)

//39. Access Array Data with Indexes:
var myData = [3,7,"Rasika",90,4,10]
var firstvaludeofMyData=myData[1]
console.log(firstvaludeofMyData)

//40. Modify Array Data With Indexes:
myData[0]=45
console.log(myData)
