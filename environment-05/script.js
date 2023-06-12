"use strict";

// Fetch the runners.json file
fetch('runners.json')
  .then(response => response.json())
  .then(data => {
    // Sort the runners by their time in ascending order
    const sortedRunners = data.sort((a, b) => a.time - b.time);

    // Display the 3 fastest runners on the podium
    const podium = document.getElementById('podium');
    const goldRunner = sortedRunners[0];
    const silverRunner = sortedRunners[1];
    const bronzeRunner = sortedRunners[2];
    document.getElementById('gold-name').textContent = goldRunner.name;
    document.getElementById('gold-time').textContent = goldRunner.time.toFixed(2);
    document.getElementById('silver-name').textContent = silverRunner.name;
    document.getElementById('silver-time').textContent = silverRunner.time.toFixed(2);
    document.getElementById('bronze-name').textContent = bronzeRunner.name;
    document.getElementById('bronze-time').textContent = bronzeRunner.time.toFixed(2);

    // Display the next 7 fastest runners in the runner-ups list
    const runnerUpsList = document.getElementById('runnerups-list');
    const runnerUps = sortedRunners.slice(3, 10);
    runnerUps.forEach(runner => {
      const listItem = document.createElement('li');
      listItem.textContent = `${runner.name} - time: ${runner.time.toFixed(2)}`;
      runnerUpsList.appendChild(listItem);
    });
  });
