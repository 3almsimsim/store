function appendDataToSheet(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var values = [];
  
  // Assuming data is an array of items
  data.forEach(function(item) {
    var row = [item.name, item.price, item.quantity]; // Adjust fields as per your data structure
    values.push(row);
  });
  
  sheet.getRange(sheet.getLastRow() + 1, 1, values.length, values[0].length).setValues(values);
}