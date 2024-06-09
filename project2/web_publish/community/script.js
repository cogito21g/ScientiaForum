// script.js

const posts = [
    { title: '제목 1', author: 'User1', date: '2024-06-01', comments: 5 },
    { title: '제목 2', author: 'User2', date: '2024-06-02', comments: 3 },
    { title: '제목 3', author: 'User3', date: '2024-06-03', comments: 8 },
    { title: '제목 4', author: 'User4', date: '2024-06-04', comments: 2 },
    { title: '제목 5', author: 'User5', date: '2024-06-05', comments: 1 },
    { title: '제목 6', author: 'User6', date: '2024-06-06', comments: 7 },
    { title: '제목 7', author: 'User7', date: '2024-06-07', comments: 0 },
    { title: '제목 8', author: 'User8', date: '2024-06-08', comments: 4 },
    { title: '제목 9', author: 'User9', date: '2024-06-09', comments: 6 },
    { title: '제목 10', author: 'User10', date: '2024-06-10', comments: 9 },
    // 더 많은 게시글 추가 가능...
];

const postsPerPage = 5;
let currentPage = 1;

function displayPosts(page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    paginatedPosts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#">${post.title}</a></td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>${post.comments}</td>
        `;
        postList.appendChild(row);
    });

    document.getElementById('page-info').innerText = `Page ${page} of ${Math.ceil(posts.length / postsPerPage)}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPosts(currentPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        currentPage++;
        displayPosts(currentPage);
    }
});

// 페이지 로드 시 첫 페이지 표시
displayPosts(currentPage);
