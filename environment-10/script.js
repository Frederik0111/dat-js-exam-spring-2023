"use strict";

// Step 1: Fetch "posts.json" and save the list in a variable
fetch("posts.json")
  .then(response => response.json())
  .then(posts => {
    // Step 2: Show only published posts on the website
    const publishedPosts = posts.filter(post => post.published === true);

    // Step 3: Show all posts or only published posts based on the checkbox
    const allPostsCheckbox = document.getElementById("all");
    const postsList = document.getElementById("posts-list");

    function showPosts() {
      postsList.innerHTML = ""; // Clear existing posts

      const selectedPosts = allPostsCheckbox.checked ? posts : publishedPosts;

      selectedPosts.forEach(post => {
        const article = document.createElement("article");
        const image = document.createElement("img");
        const caption = document.createElement("h2");
        const likes = document.createElement("p");

        image.src = post.image;
        image.alt = post.caption;
        caption.textContent = post.caption;
        likes.textContent = "Likes: " + post.likes;

        article.appendChild(image);
        article.appendChild(caption);
        article.appendChild(likes);
        postsList.appendChild(article);
      });
    }

    // Show initial posts based on the checkbox state
    showPosts();

    // Add event listener to checkbox for dynamically updating the posts
    allPostsCheckbox.addEventListener("change", showPosts);
  });