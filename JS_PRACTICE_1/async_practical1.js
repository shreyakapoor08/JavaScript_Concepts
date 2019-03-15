function downloadFile(url, downloaded) {
    //We are downloading the file here
    //Let's assume it takes 3 seconds to download
    //We use setTimeout to generate fake delay
    console.log("Downloading file: " + url)
    setTimeout(function () {
        let filePath = "C:\\Windows\\xyz.txt"
        console.log("File was downloaded to: " + filePath);
        downloaded(filePath)
    }, 3000)
}

function resizeFile(filePath, resized) {
    //We are resizing the file. It takes 2 seconds
    //We again use a fake setTimeout

    console.log("We are resizing :" + filePath)
    setTimeout(function () {
        let newPath = filePath.split(".")[0] + "-resize"
    }, 2000)
}

downloadFile("http://google.com/logo.png", function (path) {
    console.log("We got the downloaded file at: " + path)
})