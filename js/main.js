"use strict"

const _statesRef = _db.collection("states");
const _sectionsRef = _db.collection("sections");
let states = [];
let sections = [];
let _selectedSectiontId = "";


_statesRef.onSnapshot(function (snapshotData) {
    let state = [];
    snapshotData.forEach(function (doc) {
      let state = doc.data();
      console.log(state);
      state.id = doc.id;
      states.push(state);
    });
    
});

_sectionsRef.onSnapshot(function (snapshotData) {
    let section = [];
    snapshotData.forEach(function (doc) {
      let section = doc.data();
      console.log(section.name);
      console.log(section.category);
      console.log(section.subtitle);
      section.id = doc.id;
      sections.push(section);
    });

    appendTitle();
    appendFoundation(sections);
    appendGeneral(sections);
    appendDataEntry(sections);
    appendFeedback(sections);
    appendNav(sections);
    //appendNavComponents();
   //appendNavFoundation();
});

//Append title function
function appendTitle(){
    let htmlTemplate = "";

    htmlTemplate +=`
        <h2>${states[1].section}</h2>
    `
    document.querySelector(".row-content-title").innerHTML = htmlTemplate;
};

//Append foundation's categories
function appendFoundation(section){
    let htmlTemplate = "";
    
        for( section of sections) {
            if (section.category.includes("Foundation")) {

            console.log(section.name);
            console.log(section.category);
            htmlTemplate +=`
                
                <article class="table-content-item">
                    <h4>${section.name}</h4>
                    <a href="#section" class="content-item-link" onclick="appendSectionDetails('${section.id}')"><img src="${section.img}" class="content-item-img" alt="${section.name}"></a>
                </article>
            `
            }
        }

    document.querySelector(".row-content").innerHTML = htmlTemplate;
}

//Append navigation
function appendNav(section){
    let htmlTemplate = "";
    for(const section of sections) {
        htmlTemplate +=`
            
            <section class="nav-item">
                <a href="#section" class="nav-item-link" onclick="appendSectionDetails('${section.id}')">${section.name}</a>
            </section>
        `
    }
    document.querySelector(".sideNavItems").innerHTML = htmlTemplate;
}

/*
function appendNavComponents(section){
    let htmlTemplate = "";
    let searchInput = `<input type="search" class="search" placeholder="Search...">`;
    
        for( section of sections) {
            if (section.category.includes("Components")) {

            htmlTemplate +=`
                
                <section class="nav-item">
                    <a href="#section" class="nav-item-link" onclick="appendSectionDetails('${section.id}')">${section.name}</a>
                </section>
            `
            }
        }
    document.querySelector(".sideNav").innerHTML = searchInput + htmlTemplate;
}

function appendNavFoundation(section){
    let htmlTemplate = "";
    let searchInput = `<input type="search" class="search" placeholder="Search...">`;
    
        for( section of sections) {
            if (section.category.includes("Foundation")) {

            htmlTemplate +=`
                
                <section class="nav-item">
                    <a href="#section" class="nav-item-link" onclick="appendSectionDetails('${section.id}')">${section.name}</a>
                </section>
            `
            }
        }
    document.querySelector(".sideNav").innerHTML = searchInput + htmlTemplate;
}
*/

//Append general section on the component page
function appendGeneral(section){
    let htmlTemplate = "";
    let categoryTitle = `<h2>General</h2>`;

    for( section of sections) {
        if (section.subtitle.includes("General")) {

        console.log(section.name);
        console.log(section.category);
        htmlTemplate +=`
            
            <article class="table-content-item">
                <h4>${section.name}</h4>
                <a href="#section" class="content-item-link" onclick="appendSectionDetails('${section.id}')"><img src="${section.img}" class="content-item-img" alt="${section.name}"></a>
            </article>
        `
        }
    }

    document.querySelector(".general-content").innerHTML = htmlTemplate;
    document.querySelector(".general").innerHTML = categoryTitle;
}

//Append data entry section on the component page
function appendDataEntry(section){
    let htmlTemplate = "";
    let categoryTitle = `<h2>Data entry</h2>`;
    console.log(categoryTitle);
    
    for( section of sections) {
        if (section.subtitle.includes("Data Entry")) {

        console.log(section.name);
        console.log(section.category);
        htmlTemplate +=`
            <article class="table-content-item">
                <h4>${section.name}</h4>
                <a href="#section" class="content-item-link" onclick="appendSectionDetails('${section.id}')"><img src="${section.img}" class="content-item-img" alt="${section.name}"></a>
            </article>
        `
        }
    }

    document.querySelector(".data-entry-content").innerHTML = htmlTemplate;
    document.querySelector(".data-entry").innerHTML = categoryTitle;
}

