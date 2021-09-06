debugger;

var name = "Mayank"

// Entity making a promise
var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("No Money...")
    }, 10000)
})

// Keeping Trach of Promise
myPromise.then((data) => {
    console.log(data)
}, (rejectionReason) => {
    console.log(rejectionReason)
})

console.log(name);