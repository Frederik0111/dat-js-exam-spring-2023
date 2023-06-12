"use strict";

import { events } from "./data.js";

// Rest of the code remains the same...
const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
const filteredEvents = sortedEvents.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate.getMonth() === 5;
});
const eventsList = document.getElementById("events-list");
filteredEvents.forEach((event) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${event.date} - ${event.title}: ${event.description}`;
  eventsList.appendChild(listItem);
});
