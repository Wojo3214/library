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
    appendNavComponents();
    appendNavFoundation();
});


function appendTitle(){
    let htmlTemplate = "";

    htmlTemplate +=`
        <h2>${states[1].section}</h2>
    `
    document.querySelector(".row-content-title").innerHTML = htmlTemplate;
};

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

function appendNavComponents(section){
    let htmlTemplate = "";
    
        for( section of sections) {
            if (section.category.includes("Components")) {

            htmlTemplate +=`
                
                <section class="nav-item">
                    <a href="#section" class="nav-item-link" onclick="appendSectionDetails('${section.id}')">${section.name}</a>
                </section>
            `
            }
        }
    document.querySelector(".sideNav").innerHTML = htmlTemplate;
}

function appendNavFoundation(section){
    let htmlTemplate = "";
    
        for( section of sections) {
            if (section.category.includes("Foundation")) {

            htmlTemplate +=`
                
                <section class="nav-item">
                    <a href="#section" class="nav-item-link" onclick="appendSectionDetails('${section.id}')">${section.name}</a>
                </section>
            `
            }
        }
    document.querySelector(".sideNav").innerHTML = htmlTemplate;
}


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
    document.querySelector('.abcd').innerHTML = htmlTemplate;
    console.log(id);
    appendState(id);
}

function appendState(id){
    let htmlTemplate = "";
    console.log(id);

    for (let state of states) {
        console.log(state.category);
        
        if (state.category == id) {
            let specificState = state;

            htmlTemplate +=`
            <article class="table-content-item">
                <h4>${specificState.name}</h4>
            </article>`
        }
    
    }
    document.querySelector(".abc").innerHTML = htmlTemplate;
}