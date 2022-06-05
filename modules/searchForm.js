export function createSearchForm(){
    const form = document.createElement("form");
    form.classList.add("formSearch")

    const inputFio = document.createElement("input")
    const inputFaculty = document.createElement("input")
    const inputYearBegin = document.createElement("input")
    const inputYearEnd = document.createElement("input")

    inputFio.classList.add("fio")
    inputFaculty.classList.add("faculty")
    inputYearBegin.classList.add("yearBeginyearBegin1")
    inputYearEnd.classList.add("yearBeginyearEnd")

    inputFio.placeholder = "Поиск по фамилии"
    inputFaculty.placeholder = "Поиск по факультету"
    inputYearBegin.placeholder = "Поиск по году начала обучения"
    inputYearEnd.placeholder = "Поиск по году окончания обучения"

    form.append(inputFio,inputFaculty,inputYearBegin,inputYearEnd)
    return {form,
        inputFio,
        inputFaculty,
        inputYearBegin,
        inputYearEnd

    }
}