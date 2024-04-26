const themeSwitcher = document.querySelector('.icon');
const containerLight = document.querySelector('.container-light');
const backButtonEl = document.querySelector('.back');

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

// Back button to go back on the blog posting form page
backButtonEl.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = 'index.html';
});

// Function to display the user's blogs on the webpage
const displayBlogs = function (blogsArray) {
  // Selects HTML element with the class that has the container where the blogs will be displayed
  const content = document.querySelector('.containerSection');
  
  // Loop through the user data and create a div for each post
  for (let i=0; i < blogsArray.length; i++) {
    const currentContent = blogsArray[i];

    const newSection = document.createElement('div');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = currentContent.title;
    newSection.append(title);

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = currentContent.content;
    newSection.append(paragraph);

    const postedBy = document.createElement ('h5');
    postedBy.classList.add('postedBy');
    postedBy.textContent = "Posted by: " + currentContent.username;
    newSection.append(postedBy);

    content.append(newSection);
  }
}