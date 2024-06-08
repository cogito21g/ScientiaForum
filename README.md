# ScientiaForum

**ScientiaForum**은 학생, 교육자, 그리고 지식을 탐구하고자 하는 모든 사람을 위한 교육 커뮤니티입니다. 이 커뮤니티는 사용자들이 교육 관련 정보를 공유하고 토론할 수 있는 공간을 제공합니다. 사용자 친화적인 인터페이스와 다양한 기능을 통해 교육 정보를 쉽게 찾고, 공유하며, 상호작용할 수 있도록 설계되었습니다.

## 주요 기능

- **사용자 인증 및 관리**: 회원가입, 로그인, 로그아웃, 프로필 관리
- **게시판 기능**: 게시글 작성, 조회, 수정, 삭제, 카테고리별 게시판
- **댓글 기능**: 게시글에 대한 댓글 작성, 조회, 수정, 삭제
- **알림 기능**: 새로운 게시글 및 댓글에 대한 알림
- **관리자 기능**: 사용자, 게시글 및 댓글 관리

## 기술 스택

- **프론트엔드**: HTML, CSS, JavaScript (React 또는 Vue.js)
- **백엔드**: Django, Django REST Framework
- **데이터베이스**: SQLite (개발용), PostgreSQL (배포용)
- **인증**: Django Allauth 또는 Django REST Framework JWT
- **배포**: Heroku, AWS, DigitalOcean 등

## 설치 및 실행 방법

1. **리포지토리 클론**
    ```bash
    git clone https://github.com/yourusername/scientiaforum.git
    cd scientiaforum
    ```

2. **가상환경 생성 및 활성화**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **필요한 패키지 설치**
    ```bash
    pip install -r requirements.txt
    ```

4. **데이터베이스 마이그레이션**
    ```bash
    python manage.py migrate
    ```

5. **개발 서버 실행**
    ```bash
    python manage.py runserver
    ```

6. **브라우저에서 웹사이트 열기**
    ```
    http://127.0.0.1:8000
    ```

## 기여 방법

1. 리포지토리를 포크하세요.
2. 새로운 브랜치를 생성하세요.
    ```bash
    git checkout -b feature-branch
    ```
3. 변경 사항을 커밋하세요.
    ```bash
    git commit -m "Add new feature"
    ```
4. 브랜치에 푸시하세요.
    ```bash
    git push origin feature-branch
    ```
5. Pull Request를 생성하세요.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.