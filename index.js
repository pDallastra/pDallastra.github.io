function setTimes() {
    var date = new Date();
    var copyYear = date.getFullYear();
    var lastModified = document.lastModified;
    
    document.getElementById('copyYear').innerHTML = copyYear
    document.getElementById('lastModified').innerHTML = lastModified
}
