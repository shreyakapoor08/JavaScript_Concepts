function download (url) {
    return new Promise(function (resolve, reject) {
        if(!url.startsWith("http")) {
            reject(new Error("Url does not start with http")) //in js we have class of Error in which you can use a new constructor
        } else {
            console.log("start download : " + url)
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
            console.log("start resize : " + fileName)
            setTimeout(function () { // fake 3 second resize task
                // change x.png -> x-resized.png
                let resizedFile = fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            }, 3000)
        }
    })
}

function upload (resizedFileName) {
    return new Promise(function (resolve) {
        console.log("start upload : " + resizedFileName)
        setTimeout(function () { //fake 3 sec upload task
            let uploadedUrl = "http://imgur.com/" + resizedFileName
            resolve(uploadedUrl)
        }, 3000)
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
        .then(upload)
        .then(function (uploadedUrl) {
            console.log("File was uploaded to : : " + uploadedUrl)
        })
        .catch(function (err) { //catch can handle the reject of any promise in the chain
            console.error(err) //print error in console in red color
        })