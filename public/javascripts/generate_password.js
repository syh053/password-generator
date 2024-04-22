const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = lowercase.toUpperCase()
const numbers = "0123456789"
const symbols = "`!@#$%^&*()-_=+{}[]|:;'<>,.?/"


//產生隨機密碼函示
let randomPassword = conditions => {
    let passwords = ""
    for ( let i = 0; i < option.length; i++ ) {
        passwords += conditions[ Math.floor( Math.random() * conditions.length ) ]
    }
    return passwords
}

//定義條件
const option = {
    length : 16,
    lowercaseSwitch : true,
    uppercaseSwitch: true,
    numberSwitch: true,
    symbolSwitch: true,
    excludeCharacters: ""
}

let conditions = []  //建立空陣列

//符合條件的話就將 passwords 與其他資料用 concat() 指令合併
if ( option.lowercaseSwitch === true ) {
    conditions = conditions.concat(lowercase.split(""))
}

if (option.uppercaseSwitch === true) {
    conditions = conditions.concat(uppercase.split(""))
}

if (option.numberSwitch === true) {
    conditions = conditions.concat(numbers.split(""))
}

if (option.symbolSwitch === true) {
    conditions = conditions.concat(symbols.split(""))
}


module.exports = { randomPassword, conditions }
