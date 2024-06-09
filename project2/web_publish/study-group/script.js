// script.js

const groups = [
    { title: 'Study Group 1', description: 'Short description of Study Group 1.' },
    { title: 'Study Group 2', description: 'Short description of Study Group 2.' },
    { title: 'Study Group 3', description: 'Short description of Study Group 3.' },
    { title: 'Study Group 4', description: 'Short description of Study Group 4.' },
    { title: 'Study Group 5', description: 'Short description of Study Group 5.' },
    { title: 'Study Group 6', description: 'Short description of Study Group 6.' },
    { title: 'Study Group 7', description: 'Short description of Study Group 7.' },
    { title: 'Study Group 8', description: 'Short description of Study Group 8.' },
    { title: 'Study Group 9', description: 'Short description of Study Group 9.' },
    { title: 'Study Group 10', description: 'Short description of Study Group 10.' },
    // 더 많은 그룹 추가 가능...
];

const groupsPerPage = 5;
let currentGroupPage = 1;

function displayGroups(page) {
    const startIndex = (page - 1) * groupsPerPage;
    const endIndex = startIndex + groupsPerPage;
    const paginatedGroups = groups.slice(startIndex, endIndex);

    const groupList = document.querySelector('.study-groups-list');
    groupList.innerHTML = '';

    paginatedGroups.forEach(group => {
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.innerHTML = `
            <h3>${group.title}</h3>
            <p>${group.description}</p>
            <button>Join</button>
        `;
        groupList.appendChild(groupCard);
    });

    document.getElementById('page-info').innerText = `Page ${page} of ${Math.ceil(groups.length / groupsPerPage)}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentGroupPage > 1) {
        currentGroupPage--;
        displayGroups(currentGroupPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentGroupPage < Math.ceil(groups.length / groupsPerPage)) {
        currentGroupPage++;
        displayGroups(currentGroupPage);
    }
});

// 페이지 로드 시 첫 페이지 표시
displayGroups(currentGroupPage);
