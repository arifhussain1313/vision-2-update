


const form = document.getElementById('service-form');
const select = document.getElementById('service-select');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedService = select.value;
  if (selectedService) {
    localStorage.setItem('notification', selectedService);
    window.location.href = 'pr.html';
  } else {
    alert('Please select a service');
  }
});


// get the notification icon and count elements
const notificationIcon = document.getElementById('notification-icon');
const notificationCount = document.getElementById('notification-count');
const notificationDropdown = document.getElementById('notification-dropdown');
const notificationList = document.getElementById('notification-list');

// initialize notification count to 0
let notificationCountValue = 0;

// function to update notification count and display notifications
function updateNotifications(request) {
  notificationCountValue++;
  notificationCount.textContent = notificationCountValue;

  // create a new notification list item
  const notificationItem = document.createElement('li');
  notificationItem.textContent = `New request: ${request}`;
  notificationList.appendChild(notificationItem);

  // show the notification dropdown menu
  notificationDropdown.classList.add('show');
}

// add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const request = document.getElementById('service-select').value;
  updateNotifications(request);
});

// add event listener to the notification icon
notificationIcon.addEventListener('click', () => {
  notificationDropdown.classList.toggle('show');
});


