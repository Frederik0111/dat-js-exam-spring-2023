"use strict";

function fetchPosts() {
  return fetch("posts.json").then((response) => response.json());
}

function displayPosts(posts) {
  const postsList = document.getElementById("posts-list");

  // Iterate over each post and create HTML elements
  posts.forEach((post) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    img.src = post.image;
    img.alt = post.caption;
    h2.textContent = post.caption;
    p.textContent = `Likes: ${post.likes}`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    postsList.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPosts().then((posts) => {
    displayPosts(posts);
  });
});
