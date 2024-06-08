다음 페이지는 **회원가입 페이지 (Sign Up)**입니다.

### 3. 회원가입 페이지 (Sign Up)

#### HTML 구조 (`signup.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScientiaForum - Sign Up</title>
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

    <!-- Sign Up Form Section -->
    <main>
        <section class="signup-form">
            <h2>Sign Up</h2>
            <form action="welcome.html" method="post">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <a href="login.html">Login</a></p>
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

main {
    padding: 2em;
}

section.signup-form {
    max-width: 400px;
    margin: 0 auto;
    background-color: #f4f4f4;
    padding: 2em;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

section.signup-form h2 {
    margin-bottom: 1em;
    text-align: center;
}

section.signup-form .form-group {
    margin-bottom: 1em;
}

section.signup-form .form-group label {
    display: block;
    margin-bottom: 0.5em;
}

section.signup-form .form-group input {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

section.signup-form button {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

section.signup-form button:hover {
    background-color: #45a049;
}

section.signup-form p {
    text-align: center;
}

section.signup-form p a {
    color: #4CAF50;
    text-decoration: none;
}

section.signup-form p a:hover {
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

2. **회원가입 폼 섹션**
   - 중앙에 배치하여 화면의 중심에 오도록 설정.
   - 이름, 이메일, 비밀번호, 비밀번호 확인 입력 필드, 회원가입 버튼, 로그인 링크를 포함.
   - 입력 필드와 버튼은 사용하기 편리하도록 크기를 조정하고 스타일링.

3. **푸터 섹션**
   - 연락처, 이용약관, 개인정보처리방침 링크를 포함.

이제 회원가입 페이지가 완성되었습니다. 다음 페이지 구현을 위해 계속 진행하거나, 특정 부분에 대한 추가적인 도움이 필요하시면 말씀해 주세요!