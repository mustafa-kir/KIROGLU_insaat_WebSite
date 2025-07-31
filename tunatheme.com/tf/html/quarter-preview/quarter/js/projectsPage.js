document.addEventListener('DOMContentLoaded', function() {
    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "New Apartment Nice View",
            type: "Apartman",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Belmont Gardens, Chicago",
            beds: 3,
            baths: 2,
            area: 3450,
            price: 34900,
            priceLabel: "/Month",
            image: "img/product-3/1.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-15')
        },
        {
            id: 2,
            title: "Luxury Residence",
            type: "Rezidans",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Downtown, New York",
            beds: 4,
            baths: 3,
            area: 4200,
            price: 58900,
            priceLabel: "/Month",
            image: "img/product-3/2.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-20')
        },
        {
            id: 3,
            title: "Modern Villa",
            type: "Villa",
            status: "Yeni Başladı",
            apartmentStatus: "Kiralık",
            location: "Malibu, California",
            beds: 5,
            baths: 4,
            area: 5200,
            price: 78900,
            priceLabel: "/Month",
            image: "img/product-3/3.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-02-10')
        },
        {
            id: 4,
            title: "Business Complex",
            type: "Ofis",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Financial District, San Francisco",
            beds: 0,
            baths: 2,
            area: 6800,
            price: 125000,
            priceLabel: "",
            image: "img/product-3/4.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-04-05')
        },
        {
            id: 5,
            title: "Seaside Apartment",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Kiralık",
            location: "Miami Beach, Florida",
            beds: 2,
            baths: 2,
            area: 1800,
            price: 28000,
            priceLabel: "/Month",
            image: "img/product-3/5.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-25')
        },
        {
            id: 6,
            title: "Urban Loft",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Soho, London",
            beds: 1,
            baths: 1,
            area: 1200,
            price: 45000,
            priceLabel: "",
            image: "img/product-3/6.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-15')
        },
        {
            id: 1,
            title: "New Apartment Nice View",
            type: "Apartman",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Belmont Gardens, Chicago",
            beds: 3,
            baths: 2,
            area: 3450,
            price: 34900,
            priceLabel: "/Month",
            image: "img/product-3/1.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-15')
        },
        {
            id: 2,
            title: "Luxury Residence",
            type: "Rezidans",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Downtown, New York",
            beds: 4,
            baths: 3,
            area: 4200,
            price: 58900,
            priceLabel: "/Month",
            image: "img/product-3/2.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-20')
        },
        {
            id: 3,
            title: "Modern Villa",
            type: "Villa",
            status: "Yeni Başladı",
            apartmentStatus: "Kiralık",
            location: "Malibu, California",
            beds: 5,
            baths: 4,
            area: 5200,
            price: 78900,
            priceLabel: "/Month",
            image: "img/product-3/3.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-02-10')
        },
        {
            id: 4,
            title: "Business Complex",
            type: "Ofis",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Financial District, San Francisco",
            beds: 0,
            baths: 2,
            area: 6800,
            price: 125000,
            priceLabel: "",
            image: "img/product-3/4.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-04-05')
        },
        {
            id: 5,
            title: "Seaside Apartment",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Kiralık",
            location: "Miami Beach, Florida",
            beds: 2,
            baths: 2,
            area: 1800,
            price: 28000,
            priceLabel: "/Month",
            image: "img/product-3/5.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-25')
        },
        {
            id: 6,
            title: "Urban Loft",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Soho, London",
            beds: 1,
            baths: 1,
            area: 1200,
            price: 45000,
            priceLabel: "",
            image: "img/product-3/6.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-15')
        },
        {
            id: 1,
            title: "New Apartment Nice View",
            type: "Apartman",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Belmont Gardens, Chicago",
            beds: 3,
            baths: 2,
            area: 3450,
            price: 34900,
            priceLabel: "/Month",
            image: "img/product-3/1.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-15')
        },
        {
            id: 2,
            title: "Luxury Residence",
            type: "Rezidans",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Downtown, New York",
            beds: 4,
            baths: 3,
            area: 4200,
            price: 58900,
            priceLabel: "/Month",
            image: "img/product-3/2.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-20')
        },
        {
            id: 3,
            title: "Modern Villa",
            type: "Villa",
            status: "Yeni Başladı",
            apartmentStatus: "Kiralık",
            location: "Malibu, California",
            beds: 5,
            baths: 4,
            area: 5200,
            price: 78900,
            priceLabel: "/Month",
            image: "img/product-3/3.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-02-10')
        },
        {
            id: 4,
            title: "Business Complex",
            type: "Ofis",
            status: "Devam Ediyor",
            apartmentStatus: "Satılık",
            location: "Financial District, San Francisco",
            beds: 0,
            baths: 2,
            area: 6800,
            price: 125000,
            priceLabel: "",
            image: "img/product-3/4.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-04-05')
        },
        {
            id: 5,
            title: "Seaside Apartment",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Kiralık",
            location: "Miami Beach, Florida",
            beds: 2,
            baths: 2,
            area: 1800,
            price: 28000,
            priceLabel: "/Month",
            image: "img/product-3/5.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Rent",
            dateAdded: new Date('2025-01-25')
        },
        {
            id: 6,
            title: "Urban Loft",
            type: "Apartman",
            status: "Tamamlandı",
            apartmentStatus: "Satılık",
            location: "Soho, London",
            beds: 1,
            baths: 1,
            area: 1200,
            price: 45000,
            priceLabel: "",
            image: "img/product-3/6.jpg",
            agentImage: "img/blog/author.jpg",
            badge: "For Sale",
            dateAdded: new Date('2025-03-15')
        }
        
    ];

    // Global variables
    let currentPage = 1;
    let itemsPerPage = 12;
    let filteredProjects = [...projects];

    // Initialize the page
    function init() {
        // Set up event listeners
        setupEventListeners();
      
        // Update filter counts
        updateFilterCounts();
        
        // Initial render
        renderProjects();
    }
    
    // Set up all event listeners
    function setupEventListeners() {
        // Filter checkboxes
        document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                currentPage = 1;
                filterProjects();
            });
        });
        
  
        // Reset filters button
        document.getElementById('reset-filters').addEventListener('click', resetFilters);
    }

    // Main filtering function
    function filterProjects() {
        // Get selected filters
        const selectedTypes = getSelectedValues('project-type');
        const selectedStatuses = getSelectedValues('project-status');
        const selectedApartmentStatuses = getSelectedValues('apartment-status');

        // Filter projects
        filteredProjects = projects.filter(project => {
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(project.type);
            const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(project.status);
            const apartmentStatusMatch = selectedApartmentStatuses.length === 0 ||
                selectedApartmentStatuses.includes(project.apartmentStatus);

            return typeMatch && statusMatch && apartmentStatusMatch;
        });

        

        // Render the results
        renderProjects();
    }

    // Sort projects based on selected option
    // Sıralama fonksiyonu örneği
    

    // Get paginated projects for current page
    function getPaginatedProjects() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredProjects.slice(startIndex, endIndex);
    }

    // Reset all filters
    function resetFilters() {
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset sorting to default
        document.getElementById('sort-projects').value = 'default';

       

        // Reset filtered projects
        filteredProjects = [...projects];

        // Re-render
        renderProjects();
    }
    
    // Get selected values from checkboxes
    function getSelectedValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Main rendering function
    function renderProjects() {
        const paginatedProjects = getPaginatedProjects();

        // Render grid view
        renderGridView(paginatedProjects);

        // Render list view
        renderListView(paginatedProjects);

        // Update pagination controls
        updatePaginationControls();
    }

    // Render grid view
    function renderGridView(projectsToShow) {
        const gridContainer = document.querySelector('.ltn__product-grid-view .row');

        // Clear existing content except search widget
        const searchWidget = gridContainer.querySelector('.ltn__search-widget');
        gridContainer.innerHTML = '';
        if (searchWidget) {
            gridContainer.appendChild(searchWidget);
        } else {
            gridContainer.innerHTML = `
                <div class="col-lg-12">
                    <div class="ltn__search-widget mb-30">
                        <form action="#">
                            <input type="text" name="search" placeholder="Search your keyword...">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            `;
        }

        // Add project cards
        projectsToShow.forEach(project => {
            const gridCard = createProjectCard(project, 'grid');
            gridContainer.appendChild(gridCard);
        });
    }

    // Render list view
    function renderListView(projectsToShow) {
        const listContainer = document.querySelector('.ltn__product-list-view .row');

        // Clear existing content except search widget
        const searchWidget = listContainer.querySelector('.ltn__search-widget');
        listContainer.innerHTML = '';
        if (searchWidget) {
            listContainer.appendChild(searchWidget);
        } else {
            listContainer.innerHTML = `
                <div class="col-lg-12">
                    <div class="ltn__search-widget mb-30">
                        <form action="#">
                            <input type="text" name="search" placeholder="Search your keyword...">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            `;
        }

        // Add project cards
        projectsToShow.forEach(project => {
            const listCard = createProjectCard(project, 'list');
            listContainer.appendChild(listCard);
        });
    }

    // Create a single project card
    function createProjectCard(project, viewType) {
        const card = document.createElement('div');
        card.className = viewType === 'grid' ? 'col-xl-6 col-sm-6 col-12' : 'col-lg-12';

        if (viewType === 'grid') {
            card.innerHTML = `
                <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div class="product-img">
                        <a href="product-details.html"><img src="${project.image}" alt="#"></a>
                        <div class="real-estate-agent">
                            <div class="agent-img">
                                <a href="team-details.html"><img src="${project.agentImage}" alt="#"></a>
                            </div>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-badge">
                            <ul>
                                <li class="sale-badg">${project.badge}</li>
                            </ul>
                        </div>
                        <h2 class="product-title"><a href="product-details.html">${project.title}</a></h2>
                        <div class="product-img-location">
                            <ul>
                                <li>
                                    <a href="locations.html"><i class="flaticon-pin"></i> ${project.location}</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                            <li><span>${project.beds} </span>Bed</li>
                            <li><span>${project.baths} </span>Bath</li>
                            <li><span>${project.area} </span>Square Ft</li>
                        </ul>
                        <div class="product-hover-action">
                            <ul>
                                <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                        <i class="flaticon-expand"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                        <i class="flaticon-heart-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="product-details.html" title="Product Details">
                                        <i class="flaticon-add"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-info-bottom">
                        <div class="product-price">
                            <span>$${project.price.toLocaleString()}<label>${project.priceLabel}</label></span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div class="product-img">
                        <a href="product-details.html"><img src="${project.image}" alt="#"></a>
                    </div>
                    <div class="product-info">
                        <div class="product-badge-price">
                            <div class="product-badge">
                                <ul>
                                    <li class="sale-badg">${project.badge}</li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <span>$${project.price.toLocaleString()}<label>${project.priceLabel}</label></span>
                            </div>
                        </div>
                        <h2 class="product-title"><a href="product-details.html">${project.title}</a></h2>
                        <div class="product-img-location">
                            <ul>
                                <li>
                                    <a href="locations.html"><i class="flaticon-pin"></i> ${project.location}</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                            <li><span>${project.beds} </span>Bed</li>
                            <li><span>${project.baths} </span>Bath</li>
                            <li><span>${project.area} </span>Square Ft</li>
                        </ul>
                    </div>
                    <div class="product-info-bottom">
                        <div class="real-estate-agent">
                            <div class="agent-img">
                                <a href="team-details.html"><img src="${project.agentImage}" alt="#"></a>
                            </div>
                            <div class="agent-brief">
                                <h6><a href="team-details.html">William Seklo</a></h6>
                                <small>Estate Agents</small>
                            </div>
                        </div>
                        <div class="product-hover-action">
                            <ul>
                                <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                        <i class="flaticon-expand"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                        <i class="flaticon-heart-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="product-details.html" title="Product Details">
                                        <i class="flaticon-add"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        return card;
    }

    // Update pagination controls
    function updatePaginationControls() {
        const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
        const paginationContainer = document.querySelector('.ltn__pagination ul');

        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';

        // Previous page button
        const prevLi = document.createElement('li');
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '<i class="fas fa-angle-double-left"></i>';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                renderProjects();
            }
        });
        prevLi.appendChild(prevLink);
        paginationContainer.appendChild(prevLi);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageLi = document.createElement('li');
            if (i === currentPage) {
                pageLi.classList.add('active');
            }

            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderProjects();
            });

            pageLi.appendChild(pageLink);
            paginationContainer.appendChild(pageLi);
        }

        // Next page button
        const nextLi = document.createElement('li');
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = '<i class="fas fa-angle-double-right"></i>';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects();
            }
        });
        nextLi.appendChild(nextLink);
        paginationContainer.appendChild(nextLi);
    }

    // Update filter counts
    function updateFilterCounts() {
        const filterTypes = ['project-type', 'project-status', 'apartment-status'];

        filterTypes.forEach(filterType => {
            const checkboxes = document.querySelectorAll(`input[name="${filterType}"]`);

            checkboxes.forEach(checkbox => {
                const value = checkbox.value;
                const countElement = checkbox.closest('li').querySelector('.filter-count');

                if (countElement) {
                    const count = projects.filter(project => {
                        if (filterType === 'project-type') return project.type === value;
                        if (filterType === 'project-status') return project.status === value;
                        if (filterType === 'apartment-status') return project.apartmentStatus === value;
                    }).length;

                    countElement.textContent = `(${count})`;
                }
            });
        });
    }

    // Initialize the application
    init();
});