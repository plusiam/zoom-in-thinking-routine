function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('StudentWorksheet');
}

function showTeacher() {
  return HtmlService.createHtmlOutputFromFile('TeacherDashboard');
}

function saveResponse(step, answer) {
  var sheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!sheetId) return 'No spreadsheet configured';
  var sheet = SpreadsheetApp.openById(sheetId);
  var responses = sheet.getSheetByName('Responses') || sheet.insertSheet('Responses');
  responses.appendRow([new Date(), step, answer]);
  return 'OK';
}

function setSheetId(id) {
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', id);
}
