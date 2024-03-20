



const display = document.getElementById('display');

function appendToDisplay(input){

    display.value+= input ;
}

function clearDisplay(){

    display.value = ' ' ;
}

function calculate(){
 try {

  display.value = eval(display.value);

 } catch (error) {

    display.value = 'ereur'
 }

}

function clearEntry() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
  }
  

  function toggleSign() {
    var display = document.getElementById('display');
    if (display.value !== '') {
      display.value = parseFloat(display.value) * -1;
    }
  }

  

  
  
  
  function calculate() {
    try {
        var expression = display.value.trim();
        
        // Check if the expression contains the '%' symbol
        if (expression.includes('%')) {
            // Split the expression by the '%' symbol
            var parts = expression.split('%');
            // Get the number before '%' and convert it to a float
            var number = parseFloat(parts[0]);
            // Calculate the percentage (number divided by 100)
            var result = number / 100;
            // Update the display with the result
            display.value = result;
        } else {
            // Evaluate the expression using JavaScript's eval() function
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

  