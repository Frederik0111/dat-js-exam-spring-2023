"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("script.js started");
  const posts = await getPosts();
  showPosts(posts);
}

async function getPosts() {
  const res = await fetch("posts.json");
  const data = await res.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function preparePostData(dataPosts) {
  const postArray = [];
  for (const key in dataPosts) {
    const post = dataPosts[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}

function showPosts(posts) {
  const postsList = document.getElementById("posts-list");

  posts.forEach((post) => {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.src = post.image;
    img.alt = post.caption;

    const h2 = document.createElement("h2");
    h2.textContent = post.caption;

    const p = document.createElement("p");
    p.textContent = `Likes: ${post.likes}`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);

    postsList.appendChild(article);
  });
}
