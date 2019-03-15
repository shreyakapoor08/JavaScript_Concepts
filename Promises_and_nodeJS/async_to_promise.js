
function someAsyncTask (callback) {
    console.log("Beginning of task")
    setTimeout(function () {
        console.log("End of task")
        callback();
    }, 3000)
}

// someAsyncTask(function () {
//     console.log("We did some task")
// })

let someTaskPromise = new Promise(function (resolve, reject) {
    someAsyncTask(resolve) //instead of callback we use resolve in promise
})

someAsyncTask();