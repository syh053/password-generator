//產生隨機密碼函示
let randomPassword = options => {

    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = lowercase.toUpperCase()
    const numbers = "0123456789"
    const symbols = "`!@#$%^&*()-_=+{}[]|:;'<>,.?/"

    let conditions = []  //建立空陣列

    //符合條件的話就將 passwords 與其他資料用 concat() 指令合併
    if (options.lowercase === '1') {
        conditions = conditions.concat(lowercase.split(""))
    }

    if (options.uppercase === '1') {
        conditions = conditions.concat(uppercase.split(""))
    }

    if (options.numbers === '1') {
        conditions = conditions.concat(numbers.split(""))
    }

    if (options.symbols === '1') {
        conditions = conditions.concat(symbols.split(""))
    }

    if (options.excludeCharacters) {
        conditions = conditions.filter(character => !options.excludeCharacters.includes(character))
    }

    if ( conditions.length === 0 ) {
        return "There is no valid character in your selection."
    }


    //開始篩選
    let passwords = ""
    for (let i = 0; i < options.length; i++) {
        passwords += conditions[Math.floor(Math.random() * conditions.length)]
    }
    return passwords


}


module.exports = { randomPassword }
