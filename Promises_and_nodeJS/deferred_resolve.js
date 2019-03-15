
function downloadPromise () {
    return new Promise(function (resolve, reject) {
        console.log("Starting to download the file")
        setTimeout(function () {
            console.log("Download is complete")
            resolve(); //resolve change the state of promise from pending to resolve , then we can call then on the resolved promise
        }, 3000)
    })
}

// downloadPromise().then(function () {
//   console.log("After download")
// })

//if we want the result of this file later
let downloadedFile = downloadPromise()

setTimeout(function () {
    downloadedFile.then(function () {
        console.log("after download")
    })
}, 5000)

//humen async function ka callback wahi dalna padhta hai, baad mai nahi daal sakte unlike promises
//promise store result untill we call them so it is better