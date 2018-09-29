const clickFunction = () => {
    var str = $("#ipText").val();
    console.log(str);
    $("#opText").text(str);
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
