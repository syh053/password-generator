const form = document.querySelector("form")
const passwordLength = document.querySelector(".password-Length")
const passwordPrinter = document.querySelector(".showPasswords")
const submitButton = document.querySelector(".btn-success")


submitButton.addEventListener("click", () => {
    form.classList.add("was-validated")
} )


form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()

        alert("有欄位尚未輸入或欄位輸入錯誤!")
        console.log(passwordNumber)
    } else {
        passwordPrinter.classList.add("creat-password")
    }
} )