// For Withdraw Button

document.getElementById('withdraw-form-btn').addEventListener('click', function(){
   
    document.getElementById('withdraw-form').classList.remove('hidden')

    document.getElementById('added-form').classList.add('hidden')
})

// For Added Button

document.getElementById('added-form-btn').addEventListener('click', function(){

    document.getElementById('added-form').classList.remove('hidden')

    document.getElementById('withdraw-form').classList.add('hidden')
})