"use strict";

import { events } from "./data.js";

const eventsList = document.getElementById("events-list");
const createEventForm = document.getElementById("create-event-form");

function displayEvents() {
  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${event.date} - ${event.title}: ${event.description}`;
    eventsList.appendChild(listItem);
  });
}

function createEvent(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dateInput = document.getElementById("date");

  const newEvent = {
    title: titleInput.value,
    description: descriptionInput.value,
    date: dateInput.value,
  };

  events.push(newEvent);

  const listItem = document.createElement("li");
  listItem.textContent = `${newEvent.date} - ${newEvent.title}: ${newEvent.description}`;
  eventsList.appendChild(listItem);

  // Reset the form inputs
  createEventForm.reset();
}

window.addEventListener("load", displayEvents);
createEventForm.addEventListener("submit", createEvent);
