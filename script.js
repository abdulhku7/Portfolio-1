document.addEventListener('DOMContentLoaded', () => {
    // Initial Navigation Functionality
    const initialNav = document.getElementById('initialNav');
    const navContainer = document.querySelector('.nav-container');
    const navSections = document.querySelectorAll('.nav-section');

    // Handle section selection from initial navigation
    navSections.forEach(section => {
        section.addEventListener('click', () => {
            const targetId = section.dataset.section;
            const targetSection = document.getElementById(targetId);
            
            // Hide initial navigation
            initialNav.style.display = 'none';
            
            // Show regular navigation
            navContainer.classList.add('visible');
            
            // Scroll to selected section
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        });
    });

    // Regular Navigation functionality
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-button');

    // Function to update active button based on scroll position
    function updateActiveButton() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < top + height) {
                navButtons.forEach(button => button.classList.remove('active'));
                navButtons[index].classList.add('active');
            }
        });
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.dataset.section;
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            }
        });
    });

    // Update active button on scroll
    window.addEventListener('scroll', updateActiveButton);
    
    // Initial update
    updateActiveButton();

    // Popup functionality
    const popup = document.getElementById('contactPopup');
    const closePopup = document.getElementById('closePopup');
    const contactForm = document.getElementById('contactForm');

    // Function to open popup
    function openPopup() {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close popup
    function closePopupFunc() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Show popup after 2 seconds - DISABLED
    // setTimeout(() => {
    //     openPopup();
    // }, 2000);

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopupFunc();
        }
    });

    // Close popup when clicking close button
    closePopup.addEventListener('click', closePopupFunc);

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Reset form and close popup
        contactForm.reset();
        closePopupFunc();

        // Show success message
        alert('Message sent successfully!');
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
