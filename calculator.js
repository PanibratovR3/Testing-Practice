const calculator = {
  add(operandOne, operandTwo) {
    return operandOne + operandTwo;
  },
  subtract(operandOne, operandTwo) {
    return operandOne - operandTwo;
  },
  divide(operandOne, operandTwo) {
    if (operandTwo === 0) {
      return "Error! Division by zero!";
    }
    return operandOne / operandTwo;
  },
  multiply(operandOne, operandTwo) {
    return operandOne * operandTwo;
  },
};

export { calculator };
