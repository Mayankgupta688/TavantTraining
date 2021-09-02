// JavaScript is single threaded execution model

// There are multple thread in background to do asynchronous task (web Api = threads)

var userName = "technoFunnel";

setTimeout(() => {
    console.log("10000(1)")
}, 10000);

setTimeout(() => {
    console.log("10000(2)")
}, 10000);


console.log(userName)

var data = "Mayank";

setTimeout(() => {
    console.log("10000(3)");
}, 10000);