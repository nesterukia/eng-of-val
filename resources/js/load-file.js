function LoadFile(event)
{
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    console.log(e.target.result);
    var fileData = e.target.result.substr(e.target.result.indexOf(",")+1);
    var mimeTypeStart = e.target.result.indexOf("data:") + 5;
    var mimeTypeEnd = e.target.result.indexOf(";");
    var mimeType = e.target.result.substr(mimeTypeStart, mimeTypeEnd - mimeTypeStart);
    var fileName = file.name;
    document.getElementById(event.target.id + "FileData").value = fileData;
    document.getElementById(event.target.id + "MimeType").value = mimeType;
    document.getElementById(event.target.id + "FileName").value = fileName;
  };    
  reader.readAsDataURL(file);
}