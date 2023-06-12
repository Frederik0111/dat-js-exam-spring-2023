"use strict";

// Step 1: Create an empty list and a function to add spaces
const rooms = [];

function addRoom(name, width, length) {
  const area = width * length;
  const room = { name, width, length, area };
  rooms.push(room);
}

// Step 2: Display the rooms on the website
function displayRooms() {
  const tableBody = document.getElementById('rooms-table');
  tableBody.innerHTML = '';

  rooms.forEach(room => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const widthCell = document.createElement('td');
    const lengthCell = document.createElement('td');
    const areaCell = document.createElement('td');

    nameCell.textContent = room.name;
    widthCell.textContent = room.width;
    lengthCell.textContent = room.length;
    areaCell.textContent = room.area;

    row.appendChild(nameCell);
    row.appendChild(widthCell);
    row.appendChild(lengthCell);
    row.appendChild(areaCell);
    tableBody.appendChild(row);
  });
}

// Step 3: Create a function to sort and update the view
function sortRoomsBy(property) {
  rooms.sort((a, b) => a[property] - b[property]);
  displayRooms();
}

// Event listener for the "Create Room" button
const createRoomForm = document.getElementById('create-room-form');
createRoomForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const widthInput = document.getElementById('width');
  const lengthInput = document.getElementById('length');

  const name = nameInput.value;
  const width = parseInt(widthInput.value);
  const length = parseInt(lengthInput.value);

  if (name && width && length) {
    addRoom(name, width, length);
    displayRooms();
    nameInput.value = '';
    widthInput.value = '';
    lengthInput.value = '';
  }
});

// Initial display of rooms
displayRooms();
