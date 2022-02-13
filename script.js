const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
  const gender = document.getElementById("gender").value
  const drink = document.getElementById("drink").value
  const age = document.getElementById("age").value

  const response = []
  if (age >= 1 && age <= 5) {
    response.push("Milk")
  }

  if (age >= 6 && age <= 10 && gender === "female") {
    response.push("Strawberry Drink")
  }

  if (age >= 6 && age <= 10 && gender === "male") {
    response.push("Chocolate Drink")
  }

  if (age >= 6 && age <= 15) {
    response.push("Ice Cream or Yogurt")
  }

  if (age >= 10 && age <= 18 && gender === "male") {
    response.push("Fruit juice and Lime")
  }
  if (age >= 10 && age <= 18 && gender === "female") {
    response.push(`(Fruit Juice and Strawberry ) or plain fruit juice`)
  }

  if (age >= 18 && age <= 25 && gender === "male") {
    response.push("Vodka or Whiskey")
  }

  if (age >= 18 && age <= 25 && gender === "female") {
    response.push("Tequila")
  }

  if (age >= 26 && age <= 40 && gender === "male") {
    response.push("Beer")
  }

  if (age >= 26 && age <= 60 && gender === "female") {
    response.push("White wine or Red wine")
  }

  if (age >= 30 && age <= 60 && gender === "male") {
    response.push("White wine or Red wine")
  }

  if (age >= 61) {
    response.push("Non Alcholic Beverage")
  }

  //compares the drink ordered with the drink available per age group
  if (response.includes(drink)) {
    alert(`You have successfully ordered for ${drink}`)
  } else {
    alert("Please select a drink for your gender and age group.")
  }
})
