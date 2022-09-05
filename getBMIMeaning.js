const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight * (height * height)
}
function getBMIMeaning(weight, height) {
  const bmi = calculateBMI(weight, height)
  if (BMI < 18.5){
    return 'Underweight'
  }
  else if (BMI <= 24.9 ){
    return 'Normal weight'
  }
  else{
    return 'Overweight'
  }
}
module.exports = getBMIMeaning
