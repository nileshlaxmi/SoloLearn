const clickFunction = () => {
    var str = $("#ipText").val();
    let num = parseInt(str);
    let sum = 0;
    for(let i=1; i<=num; i++){
        if(num%i === 0){
            sum = sum + i;
        }
    }

    if(sum > 2*num)
        $("#opText").text("Abundant Number");
    else
        $("#opText").text("Not a Abundant Number");
}   

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
