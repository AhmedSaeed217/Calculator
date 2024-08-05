let displayArea =document.querySelector("#displayArea");

//Function to Display the Expression of Calculation on the Diplay Area
function display(num){
displayArea.value+=num;
let expression = displayArea.value;
console.log(expression)
}


//Function to Get The Result Of The Calculation
function getResult() {
    try{
        let expression = displayArea.value;
        let expressionArray = expression.split('');
    
        for (let i = 0; i < expressionArray.length; i++) {
          if (expressionArray[i] === '-' || expressionArray[i] === '/') {
            if (expressionArray[i + 1] === expressionArray[i]) {
              if (expressionArray[i] === '-') {
                expressionArray[i] = '';
                expressionArray[i + 1] = '+';
              } else {
                expressionArray.splice(i + 1, 1);
              }
            }
          }else if(expressionArray[i]==="+"){
            if (expressionArray[i + 1] === expressionArray[i]){
                expressionArray[i] = '';
                expressionArray[i + 1] = '+';
            }
          }
        }
      
        
        displayArea.value = eval(expressionArray.join(''));
    }
    catch (error){
        displayArea.value="Error"
    }
  }


//Function To Clear The Display Area  
function clearDisplayArea(){
    displayArea.value="";
}