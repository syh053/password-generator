const form = document.querySelector("form")
const passwordLength = document.querySelector(".password-Length")
const passwordPrinter = document.querySelector(".showPasswords")
const submitButton = document.querySelector(".btn-success")
const checkboxes = document.querySelectorAll(".form-check-input")


//檢測目前勾選欄位數量
const countCheckedCheckboxes = () => {
    let count = 0;
    checkboxes.forEach( checkbox => {
        if (checkbox.checked) {
            count++;
        }
    });
    return count;
} 


//建立勾選記數器參數
let checkboxesCounter = countCheckedCheckboxes()


//按鈕監聽器
submitButton.addEventListener("click", () => {
    if ( !checkboxesCounter > 0 ) {
        alert("至少選擇一種元素")
    }
    
} )

//表單監聽器
form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        form.classList.add("was-validated")
        event.preventDefault()
        event.stopPropagation()
        

        alert("有欄位尚未輸入或欄位輸入錯誤!")
        console.log(passwordNumber)
    }
} )


//檢測勾選數量
checkboxes.forEach( checkbox => {
    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            checkboxesCounter ++
            console.log(checkboxesCounter)
        } else {
            checkboxesCounter --
            console.log(checkboxesCounter)
        }
    })
} )