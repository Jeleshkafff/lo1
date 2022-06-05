export function createForm() {
    const myForm = document.createElement("form");
    myForm.classList.add("myForm");
    const title = document.createElement('h1')
    title.textContent = "Добавить нового студента"
    title.classList.add("title")
    myForm.append(title)
    
    // Создание инпутов
    const inputSurname = document.createElement("input");
    const inputName = document.createElement("input");
    const inputPatronymic = document.createElement("input");
    const inputBirthday = document.createElement("input");
    const inputYearBegin = document.createElement("input");
    const inputFaculty = document.createElement("input");

    inputBirthday.type = "Date"
    inputYearBegin.type = "Number"

    inputSurname.placeholder = "Введите фамилию";
    inputName.placeholder = "Введите имя";
    inputPatronymic.placeholder = "Введите отчество";
    inputBirthday.placeholder = "Введите год рождения"
    inputYearBegin.placeholder = "Введите год поступления";
    inputFaculty.placeholder = "Введите факультет";

    myForm.append(inputSurname,inputName, inputPatronymic, inputBirthday, inputYearBegin, inputFaculty);
  
    // Кнопка отправить
    const butSubmitForm = document.createElement("button");
    butSubmitForm.classList.add("butSubmitForm");
    butSubmitForm.textContent = "Отправить форму";
    myForm.append(butSubmitForm);
    return {
      myForm,
      inputSurname,
      inputName,
      inputPatronymic,
      inputBirthday,
      inputYearBegin,
      inputFaculty,
      butSubmitForm
    }

  }