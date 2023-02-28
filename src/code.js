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

  var hasActiveFilter = SpreadsheetApp.getActiveSheet().getFilter() !== null;
  var clearFilterButton = '<button id="clear-filter" ' + (hasActiveFilter ? '' : 'disabled') + '>Clear Filter</button>';
  html.append('<div>' + clearFilterButton + '</div>');
  
  var sidebar = SpreadsheetApp.getUi().showSidebar(html);
  
  var script = '<script>document.getElementById("clear-filter").addEventListener("click", function() { google.script.run.clearFilter(); });</script>';
  html.append(script);

  SpreadsheetApp.getUi().showSidebar(html);
}

function showQuickFilterDialog() {
  var template = HtmlService.createTemplateFromFile("quick-filter-dialog");
  var ui = SpreadsheetApp.getUi();
  var dialog = ui.showModalDialog(template.evaluate(), "Create Quick Filter");
  return dialog;
}

function clearFilter() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var filter = sheet.getFilter();
  if (filter) {
    filter.remove();
  }
}

function createQuickFilter(column, text) {
  Logger.log(
    "Creating quick filter for column " + column + " with text " + text
  );
  var sheet = SpreadsheetApp.getActiveSheet();
  var filterName = "Quick Filter " + column + " - " + text;

  var range = sheet.getDataRange();
  var filter = range.getFilter() || range.createFilter();
  var criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextContains(text)

  var filterColumn = getColumnIndex(column);
  if (filterColumn >= 0) {
    filter.setColumnFilterCriteria(filterColumn, criteria);

    Logger.log("Setting filter " + filterName);

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
