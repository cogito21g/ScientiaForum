다음 페이지는 **게시글 작성 페이지 (Create Post)**입니다.

### 5. 게시글 작성 페이지 (Create Post)

#### HTML 구조 (`create-post.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Create Post</title>
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
        <section class="create-post-form">
            <h2>Create Post</h2>
            <form action="forum.html" method="post">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required>
                </div>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="science">Science</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="history">History</option>
                        <option value="literature">Literature</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="content">Content:</label>
                    <textarea id="content" name="content" rows="10" required></textarea>
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

section.create-post-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
}

section.create-post-form h2 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
}

section.create-post-form .form-group {
    margin-bottom: 1em;
}

section.create-post-form .form-group label {
    display: block;
    margin-bottom: 0.5em;
}

section.create-post-form .form-group input,
section.create-post-form .form-group select,
section.create-post-form .form-group textarea {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

section.create-post-form button {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

section.create-post-form button:hover {
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
   - 네비게이션 바 아래에 약간의 마진을 추가하여 컨텐츠와 분리.

3. **메인 콘텐츠**
   - 중앙에 배치하여 화면의 중심에 오도록 설정.
   - **게시글 작성 폼**: 사용자가 게시글을 작성할 수 있도록 제목, 카테고리 선택, 내용 입력 필드를 포함.
   - 입력 필드와 버튼은 사용하기 편리하도록 크기를 조정하고 스타일링.

4. **푸터 섹션**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.
   - 푸터에 패딩을 추가하여 가독성 향상.

이제 게시글 작성 페이지가 완성되었습니다. 다음 페이지 구현을 위해 계속 진행하거나, 특정 부분에 대한 추가적인 도움이 필요하시면 말씀해 주세요!