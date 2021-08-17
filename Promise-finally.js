let p = new Promise((resolve,reject) => {
    if(Math.random() > 0.5){
        resolve("I am greater than 0.5")
    } else {
        reject("I am less than 0.5")
    }
})

p.finally(() => {
    console.log("Execution of promise completed")
})
