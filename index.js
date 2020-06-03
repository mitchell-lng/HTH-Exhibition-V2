var data;

document.addEventListener("DOMContentLoaded", function(event) { 
    loadData();

    document.getElementById("student").addEventListener("input", createPage);
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

        let search_student = document.getElementById("student").value.toLowerCase()
        var student_names = i.students;
        var studentFound = false;
        if (!("" == search_student)) {
            for (var y = 0; y < student_names.length; y++) {
                let name = student_names[y].toLowerCase();
                if (name.match(search_student) != null) {
                    studentFound = true; 
                }
            }
        }
        
        if (studentFound === false && !("" == search_student)) {
            continue;
        }

        const row = document.createElement("div");
        row.setAttribute("class", "row");

        const group_name = document.createElement("span");
        group_name.setAttribute("class", "name")
        group_name.textContent = i.name;

        const students_div = document.createElement("div");
        students_div.setAttribute("class", "students");

        const link = document.createElement("a");
        link.setAttribute("href", i.link);
        link.setAttribute("target", "_blank");
        link.textContent = "Join";

        row.append(group_name);
        

        var students = i.students;
        students.sort();
        var student;
        for (var z = 0; z < students.length; z++) {
            student = document.createElement("span");
            student.textContent = students[z];
            students_div.append(student);
        }

        row.append(students_div);
        row.append(link);

        groups.append(row);
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