class User {
    constructor(name, age, profession) {
        this._name = name;
        this._age = age;
        this._profession = profession;
    }
    get name() {
        return this._name;
    }
    get age(){
        return this._age;

    }
    get profession(){
        return this._profession;
    }
    set name(Newname){
        this._name = Newname;

    }
    set age(Newage){
        if(Newage > 0){
            this._age = Newage;
        }
    }
    set profession(Newprofession){
        this._profession = Newprofession;
    }
    DisplayInfo(){
        console.log(`Користувач:${this._name}, Вік:${this._age}, Професія:${this._profession}`);
    
    }

}
class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession);
        this._role = role;
    }
    get role() {
        return this._role;
    }
    set role(Newrole) {
        this._role = Newrole;
    }
    DisplayInfo() {
        console.log(`Адмін:${this._name}, Вік:${this._age}, Професія:${this._profession}, Роль:${this._role}`);
    }
    
}

let name = prompt("Введіть ім'я користувача:");
let age = prompt("Введіть вік користувача:");
let profession = prompt("Введіть професію користувача:");
let role = prompt("Введіть роль адміністратора:");

age = Number(age);

if (isNaN(age) || age <= 0) {
    alert("Помилка: Вік повинен бути додатнім числом.");

}else{
    const admin1 = new Admin(name, age, profession, role);
    admin1.DisplayInfo();
    const output = document.getElementById("output");
    output.textContent = `Адмін:${admin1.name}, Вік:${admin1.age}, Професія:${admin1.profession}, Роль:${admin1.role}`;
    alert(`Адмін:${admin1.name}, Вік:${admin1.age}, Професія:${admin1.profession}, Роль:${admin1.role}`); 
}