// projectPage.js

let currentPage = 1;
let itemsPerPage = 12;
let filteredProjects = [];

/* =========================
   DATA HAZIR OLUNCA BAŞLA
========================= */
document.addEventListener('projectsLoaded', () => {
    filteredProjects = [...projects];
    init();
});

/* =========================
   INIT
========================= */
function init() {
    setupEventListeners();
    updateFilterCounts();
    renderProjects();
}

/* =========================
   EVENT LISTENERS
========================= */
function setupEventListeners() {
    document
        .querySelectorAll('input[type="checkbox"][data-filter]')
        .forEach(cb => {
            cb.addEventListener('change', () => {
                currentPage = 1;
                filterProjects();
            });
        });

    const resetBtn = document.getElementById('reset-filters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

/* =========================
   FILTER
========================= */
function filterProjects() {
    const types = getSelectedValues('project-type');
    const statuses = getSelectedValues('project-status');
    const apartmentStatuses = getSelectedValues('apartment-status');

    filteredProjects = projects.filter(p =>
        (!types.length || types.includes(p.type)) &&
        (!statuses.length || statuses.includes(p.status)) &&
        (!apartmentStatuses.length || apartmentStatuses.includes(p.apartmentStatus))
    );

    renderProjects();
}

function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    const sort = document.getElementById('sort-projects');
    if (sort) sort.value = 'default';

    currentPage = 1;
    filteredProjects = [...projects];
    renderProjects();
}

function getSelectedValues(name) {
    return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
        .map(cb => cb.value);
}

/* =========================
   RENDER
========================= */
function renderProjects() {
    const pageItems = paginate(filteredProjects);
    renderGridView(pageItems);
    renderListView(pageItems);
    updatePaginationControls();
}

function paginate(list) {
    const start = (currentPage - 1) * itemsPerPage;
    return list.slice(start, start + itemsPerPage);
}

/* =========================
   GRID VIEW
========================= */
function renderGridView(list) {
    const container = document.querySelector('.ltn__product-grid-view .row');
    if (!container) return;

    container.innerHTML = '';

    list.forEach(p => {
        container.appendChild(createProjectCard(p, 'grid'));
    });
}

/* =========================
   LIST VIEW
========================= */
function renderListView(list) {
    const container = document.querySelector('.ltn__product-list-view .row');
    if (!container) return;

    container.innerHTML = '';

    list.forEach(p => {
        container.appendChild(createProjectCard(p, 'list'));
    });
}

/* =========================
   CARD
========================= */
function createProjectCard(project, viewType) {
    const col = document.createElement('div');
    col.className = viewType === 'grid'
        ? 'col-xl-6 col-sm-6 col-12'
        : 'col-lg-12';

    col.innerHTML = viewType === 'grid'
        ? gridTemplate(project)
        : listTemplate(project);

    return col;
}
function gridTemplate(p) {
    // 1. Adresi URL için güvenli hale getir (Boşlukları %20 yapar, karakterleri düzenler)
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.location)}`;
    // Dükkan kontrolü: Eğer dükkan (baths) 0'dan büyükse HTML kodunu ekle, değilse boş bırak
    const dukkanHtml = p.baths > 0
        ? `<li><span>${p.baths}</span> Dükkan</li>`
        : '';

    return `
    <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div class="product-img">
            <a href="product-details.html?id=${p.id}">
                <img src="${p.image}" alt="${p.title}">
            </a>
         
        </div>
        <div class="product-info">
            <div class="product-badge">
                <ul>
                    <li class="sale-badg">${p.status}</li>
                </ul>
            </div>
            <h2 class="product-title"><a href="product-details.html?id=${p.id}">${p.title}</a></h2>
            <div class="product-img-location">
                <ul>
                    <li>
                        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer">
                            <i class="flaticon-pin"></i>
                            ${p.location}
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                <li><span>${p.totalApartment}</span> Daire</li>
                ${dukkanHtml} <li><span>${p.area}</span> m² (Proje m²)</li>
            </ul>
        </div>
        
    </div>`;
}
function listTemplate(p) {
    // Liste görünümünde de benzer mantığı uygulayalım ki tutarlı olsun
    const dukkanHtml = p.baths > 0 ? `<span>${p.baths} Dükkan</span>` : '';

    return `
    <div class="ltn__product-item ltn__product-item-4">
        <div class="product-img">
            <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="product-info">
            <div class="product-badge">
                <ul><li class="sale-badg">${p.status}</li></ul>
            </div>
            <h2 class="product-title">${p.title}</h2>
            <p><i class="flaticon-pin"></i> ${p.location}</p>
            <div class="product-brief">
                <span>${p.beds} Oda</span>
                ${dukkanHtml}
                <span>${p.area} m²</span>
            </div>
            <div class="product-price">
                <span>$${Number(p.price).toLocaleString('tr-TR')} ${p.priceLabel}</span>
            </div>
        </div>
    </div>`;
}

/* =========================
   PAGINATION
========================= */
function updatePaginationControls() {
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const ul = document.querySelector('.ltn__pagination ul');
    if (!ul) return;

    ul.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        if (i === currentPage) li.classList.add('active');

        li.innerHTML = `<a href="#">${i}</a>`;
        li.onclick = e => {
            e.preventDefault();
            currentPage = i;
            renderProjects();
        };

        ul.appendChild(li);
    }
}

/* =========================
   FILTER COUNTS
========================= */
function updateFilterCounts() {
    const map = {
        'project-type': 'type',
        'project-status': 'status',
        'apartment-status': 'apartmentStatus'
    };

    Object.keys(map).forEach(name => {
        document.querySelectorAll(`input[name="${name}"]`).forEach(cb => {
            const count = projects.filter(p => p[map[name]] === cb.value).length;
            const span = cb.closest('li')?.querySelector('.filter-count');
            if (span) span.textContent = `(${count})`;
        });
    });
}
