const themeSwitcher = document.querySelector('.icon');
const containerLight = document.querySelector('.container-light');
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitEl = document.querySelector(".submit");

// Set default mode to light
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      containerLight.setAttribute('class', 'light');
      themeSwitcher.textContent = "🌞"
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      containerLight.setAttribute('class', 'dark');
      themeSwitcher.textContent = "🌛"
    }
  });

  // on Click listener to get the content filled on the form by the user
  submitEl.addEventListener('click', function (event) {
    // Prevent default behavior of submit button
    event.preventDefault();
    // create object with properties and assigns values retried from the input fields
    const blog = {
      username: usernameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
      };
  // checks if the verifyFields function returns false and if so proceeds to create and render the blog
    if (!verifyFields(blog)) {
      createAndRenderBlog(blog);
  // changes the current page's URL to "blog.html".
    window.location.href = "blog.html";
    }
  });

  // VerifyFields function checks if the username, title, or content fields are empty and alerts the user if so
  function verifyFields(blog) {
    let usernameIsEmpty = false;
    let titleIsEmpty = false;
    let contentIsEmpty = false;
  
    if (blog.username === "") {
      usernameIsEmpty = true;
    }
    if (blog.title === "") {
      titleIsEmpty = true;
    }
    if (blog.content === "") {
      contentIsEmpty = true;
    }
  
    let alertMessage = `Please fill out these fields: ${
     usernameIsEmpty ? "username" : ""
    } ${titleIsEmpty ? "title" : ""} ${contentIsEmpty ? "content" : ""}`;
    
    if(usernameIsEmpty || titleIsEmpty || contentIsEmpty){
      alert(alertMessage);
      return true;
    }
    return false;
  }
  