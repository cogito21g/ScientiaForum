프론트엔드 프로젝트 구조와 기존 코드에서 수정할 부분을 작성해 드리겠습니다. 

### 프로젝트 구조

```
scientiaforum-frontend/
├── index.html
├── login.html
├── signup.html
├── forum.html
├── create-post.html
├── post-detail.html
├── profile.html
├── admin.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── images/
    └── profile-picture.jpg
```

### 프로젝트 구조 설명

1. **HTML 파일들**: 각 페이지의 HTML 파일
2. **css/ 폴더**: CSS 파일을 저장하는 폴더
3. **js/ 폴더**: JavaScript 파일을 저장하는 폴더
4. **images/ 폴더**: 이미지 파일을 저장하는 폴더

### 수정할 부분

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Home</title>
    <link rel="stylesheet" href="css/styles.css">
    <script defer src="js/scripts.js"></script>
</head>
<body>
    <header>
        <div class="logo">ScientiaForum</div>
        <div class="search-bar">
            <input type="text" placeholder="Search...">
            <button>Search</button>
        </div>
        <div class="auth-buttons">
            <button onclick="location.href='login.html'">Login</button>
            <button onclick="location.href='signup.html'">Sign Up</button>
        </div>
    </header>

    <nav class="nav-bar">
        <ul>
            <li><a href="category.html">Science</a></li>
            <li><a href="category.html">Mathematics</a></li>
            <li><a href="category.html">History</a></li>
            <li><a href="category.html">Literature</a></li>
        </ul>
    </nav>

    <main>
        <section class="popular-posts">
            <h2>Popular Posts</h2>
            <div class="posts-container">
                <!-- Example Post -->
                <div class="post-card">
                    <h3>Post Title</h3>
                    <p>Post summary goes here...</p>
                </div>
                <!-- Repeat Post Card as needed -->
            </div>
        </section>

        <section class="latest-posts">
            <h2>Latest Posts</h2>
            <div class="posts-container">
                <!-- Example Post -->
                <div class="post-card">
                    <h3>Post Title</h3>
                    <p>Post summary goes here...</p>
                </div>
                <!-- Repeat Post Card as needed -->
            </div>
        </section>
    </main>

    <footer>
        <p>Contact: info@scientiaforum.com</p>
        <p><a href="terms.html">Terms of Use</a> | <a href="privacy.html">Privacy Policy</a></p>
    </footer>
</body>
</html>
```

#### login.html, signup.html, forum.html, create-post.html, post-detail.html, profile.html, admin.html

각 페이지의 `<link>` 태그와 `<script>` 태그 경로를 업데이트합니다.

예시 (`login.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Login</title>
    <link rel="stylesheet" href="css/styles.css">
    <script defer src="js/scripts.js"></script>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

#### styles.css

특별한 수정은 필요 없습니다. `css/styles.css` 파일은 모든 페이지에서 동일하게 사용됩니다.

#### scripts.js

특별한 수정은 필요 없습니다. `js/scripts.js` 파일은 모든 페이지에서 동일하게 사용됩니다.

```javascript
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
```

이제 모든 페이지의 파일 경로를 올바르게 설정했고, 프로젝트 구조를 명확히 했습니다. 이 구조를 기반으로 프론트엔드 구현을 진행할 수 있습니다. 추가적인 도움이 필요하시면 말씀해 주세요!