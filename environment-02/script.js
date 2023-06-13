"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const athletes = [];

  function createAthlete() {
    const nameInput = document.getElementById("name");
    const topSpeedInput = document.getElementById("topSpeed");

    const name = nameInput.value;
    const topSpeed = Number(topSpeedInput.value);

    if (
      !name ||
      String(topSpeed) === "NaN" ||
      topSpeed < 50 ||
      topSpeed > 100
    ) {
      alert("Please enter a valid name and top speed between 50 and 100.");
      return;
    }

    athletes.push({ name, topSpeed });
    showTopAthletes();
    nameInput.value = "";
    topSpeedInput.value = "";
  }

  function showTopAthletes() {
    const sortedAthletes = athletes.sort((a, b) => b.topSpeed - a.topSpeed);
    const topAthletes = sortedAthletes.slice(0, 3);
    const athletesList = document.getElementById("athletes-list");
    athletesList.innerHTML = "";

    topAthletes.forEach(({ name, topSpeed }) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${name} - ${topSpeed}`;
      athletesList.appendChild(listItem);
    });
  }

  const createAthleteForm = document.getElementById("create-athlete-form");
  createAthleteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createAthlete();
  });
});
