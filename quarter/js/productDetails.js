// productDetails.js

console.log("🚀 productDetails.js yüklendi");

// Projects verisi yüklenene kadar bekle
function waitForProjects(callback) {
    if (typeof projects !== 'undefined' && projects && projects.length > 0) {
        console.log("✅ Projects verisi hazır:", projects.length, "proje bulundu");
        callback();
    } else {
        console.log("⏳ Projects verisi bekleniyor...");
        setTimeout(() => waitForProjects(callback), 100);
    }
}

function initProductDetails() {
    console.log("🔧 initProductDetails çalıştı");

    // 1️⃣ URL'den ID al
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    console.log("🔍 URL'den alınan ID:", projectId);

    if (!projectId) {
        console.error("❌ URL'de 'id' parametresi bulunamadı!");
        return;
    }

    // 2️⃣ Projeyi bul
    // ID karşılaştırmasını String'e çevirerek yapıyoruz (tür hatasını önlemek için)
    const project = projects.find(p => String(p.id) === String(projectId));

    if (!project) {
        console.error("❌ ID:", projectId, "ile proje bulunamadı!");
        return;
    }

    console.log("✅ Proje bulundu:", project.title);

    // 3️⃣ Verileri sayfalara yerleştir
    updatePageContent(project);
}
function updatePageContent(project) {
    try {
        // Başlıklar
        document.getElementById("pd-page-title").textContent = project.title;
        document.getElementById("pd-title").textContent = project.title;
        document.getElementById("pd-location").innerHTML = `<i class="flaticon-pin"></i> ${project.location}`;

        // Meta Bilgiler (Rozetler)
        document.getElementById("pd-meta").innerHTML = `
            <li class="ltn__blog-category"><a href="#">${project.type}</a></li>
            <li class="ltn__blog-category"><a class="bg-orange" href="#">${project.status}</a></li>
            <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i> Bitiş Tarihi: ${project.finishDate}</li>
        `;

        // Açıklama
        document.getElementById("pd-description").textContent = project.description;

        // PROPERTY DETAIL (Notlarına göre tam eşleşme)
        document.getElementById("pd-id").textContent = project.id;

        // Bina Toplam Metre (Area)
        updateLabelAndValue("pd-area", "Bina Toplam Metre:", project.area + " m²");

        // Bina daire sayısı (Total Apartment)
        updateLabelAndValue("pd-rooms", "Bina daire sayısı:", project.totalApartment);

        // Kat sayısı (Number Fl)
        updateLabelAndValue("pd-baths", "Kat sayısı:", project.floorCount);

        // Bina yaşı
        updateLabelAndValue("pd-year", "Bina yaşı:", project.buildingAge);

        // Bina ortak kullanım sayısı (Common Area)
        updateLabelAndValue("pd-lot-area", "Bina ortak kullanım sayısı:", project.commonArea + " m²");

        // Bina dükkan sayısı (Total Workplace)
        updateLabelAndValue("pd-beds", "Bina dükkan sayısı:", project.totalWorkplace);

        // Status
        document.getElementById("pd-status").textContent = project.status;

        const mapIframe = document.querySelector('.property-details-google-map iframe');
        if (mapIframe && project.location) {
            // Adresi URL'ye uygun hale getiriyoruz (Boşluklar %20 olur vb.)
            const encodedLocation = encodeURIComponent(project.location);

            // Google Maps Embed URL'sini oluşturuyoruz
            // output=embed parametresi haritanın site içinde görünmesini sağlar
            const mapUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

            // Iframe'in kaynağını değiştiriyoruz
            mapIframe.src = mapUrl;

            console.log("📍 Harita güncellendi:", project.location);
        }

        // Kat Planlarını Oluştur
        renderFloorPlans(project.floorPlans);
        // ANA SLIDER'I BAŞLAT
        renderMainSlider(project.images);
        //  GALERİ BÖLÜMÜ (Sınırsız Resim)
        renderFullGallery(project.images);

    } catch (error) {
        console.error("📝 İçerik güncellenirken hata:", error);
    }
}
// Yardımcı Fonksiyon: Hem etiketi hem değeri değiştirir
function updateLabelAndValue(id, labelText, value) {
    const el = document.getElementById(id);
    if (el) {
        if (el.previousElementSibling) el.previousElementSibling.textContent = labelText;
        el.textContent = value;
    }
}

function renderFloorPlans(plans) {
    const menu = document.querySelector(".ltn__tab-menu .nav");
    const content = document.querySelector(".tab-content");
    if (!menu || !plans || plans.length === 0) return;

    menu.innerHTML = "";
    content.innerHTML = "";

    plans.forEach((plan, i) => {
        const activeClass = i === 0 ? "active show" : "";
        menu.innerHTML += `<a class="${activeClass}" data-bs-toggle="tab" href="#plan_${i}">${plan.title}</a>`;

        content.innerHTML += `
            <div class="tab-pane fade ${activeClass}" id="plan_${i}">
                <div class="ltn__apartments-tab-content-inner">
                    <div class="row">
                        <div class="col-lg-7"><img src="${plan.image}" alt="#"></div>
                        <div class="col-lg-5">
                            <div class="apartments-plan-info">
                                <h2>${plan.title}</h2>
                                <p>${plan.description}</p>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product-details-apartments-info-list section-bg-1 mt-40">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-info-list apartments-info-list-color mt-40---">
                                                <ul>
                                                    <li><label>Toplam Alan</label> <span>${plan.totalSq} m²</span></li>
                                                    <li><label>Oda</label> <span>${plan.rooms}</span></li>
                                                </ul>
                                           </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-info-list apartments-info-list-color mt-40---">
                                            <ul>
                                                <li><label>Yatak Odası</label> <span>${plan.bedroomSq} m²</span></li>
                                                <li><label>Salon</label> <span>${plan.loungeSq} m²</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

function renderMainSlider(images) {
    const $slider = $("#pd-main-slider");
    if (!$slider.length || !images || images.length === 0) return;

    if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
    }

    let html = "";
    images.forEach(img => {
        html += `
            <div class="col-lg-12">
                <div class="ltn__img-slide-item-4">
                    <a href="${img}" data-rel="lightcase:myCollection">
                        <img src="${img}" alt="Slider Görseli">
                    </a>
                </div>
            </div>`;
    });
    $slider.html(html);

    // Slider'ı başlat
    $slider.slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: images.length < 3 ? images.length : 3, // Resim azsa hata vermemesi için
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right"></i></a>',
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2, centerMode: false } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } }
        ]
    });
}

function renderFullGallery(images) {
    const galleryContainer = document.getElementById("pd-gallery");
    if (!galleryContainer || !images) return;

    // Galeri içeriğini 3'lü kolon (col-md-4) yapısında oluşturuyoruz
    let galleryHTML = "";
    images.forEach((img, index) => {
        galleryHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="ltn__gallery-item">
                    <a href="${img}" data-rel="lightcase:myCollection">
                        <img class="mb-30" src="${img}" alt="Galeri Resim ${index + 1}" style="width:100%; height:250px; object-fit:cover; border-radius:5px;">
                    </a>
                </div>
            </div>`;
    });

    galleryContainer.innerHTML = galleryHTML;

    // Lightcase'i (büyüteç efekti) tüm yeni resimler için aktif et
    if (typeof $ !== 'undefined' && $.fn.lightcase) {
        $('a[data-rel^=lightcase]').lightcase();
    }
}

// ======================
// BAŞLATMA
// ======================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => waitForProjects(initProductDetails));
} else {
    waitForProjects(initProductDetails);
}