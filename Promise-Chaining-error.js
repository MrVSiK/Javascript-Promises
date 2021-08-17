let p = new Promise((resolve,reject) => {
    if(Math.random() > 0.5){
        resolve("I am greater than half");
    } else {
        reject("I am less than half")
    }
})

p.then((resolved) => {
    console.log("inside first .then() method --- " + resolved);
   throw new Error("This is an error");
}, (rejected) => {
    console.log("inside first .then() method and rejectd ---" + rejected);
    return "This has been rejected"
}).then((resolved) => {
    console.log("inside second .then() method --- " + resolved);
}).catch((err) => {
    console.log("Inside .catch() method --- " + err);
}).finally(() => {
    console.log("Execution has been completed");
})
