"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("script.js started");
  await getPosts();
}

async function getPosts() {
  const res = await fetch("students.json");
  const data = await res.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

async function preparePostData(dataPosts) {
  const postArray = [];
  for (const key in dataPosts) {
    const post = dataPosts[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}
