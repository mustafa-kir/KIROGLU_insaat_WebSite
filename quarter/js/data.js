// data.js
let projects = [];

fetch("js/Data/projects.xlsx")
    .then(res => {
        if (!res.ok) throw new Error("Dosya bulunamadı (404)");
        return res.arrayBuffer();
    })
    .then(data => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { raw: false });

        projects = rows.map(row => {
            const images = Object.keys(row)
                .filter(k => k.startsWith("Image_") && row[k])
                .map(k => row[k]);
            // Kat Planlarını Dizi Haline Getiriyoruz (4 plana kadar)
            const floorPlans = [];
            for (let i = 1; i <= 4; i++) {
                if (row[`Floor Plan ${i} Tittle`]) {
                    floorPlans.push({
                        title: row[`Floor Plan ${i} Tittle`],
                        description: row[`Floor Plan ${i} Description`],
                        image: row[`Floor Plan ${i} Image`],
                        totalSq: row[`Floor Plan ${i} Sq`],
                        rooms: row[`Floor Plan ${i} Rooms`],
                        bedroomSq: row[`Floor Plan ${i} Bedroom Sq`] ,
                        loungeSq: row[`Floor Plan ${i} Lounge Sq`],
                    });

                }
            }

            // Bina Yaşı Hesaplama: Bitiş yılından bugünü çıkarıyoruz
            const rawFinishDate = row["Finish Date"] ;
            const finishDateStr = String(rawFinishDate); // Değeri ne olursa olsun metne çeviriyoruz
            console.log("Hata : " +finishDateStr);
            let buildingAge = "Yeni Proje";
            if (finishDateStr.includes('.')) {
                const parts = finishDateStr.split('.');
                const finishYear = parseInt(parts[2]);
                const currentYear = new Date().getFullYear();
                buildingAge = currentYear - finishYear;
                if (buildingAge <= 0) buildingAge = "Yeni Bina";
            }
            return {
                id: row.ID,
                title: row.Title,
                type: row.Type,
                status: row.Status, // Tamamlandı / Devam Ediyor
                location: row.Location,
                totalApartment: row["Total Apartment"],
                totalWorkplace: row["Total Workplace"],
                area: row.Area,
                floorCount: row["Number Floors"],
                commonArea: row["Common Area"],
                startDate: row["Start Date"],
                finishDate: rawFinishDate,
                buildingAge: buildingAge,
                description: row.Description || "Proje açıklaması hazırlanıyor.",
                image: images[0] ,
                images: images,
                floorPlans: floorPlans

            };
        });
        console.log("✔ Yeni Tablo Verisi Yüklendi:", projects);
        document.dispatchEvent(new Event('projectsLoaded'));
    })
    .catch(err => console.error("❌ Excel Hatası:", err.message));