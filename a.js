const buttons = document.querySelectorAll(".button");
const inputField = document.getElementById("input");
let result = 0;
let operator = "";

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        handleButtonClick(button.innerHTML);
    })
});

const handleButtonClick = (value)=>{
    

    if(value === "AC"){
        inputField.value = "";//clears the input field
        result = 0;
    }
    else if(value === "\u21D0"){
        inputField.value = inputField.value.slice(0,-1);//backspace
        if(inputField.value === ""){
            result = 0;
        }
    }
    else if (["+", "\u2212", "\u00D7", "\u00F7", "%"].includes(value)) {
        operator = value; // Set the operator
        inputField.value += value; // Append the operator to the input field
    }
    else if(value === "="){

        calculateResult(operator);
        // inputField.value = result;
    }
    else{
        inputField.value += value;//appends the values
    }
}

const calculateResult = (operator)=>{
    if(operator === "+"){
        performAddition();
    }
    else if(operator === "\u2212"){
        performSubstraction(); //&minus
    }
    else if(operator === "\u00D7"){
        performMultiplication(); //&times
    }
    else if(operator === "\u00F7"){
        performDivision(); // &divide
    }
    else if(operator === "%"){
        performPercentage();
    }

    inputField.value = result;
}

const performAddition = ()=>{
    result =0;
    const input = inputField.value;
    
    const numbers = input.split("+");

    for(i = 0;i<numbers.length;i++){
        result += parseFloat(numbers[i]);
    }
    return result;
}

const performSubstraction = ()=>{
    result =0;
    const input = inputField.value;
    const numbers = input.split("\u2212");
    result = parseFloat(numbers[0]);
    for(i=1;i<numbers.length;i++){
        result -= parseFloat(numbers[i]);
    }
    return result;
}


const performMultiplication = ()=>{
    result = 1;
    const input = inputField.value;
    
    const numbers = input.split("\u00D7");

    for(i = 0;i<numbers.length;i++){
        result *= parseFloat(numbers[i]);
    }
    return result;
}


const performDivision = ()=>{
    result = 1;
    const input = inputField.value;
    
    const numbers = input.split("\u00F7");
    result = parseFloat(numbers[0]);
    for(i = 1;i<numbers.length;i++){
        result /= parseFloat(numbers[i]);
    }
    return result;
    
}

const performPercentage = ()=>{
    result = 1;
    const input = inputField.value;

    const numbers = input.split("%"); 
    result = (parseFloat(numbers[0])/100)*(parseFloat(numbers[1]));
    return result;
}
