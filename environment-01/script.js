"use strict";

// Step 1: Fetch the JSON file and store the list in a variable
function loadStudents() {
    return fetch('students.json')
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// Step 2: Display the list on the webpage
function displayStudents(students) {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = ''; // Clear existing list

    students.forEach(function (student) {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled}`;
        studentsList.appendChild(listItem);
    });
}

// Step 3: Filter the list to show only enrolled students
function filterEnrolledStudents(students) {
    const enrolledStudents = students.filter(function (student) {
        return student.enrolled === true;
    });
    displayStudents(enrolledStudents);
}

// Step 4: Load the JSON file and display all students on the webpage
function initApp() {
    loadStudents()
        .then(displayStudents);

    const filterButton = document.getElementById('filter-button');
    filterButton.addEventListener('click', function () {
        loadStudents()
            .then(filterEnrolledStudents);
    });
}

// Call the initApp function when the window has finished loading
window.addEventListener('load', initApp);