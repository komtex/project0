function buildTable() {
  addLineToHTMLTable("Los", "Max", "15", "Kyu 7", "N 10");
  addLineToHTMLTable("Los", "Artem", "10", "Kyu 8", "N 10");
  addLineToHTMLTable("Tim", "Berness-Lee", "30", "Kyu 3", "K 25");
  addLineToHTMLTable("Gul", "Vlad", "10", "Kyu 6", "K 25");
}
function addLineToHTMLTable(firstname, secondname, age, exam, group) {
  var tableBody = document.querySelector("#tableContactBody");
  var newRow = tableBody.insertRow();
  var firstNameCell = newRow.insertCell();
  firstNameCell.innerHTML = firstname;
  var lastNameCell = newRow.insertCell();
  lastNameCell.innerHTML = secondname;
  var ageCell = newRow.insertCell();
  ageCell.innerHTML = age;
  var examCell = newRow.insertCell();
  examCell.innerHTML = exam;
  var groupCell = newRow.insertCell();
  groupCell.innerHTML = group;
}
