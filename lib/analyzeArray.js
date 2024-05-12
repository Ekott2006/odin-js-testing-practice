export default function analyzeArray(array) {
    return {
      length: array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      average: array.reduce((x, y) => x + y) / array.length,
    };
  }