// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const ulLinks = document.getElementById('ul-links');

    navToggle.addEventListener('click', function() {
        ulLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addToBucketButtons = document.querySelectorAll('.add-to-bucket');
    const bucketCountElement = document.getElementById('bucket-count');

    let bucket = [];

    addToBucketButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = parseFloat(button.getAttribute('data-price'));

            bucket.push({ item, price });
            updateBucketCount();
        });
    });

    function updateBucketCount() {
        bucketCountElement.textContent = bucket.length;
    }
});

// user function

document.addEventListener('DOMContentLoaded', () => {
    const addToBucketButtons = document.querySelectorAll('.add-to-bucket');
    const favoriteButtons = document.querySelectorAll('.favorite');
    const bucketCountElement = document.getElementById('bucket-count');
    const userIcon = document.querySelector('.user-icon');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    let bucket = [];
    let favorite = [];

    addToBucketButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = parseFloat(button.getAttribute('data-price'));

            bucket.push({ item, price });
            updateBucketCount();
        });
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            if (favorite.includes(item)) {
                favorite = favorite.filter(fav => fav !== item);
                button.classList.remove('favorite');
            } else {
                favorite.push(item);
                button.classList.add('favorite');
            }
            console.log(favorite);
        });
    });

    function updateBucketCount() {
        bucketCountElement.textContent = bucket.length;
    }

    userIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        userIcon.classList.toggle('active');
    });

    userDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        userIcon.classList.remove('active');
    });

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});


// dark mode
 // JavaScript to handle theme switching
 document.getElementById('theme-toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.checked = savedTheme === 'dark-mode';
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // JavaScript to handle search functionality
    const menuItems = [
        { id: 'biryani', name: 'Biryani' },
        { id: 'chicken-chap', name: 'Chicken Chap' },
        // Add more items here
    ];

    document.getElementById('search-input').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const results = menuItems.filter(item => item.name.toLowerCase().includes(query));
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';
        results.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.name;
            div.classList.add('search-result-item');
            div.addEventListener('click', () => {
                document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' });
            });
            resultsContainer.appendChild(div);
        });
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            document.getElementById('search-results').innerHTML = '';
        }
    });
});






