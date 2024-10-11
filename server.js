document.addEventListener('DOMContentLoaded', function () {
    // Capture form elements
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Event listener for Registration Form submission
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent form from submitting

        // Capture form data
        const formData = {
            name: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('ConfirmPassword').value,
            age: document.getElementById('age').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            country: document.getElementById('register-country').value,
            termsAccepted: document.getElementById('terms').checked,
        };

        // Validate form data
        if (!validateRegistrationForm(formData)) {
            return;  // Stop if validation fails
        }

        // Display form data dynamically in the "Form Summary" section
        displayFormData(formData);
    });

    // Validation for Registration Form
    function validateRegistrationForm(formData) {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        // Name validation
        if (!formData.name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        // Email validation
        if (!validateEmail(formData.email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }

        // Password validation
        if (formData.password !== formData.confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        // Gender validation
        if (!formData.gender) {
            document.getElementById('genderError').textContent = 'Please select your gender';
            isValid = false;
        }

        // Terms acceptance validation
        if (!formData.termsAccepted) {
            document.getElementById('termsError').textContent = 'You must accept the terms and conditions';
            isValid = false;
        }

        return isValid;
    }

    // Email format validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to display the captured form data
    function displayFormData(formData) {
        const summary = `
            <h2>Form Summary</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Age:</strong> ${formData.age}</p>
            <p><strong>Gender:</strong> ${formData.gender}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? 'Yes' : 'No'}</p>
        `;

        // Dynamically create a summary section or update it if already exists
        let formSummary = document.getElementById('formSummary');
        if (!formSummary) {
            formSummary = document.createElement('div');
            formSummary.id = 'formSummary';
            document.body.appendChild(formSummary);
        }
        formSummary.innerHTML = summary;
    }

    // Event listener for Login Form (similar structure can be applied if required)
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();  
        // Prevent form from submitting
        // Capture and validate login form data as needed
        // You can implement this part similarly to registration form
    });
});
