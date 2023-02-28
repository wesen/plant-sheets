function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("TTC")
    .addItem("Show Products Helpers", "showSidebar")
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput(`
    <button onclick="google.script.run.showQuickFilterDialog()">Create Quick Filter</button>
  `);
  html.setTitle("Products Helpers");
  html.setWidth(100);
  html.setHeight(50);
  SpreadsheetApp.getUi().showSidebar(html);
}

function showQuickFilterDialog() {
  var template = HtmlService.createTemplateFromFile("quick-filter-dialog");
  var ui = SpreadsheetApp.getUi();
  var dialog = ui.showModalDialog(template.evaluate(), "Create Quick Filter");
}

function createQuickFilter(column, text) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var filterName = "Quick Filter " + column + " - " + text;
  var range = sheet.getDataRange();
  var filter = range.getFilter() || range.createFilter();
  var criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextContains(text)
    .build();
  var filterColumn = getColumnIndex(column);
  if (filterColumn >= 0) {
    filter.setColumnFilterCriteria(filterColumn, criteria);
    filter.setTitle(filterName);
    sheet.updateFilter(filter);
    filter.apply();
    var ui = SpreadsheetApp.getUi();
    ui.alert(
      "Quick filter created",
      'Filter "' +
        filterName +
        '" added to column "' +
        column +
        '" with text "' +
        text +
        '".',
      ui.ButtonSet.OK
    );
  } else {
    var ui = SpreadsheetApp.getUi();
    ui.alert(
      "Invalid column",
      'Column "' + column + '" not found.',
      ui.ButtonSet.OK
    );
  }
}

function getColumnIndex(column) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].toLowerCase() === column.toLowerCase()) {
      return i + 1;
    }
  }
  return -1;
}
