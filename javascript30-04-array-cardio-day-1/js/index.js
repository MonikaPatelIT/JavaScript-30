const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
]; // inventors array

const inventorTable = document.querySelector("tbody"); // get table element
const searchButton = document.querySelector("#search"); // get search button
const searchText = document.querySelector('input[name="search"]'); //get search textbox

// map function to get all array record in table body's row form
function mapTable(arr) {
  inventorTable.innerHTML = arr
    .map(row => createTable(row))
    .join(", ")
    .replace(new RegExp(/,/, "g"), "");
  //used replace regEx to replace all the occarnce of "," in string
}
// retrun table row
function createTable(row) {
  return (
    "<tr><td>" +
    row.first +
    "</td> <td>" +
    row.last +
    "</td><td>" +
    row.year +
    "</td><td>" +
    row.passed +
    "</td></tr>"
  );
}

//filter inventor array by first or last name -case insensitive
function filterBySearchBox(searchText) {
  result = inventors.filter(
    inventor =>
      inventor.first.toLowerCase().indexOf(searchText) > -1 ||
      inventor.last.toLowerCase().indexOf(searchText) > -1
  );
  mapTable(result); //regenerate table from search result
}

//sort the column by order
function SortByOrder(column, IsAscOrder) {
  if (IsAscOrder) {
    inventors.sort((a, b) => (a[column] > b[column] ? 1 : -1)); //asc order by default
  } else {
    inventors.reverse(); // on asc result perform reverse easy as
  }
  mapTable(inventors); // regenerate table from sorting result
}

// toggle arrow class on header Text click event and perform sorting
function sortColumn(headerText) {
  if (headerText.className == "arrow-up") {
    headerText.classList.add("arrow-down");
    headerText.classList.remove("arrow-up");
    SortByOrder(headerText.dataset.name, true); // perform asc sorting 
  } else {
    headerText.classList.add("arrow-down");
    headerText.classList.remove("arrow-up");
    SortByOrder(headerText.dataset.name, false); // just perform reverse of exisitng array
  }
} //get search textbox

/*Event Listners*/

window.addEventListener("load", mapTable(inventors)); // default on load table structure
// search button event
searchButton.addEventListener("click", function() {
  filterBySearchBox(searchText.value.toLowerCase());
});