document.getElementById("btn").addEventListener("click", download);

function download(){
    element = document.getElementById("urlfld")
    downloaderElement = document.createElement("a")
    downloaderElement.setAttribute("href", element.value)
    downloaderElement.setAttribute("download", "")
    downloaderElement.click()
    downloaderElement.remove()
}