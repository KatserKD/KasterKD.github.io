// 1. Welcome Alert and Display Name
window.addEventListener('DOMContentLoaded', function() {
    // Welcome alert and get user's name
    const userName = prompt("Welcome to my portfolio! Please enter your full name:");
    
    if (userName && userName.trim() !== "") {
        // Create element to display user's name at the top
        const nameDisplay = document.createElement('p');
        nameDisplay.textContent = `Welcome, ${userName}!`;
        nameDisplay.className = 'welcome-message';
        
        // Insert before header section
        const headerSection = document.querySelector('.header-section');
        document.querySelector('.main-content').insertBefore(nameDisplay, headerSection);
    }
    
    // 5. Live Clock
    const clockElement = document.createElement('div');
    clockElement.id = 'live-clock';
    document.body.appendChild(clockElement);
    
    // Update clock every second
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('live-clock').textContent = timeString;
    }
    
    updateClock(); // Initial call
    setInterval(updateClock, 1000); // Update every second
});

// 3. Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone'); // Added phone input
            const messageInput = document.getElementById('message');
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
                alert('Please enter your name');
                nameInput.focus();
                isValid = false;
                return;
            }
            
            // Validate email
            const emailValue = emailInput.value.trim();
            if (!emailValue) {
                alert('Please enter your email');
                emailInput.focus();
                isValid = false;
                return;
            }
            
            // Check email format
            if (!emailValue.includes('@') || !emailValue.includes('.')) {
                alert('Please enter a valid email address');
                emailInput.focus();
                isValid = false;
                return;
            }
            
            // Validate phone
            if (!phoneInput.value.trim()) {
                alert('Please enter your phone number');
                phoneInput.focus();
                isValid = false;
                return;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                alert('Please enter a message');
                messageInput.focus();
                isValid = false;
                return;
            }
            
            if (isValid) {
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
});

// 4. Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌙 Dark Mode';
    toggleButton.id = 'dark-mode-toggle';
    document.body.appendChild(toggleButton);
    
    // Check if user preference exists in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply dark mode if saved preference exists
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️ Light Mode';
    }
    
    // Toggle dark mode on button click
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        const isDarkModeNow = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkModeNow);
        
        if (isDarkModeNow) {
            toggleButton.textContent = '☀️ Light Mode';
        } else {
            toggleButton.textContent = '🌙 Dark Mode';
        }
    });
});

// 6. Dynamic Courses List
document.addEventListener('DOMContentLoaded', function() {
    // Array of courses
    const courses = [
        {
            title: "Web Development",
            code: "INT206",
            description: "Learned HTML, CSS, and JavaScript to build responsive websites. Created interactive web pages and implemented various features using client-side scripting."
        },
        {
            title: "Java Programming",
            code: "CSC101",
            description: "Studied object-oriented programming concepts using Java. Developed console applications and GUI programs using JavaFX."
        },
        {
            title: "Network Security",
            code: "NET301",
            description: "Explored network security principles, encryption techniques, and security protocols. Implemented various security measures to protect network infrastructure."
        },
        {
            title: "Database Systems",
            code: "DBS205",
            description: "Learned about database design, SQL, and database management systems. Created relational databases and implemented complex queries."
        },
        {
            title: "Cyber Security Fundamentals",
            code: "SEC101",
            description: "Studied basic principles of cybersecurity, threat identification, and prevention techniques. Practiced vulnerability assessment and penetration testing."
        },
        {
            title: "Python Programming",
            code: "CSC205",
            description: "Explored Python programming language for data analysis and automation. Developed scripts for various applications and data manipulation."
        }
    ];
    
    // Create courses section if it doesn't exist
    let coursesSection = document.getElementById('courses');
    if (!coursesSection) {
        coursesSection = document.createElement('section');
        coursesSection.id = 'courses';
        coursesSection.className = 'content-section';
        
        const coursesTitle = document.createElement('h2');
        coursesTitle.className = 'content-title';
        coursesTitle.textContent = 'My Courses';
        
        coursesSection.appendChild(coursesTitle);
        
        // Find education section to insert after it
        const educationSection = document.getElementById('education');
        const sectionDivider = educationSection.nextElementSibling;
        educationSection.parentNode.insertBefore(coursesSection, sectionDivider);
        
        // Create new divider after courses
        const newDivider = document.createElement('div');
        newDivider.className = 'section-divider';
        educationSection.parentNode.insertBefore(newDivider, sectionDivider);
        
        // Add to navigation
        const navUl = document.querySelector('.main-nav ul');
        const contactNavItem = document.querySelector('.main-nav ul li:nth-last-child(1)');
        
        const coursesNavItem = document.createElement('li');
        const coursesNavLink = document.createElement('a');
        coursesNavLink.href = '#courses';
        coursesNavLink.textContent = 'Courses';
        coursesNavItem.appendChild(coursesNavLink);
        
        navUl.insertBefore(coursesNavItem, contactNavItem);
    }
    
    // Function to display random courses
    function displayRandomCourses() {
        // Clear previous courses
        const coursesList = document.getElementById('courses-list');
        if (coursesList) {
            coursesList.remove();
        }
        
        // Create new list
        const newCoursesList = document.createElement('div');
        newCoursesList.id = 'courses-list';
        newCoursesList.style.marginTop = '30px';
        
        // Shuffle and select random courses
        const shuffledCourses = [...courses].sort(() => 0.5 - Math.random());
        const selectedCourses = shuffledCourses.slice(0, 3); // Display 3 random courses
        
        selectedCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.style.marginBottom = '30px';
            courseItem.style.textAlign = 'left';
            courseItem.style.padding = '20px';
            courseItem.style.borderLeft = '4px solid #f97316';
            courseItem.style.backgroundColor = '#f8f8f8';
            
            const courseTitle = document.createElement('h3');
            courseTitle.style.marginBottom = '10px';
            courseTitle.style.color = '#1e293b';
            courseTitle.textContent = `${course.title} (${course.code})`;
            
            const courseDescription = document.createElement('p');
            courseDescription.style.color = '#666';
            courseDescription.style.lineHeight = '1.6';
            courseDescription.textContent = course.description;
            
            courseItem.appendChild(courseTitle);
            courseItem.appendChild(courseDescription);
            newCoursesList.appendChild(courseItem);
        });
        
        // Add refresh button
        const refreshButton = document.createElement('button');
        refreshButton.textContent = '🔄 Refresh Courses';
        refreshButton.style.backgroundColor = '#1e293b';
        refreshButton.style.color = 'white';
        refreshButton.style.border = 'none';
        refreshButton.style.padding = '10px 15px';
        refreshButton.style.borderRadius = '4px';
        refreshButton.style.cursor = 'pointer';
        refreshButton.style.marginTop = '20px';
        
        refreshButton.addEventListener('click', displayRandomCourses);
        
        newCoursesList.appendChild(refreshButton);
        const backToTopLink = document.createElement('a');
        backToTopLink.href = '#';
        backToTopLink.className = 'back-to-top';
        backToTopLink.textContent = '↑ Back to Top';
        newCoursesList.appendChild(backToTopLink);
        coursesSection.appendChild(newCoursesList);
    }
    
    // Initial display
    displayRandomCourses();
    
    // Change courses every 30 seconds
    setInterval(displayRandomCourses, 30000);
});

// 7. Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    // Create the button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '&#8679;'; // Up arrow
    scrollTopButton.id = 'scroll-top';
    scrollTopButton.title = 'Go to top';
    
    document.body.appendChild(scrollTopButton);
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});