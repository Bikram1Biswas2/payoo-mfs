// Added Money Function

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Add Money Button clicked');

    // get money to be added
    const addedMoney = document.getElementById('input-amount-added').value
    //console.log(addedMoney);

    // get the pin
    const getPin = document.getElementById('input-pin-Number').value
    //console.log(getPin);

    // 
 
    if(getPin === '9876'){
        const totalBalance = document.getElementById('available-balance').textContent
        console.log(totalBalance);

        const updatedBalance = Number(totalBalance) + Number(addedMoney);
        console.log(updatedBalance);

        // display total Balance
        document.getElementById('available-balance').innerText = updatedBalance
            
    } else{
        alert('Wrong Pin');
    }
})

// Withdraw Money Function

document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('withdraw button clicked');

    const withdrawMoney = document.getElementById('input-amount-withdraw').value;

    const withdrawPin = document.getElementById('input-pin-Number-withdraw').value;
    
    if(withdrawPin === '9876'){

        const availableBalance = document.getElementById('available-balance').innerText;

        const restBalance = Number(availableBalance) - Number(withdrawMoney)

        document.getElementById('available-balance').innerText = restBalance

    }else{
        alert('Cant withdraw money')
    }
})