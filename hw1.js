// homework 1
//1. 
function FizBuz() {
  for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
      console.log('FizBuz')
    } else if(i % 2 === 0) {
      console.log("Fiz");
    } else {
      console.log('Buz')
    }
  }
}

FizBuz()

// 2. 
function factorial(n) { 
  if (n != 1){ 
    return n * factorial(n - 1)}  
  else{ 
    return 1; 
  } 
}

console.log('factorial', factorial(7))

// 3. 
function calculatePapers() {
  const sheetsInReamPaper = 500;
  const consumptionPerWeek = 1200;
  const weeksAmount = 8;

  const amountOfPackForOneWeek = consumptionPerWeek / sheetsInReamPaper;
  return weeksAmount * amountOfPackForOneWeek;
}

console.log('resalt', calculatePapers())
