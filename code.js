function calculate() {
  // Get input values
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Get selected operation
  const operation = document.querySelector('input[name="operation"]:checked').value;

  let result;

  // Basic validation
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform operation
  if (operation === "add") {
    result = num1 + num2;
  } 
  else if (operation === "subtract") {
    result = num1 - num2;
  } 
  else if (operation === "multiply") {
    result = num1 * num2;
  } 
  else if (operation === "divide") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  }

  // Output result
  document.getElementById("outputBox").innerText = "Result: " + result;
}
