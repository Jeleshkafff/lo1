export class Student{
    constructor(surname, name, patronymic, birthday, yearBegin, faculty){
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.birthday = birthday
        this.yearBegin = yearBegin
        this.faculty =  faculty
    }

    get fio(){
        return this.surname + " " + this.name + " " + this.patronymic 
    }

    getBirthdayData(){
        const yyyy = this.birthday.getFullYear()
        let mm = this.birthday.getMonth()
        let dd = this.birthday.getDate()
        if(dd<10){dd = "0" + dd}
        if(mm<10){mm = "0" + mm}
        return dd + "." + mm + "." + yyyy
    }

    getAge(){
        const today = new Date()
        let age = today.getFullYear() - this.birthday.getFullYear()
        let m = today.getMonth() - this.birthday.getMonth()
        if(m<0 || (m > 0 && today.getDay() - this.birthday.getDay())){
            age--
        }
        if (String(age).substr(-1) == 1) {return age + "год";} 
          else if (String(age).substr(-1) > 1 && String(age).substr(-1) < 5) {return age + "года";}
          else {return age + "лет";}

    }



    getСourse(){
        const today = new Date()
        const period = this.yearBegin + '-' + (Number(this.yearBegin) + 4)
        const course =  today.getFullYear() - this.yearBegin
        if(course >4){return period + "(" + "Закончил" + ")"}
        return period + "(" +course + 'курс'+ ")"

    }

}