const result = document.querySelector(".result");

function APICallUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const posts = JSON.parse(this.responseText);
      displayPosts(posts);
    } else {
      console.log("error while fetching the data");
    }
  };
  xhr.send();
}

function APICallUsingFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data))
    .catch(() => console.log("error while fetching the data"))
    .finally(() => console.log("api call completed"));
}

const APICallUsingAsyncAwait = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    displayPosts(data);
  } catch (error) {
    console.log("Error: " + error);
  }
};

const APICallUsingPromise = async () => {
  const response = await xhrPromise();
  displayPosts(response);
};

const xhrPromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.onload = function () {
      if (this.status === 200) {
        const posts = JSON.parse(this.responseText);
        resolve(posts);
      } else {
        reject(this.responseText);
      }
    };
    xhr.send();
  });
};

const displayPosts = (posts) => {
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post__container";
    div.innerHTML = `
            <h4 class='post__title'>${post.title}</h4>
            <p class='post__description'>${post.body}</p>
        `;
    result.appendChild(div);
  });
};

// APICallUsingXHR();
// APICallUsingFetch();
// APICallUsingAsyncAwait();
APICallUsingPromise();
