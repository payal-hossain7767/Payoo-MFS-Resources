document.getElementById('cash-btn').addEventListener('click',(e)=>{
    e.preventDefault();
 // console.log(e.target)
    const amountAdd2=document.getElementById('amount-add2').value;
   const convared2 =parseInt(amountAdd2)
 //   console.log(typeof convared)
 const varifyPinNumber2=document.getElementById('varifi-pin2').value;
 // console.log(varifyPinNumber);
 const taka2=document.getElementById('taka-amr').innerText
 const converedTaka2=parseFloat(taka2)
 
 if(amountAdd2 && varifyPinNumber2){
     if(varifyPinNumber2==='1234'){
         const kototTaka2 =  converedTaka2 - convared2;
         document.getElementById('taka-amr').innerText=kototTaka2
       
      }
     
 }

 else{
     
 }
 
 })