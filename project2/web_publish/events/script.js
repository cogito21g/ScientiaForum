// script.js

const events = [
    { title: 'Event 1', description: 'Short description of Event 1.' },
    { title: 'Event 2', description: 'Short description of Event 2.' },
    { title: 'Event 3', description: 'Short description of Event 3.' },
    { title: 'Event 4', description: 'Short description of Event 4.' },
    { title: 'Event 5', description: 'Short description of Event 5.' },
    { title: 'Event 6', description: 'Short description of Event 6.' },
    { title: 'Event 7', description: 'Short description of Event 7.' },
    { title: 'Event 8', description: 'Short description of Event 8.' },
    { title: 'Event 9', description: 'Short description of Event 9.' },
    { title: 'Event 10', description: 'Short description of Event 10.' },
    // 더 많은 이벤트 추가 가능...
];

const eventsPerPage = 5;
let currentEventPage = 1;

function displayEvents(page) {
    const startIndex = (page - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const paginatedEvents = events.slice(startIndex, endIndex);

    const eventList = document.querySelector('.events-list');
    eventList.innerHTML = '';

    paginatedEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <button>Join</button>
        `;
        eventList.appendChild(eventCard);
    });

    document.getElementById('page-info').innerText = `Page ${page} of ${Math.ceil(events.length / eventsPerPage)}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentEventPage > 1) {
        currentEventPage--;
        displayEvents(currentEventPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentEventPage < Math.ceil(events.length / eventsPerPage)) {
        currentEventPage++;
        displayEvents(currentEventPage);
    }
});

// 페이지 로드 시 첫 페이지 표시
displayEvents(currentEventPage);
