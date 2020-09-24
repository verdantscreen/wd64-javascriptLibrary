const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1: declare baseURL of the API (required endpoint for NYT data)
const key = "u2ybN3YkonnRYAWhq9XyUOIrwGvJ9KyF"; //2: lets NYT know which user is accessing their API
let url; //3 we'll use this variable to make a dynamic search url later; making url a global variable to use anywhere t/o code (?)

// reminder: the querySelector() method returns the first Element within the document that matches the specified selector or group of selectors. If no matches are found, null is returned.

// SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

// RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

// RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";

let pageNumber = 0; //start at page number 0 aka position 0 (?)
let displayNav = false; // part of challenge?!

/*        //1               //2 user action, function we define  */
searchForm.addEventListener("submit", fetchResults); //on hover : function fetchResults (e: any): void (what does this mean? hover for more info)
nextBtn.addEventListener("click", nextPage); //3
previousBtn.addEventListener("click", previousPage); //3

//function declaration
/*                  //1 event handling function (receives object containing properties aka variables and methods aka functions*/
function fetchResults(e) {
  //console.log(e); //2 just logs event object
  e.preventDefault(); //bc in this case we submit form to GET not POST (is there a better event? e.g. search)
  // Assemble the full URL - look for Example Call in API documentation
  url =
    baseURL + //refers back to base url we set in line 1
    "?api-key=" + // label what's to follow
    key + // actual key info
    "&page=" + // label for pg
    pageNumber + // pg data
    "&q=" + // query? aka search
    searchTerm.value; //3 creates versatile/changeable query string; study ?, &, and &q= when possible!
  //console.log(url); //4 just logs string to see it

  // insert conditionals for start/end dates here (for more info specific to NYT, look at API docs - facets)

  if (startDate.value !== "") {
    //setting a limit on our results
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    //console.log(endDate.value);
    url += "&end_date=" + endDate.value;
  }

  //1
  fetch(url) //defined in line 38-45 ? we are starting a promise here // until we know our url, we can't jsonify it? why can't I say url vs result (just to avoid confusion)?
    .then(function (result) {
      //console.log(result);
      return result.json(); //2
    })
    .then(function (json) {
      //console.log(json); //3
      displayResults(json); //1a and 3a
    });
}

function displayResults(json) {
  // while (aka do while) is a conditional statement: go back and reread this module section: display results-05
  while (section.firstChild) {
    section.removeChild(section.firstChild); //1 clears previous results/child elements before new results are added if you don't refresh between searches
  }

  let articles = json.response.docs; //get help with this, can't find in console
  if (articles.length === 10) {
    nav.style.display = "block"; //shows the nav display if 10 items are in the array
  } else {
    nav.style.display = "none"; //hides the nav display if less than 10 items are in the array - is this where we hide the page buttons?
  }

  if (articles.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement("article"); //modify our HTML elements within browser
      let heading = document.createElement("h2");
      let link = document.createElement("a");
      let img = document.createElement("img");
      let para = document.createElement("p");
      let clearfix = document.createElement("div"); // what IS this? css hack... for floated elements... complicated (display results-06)

      let current = articles[i]; //iterable... could refer to any specific article
      console.log("Current:", current);

      link.href = current.web_url; // url link to article
      link.textContent = current.headline.main; //clickable headline link to url

      para.textContent = "Keywords: "; //don't understand

      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement("span");
        span.textContent += current.keywords[j].value + " ";
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        //basically if an image exists for the article
        img.src = "https://www.nytimes.com/" + current.multimedia[0].url; //first position associated image? [0]
        img.alt = current.headline.main; //backup to image is just the headline
      }

      clearfix.setAttribute("class", "clearfix");

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log("Page number:", pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } /*else if (pageNumber[0] === 0) {
    previousBtn.style.display = "none";
  } */ else {
    return;
  }
  fetchResults(e);
  console.log("Page:", pageNumber); //hide btn on pg 10 (our limit for total pgs)
} //let displayNav = false; // part of challenge?!
