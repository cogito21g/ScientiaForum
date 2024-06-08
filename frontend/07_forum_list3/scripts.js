document.addEventListener("DOMContentLoaded", function() {
    const postsPerPage = 2;
    const postsContainer = document.getElementById("posts-container");
    const posts = postsContainer.getElementsByClassName("post");
    const totalPages = Math.ceil(posts.length / postsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;

        for (let i = 0; i < posts.length; i++) {
            posts[i].style.display = (i >= start && i < end) ? "block" : "none";
        }

        document.getElementById("page-info").innerText = `Page ${page} of ${totalPages}`;
        document.getElementById("prev-page").disabled = page === 1;
        document.getElementById("next-page").disabled = page === totalPages;
    }

    document.getElementById("prev-page").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("next-page").addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
