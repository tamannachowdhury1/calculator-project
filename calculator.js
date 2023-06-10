function deletelastone() {
    const onenumdelete = document.getElementById('MyResult');
    onenumdelete.value = onenumdelete.value.toString().slice(0, -1);
}
function deleteme() {
    document.getElementById('MyResult').value = "";
}
function calculator(newvalue) {
    document.getElementById('MyResult').value += newvalue;
}
function answer() {
    var a = document.getElementById('MyResult').value;
    document.getElementById('MyResult').value = eval(a);
}



