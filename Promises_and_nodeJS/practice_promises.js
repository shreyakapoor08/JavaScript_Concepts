function download (url) {
    return new Promise(function (resolve, reject) {
        if(!url.startsWith("http")) {
            reject(new Error("Url does not start with http")) //in js we have class of Error in which you can use a new constructor
        } else {
            setTimeout(function () { //fake 3 second download task
                let fileName = url.split("/").pop()
                resolve(fileName)
            }, 3000)
        }
    })
}

function resize (fileName) {
    return new Promise(function (resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new Error("file is not png"))
        } else {
            setTimeout(function () { // fake 3 second resize task
                // change x.png -> x-resized.png
                let resizedFile = fileName.split(".")[0]
                resolve(resizedFile)
            })
        }
    })
}


///how to download and resize a file
download('http://cb.lk/logo.png') // calling download function with this string
    // .then(function (fileName) { //when download is done then we call resize
    //     resize(fileName).then(function (resizedFile) {
    //         console.log("resized file is at: " + resizedFile)
    //     })
    // })
        .then(resize)
        .then(function (resizedFile) {
            console.log("Resized file is at: " + resizedFile)
        })
        .catch(function (err) { //catch can handle the reject of any promise in the chain
            console.error(err) //print error in console in red color
        })