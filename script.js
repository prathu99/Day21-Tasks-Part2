const container = document.createElement("div");
container.setAttribute("class", "container");
const heading1 = document.createElement("h1");
heading1.setAttribute("class", "heading");
heading1.innerHTML = "Programming Quotes API";
const heading2 = document.createElement("h3");
heading2.setAttribute("class", "heading2");
heading2.innerHTML = "Famous programming quotes by famous authors;";
const row = document.createElement("div");
row.setAttribute("class", "row");
const br1 = document.createElement("br");



container.append(heading1, heading2, br1, row);
document.body.append(container);



async function task2() {
    let dta1 = await fetch("https://programming-quotes-api.herokuapp.com/quotes");
    let dta2 = await dta1.json();
    for (let i = 0; i < dta2.length; i++) {
        let columns = document.createElement("div");
        columns.setAttribute("class", "col-md-12");
        columns.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 100%;">
        <div class="card-header"><h5 class="card-title">Author : ${dta2[i].author}</h5></div>
        <div class="card-body">
          <p class="card-text"><q>${dta2[i].en}</q></p>
        </div>
      </div>`
        row.append(columns);
    }
}
task2();