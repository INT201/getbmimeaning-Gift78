const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight / (height * height)
}
function getBMIMeaning(weight, height) {
  const bmi = calculateBMI(weight, height)
  if (bmi < 18.5){
    return 'Underweight'
  }else if (bmi <= 24.9 ){
    return 'Normal weight'
  }else if(bmi > 25.0){
    return 'Overweight'
  }
}
module.exports = getBMIMeaning

