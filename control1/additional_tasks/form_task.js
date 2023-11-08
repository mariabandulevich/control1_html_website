function verify() {
    console.log("s, r, k")
    let s = parseInt(elementA.value);
    let r = parseInt(elementB.value);
    let k = parseInt(elementC.value);
    console.log(s, r, k)

    let sideLength = Math.sqrt(s);
    if (sideLength - k >= 2*r) {
        result = "Можно"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = "Нельзя"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }


}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("s");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("r");
elementB.addEventListener('keyup', verify);

const elementC = document.getElementById("k");
elementC.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)