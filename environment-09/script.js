"use strict";

// Function to fetch the JSON data
function fetchPosts() {
  return fetch('posts.json')
    .then(response => response.json());
}

// Function to sort the posts by likes in ascending order
function sortPostsAscending(posts) {
  return posts.sort((a, b) => a.likes - b.likes);
}

// Function to sort the posts by likes in descending order
function sortPostsDescending(posts) {
  return posts.sort((a, b) => b.likes - a.likes);
}

// Function to create a post element
function createPostElement(post) {
  const article = document.createElement('article');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  img.src = post.image;
  img.alt = post.caption;
  h2.textContent = post.caption;
  p.textContent = `Likes: ${post.likes}`;

  article.appendChild(img);
  article.appendChild(h2);
  article.appendChild(p);

  return article;
}

// Function to clear the posts-list container
function clearPostsList() {
  const postsList = document.getElementById('posts-list');
  postsList.innerHTML = '';
}

// Function to display the sorted posts
function displaySortedPosts(posts, sortOrder) {
  const sortedPosts = sortOrder === 'ascending' ? sortPostsAscending(posts) : sortPostsDescending(posts);
  const postsList = document.getElementById('posts-list');

  clearPostsList();

  sortedPosts.forEach(post => {
    const article = createPostElement(post);
    postsList.appendChild(article);
  });
}

// Function to handle the sort order change event
function handleSortOrderChange(event) {
  const sortOrder = event.target.value;
  fetchPosts()
    .then(posts => {
      displaySortedPosts(posts, sortOrder);
    });
}

// Initialize the page
function initializePage() {
  const sortForm = document.getElementById('sort-form');
  sortForm.addEventListener('change', handleSortOrderChange);

  fetchPosts()
    .then(posts => {
      displaySortedPosts(posts, 'ascending');
    });
}

// Call the initializePage function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
