
function verify() {
    let a = parseFloat(document.getElementById("a").value); 
    let x; 

    
    if (a < 10) {
        x = Math.pow(a, 4); // x = a^4
    } else if (a > 61) {
        x = a; // x = a
    } else {
        x = a - Math.sin(Math.pow(a, 2)); // x = a - sin(a^2)
    }

    document.getElementById("result").value = x; 
    check = true;
}


function send() {
    if (check) {
        document.getElementById("taskForm").submit();
    } else {
        alert("Сначала проверьте решение, нажав 'Проверить'");
    }
}

let check = false;

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
