function createAndRenderBlog(blog) {
    // Function checks if there are any blogs already in local storage 
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    // If none stored already, adds the new blog to the local storage
    if (blogs === null) {
      localStorage.setItem("blogs", JSON.stringify([blog]));
    // Otherwise, appends the new blog to the existing list of blogs in local storage
    } else {
      blogs.push(blog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
}

  function createBlog() {
    // Function retrieves stored blogs from local storage and converts them from JSON format to JavaScript object
    const blog = JSON.parse(localStorage.getItem("blogs"));
    // Function then logs them to the console
    console.log(blog);
    // Then calls the displayBlogs function to display the blogs
    displayBlogs(blog);
}