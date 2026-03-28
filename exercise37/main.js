let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editIndex = null;

function saveToStorage() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
  let title = document.getElementById("title").value;
  let image = document.getElementById("image").value;
  let content = document.getElementById("content").value;

  if (title === "" || content === "") {
    alert("Fill all required fields");
    return;
  }

  posts.push({ title, image, content });
  saveToStorage();
  displayPosts();

  document.getElementById("title").value = "";
  document.getElementById("image").value = "";
  document.getElementById("content").value = "";
}

function displayPosts() {
  let container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    container.innerHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}">` : ""}

        <div class="actions">
          <button onclick="editPost(${index})">Edit</button>
          <button onclick="deletePost(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function deletePost(index) {
  if (confirm("Delete this post?")) {
    posts.splice(index, 1);
    saveToStorage();
    displayPosts();
  }
}

function editPost(index) {
  editIndex = index;

  document.getElementById("editTitle").value = posts[index].title;
  document.getElementById("editImage").value = posts[index].image;
  document.getElementById("editContent").value = posts[index].content;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function saveEdit() {
  posts[editIndex].title = document.getElementById("editTitle").value;
  posts[editIndex].image = document.getElementById("editImage").value;
  posts[editIndex].content = document.getElementById("editContent").value;

  saveToStorage();
  displayPosts();
  closeModal();
}

displayPosts();