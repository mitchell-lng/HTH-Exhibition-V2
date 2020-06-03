var data;

$(document).ready(function () {
    loadData();

    $("#student").on("change paste keyup", function() {
        createPage();
    });
});

function resetPage() {
    const gridView = document.getElementById("groups");
    while (document.getElementById("groups").children.length > 1) {
        gridView.removeChild(gridView.lastElementChild);
    }

}

function createPage() {
    resetPage();
    const groups = document.getElementById("groups");

    for (let x = 0; x < data.length; x++) {
        const i = data[x];

        var search_student = $( "#student" ).val().toLowerCase();
        var student_name = i.teacher;
        if (!("" == search_student)) {
            for (var y; y > i.length; y++) {
                var name = y.toLowerCase();
                if (name.match(search_student) == null) {               continue; 
                }
            }
            
        }

        const row = document.createElement("div");
        row.setAttribute("class", "row");

        const group_name = document.createElement("span");
        group_name.setAttribute("class", "name")
        group_name.textContent = i.name;

        const students_div = document.createElement("div");
        students_div.setAttribute("class", "students");

        var students = i.students;
        students.sort();
        var student;
        for (var z; z > i.students.length; z++) {
            student = document.createElement("span");
            student.textContent = students[z];
        }

        groups.append(article);
    }
}

function loadData() {
    let result;
    const url = "https://raw.githubusercontent.com/monkie1357/hthexhibitionV2/master/groups.json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = "text";
    request.send();
    result = request.onload = function() {
        data = JSON.parse(request.response);
        createPage();
    }
}