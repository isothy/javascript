const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult 
  }
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialNumber, enteredNumber);
  writeToLog('ADD', initialNumber, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialNumber, enteredNumber);
  writeToLog('SUBTRACT', initialNumber, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialNumber, enteredNumber);
  writeToLog('MULTIPLY', initialNumber, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialNumber, enteredNumber);
  writeToLog('DIVIDE', initialNumber, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

