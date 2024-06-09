다음 페이지는 **사용자 프로필 페이지 (Profile)**입니다.

### 7. 사용자 프로필 페이지 (Profile)

#### HTML 구조 (`profile.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Profile</title>
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
        <section class="profile">
            <div class="profile-header">
                <img src="profile-picture.jpg" alt="Profile Picture" class="profile-picture">
                <h2>Username</h2>
                <p class="email">user@example.com</p>
                <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla, erat in interdum ullamcorper, odio leo aliquet orci, et sagittis lorem turpis a libero.</p>
                <button onclick="location.href='edit-profile.html'">Edit Profile</button>
            </div>
            <div class="profile-posts">
                <h3>My Posts</h3>
                <div class="post">
                    <h4><a href="post-detail.html">Post Title 1</a></h4>
                    <p>Posted on <em>Date</em></p>
                    <p>Summary of the post...</p>
                </div>
                <div class="post">
                    <h4><a href="post-detail.html">Post Title 2</a></h4>
                    <p>Posted on <em>Date</em></p>
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

section.profile {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
}

.profile-header {
    text-align: center;
}

.profile-header .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1em;
}

.profile-header h2 {
    margin: 0.5em 0;
}

.profile-header .email, .profile-header .bio {
    margin: 0.5em 0;
}

.profile-header button {
    padding: 0.5em 1em;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.profile-header button:hover {
    background-color: #45a049;
}

.profile-posts {
    margin-top: 2em;
}

.profile-posts h3 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
}

.post {
    border-bottom: 1px solid #ccc;
    padding: 1em 0;
    margin-bottom: 1em;
}

.post h4 a {
    color: #333;
    text-decoration: none;
}

.post h4 a:hover {
    text-decoration: underline;
}

.post p {
    margin: 0.5em 0;
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
   - **프로필 섹션**: 중앙에 배치하여 화면의 중심에 오도록 설정.
   - **프로필 헤더**: 프로필 사진, 사용자 이름, 이메일, 자기소개 및 프로필 수정 버튼 포함.
   - **프로필 게시글 목록**: 사용자가 작성한 게시글 목록을 포함하며, 각 게시글의 제목, 작성일, 요약을 표시.
   - 각 입력 필드와 버튼은 사용하기 편리하도록 크기를 조정하고 스타일링.

4. **푸터 섹션**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.
   - 푸터에 패딩을 추가하여 가독성 향상.

이제 사용자 프로필 페이지가 완성되었습니다. 다음 페이지 구현을 위해 계속 진행하거나, 특정 부분에 대한 추가적인 도움이 필요하시면 말씀해 주세요!