function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('TTC')
    .addItem('Show Products Helpers', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput(`
    <button onclick="google.script.run.showQuickFilterModal()">Create Quick Filter</button>
  `);
  html.setTitle('Products Helpers');
  html.setWidth(100);
  html.setHeight(50);
  SpreadsheetApp.getUi().showSidebar(html);
}

function showQuickFilterModal() {
  var html = HtmlService.createHtmlOutput(`
    <form>
      <label for="filter-type">Create new quick filter:</label>
      <select id="filter-type" name="filter-type">
        <option value="name">Name</option>
        <option value="sku">SKU</option>
        <option value="category">Category</option>
        <option value="species">Species</option>
      </select>
      <input type="text" id="filter-text" name="filter-text" placeholder="Enter filter text...">
      <br>
      <button type="button" onclick="google.script.run.createQuickFilter(document.getElementById('filter-type').value, document.getElementById('filter-text').value)">Create quick filter</button>
      <button type="button" onclick="google.script.host.close()">Cancel</button>
    </form>
  `);
  var title = 'Create Quick Filter';
  var ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, title);
}

function createQuickFilter(column, text) {
  var ui = SpreadsheetApp.getUi();
  ui.alert(`Creating quick filter for ${column} = ${text}`);
}
