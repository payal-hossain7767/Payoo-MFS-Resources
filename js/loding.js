document.getElementById('add-money-btn').addEventListener('click', (event) => {
    document.getElementById('money-n').style.display ='block'
    document.getElementById('cash-out').style.display ='none'
})
document.getElementById('cash-out-btn').addEventListener('click', (event) => {
    document.getElementById('money-n').style.display ='none'
    document.getElementById('cash-out').style.display ='block'
})