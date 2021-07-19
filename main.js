//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function random (a){
    let randomNum = Math.round(Math.random(a)*100)
    console.log(randomNum)
}
random();
//- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function randomTwo (a,b){
    return Math.round(Math.random()*(b - a) + a)
}
console.log(randomTwo(40,70,))


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortNum = [20,10,2,3,4,6,89,12,9]

sortNum.sort(function (a,b){
    return a - b
})
console.log(sortNum)




//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let filtNum = [20,10,2,3,4,6,89,12,9]
let filtNumWrap = filtNum.filter(function (value){
    return value % 2 == 0
})
console.log(filtNumWrap)
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let striTr = []
striTr.push(randomTwo(40,70,),randomTwo(10,70,),randomTwo(65,70))

let striTrWrap = striTr.map(function (value){
    return  value + ''
})
console.log(striTrWrap)
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class User{
    constructor(id,name,surname,email,phone) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
}
let user = new User(6,'vasya','pupkin','pupkinvasya@gmail.com','380988781243');
let user2 = new User(5,'ivan','pupkin','pupkinvasya@gmail.com','380988781243');
let user3 = new User(4,'yura','pupkin','pupkinvasya@gmail.com','380988781243');
let user4 = new User(3,'ihor','pupkin','pupkinvasya@gmail.com','380988781243');
let user5 = new User(1,'jenia','pupkin','pupkinvasya@gmail.com','380988781243');
let user6 = new User(2,'homer','pupkin','pupkinvasya@gmail.com','380988781243');
let user7 = new User(7,'homer','pupkin','pupkinvasya@gmail.com','380988781243');
let user8 = new User(9,'homer','pupkin','pupkinvasya@gmail.com','380988781243');
let user9 = new User(8,'homer','pupkin','pupkinvasya@gmail.com','380988781243');
let user10 = new User(10,'homer','pupkin','pupkinvasya@gmail.com','380988781243');


console.log(user)
//створити пустий масив, наповнити його 10 об'єктами new User(....)
let userArr = []
userArr.push(user,user2,user3,user4,user5,user6,user7,user8,user9,user10)
console.log(userArr)
//Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let userArrWrap = userArr.filter(function (value3){
    return value3.id % 2 == 0
}).sort(function (value,value2){
    return value.id - value2.id
})
console.log(userArrWrap)