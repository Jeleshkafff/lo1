export function checkYearBegin(inputValue){
    const today = new Date()
    let check = true
    if (
    inputValue < "2000" ||
    inputValue > today.getFullYear()
    ) {
    alert("Год поступлеления выходит за диапозон(от 2000 до сегодня)");
    check = false
    return check;
    }
    return inputValue
}