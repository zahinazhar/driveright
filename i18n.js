// Internationalization (i18n) support
const translations = {
    en: {
        // Header
        "benefits": "Benefits",
        "process": "Process",
        "pricing": "Pricing",
        "contact": "Contact",
        
        // Hero
        "heroTitle": "Get Your Driving License Today",
        "heroText": "Professional guidance through every step of the process. Fast, reliable, and stress-free.",
        "getStarted": "Get Started Today",
        
        // Benefits
        "whyChoose": "Why Choose Our Services?",
        "fastProcessing": "Fast Processing",
        "fastProcessingText": "We expedite the application process so you get your license quicker than standard methods.",
        "expertGuidance": "Expert Guidance",
        "expertGuidanceText": "Our professionals guide you through every step, from paperwork to the driving test.",
        "highSuccess": "High Success Rate",
        "highSuccessText": "95% of our clients pass their driving test on the first attempt with our preparation.",
        "support": "24/7 Support",
        "supportText": "Have questions? Our support team is available round the clock to assist you.",
        
        // Process
        "simpleProcess": "Simple 4-Step Process",
        "step1": "Initial Consultation",
        "step1Text": "We assess your needs and create a personalized plan for your license application.",
        "step2": "Document Preparation",
        "step2Text": "We help gather and prepare all necessary documents for a smooth application.",
        "step3": "Driving Lessons",
        "step3Text": "Professional instructors prepare you for both the written and practical tests.",
        "step4": "License Issuance",
        "step4Text": "We accompany you to the final steps to ensure you receive your license successfully.",
        
        // Pricing
        "affordablePackages": "License Class",
        "b2": "B2",
        "bfull": "B Full",
        "d": "D (Manual)",
        "da": "D (Auto)",
        "ekejur": "E (Rigid Lorry)",
        "esendi": "E (Articulated Lorry)",
        "psv": "PSV - Public Service Vehicle",
        "gdl": "GDL - Goods Driving License",

        "premium1": "Course Registration",
        "premium2": "Computer Test Registration",
        "premium3": "L License",
        "premium4": "Driving Learning Class",
        "premium5": "QTI - Assessment",
        "premium6": "JPJ Test",
        "premium7": "License P",
        "choosePremium": "Select",

        "vocational1": "Course Registration",
        "vocational2": "Vocational License",
        "gdl1": "For E license holder please contact for more information.",

        "lorry1": "Course Registration",
        "lorry2": "Driving Learning Class",
        "lorry3": "QTI - Assessment",
        "lorry4": "JPJ Test",
        "popular": "Vocational License",
        
        // Testimonials
        "whatClientsSay": "What Our Clients Say",
        "testimonial1": "\"I got my license faster than my friends taken at other places. Worth every penny!\"",
        "testimonial2": "\"The instructors were patient and knowledgeable. Passed my test on the first try!\"",
        "testimonial3": "\"The paperwork assistance alone was worth it. So much less stressful than doing it myself.\"",
        
        // Contact
        "readyToStart": "Ready to Get Started?",
        "contactUs": "Contact Us",
        "phone1": "(011) 5622 5263",
        "phone2": "(019) 655 0285",
        "email": "info@driveright.com",
        "address1": "Akademi Memandu Gabungan Dunia",
        "address2": "Lot 3204, Jalan Sungai Yu 9/2, Jalan Kampung India Sungai Yu, 45500 Kuala Selangor, Selangor",
        "yourName": "Your Name",
        "yourEmail": "Your Email",
        "yourPhone": "Your Phone",
        "selectPackage": "Select a Package",
        "basicOption": "Basic",
        "standardOption": "Standard",
        "premiumOption": "Premium",
        "yourMessage": "Your Message",
        "submitApplication": "Submit Application",
        
        // Footer
        "quickLinks": "Quick Links",
        "benefitsFooter": "Benefits",
        "processFooter": "Process",
        "pricingFooter": "Pricing",
        "contactFooter": "Contact",
        "legal": "Legal",
        "terms": "Terms of Service",
        "privacy": "Privacy Policy",
        "copyright": "© 2025 DriveRight. All rights reserved."
    },
    ms: {
        // Header
        "benefits": "Kelebihan",
        "process": "Proses",
        "pricing": "Harga",
        "contact": "Hubungi",
        
        // Hero
        "heroTitle": "Dapatkan Lesen Memandu Anda Hari Ini",
        "heroText": "Bimbingan profesional melalui setiap langkah proses. Pantas, boleh dipercayai, dan tanpa tekanan.",
        "getStarted": "Mulakan Hari Ini",
        
        // Benefits
        "whyChoose": "Mengapa Pilih Perkhidmatan Kami?",
        "fastProcessing": "Proses Cepat",
        "fastProcessingText": "Kami mempercepatkan proses permohonan supaya anda mendapat lesen lebih cepat daripada kaedah biasa.",
        "expertGuidance": "Bimbingan Pakar",
        "expertGuidanceText": "Profesional kami membimbing anda melalui setiap langkah, dari dokumen hingga ujian memandu.",
        "highSuccess": "Kadar Kejayaan Tinggi",
        "highSuccessText": "95% pelanggan kami lulus ujian memandu pada percubaan pertama dengan persediaan kami.",
        "support": "Sokongan 24/7",
        "supportText": "Ada soalan? Pasukan sokongan kami sedia membantu anda pada bila-bila masa.",
        
        // Process
        "simpleProcess": "Proses 4 Langkah Mudah",
        "step1": "Perundingan Awal",
        "step1Text": "Kami menilai keperluan anda dan membuat pelan peribadi untuk permohonan lesen anda.",
        "step2": "Penyediaan Dokumen",
        "step2Text": "Kami membantu mengumpul dan menyediakan semua dokumen yang diperlukan untuk permohonan lancar.",
        "step3": "Pelajaran Memandu",
        "step3Text": "Pengajar profesional menyediakan anda untuk ujian bertulis dan praktikal.",
        "step4": "Pengeluaran Lesen",
        "step4Text": "Kami menemani anda ke langkah terakhir untuk memastikan anda menerima lesen dengan jayanya.",
        
        // Pricing
        "affordablePackages": "Kelas Lesen",
        "b2": "B2",
        "bfull": "B Penuh",
        "d": "D (Manual)",
        "da": "D (Automatik)",
        "ekejur": "E (Lori Kejur)",
        "esendi": "E (Lori Bersendi)",
        "psv": "PSV - Kenderaan Perkhidmatan Awam",
        "gdl": "GDL - Lesen Memandu Barang",

        "premium1": "Pendaftaran Kursus",
        "premium2": "Pendaftaran Ujian Komputer",
        "premium3": "Lesen L",
        "premium4": "Kelas Belajar Memandu",
        "premium5": "QTI - Penilaian",
        "premium6": "Ujian JPJ",
        "premium7": "Lesen P",
        "choosePremium": "Pilih",

        "vocational1": "Pendaftaran Kursus",
        "vocational2": "Lesen Vokasional",
        "gdl1": "Bagi pemegang lesen E sila hubungi kami untuk maklumat lanjut.",


        "lorry1": "Pendaftaran Kursus",
        "lorry2": "Kelas Belajar Memandu",
        "lorry3": "QTI - Penilaian",
        "lorry4": "Ujian JPJ",
        "popular": "Lesen Vokasional",
        
        // Testimonials
        "whatClientsSay": "Apa Kata Pelanggan Kami",
        "testimonial1": "\"Saya dapat lesen lebih cepat berbanding dengan kawan saya yang buat di tempat lain. Sangat berbaloi!\"",
        "testimonial2": "\"Pengajar sangat sabar dan berpengetahuan. Lulus ujian pada percubaan pertama!\"",
        "testimonial3": "\"Bantuan dokumen sahaja sudah berbaloi. Jauh kurang stres berbanding buat sendiri.\"",
        
        // Contact
        "readyToStart": "Sedia Untuk Bermula?",
        "contactUs": "Hubungi Kami",
        "phone1": "(011) 5622 5263",
        "phone2": "(019) 655 0285",
        "email": "info@driveright.com",
        "address1": "Akademi Memandu Gabungan Dunia",
        "address2": "Lot 3204, Jalan Sungai Yu 9/2, Jalan Kampung India Sungai Yu, 45500 Kuala Selangor, Selangor",
        "yourName": "Nama Anda",
        "yourEmail": "Emel Anda",
        "yourPhone": "Telefon Anda",
        "selectPackage": "Pilih Kelas",
        "basicOption": "Asas",
        "standardOption": "Standard",
        "premiumOption": "Premium",
        "yourMessage": "Mesej Anda",
        "submitApplication": "Hantar Permohonan",
        
        // Footer
        "quickLinks": "Pautan Pantas",
        "benefitsFooter": "Kelebihan",
        "processFooter": "Proses",
        "pricingFooter": "Harga",
        "contactFooter": "Hubungi",
        "legal": "Undang-undang",
        "terms": "Terma Perkhidmatan",
        "privacy": "Dasar Privasi",
        "copyright": "© 2025 DriveRight. Hak cipta terpelihara."
    }
};

// Function to set the language
function setLanguage(language) {
    // Set all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Set all placeholder texts
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[language] && translations[language][key]) {
            element.setAttribute('placeholder', translations[language][key]);
        }
    });
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    
    // Set initial language from localStorage or browser preference
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 
                             (navigator.language.startsWith('ms') ? 'ms' : 'en');
    
    languageSelect.value = preferredLanguage;
    setLanguage(preferredLanguage);
    
    // Add event listener for language change
    languageSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });
});
