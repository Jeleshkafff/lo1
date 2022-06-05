import { comparisonDate } from "./comparisonDate.js";
export function checkBirthday(inputValue){
    let check = true
    if (comparisonDate(inputValue, "01-01-1900")) {
        alert(`Дата рождения выходит за диапозон(01.01.1900-сегодня})`);
        check = false
        return check;
    }
    return inputValue
}
