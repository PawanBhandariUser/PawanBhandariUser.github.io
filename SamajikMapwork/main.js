document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton) {
        // Create mobile menu if it doesn't exist
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu fixed inset-0 bg-white z-50 p-4 transform translate-x-full transition-transform duration-300';
            mobileMenu.innerHTML = `
                <div class="flex justify-between items-center mb-8">
                    <div class="text-2xl font-bold gradient-text">Samaik Mapwork</div>
                    <button class="close-menu text-gray-700 text-2xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="flex flex-col space-y-4">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600 text-xl font-medium">Home</a>
                    <a href="practice.html" class="text-gray-700 hover:text-blue-600 text-xl font-medium">Practice</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600 text-xl font-medium">About Us</a>
                </div>
            `;
            document.body.appendChild(mobileMenu);
            
            // Add close functionality
            document.querySelector('.close-menu').addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
            });
        }

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('translate-x-full');
        });
    }

    // Update active link styling
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('text-blue-600');
            link.classList.remove('text-gray-700', 'hover:text-blue-600');
        }
    });
});