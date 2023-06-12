"use strict";

// Step 1: Retrieve posts.json into script.js
function fetchPosts() {
  return fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      // Add identifier to each post
      const postsWithId = posts.map((post, index) => ({
        ...post,
        id: index
      }));
      
      // Step 2: Display posts on the website sorted by most likes
      const sortedPosts = postsWithId.sort((a, b) => b.likes - a.likes);
      displayPosts(sortedPosts);
      
      // Save posts to localStorage
      localStorage.setItem('posts', JSON.stringify(sortedPosts));
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

// Step 3: Function to handle upvote and downvote buttons
function handleUpvote(postId) {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.likes++;
    localStorage.setItem('posts', JSON.stringify(posts));
    const sortedPosts = posts.sort((a, b) => b.likes - a.likes);
    displayPosts(sortedPosts);
  }
}

function handleDownvote(postId) {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const post = posts.find(p => p.id === postId);
  if (post && post.likes > 0) {
    post.likes--;
    localStorage.setItem('posts', JSON.stringify(posts));
    const sortedPosts = posts.sort((a, b) => b.likes - a.likes);
    displayPosts(sortedPosts);
  }
}

// Display posts on the webpage
function displayPosts(posts) {
  const postsList = document.getElementById('posts-list');
  postsList.innerHTML = '';

  posts.forEach(post => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.src = post.image;
    img.alt = post.caption;
    const h2 = document.createElement('h2');
    h2.textContent = post.caption;
    const p = document.createElement('p');
    p.textContent = `Likes: ${post.likes}`;

    const upvoteBtn = document.createElement('button');
    upvoteBtn.textContent = 'Upvote';
    upvoteBtn.addEventListener('click', () => handleUpvote(post.id));

    const downvoteBtn = document.createElement('button');
    downvoteBtn.textContent = 'Downvote';
    downvoteBtn.addEventListener('click', () => handleDownvote(post.id));

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(upvoteBtn);
    article.appendChild(downvoteBtn);

    postsList.appendChild(article);
  });
}

// Call the fetchPosts function to start the process
fetchPosts();
