다음 페이지는 **게시글 상세 페이지 (Post Detail)**입니다.

### 6. 게시글 상세 페이지 (Post Detail)

#### HTML 구조 (`post-detail.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Post Detail</title>
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
        <section class="post-detail">
            <h2>Post Title</h2>
            <p class="post-meta">Posted by <strong>Author Name</strong> on <em>Date</em></p>
            <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                <p>Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <!-- Add more content as needed -->
            </div>

            <h3>Comments</h3>
            <div class="comments">
                <div class="comment">
                    <p><strong>Commenter Name</strong> on <em>Date</em></p>
                    <p>Comment content goes here...</p>
                </div>
                <!-- Repeat Comment Div as needed -->
            </div>

            <h3>Leave a Comment</h3>
            <form action="post-detail.html" method="post" class="comment-form">
                <div class="form-group">
                    <label for="commenter-name">Name:</label>
                    <input type="text" id="commenter-name" name="commenter-name" required>
                </div>
                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea id="comment" name="comment" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
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
    background-color: #f9f9f9;
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
    margin-bottom: 20px;
}

.nav-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
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
    padding: 20px;
    display: flex;
    justify-content: center;
}

section.post-detail {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
}

section.post-detail h2 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
}

.post-meta {
    font-size: 0.9em;
    color: #666;
}

.post-content p {
    margin: 1em 0;
}

.comments {
    margin-top: 2em;
}

.comment {
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #ccc;
}

.comment p {
    margin: 0.5em 0;
}

.comment-form .form-group {
    margin-bottom: 1em;
}

.comment-form .form-group label {
    display: block;
    margin-bottom: 0.5em;
}

.comment-form .form-group input,
.comment-form .form-group textarea {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.comment-form button {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.comment-form button:hover {
    background-color: #45a049;
}

footer {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
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
   - **게시글 제목**: 페이지 상단에 배치하여 큰 글씨로 강조.
   - **게시글 메타 정보**: 작성자와 작성일을 표시.
   - **게시글 내용**: 본문을 중앙에 배치하여 가독성을 높임.
   - **댓글 섹션**: 게시글 아래에 배치, 각 댓글의 작성자, 작성일, 내용을 표시.
   - **댓글 작성 폼**: 댓글 섹션 아래에 배치, 이름과 댓글 내용을 입력할 수 있는 필드를 포함.
   - 각 입력 필드와 버튼은 사용하기 편리하도록 크기를 조정하고 스타일링.

4. **푸터 섹션**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.
   - 푸터에 패딩을 추가하여 가독성 향상.

이제 게시글 상세 페이지가 완성되었습니다. 다음 페이지 구현을 위해 계속 진행하거나, 특정 부분에 대한 추가적인 도움이 필요하시면 말씀해 주세요!