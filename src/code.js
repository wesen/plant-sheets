function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('TTC')
    .addItem('Show Products Helpers', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput(`
    <button onclick="google.script.run.showQuickFilterDialog()">Create Quick Filter</button>
  `);
  html.setTitle('Products Helpers');
  html.setWidth(100);
  html.setHeight(50);
  SpreadsheetApp.getUi().showSidebar(html);
}

function showQuickFilterDialog() {
  var template = HtmlService.createTemplateFromFile('quick-filter-dialog');
  var ui = SpreadsheetApp.getUi();
  var dialog = ui.showModalDialog(template.evaluate(), 'Create Quick Filter');
}

function createQuickFilter(column, text) {
  var ui = SpreadsheetApp.getUi();
  ui.alert(`Creating quick filter for ${column} = ${text}`);
}
