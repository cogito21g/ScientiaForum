다음 페이지는 **게시판 페이지 (Forum)**입니다.

### 4. 게시판 페이지 (Forum)

#### HTML 구조 (`forum.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Forum</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">ScientiaForum</div>
        <div class="auth-buttons">
            <button onclick="location.href='login.html'">Login</button>
            <button onclick="location.href='signup.html'">Sign Up</button>
        </div>
    </header>

    <!-- Navigation Bar -->
    <nav class="nav-bar">
        <ul>
            <li><a href="category.html">Science</a></li>
            <li><a href="category.html">Mathematics</a></li>
            <li><a href="category.html">History</a></li>
            <li><a href="category.html">Literature</a></li>
        </ul>
    </nav>

    <!-- Main Content Section -->
    <main>
        <section class="forum">
            <h2>Forum</h2>
            <div class="categories">
                <h3>Categories</h3>
                <ul>
                    <li><a href="science.html">Science</a></li>
                    <li><a href="mathematics.html">Mathematics</a></li>
                    <li><a href="history.html">History</a></li>
                    <li><a href="literature.html">Literature</a></li>
                </ul>
            </div>
            <div class="posts-list">
                <h3>Posts</h3>
                <div class="post">
                    <h4><a href="post-detail.html">Post Title</a></h4>
                    <p>Posted by <strong>Author Name</strong> on <em>Date</em></p>
                    <p>Summary of the post...</p>
                </div>
                <!-- Repeat Post Div as needed -->
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>Contact: info@scientiaforum.com</p>
        <p><a href="terms.html">Terms of Use</a> | <a href="privacy.html">Privacy Policy</a></p>
    </footer>
</body>
</html>
```

#### CSS 스타일 (`styles.css`)

```css
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo {
    font-size: 1.5em;
}

header .auth-buttons button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5em 1em;
    margin: 0 0.5em;
    cursor: pointer;
}

header .auth-buttons button:hover {
    background-color: #45a049;
}

/* Navigation Bar Styles */
.nav-bar {
    background-color: #4CAF50;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.nav-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav-bar ul li {
    display: inline;
}

.nav-bar ul li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-size: 1em;
}

.nav-bar ul li a:hover {
    background-color: #45a049;
}

main {
    padding: 2em;
}

section.forum {
    display: flex;
    gap: 2em;
}

.categories, .posts-list {
    flex: 1;
}

.categories h3, .posts-list h3 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5em;
}

.categories ul {
    list-style-type: none;
    padding: 0;
}

.categories ul li {
    margin: 1em 0;
}

.categories ul li a {
    color: #4CAF50;
    text-decoration: none;
    font-size: 1.1em;
}

.categories ul li a:hover {
    text-decoration: underline;
}

.post {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1em;
    margin-bottom: 1em;
    background-color: #f9f9f9;
}

.post h4 a {
    color: #333;
    text-decoration: none;
}

.post h4 a:hover {
    text-decoration: underline;
}

footer {
    display: flex;
    justify-content: space-between;
}

footer a {
    color: white;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
```

### 설명

1. **헤더 섹션**
   - **로고**: 좌측 상단에 배치하여 홈페이지로 링크 설정.
   - **로그인/회원가입 버튼**: 우측 상단에 배치.

2. **네비게이션 바**
   - 헤더 아래에 배치하여 중앙에 위치.
   - 각 카테고리에 대한 버튼을 `<ul>` 및 `<li>` 태그를 사용하여 목록 형태로 구성.
   - 배경색과 텍스트 스타일을 개선하여 시각적으로 더 매력적으로 보이도록 설정.
   - 호버 시 배경색이 변경되도록 설정.

3. **메인 콘텐츠**
   - **카테고리 목록**: 좌측에 배치하여 사용자가 관심 있는 카테고리를 선택할 수 있도록 구성.
   - **게시글 목록**: 중앙에 배치하여 각 게시글의 제목, 작성자, 작성일, 요약을 표시.
   - 각 게시글은 카드 형태로 표시.

4. **푸터**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.

이제 게시판 페이지가 완성되었습니다. 다음 페이지 구현을 위해 계속 진행하거나, 특정 부분에 대한 추가적인 도움이 필요하시면 말씀해 주세요!