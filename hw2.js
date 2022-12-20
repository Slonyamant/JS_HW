// 1.
const citiesAndCountries = {
  Киев: "Украина",
  "Нью-Йорк": "США",
  Амстердам: "Нидерланды",
  Берлин: "Германия",
  Париж: "Франция",
  Лиссабон: "Португалия",
  Вена: "Австрия",
};

function getCounties() {
  const result = [];

  for (const property in citiesAndCountries) {
    result.push(`${property} це ${citiesAndCountries[property]}`);
  }

  return result;
}

console.log(getCounties());


//2. 
function getArray(amount) {
  const arr = [];
  let nestedArr = []

  for (let i = 1; i <= amount; i++) {
    if(i % 3 === 0){
      nestedArr.push(i)
      arr.push(nestedArr)
      nestedArr = []
    } else {
      nestedArr.push(i)
    }
  }
    
  return arr
}

console.log(getArray(12))

// 3.
const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "пятница",
    "суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "friday",
    "saturday",
    "Sunday",
  ],
};

function getNameOfDay(lang, day) {
  const calendar = namesOfDays[lang];
  return calendar[day - 1]
}

console.log(getNameOfDay("ru", 3));
console.log(getNameOfDay("en", 7));