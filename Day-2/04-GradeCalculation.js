
function studentScore (grade){

    switch(true){

        case grade>90 :
            console.log("A grade");
        break;

        case grade>80 && grade<=90 :
            console.log("B grade");
        break;

        case grade>70 && grade<=80 :
            console.log("C grade");
        break;
        
        default:
            console.log("fAIL");

    }


}

studentScore(92.99);
studentScore(88);
studentScore(71.23);