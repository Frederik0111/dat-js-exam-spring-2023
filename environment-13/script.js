"use strict";

document.addEventListener("DOMContentLoaded", () => {
  fetchTickets();
});

function fetchTickets() {
  fetch("tickets.json")
    .then((response) => response.json())
    .then((data) => {
      const unusedTickets = filterUnusedTickets(data);
      createTicketElements(unusedTickets);
    });
}

function filterUnusedTickets(tickets) {
  return tickets.filter((ticket) => !ticket.used);
}

function createTicketElements(tickets) {
  const ticketsList = document.getElementById("tickets-list");

  tickets.forEach((ticket) => {
    const article = createTicketArticle(ticket);
    ticketsList.appendChild(article);
  });
}

function createTicketArticle(ticket) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const button = document.createElement("button");

  h3.textContent = ticket.eventName;
//   p.textContent = `id: ${ticket.id}`;
  button.textContent = "Use";

  button.addEventListener("click", () => {
    markTicketAsUsed(ticket);
    removeTicketElement(article);
  });

  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(button);

  return article;
}

function markTicketAsUsed(ticket) {
  ticket.used = true;
}

function removeTicketElement(element) {
  element.remove();
}