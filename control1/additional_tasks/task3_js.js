function verify() {
    console.log("s, r, k")
    let s = parseInt(elementA.innerText);
    let r = parseInt(elementB.innerText);
    let k = parseInt(elementC.innerText);
    console.log(s, r, k)

    let sideLength = Math.sqrt(s);
    if (sideLength - k >= 2*r) {
        result = "Можно"
        document.getElementById("result").innerText =  result;
    } else {
        result = "Нельзя"
        document.getElementById("result").innerText =  result;
    }


}

const elementA = document.getElementById("s");
const elementB = document.getElementById("r");
const elementC = document.getElementById("k");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);