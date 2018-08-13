function uglyNumber(){
  let n = document.getElementById('input').value;
  //let n = 42;
  let ar = [];
  let i = 0, c = 0;
  for(i=1; i<=n; i++){
    if(n%i == 0){
      ar.push(i);
    }
  }

  console.log(ar);
  let newAr = [];

  for(i=0; i<ar.length; i++){
    for(let j=1; j<=ar[i]; j++){
      if(ar[i]%j == 0)
        c++;
    }

    if(c==2){
      newAr.push(ar[i]);
    }
    // else{
    //   console.log("Normal Number");
    // }
    //console.log(newAr);
  }

  console.log(newAr);

  // for(i=0; i<newAr.length; i++){
  //   if(newAr.length==3 && !(newAr[i]==2 || newAr[i]==3 || newAr[i]==5)){
  //     //console.log("Normal Number");
  //     console.log(
  //   }
  //   else{
  //     console.log("Ugly Number");
  //   }
  // }
};
