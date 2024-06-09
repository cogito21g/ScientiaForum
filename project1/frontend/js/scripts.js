document.addEventListener("DOMContentLoaded", function() {
    const postsPerPage = 2;
    const postsContainer = document.getElementById("posts-container");
    const posts = postsContainer ? postsContainer.getElementsByClassName("post") : [];
    const totalPages = Math.ceil(posts.length / postsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;

        for (let i = 0; i < posts.length; i++) {
            posts[i].style.display = (i >= start && i < end) ? "block" : "none";
        }

        const pageInfo = document.getElementById("page-info");
        if (pageInfo) {
            pageInfo.innerText = `Page ${page} of ${totalPages}`;
        }

        const prevPageButton = document.getElementById("prev-page");
        const nextPageButton = document.getElementById("next-page");
        if (prevPageButton && nextPageButton) {
            prevPageButton.disabled = page === 1;
            nextPageButton.disabled = page === totalPages;
        }
    }

    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    if (prevPageButton && nextPageButton) {
        prevPageButton.addEventListener("click", function() {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        nextPageButton.addEventListener("click", function() {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });

        showPage(currentPage);
    }
});
