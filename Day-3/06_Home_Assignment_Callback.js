// Step 1: Declare a global variable
let browser = "Chrome";

// Step 2: Create a function with a callback
function checkBrowserVersion(callback) {
    setTimeout(function() {
        callback(browser);
    }, 2000);
}

// Step 3: Create a callback function
function displayBrowserVersion(version) {
    console.log(version);
}

// Step 4: Call the function
checkBrowserVersion(displayBrowserVersion);