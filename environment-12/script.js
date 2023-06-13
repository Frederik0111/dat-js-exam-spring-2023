"use strict";

window.addEventListener("load", start);

let postList;

async function start() {
  postList = await getJSON();
  console.log(postList);
  document.querySelector("#postnr").addEventListener("keyup", findTown);
}

async function getJSON() {
  const promise = await fetch("postnumre.json");
  return promise.json();
}

function findTown(event) {
  const newVal = document.querySelector("#postnr").value;
  console.log(newVal);
  if (newVal.length === 4) {
    const x = loopTowns(newVal);
    insertTown(x);
  }
  // insertTown();
}

function insertTown(town) {
  console.log(town);
  const x = document.querySelector("#by");
  console.log(x);
  document.querySelector("#by").value = town;
}

function loopTowns(val) {
  const newList = postList.filter(showTown);
  const town = newList[0].by;

  function showTown(postObject) {
    console.log(postObject);
    return postObject.postnr.includes(val);
  }

  console.log(newList);
  return town;
}