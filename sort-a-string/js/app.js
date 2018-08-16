/*
const sortString = (str) => {
    let ar = str.split("").sort().join("");
    console.log(ar);
}

sortString("challenge");
sortString("happy42");
sortString("$tar3");
*/


function sortString(){
    var inputData = $("#ipText").val();
    var output = inputData.split("").sort().join("");
    $("#opText").text(output);
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}