export function rusDate(date) {
    let date2 = date.split("-");
    if (date2[0].length == 4) {
      console.log("Это год");
    }
    if (date2[0].length == 4) {
      [date2[0], date2[date2.length - 1]] = [date2[date2.length - 1], date2[0]];
    }
    return date2;
  }