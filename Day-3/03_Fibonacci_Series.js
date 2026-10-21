

function fibonacci(n) {

    let First = 0;
    let Second = 1;

    for (let i = 0; i < n; i++) {
        let nextNum = First + Second;
        First = Second;
        Second = nextNum;
    }

    return First;
}

console.log(fibonacci(10));

/*
let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
    console.log(a);

    let temp = a + b;
    a = b;
    b = temp;
}
    */