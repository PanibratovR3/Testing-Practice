function analyzeArray(array) {
  const average =
    array.reduce((sum, current) => sum + current, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, min, max, length };
}

// console.log(analyzeArray([]));
export { analyzeArray };
