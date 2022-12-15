document.getElementById("btn").addEventListener("click", startDownload);

url = document.getElementById("urlfld").value;

var progressBar = document.createElement("progress");
var xhr = new XMLHttpRequest();

xhr.open("GET", url)
xhr.open("GET", url)
xhr.onprogress = function(pe) {
  if(pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}
xhr.onloadend = function(pe) {
  progressBar.value = pe.loaded
}
xhr.send()