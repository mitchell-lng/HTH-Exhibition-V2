var data;

$(document).ready(function () {
    loadData();
});

function resetPage() {
    const gridView = document.getElementById("grid-view");
    while (document.getElementById("grid-view").children.length > 1) {
        gridView.removeChild(gridView.lastElementChild);
    }

}

function createPage() {
    resetPage();
    const gridView = document.getElementById("grid-view");

    for (let x = 0; x < data.length; x++) {
        const i = data[x];

        const article = document.createElement("article");
        const exhibitionPicture = document.createElement("div");
        const wrap = document.createElement("div");

        const title = document.createElement("span");
        const teacher = document.createElement("span");
        const body = document.createElement("span");

        article.setAttribute("class", "indi-bg");
        exhibitionPicture.setAttribute("class", "exhibition-picture");
        wrap.setAttribute("class", "wrap white-text");
        title.setAttribute("class", "title");
        teacher.setAttribute("class", "teacher");
        body.setAttribute("class", "body-text");

        exhibitionPicture.setAttribute("style", "background-image: url('" + i.image + "')");

        title.textContent = i.title;
        teacher.textContent = i.teacher;
        body.textContent = i.content;

        article.append(exhibitionPicture);
        article.append(wrap);
        wrap.append(title);
        wrap.append(teacher);
        wrap.append(body);

        gridView.append(article);
    }
}

function loadData() {
    let result;
    const url = "https://raw.githubusercontent.com/monkie1357/hthexhibition/master/exhibitions.json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = "text";
    request.send();
    result = request.onload = function() {
        data = JSON.parse(request.response);
        createPage();
    }
}