const http = require('https')

document.getElementById("btn").addEventListener("click", startDownload);

// function download(){
//     element = document.getElementById("urlfld")
//     downloaderElement = document.createElement("a")
//     downloaderElement.setAttribute("href", element.value)
//     downloaderElement.setAttribute("download", "")
//     downloaderElement.click()
//     downloaderElement.remove()
// }

async function startDownload(){
    url = document.getElementById("urlfld").value;

}

async function getFileSize(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            return parseInt(xhr.getResponseHeader("Content-Length"))
        }
    };
    xhr.send();
}

function download(fileSize, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            callback(xhr.responseType);
        }
    };
    xhr.send();
}

