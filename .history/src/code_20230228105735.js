function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('My Menu')
    .addItem('Show Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput('Hello, world!');
  html.setTitle('My Sidebar');
  html.setWidth(300);
  html.setHeight(200);
  SpreadsheetApp.getUi().showSidebar(html);
}
