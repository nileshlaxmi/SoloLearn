const scrabble = (str) => {
    let ar = str.split(" ");
    console.log(ar);
    let point = [], sum = 0, newAr = [];

    let onepointer = ["a", "e", "i", "o", "u", "n", "r", "t", "l", "s"];
    let twopointer = ["d", "g"];
    let threepointer = ["b", "c", "m", "p"];
    let fourpointer = ["f", "h", "v", "w", "y"];
    let fivepointer = ["k"];
    let eightpointer = ["j", "x"];
    let tenpointer = ["q", "z"];

    for(let i=0; i<ar.length; i++){
        sum = 0;
        for(let j =0; j< ar[i].length; j++){            
            newAr = ar[i].split("");  

            if(onepointer.indexOf(newAr[j])){
                sum = sum + 1;
            }
            else if(twopointer.indexOf(newAr[j])){
                sum = sum + 2;
            } 
            else if(threepointer.indexOf(newAr[j])){
                sum = sum + 3;
            }
            else if(fourpointer.indexOf(newAr[j])){
                sum = sum + 4;
            }
            else if(fivepointer.indexOf(newAr[j])){
                sum = sum + 5;
            }
            else if(eightpointer.indexOf(newAr[j])){
                sum = sum + 8;
            }
            else if(tenpointer.indexOf(newAr[j])){
                sum = sum + 10;
            }
            else{
                sum = sum + 0;
            }      
        }
        console.log(newAr);
        console.log(sum);
    }

}

scrabble("This is a cool challenge");