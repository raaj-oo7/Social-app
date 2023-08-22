const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");
const btn1 = document.getElementById("btn1");
const postTitle = document.getElementById("postTitle");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  const formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post can't be blank";
      console.log("failure");
    }
    else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
  };
  formValidation();
});

let data = [];

function updateStatus() {
  if (data.length === 0) {
    postTitle.style.display = "none";
  } else {
    postTitle.style.display = "block";
  }
}

const acceptData = () => {
  data.push({
    text: input.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

  createPost();
};
const createPost = () => {
  posts.innerHTML = "";
  data.map((x, y) => {
    return (posts.innerHTML += `
    <div>
    <p>${x.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `);
  });
  input.value = "";
  updateStatus();
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  updateStatus();
};

const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  deletePost(e);
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createPost();
})();



let fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(fruits.hasOwnProperty(3));
console.log(fruits.hasOwnProperty(4));