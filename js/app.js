const studentList = document.querySelectorAll('.student-item');
const totalStudents = studentList.length;

function totalPages(students) {
    if (students % 10 === 0)
        return students / 10;
    else
        return Math.floor((students / 10) + 1);
}

//Hide all students on page load
function hideStudents(list) {
    for (let i = 0; i < list.length; i += 1) {
        list[i].style.display = "none";
    }
}

function showPage(list, pageNumber) {
    hideStudents(list);
    if (pageNumber === 1) {
        for (let i = 0; i < (pageNumber * 10); i += 1) {
            list[i].style.display = 'block';
        }
    } else if (pageNumber === Math.floor(totalStudents / 10)) {
        for (let i = (pageNumber * 10); i < totalStudents; i += 1) {
            list[i].style.display = 'block';
        }
    } else {
        for (let i = (pageNumber * 10 - 10); i < (pageNumber * 10); i += 1) {
            list[i].style.display = 'block';
        }
    }
}

function createHTML(totalPages) {
    let html = '<ul>';
    for (let i = 1; i <= totalPages; i += 1) {
        html += '<li><a href="#">' + i + '</a></li>';
    }
    html += '</ul>';
    return html;
}

function appendPageLinks(list) {
    const html = createHTML(totalPages(list));
    const div = document.createElement('div');
    div.setAttribute('class', 'pagination');
    div.innerHTML = html;
    document.querySelector('.page').appendChild(div);
}

showPage(studentList, 1);
appendPageLinks(totalStudents);