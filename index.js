  // 1 display number in text box

  function displayNumber(num){
    display.value+=num
}

// 2 clearing text box

function clearDisplay(){
    display.value=''
}

// 3 evaluating expression

function evaluateExp(){

    //    method 1

    // exp=display.value
    // output = eval(exp)
    // display.value=output

    // method 2

    display.value=eval(display.value)
}

// 4 removing last element from the display box

function deleteLast(){
    display.value=display.value.slice(0,-1);
}