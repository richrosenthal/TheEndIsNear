
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

  

  let finalResults = document.getElementById("results-container")

   finalResults.innerHTML +=

   `
    <h1>HERE'S THE RESULTS MORTY! </h1>
   `

}

// function equipmentFormSubmission(){
//   event.preventDefault();
//   let name = document.getElementById("name").value
//   let description = document.getElementById("description").value
//   let location = document.getElementById("location").value
//   let department = document.getElementById("department").value
//   let task_description = document.getElementById("task_description").value
//
//   let equipment = {
//     name: name,
//     description: description,
//     location: location,
//     department: department,
//
//   }
//
//   fetch(`${BASE_URL}/equipment`, {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(equipment)
//   })
//   .then(resp =>  resp.json())
//   .then (equipment => {
//     let e = new Equipment(equipment.id, equipment.name,
//       equipment.description, equipment.location, equipment.department)
//     e.renderEquipment();
//   })
// }
