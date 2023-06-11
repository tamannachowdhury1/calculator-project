
/* div tag tai bitorer text newar jnno inner text nichi */
// function deletelastone() {
//     const onenumdelete = document.getElementById('MyResult');
//     onenumdelete.innerText = onenumdelete.innerText.toString().slice(0, -1);

// }
// function deleteme() {
//     document.getElementById('MyResult').innerText = "";
// }
// function calculator(newvalue) {
//     document.getElementById('MyResult').innerText += newvalue

// }

// function answer() {
//     var a = document.getElementById('MyResult').innerText;
//     document.getElementById('MyResult').innerText = eval(a);
// }

/* input tai value hbe */
function deletelastone() {
    const onenumdelete = document.getElementById('MyResult');
    onenumdelete.value = onenumdelete.value.toString().slice(0, -1);

}
function deleteme() {
    document.getElementById('MyResult').value = "";
}
function calculator(newvalue) {
    document.getElementById('MyResult').value += newvalue;
    // const inputs = inputfield.value;
    // inputs += newvalue;
    // inputfield.value = "";

}

function answer() {
    var a = document.getElementById('MyResult').value;
    document.getElementById('MyResult').value = eval(a);
    a = "";
}


