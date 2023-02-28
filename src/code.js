function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('TTC')
    .addItem('Show Products Helpers', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput('Hello, world!');
  html.setTitle('Products Helpers');
  html.setWidth(300);
  html.setHeight(200);
  SpreadsheetApp.getUi().showSidebar(html);
}
