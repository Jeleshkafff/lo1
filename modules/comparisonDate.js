import { rusDate } from "./rusDate.js";
export function comparisonDate(date1, date2) {
    date1 = rusDate(date1); // значение инпута
    date2 = rusDate(date2); // определенная стандартная дата
    let now = new Date()
    console.log(date1, date2);
    let check = false;
  
    for (let i = date1.length - 1; i > 0; i--) {
      console.log(date1[i], date2[i]);
      if (date1[i] < date2[i] || date1[i] > now.getFullYear()) {
        check = true;
        return check;
      }
    }
    return check
  }