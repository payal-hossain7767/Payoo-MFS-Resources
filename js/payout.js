document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    //    console.log('hello');
    const numberOfInput = document.getElementById('number-of-input').value;
    // console.log(numberOfInput);
    const passwordOfInput = document.getElementById('password-of-input').value;
    // console.log(passwordOfInput);
    if (numberOfInput.length === 11) {
        if(passwordOfInput==='1234'){
            
         window.location.href='../main.html'
        }
        else{
           alert('password not for right')
        }
    }
    else {
        alert('number is not for right')
    }

})