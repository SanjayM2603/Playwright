
/* const genderType = "female";

function printGender() {

    let color="brown";
    if(genderType === "female"){
 
        var  age = 30;
        let color = "pink"
        console.log(color);
        

    }

    console.log(age);
    
}

printGender()
 */

/* let genderType = "female";

function printGender() {
    let color = "brown";

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";

        console.log("Color inside if-block:", color);
    }

    console.log("Color outside if-block:", color);
    console.log("Age outside if-block:", age);
}

printGender();

console.log("Global genderType:", genderType); */

let genderType = "male";

function printGender() {
    let color = "brown";

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";

        console.log("Color inside if-block:", color);
    }

    console.log("Color outside if-block:", color);
    console.log("Age outside if-block:", age);
}

printGender();

console.log("Global genderType:", genderType);