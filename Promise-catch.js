let p = new Promise((resolve,reject) => {
    throw new Error("Some error");
})


p.catch((err) => {
    console.log("This is an error" + err);
})
