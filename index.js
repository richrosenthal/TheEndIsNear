
document.addEventListener("DOMContentLoaded", () => {
  console.log("THE JS LOADED")
  createRetirementForm();


})


//create the retirement
function createRetirementForm(){
   let retirementForm = document.getElementById("retirement-form")

   retirementForm.innerHTML +=

   `
   <h1> How many Schmekels do you want to save? </h1>
   <form>
   Current Age: <input type="text" id="currentAge">
   Current Savings: <input type="text" id="currentSavings">
   Retirement Age: <input type="text" id="retirementAge">
   Monthly Contribution: <input type="text" id="monthlyContributions">
   </form>

   `
   // requirementForm.addEventListener("submit", retirementFormSubmission)


}
