마지막으로 **관리자 대시보드 페이지 (Admin Dashboard)**를 구현하겠습니다.

### 8. 관리자 대시보드 페이지 (Admin Dashboard)

#### HTML 구조 (`admin.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Admin Dashboard</title>
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
        <section class="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div class="dashboard-section">
                <h3>Manage Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>user1</td>
                            <td>user1@example.com</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>user2</td>
                            <td>user2@example.com</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <!-- Repeat rows as needed -->
                    </tbody>
                </table>
            </div>
            <div class="dashboard-section">
                <h3>Manage Posts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Post Title 1</td>
                            <td>user1</td>
                            <td>2023-06-01</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Post Title 2</td>
                            <td>user2</td>
                            <td>2023-06-02</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <!-- Repeat rows as needed -->
                    </tbody>
                </table>
            </div>
            <div class="dashboard-section">
                <h3>Manage Comments</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Comment content 1</td>
                            <td>user1</td>
                            <td>2023-06-01</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Comment content 2</td>
                            <td>user2</td>
                            <td>2023-06-02</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <!-- Repeat rows as needed -->
                    </tbody>
                </table>
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

section.admin-dashboard {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    max-width: 1000px;
    width: 100%;
}

section.admin-dashboard h2 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
    text-align: center;
}

.dashboard-section {
    margin-bottom: 2em;
}

.dashboard-section h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
}

table, th, td {
    border: 1px solid #ccc;
}

th, td {
    padding: 0.5em;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}

td button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: 3px;
    margin-right: 0.5em;
}

td button:hover {
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
   - **관리자 대시보드 섹션**: 중앙에 배치하여 화면의 중심에 오도록 설정.
   - **사용자 관리 섹션**: 사용자 목록을 테이블로 표시하고, 각 사용자에 대해 수정 및 삭제 버튼 포함.
     - 테이블 컬럼: Username, Email, Actions
     - 각 사용자에 대해 수정 및 삭제 버튼 포함.
   - **게시글 관리 섹션**: 게시글 목록을 테이블로 표시하고, 각 게시글에 대해 수정 및 삭제 버튼 포함.
     - 테이블 컬럼: Title, Author, Date, Actions
     - 각 게시글에 대해 수정 및 삭제 버튼 포함.
   - **댓글 관리 섹션**: 댓글 목록을 테이블로 표시하고, 각 댓글에 대해 수정 및 삭제 버튼 포함.
     - 테이블 컬럼: Comment, Author, Date, Actions
     - 각 댓글에 대해 수정 및 삭제 버튼 포함.
   - 각 테이블은 사용자, 게시글, 댓글을 관리하기 쉽게 구성하고 스타일링.
   - 테이블 스타일링: 테이블 셀 간의 경계를 명확히 하고, 컬럼 헤더의 배경색을 설정하여 가독성을 높임.
   - 수정 및 삭제 버튼 스타일링: 사용하기 편리하도록 크기를 조정하고 스타일링.

4. **푸터 섹션**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.
   - 푸터에 패딩을 추가하여 가독성 향상.
   - 링크 스타일링: 링크의 기본 색상은 흰색으로 설정하고, 호버 시 밑줄이 표시되도록 함.

이제 관리자 대시보드 페이지가 완성되었습니다. 추가적인 도움이 필요하시면 말씀해 주세요!