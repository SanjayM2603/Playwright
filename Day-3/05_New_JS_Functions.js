//Task 1: Function Declaration  

function userProfile(str){
    let name = str
    console.log("Hello", name);
}
userProfile("Sanjay")

//Task 2: Arrow Function  

const double = (num) => {
    return num * 2;
};

console.log(double(5));

//Task 3: Anonymous Function  

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function  

function getUserData(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}

getUserData(function() {
    console.log("Call Back Function");
});