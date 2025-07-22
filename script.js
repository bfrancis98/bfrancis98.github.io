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