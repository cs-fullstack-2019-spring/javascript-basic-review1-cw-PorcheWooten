//Exercise 5
// Write a JavaScript program that does the following:
// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS months

var loanAmt = parseInt(prompt("Enter outstanding loan amount"));
var numMnths =  parseInt(prompt("How many months to pay off loan?"));
{
    console.log("To pay off a loan of" + " " + loanAmt + " " + "it will take" + " " + numMnths + " " + "months.")
}