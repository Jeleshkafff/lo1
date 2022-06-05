import { checkBirthday} from "./checkBirthday.js"
import { checkYearBegin} from "./checkYearBegin.js"
export function getValue(input){
    console.log(input.type)
    let inputValue = input.value.trim();
    if(!inputValue.length){
        alert(input.placeholder)
        return false
    }
    if (input.type == "date") {
        console.log("Проверка даты рождения")
        inputValue = checkBirthday(inputValue)
      }
      // проверка года поступления
    if (input.type == "number") {
        console.log("Проверка года поступления")
        inputValue = checkYearBegin(inputValue)
    }
    if(inputValue === false){
        return false
    }

    return inputValue
}