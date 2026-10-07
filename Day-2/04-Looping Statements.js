//method1
function printOddNumbers(Num){

    for (let num =1; num<=25; num++){

        if(num%2!=0){
            console.log(num);
            
        }
        
    }

}

printOddNumbers()


//method2 without using modulus
function printOddNumbers() {

    for (let num = 1; num <= 25; num += 2) {
        console.log(num);
    }

}

printOddNumbers();