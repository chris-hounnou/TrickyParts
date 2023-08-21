function createAccount(pin, amount = 0 ) {
    return {
        checkBalance(inputPin){
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, newAmount){
            if (inputPin!== pin ) return "Invalid PIN.";
            amount += newAmount;
            return `Successfully deposited $${newAmount}.Current Balance$${amount}.`;
        }, 
        withdraw (inputPin, withdrawalAmount){
            if (inputPin !== pin) return "Invalid Pin.";
            if (withdrawalAmount > amount)
                return"Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= withdrawalAmount;
            return `Successfully withdrew$${withdrawalAmount}, Current balance $${amount}.`;

        },
        changePin(oldPin,newPin){
            if(oldPin !== pin) return "Invalid PIN.";
            pin = newPin
            return "PIN successfully changed!"
        }
    };

}

module.exports = { createAccount };
