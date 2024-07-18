// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const name = document.querySelector('#name').value;
    const contact = document.querySelector('#contact').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const repeatPassword = document.querySelector('#repeat-password').value;
    const city = document.querySelector('#CITY').value;
    const service = document.querySelector('#SERVICE').value;
    const time = document.querySelector('#time').value;
    const rating = document.querySelector('#vol').value;
    const remember = document.querySelector('#remember').checked;
    // Validate form values
    if (name === '' || contact === '' || email === '' || password === '' || repeatPassword === '') {
        alert('Please fill in all fields');
        return;
    }
    if (password!== repeatPassword) {
        alert('Passwords do not match');
        return;
    }
    // Send form data to server
    console.log('Form data:', {
        name,
        contact,
        email,
        password,
        city,
        service,
        time,
        rating,
        remember,
    });
    // TO DO: Send form data to server using AJAX or Fetch API
});