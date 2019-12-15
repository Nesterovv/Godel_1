do{
let name=prompt ('Введите ваше Имя');
var nam= parseInt(name);
}
while (isNaN(nam));
let surname= prompt ("Введите вашу Фамилию");
let dadname= prompt ('Введите ваше Отчество');


do {
    let birth = prompt('Введите Ваш Возраст в Годах');
    var age = parseInt(birth);
} 
while ( isNaN(age) );

 let gender= confirm ("Ваш Пол мужской?");
 let gen;
 let pensia;

 if (gender) {
    gen="мужской";
    }
 else{
  gen="женский";
 }

 if (age>59 && gender){
     pensia="да";
 }
  else if (age>65 && !gender){
      pensia="да";
  }
  else if (age<=59 && gender){
      pensia= "нет";
  }
  else if (age<=65 && !gender){
      pensia="нет";
  }

alert (`Ваше ФИО: ${ surname + ' ' + name + ' ' + dadname}\nВаш Возраст в Годах: ${age}\nВаш Возраст в Днях: ${age * 365}\nЧерез 5 лет вам будет: ${(parseInt (age)) + 5}\nПол: ${gen}\nПенсия: ${pensia}`);

