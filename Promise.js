let p = new Promise((resolve,reject) => {
    if(Math.random() > 0.5){
        resolve("I am more than half");
    }
    else{
        reject("I am less than half");
    }
})
