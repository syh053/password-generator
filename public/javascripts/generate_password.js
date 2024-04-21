const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = lowercase.toUpperCase()
const numbers = "0123456789"
const symbols = "`!@#$%^&*()-_=+{}[]|:;'<>,.?/"


//定義條件
const option = {
    length : 5,
    lowercaseSwitch : true,
    uppercaseSwitch: true,
    numberSwitch: true,
    symbolSwitch: true,
    excludeCharacters: ""
}

let passwords = []  //建立空陣列

//符合條件的話就將 passwords 與其他資料用 concat() 指令合併
if ( option.lowercaseSwitch === true ) {
    passwords = passwords.concat(lowercase.split(""))
}

if (option.uppercaseSwitch === true) {
    passwords = passwords.concat(uppercase.split(""))
}

if (option.numberSwitch === true) {
    passwords = passwords.concat(numbers.split(""))
}

if (option.symbolSwitch === true) {
    passwords = passwords.concat(symbols.split(""))
}


console.log(passwords)