// Toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', ()=> {
    const isMenuOpen = !mobileMenu.classList.contains('translate-x-full');

    if (isMenuOpen) {
        // Close menu
        mobileMenu.classList.add('translate-x-full');
        mobileMenuButton.classList.remove('-translate-x-64');
    } else {
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuButton.classList.add('-translate-x-64');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuButton.classList.remove('-translate-x-64');
    }
});

const projects = []; // This should be loaded from json or api
class ProjectFilter {
    constructor() {
        this.activeFilters = new Set(['all']);
        this.searchTerm = '';
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.toggleFilter(filter);
            });
        });

        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.renderProjects();
        });
    }

    toggleFilter(filter){
        
    }
}