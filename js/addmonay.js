document.getElementById('add-money').addEventListener('click',(e)=>{
   e.preventDefault();
// console.log(e.target)
   const amountAdd=document.getElementById('amount-add').value;
  const convared =parseInt(amountAdd)
//   console.log(typeof convared)
const varifyPinNumber=document.getElementById('varifi-pin').value;
// console.log(varifyPinNumber);
const taka=document.getElementById('taka-amr').innerText
const converedTaka=parseFloat(taka)

if(amountAdd && varifyPinNumber){
    if(varifyPinNumber==='1234'){
        const kototTaka =convared + converedTaka;
        document.getElementById('taka-amr').innerText=kototTaka
     }
}
else{
    alert('enter amount')
}

})