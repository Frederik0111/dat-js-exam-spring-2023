"use strict";

import { events } from "./data.js";

function sortEventsByDate(events) {
  return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function filterEventsByMonth(events, month) {
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month;
  });
}

function displayEvents(events) {
  const eventsList = document.getElementById("events-list");
  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${event.date} - ${event.title}: ${event.description}`;
    eventsList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sortedEvents = sortEventsByDate(events);
  const filteredEvents = filterEventsByMonth(sortedEvents, 5);
  displayEvents(filteredEvents);
});