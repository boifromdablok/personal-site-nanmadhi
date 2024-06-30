// Blog Pagination
const blogPosts = [
    { title: "Blog Post 1", content: "Content for Blog Post 1" },
    { title: "Blog Post 2", content: "Content for Blog Post 2" },
    { title: "Blog Post 3", content: "Content for Blog Post 3" },
    { title: "Blog Post 4", content: "Content for Blog Post 4" },
    { title: "Blog Post 5", content: "Content for Blog Post 5" },
    // Add more blog posts as needed
];

const postsPerPage = 2;
let currentPage = 1;

function displayPosts(page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = blogPosts.slice(startIndex, endIndex);

    const blogContainer = document.getElementById('blogPosts');
    blogContainer.innerHTML = '';

    postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
}

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        displayPosts(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage * postsPerPage < blogPosts.length) {
        currentPage++;
        displayPosts(currentPage);
    }
});

// Initial display
displayPosts(currentPage);

// Open and close the sidebar on medium and small screens
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// settings

//darkmode
function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}