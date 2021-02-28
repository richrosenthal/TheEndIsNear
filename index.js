
document.addEventListener("DOMContentLoaded", () => {
  console.log("THE JS LOADED")
  createRetirementForm();


})


//create the retirement
function createRetirementForm(){
   let retirementForm = document.getElementById("retirement-form")

   retirementForm.innerHTML +=

   `
   <h1> How many Schmeckels do you need to retire Morty?!</h1>
   <form>
   Current Age: <input type="text" id="currentAge">
   Current Savings: <input type="text" id="currentSavings">
   Retirement Age: <input type="text" id="retirementAge">
   Monthly Contribution: <input type="text" id="monthlyContributions">
   <input type="submit" value="Calculate Morty">
   </form>

   `
   retirementForm.addEventListener("submit", retirementFormSubmission)

}

function retirementFormSubmission(){
   event.preventDefault();
   let currentAge = document.getElementById("currentAge").value
   let currentSavings = document.getElementById("currentSavings").value
   let retirementAge = document.getElementById("retirementAge").value
   let monthlyContributions = document.getElementById("monthlyContributions").value

   console.log("I'm here in the form submission function")
   console.log(currentAge)
   console.log(retirementAge + 1)

   let retirementObject = {
     currentAge: currentAge,
     currentSavings: currentSavings,
     retirementAge: retirementAge,
     monthlyContributions: monthlyContributions,
   }

   let time = parseFloat(retirementAge) - parseFloat(currentAge)
   let interestRate = 0.69 //nice
   let numberOfTimes = 1
   let principle = parseFloat(currentSavings)

   //Formula is A = P(1+r/n)^nt
   let finalAmount = principle * ((1 + (interestRate/numberOfTimes))**(numberOfTimes * time))
   console.log(finalAmount)

  let finalResults = document.getElementById("results-container")

   finalResults.innerHTML +=

   `
    <h1>HERE'S THE RESULTS MORTY! </h1>
    <p>You saved ${parseInt((finalAmount/148))} Schmekels Morty!</p>
    <br>
    <p>That's like $${parseInt(finalAmount)} Morty!! WOW MORTY!</p>
   `

}