//Append feedback section on the component page
function appendFeedback(section){
    let htmlTemplate = "";
    let categoryTitle = `<h2>Feedback</h2>`;
    console.log(categoryTitle);
    
    for( section of sections) {
        if (section.subtitle.includes("Feedback")) {

        console.log(section.name);
        console.log(section.category);
        htmlTemplate +=`
            <article class="table-content-item">
                <h4>${section.name}</h4>
                <a href="#section" class="content-item-link" onclick="appendSectionDetails('${section.id}')"><img src="${section.img}" class="content-item-img" alt="${section.name}"></a>
            </article>
        `
        }
    }

    document.querySelector(".feedback-content").innerHTML = htmlTemplate;
    document.querySelector(".feedback").innerHTML = categoryTitle;

}

//Append detailed information of choosen category
function appendSectionDetails(id) {
    console.log(id);

    let specificSection = "";
    for (let section of sections) {
        if (section.id == id) {
            specificSection = section;
        }
    }
    let htmlTemplate = "";
    htmlTemplate += `
        <header class="section-header">
            <h1 class="section-title">${specificSection.name}</h1>
            <p class="section-desc">${specificSection.description}</p>
        </header>
    `;
    document.querySelector('.section-name').innerHTML = htmlTemplate;
    console.log(id);
    appendState(id);
}

//Append states of detailed information of choosen category
function appendState(id){
    let htmlTemplate = "";
    console.log(id);

    for (let state of states) {
        console.log(state.category);
        
        if (state.category == id && id == "Colors") {
            let specificState = state;

            htmlTemplate +=`
                <div class="color-container">
                    <div class="color-view" style="background-color: ${specificState.hexcode}" onclick="copyToClipboard('${specificState.hexcode}')"></div>
                    <div class="color-information">
                        <h4 class="color-name">${specificState.name}</h4>
                        <p class="color-code">${specificState.hexcode}</p>
                    </div>
                </div>`
            
        }   else if(state.category == id && id == "Typography") {
            let specificState = state;

            console.log(specificState);

            htmlTemplate +=`
            <div class="typography-container">
                <div class="typography-information">
                    <p class="typography-name" style="font-size: ${specificState.size}; font-family: ${specificState.typo}">${specificState.name}</p>
                    <p class="typography-explanation">${specificState.description}</p>
                </div>
            </div>`

        }   else if (state.category == id && state.section == "Components") {
            let specificState = state;

            console.log("specificState");

            htmlTemplate +=`
            <div class="component-container">
                <div class="component-information">
                    <p class="component-name">${specificState.name}</p>
                    <div class="icons">
                        <img src="icons/code.svg" class="icons-item" alt="Show code">
                        <img src="icons/info.svg" class="icons-item" alt="Show additional information">
                    </div>
                </div>
                    
                <div class="component-example">${specificState.code}</div>
                </div>
            </div>`

        } else {
            console.log("not working");
        }
    
    }
    if (id == "Colors"){
        document.querySelector(".section-content").innerHTML = `<div class="flex-container">` + htmlTemplate + `</div>`;
        console.log("flexbox");
    }   else {
        document.querySelector(".section-content").innerHTML = htmlTemplate;
    }
}
/*
function showSourceCode(toShow){
    sourceCode.value = toShow.innerHTML;
}

function openCodePanel(name, code){
    console.log(name, code);
    let codeContainer = document.querySelector(".code");
    codeContainer.style.display = "block";
    codeContainer.style.bottom = "0px";

    let htmlTemplateCode = "";
    htmlTemplateCode = `
    <header class="code-header">
        <h4>${name}</h4>
        <div class="icons">

        </div>
    </header>
    <div class="code-overview">
        <p>${code}</p>
    </div>`;

    document.querySelector(".code").innerHTML = htmlTemplateCode;
}
*/

//Copy to clipboard function
function copyToClipboard(hexcode) {
    var hex = hexcode;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = hex;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    tooltipSuccess(elem.value);
    //alert("Copied the text: " + elem.value);
}

//tooltip when content is copied
function tooltipSuccess(value){
    console.log(value);
    let tooltip = document.querySelector(".tooltip");
    tooltip.innerHTML = `<p>Copied ${value}</p>`;
    tooltip.style.cssText = "display: block; bottom: 5%;";
    //tooltip.style.bottom = "5%";
}

//Close tooltip function
document.querySelector(".tooltip").addEventListener("click", function() {
    let tooltip = document.querySelector(".tooltip");
    tooltip.style.cssText = "display: none; bottom: -40%;";
});

//SEARCH function
function search(value) {
    console.log(value);
    let searchValue = value.toLowerCase();
    let filteredSections = sections.filter(section => section.name.toLowerCase().includes(searchValue));
    console.log("Filtered: "+ filteredSections);
    appendNav(filteredSections);

    if(filteredSections.length === 0){
         noResults();
    }
}

//Message if there are no results for the search
function noResults() {

    let template = `
         <p class="no-results-info">Sorry, we couldn't find this for you!</p>
    `;
    document.querySelector(".results").innerHTML = template;
}
