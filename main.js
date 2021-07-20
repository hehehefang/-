const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); //防止表单提交
    if (eInput.value == "") {
        eField.classList.add("shake", "error")
    }
    if (pInput.value == "") {
        pField.classList.add("shake", "error")
    }
    setTimeout(() => {
        eField.classList.remove("shake")
        pField.classList.remove("shake")
    }, 500);
}

eInput.onkeyup = () => {

    if (eInput.value == "") {
        eField.classList.add("error")
    } else {
        eField.classList.remove("error")
    }
    let errorText = eField.querySelector(".error-text")
        (eInput.value != "") ? errorText.innerText = "输出一个正确的邮箱" : errorText.innerText = "Email can't be blank"
}

pInput.onkeyup = () => {
    if (pInput.value == "") {
        pField.classList.add("error")
    } else {
        pField.classList.remove("error")
    }
}