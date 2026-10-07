

    // Function to launch browser using if-else
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser: " + browserName);
    }
}

// Function to run tests using switch case
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests (Default)");
    }
}

// Calling the functions
launchBrowser("chrome");
launchBrowser("firefox");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional"); 