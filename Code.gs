function doGet(e) {
  var imageId = e && e.parameter && e.parameter.id;
  var template = HtmlService.createTemplateFromFile('StudentWorksheet');
  if (imageId) {
    try {
      var file = DriveApp.getFileById(imageId);
      var blob = file.getBlob();
      var base64 = Utilities.base64Encode(blob.getBytes());
      template.imageData = 'data:' + blob.getContentType() + ';base64,' + base64;
    } catch (err) {
      template.imageData = '';
      template.error = 'Unable to fetch image: ' + err;
    }
  } else {
    template.imageData = '';
    template.error = 'No image ID provided.';
  }
  return template.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
