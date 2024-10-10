document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        displayFeedback('Form submitted successfully!', 'green');
    })
    .catch(error => {
        displayFeedback('Error submitting form.', 'red');
    });
});

function displayFeedback(message, color) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = message;
    feedbackDiv.style.color = color;
    feedbackDiv.style.display = 'block';
}

document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const feedback = document.getElementById('nameFeedback');
    if (name.length < 3) {
        feedback.innerText = 'Name must be at least 3 characters long.';
        feedback.style.color = 'red';
    } else {
        feedback.innerText = 'Name looks good!';
        feedback.style.color = 'green';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const feedback = document.getElementById('emailFeedback');
    if (!emailRegex.test(email)) {
        feedback.innerText = 'Invalid email address.';
        feedback.style.color = 'red';
    } else {
        feedback.innerText = 'Email looks good!';
        feedback.style.color = 'green';
    }
});

