function hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (const page of pages) {
         page.style.display = "none";
    }
}

function showPage(pageId) {
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
}

function navigateTo(pageId) {
    location.href = `#${pageId}`;
}

function pageChange() {
    let page = "design";
    if (location.hash) {
         page = location.hash.slice(1);
    }
    showPage(page);
}

pageChange();
