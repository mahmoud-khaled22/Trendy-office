const logos = import.meta.glob(
  "../assets/logos-clients/*.svg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getLogo = (filename) => {
  return logos[`../assets/logos-clients/${filename}`];
};

export const clients = [
  // Healthcare
  {
    id: "ismailia-oncology",
    name: "Ismailia Oncology Hospital",
    logo: getLogo("ismailia-oncology-hospital.svg"),
    url: "https://itoh.gov.eg/",
    category: "healthcare",
  },
  {
    id: "avc-hospital",
    name: "AVC Hospital",
    logo: getLogo("avc-hospital.svg"),
    url: "https://avchospital.com/",
    category: "healthcare",
  },
  {
    id: "al-salam-engineers",
    name: "Al Salam Engineers Hospital",
    logo: getLogo("al-salam-engineers-hospital.svg"),
    url: "https://www.alsalamhospital.org/Index?Lang=en",
    category: "healthcare",
  },
  {
    id: "miami-hospital",
    name: "Miami Hospital",
    logo: getLogo("miami-hospital.svg"),
    url: "http://miamihospital.net/Default.aspx",
    category: "healthcare",
  },
  {
    id: "ibrahim-obeid",
    name: "Ibrahim Obeid Hospital",
    logo: getLogo("ibrahim-obeid-hospital.svg"),
    url: "https://www.facebook.com/IbrahimObeidHospital/?locale=ar_AR",
    category: "healthcare",
  },
  {
    id: "mataria-general",
    name: "Mataria General Hospital",
    logo: getLogo("mataria-general-hospital.svg"),
    url: "https://mth.gov.eg/",
    category: "healthcare",
  },
  {
    id: "alexandria-university-hospital",
    name: "Alexandria University Hospital",
    logo: getLogo("alexandria-university-hospital.svg"),
    url: "https://auhospitals.alexu.edu.eg/",
    category: "healthcare",
  },
  {
    id: "alexandria-police-hospital",
    name: "Alexandria Police Hospital",
    logo: getLogo("alexandria-police-hospital.svg"),
    url: "https://www.facebook.com/p/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A-%D8%A7%D9%84%D8%B4%D8%B1%D8%B7%D8%A9-%D8%A8%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-61578084244463/",
    category: "healthcare",
  },
  {
    id: "seashell-hospital",
    name: "Seashell Hospital",
    logo: getLogo("seashell-hospital.svg"),
    url: "https://www.seashellhospital.com/",
    category: "healthcare",
  },
  {
    id: "hilton-marsa-alam",
    name: "Hilton Marsa Alam",
    logo: getLogo("hilton-marsa-alam.svg"),
    url: "https://www.hilton.com/en/hotels/rmfhihi-hilton-marsa-alam-nubian-resort",
    category: "hospitality",
  },

  // Education
  {
    id: "alexandria-university-library",
    name: "Alexandria University Central Library",
    logo: getLogo("bibliotheca-alex.svg"),
    url: "https://www.bibalex.org/ar/",
    category: "education",
     lightLogo: true
  },
  {
    id: "alexandria-university",
    name: "Alexandria University",
    logo: getLogo("alexandria-university-central-library.svg"),
    url: "https://clib.alexu.edu.eg/index.php",
    category: "education",
  },
  {
    id: "international-kingdom-college",
    name: "International Kingdom College",
    logo: getLogo("international-kingdom-college.svg"),
    url: "https://www.internationalkingdom.college/",
    category: "education",
  },
  {
    id: "retaj-school",
    name: "Retaj International School",
    logo: getLogo("retaj-international-school.svg"),
    url: "https://www.alretaj-school.com/",
    category: "education",
  },
  {
    id: "newcastle-school",
    name: "Newcastle International School",
    logo: getLogo("newcastle-international-school.svg"),
    url: "https://nciseg.com/",
    category: "education",
  },
  {
    id: "arab-academy-management",
    name: "Arab Academy for Management Sciences",
    logo: getLogo("arab-academy-management-sciences.svg"),
    url: "https://aambfsye.org/",
    category: "education",
    
  },
  {
    id: "sadat-academy",
    name: "Sadat Academy for Management Sciences",
    logo: getLogo("sadat-academy-management-sciences.svg"),
    url: "http://sams.edu.eg/",
    category: "education",
  },
  {
    id: "ejust",
    name: "Egypt-Japan University of Science and Technology",
    logo: getLogo("ejust-college.svg"),
    url: "https://ejust.edu.eg/",
    category: "education",
  },
  {
    id: "pharos-university",
    name: "Pharos University in Alexandria",
    logo: getLogo("pharos-university.svg"),
    url: "https://www.pua.edu.eg/",
    category: "education",
  },

  // Sports
  {
    id: "wadi-degla",
    name: "Wadi Degla Sports Club",
    logo: getLogo("wadi-degla-sports-club.svg"),
    url: "https://wadideglaclubs.com/",
    category: "sports",
  },
  {
    id: "alexandria-engineers-club",
    name: "Alexandria Engineers Club",
    logo: getLogo("alexandria-engineers-club.svg"),
    url: "https://www.alexengsyn.com/",
    category: "sports",
  },
  {
    id: "interior-sports-club",
    name: "Ministry of Interior Sports Club",
    logo: getLogo("ministry-of-interior-sports-club.svg"),
    url: "https://eldakhliasc.com/",
    category: "sports",
  },
  {
    id: "judges-club",
    name: "Judges Club",
    logo: getLogo("judges-club.svg"),
    url: "http://egyptjudgeclub.org/",
    category: "sports",
  },
  {
    id: "lawyers-club",
    name: "Lawyers Club",
    logo: getLogo("lawyers-club.svg"),
    url: "https://egyls.com/",
    category: "sports",
  },
  {
    id: "gold-gym",
    name: "Gold's Gym",
    logo: getLogo("gold's-gym.svg"),
    url: "https://goldsgymegypt.com/",
    category: "sports",
  },

  // Hotels
  {
    id: "le-metropole",
    name: "Le Metropole Hotel",
    logo: getLogo("le-metropole-hotel.svg"),
    url: "https://paradiseinnegypt.com/",
    category: "hospitality",
  },
  {
    id: "paradise-inn",
    name: "Paradise Inn Group",
    logo: getLogo("paradise-inn-group.svg"),
    url: "https://paradiseinnegypt.com/",
    category: "hospitality",
  },
  {
    id: "sheraton",
    name: "Sheraton Montazah",
    logo: getLogo("sheraton-montazah.svg"),
    url: "http://marriott.com/en-us/hotels/alysi-sheraton-montazah-hotel/overview/",
    category: "hospitality",
  },

  // Banking & Finance
  {
    id: "qnb",
    name: "QNB",
    logo: getLogo("qnb.svg"),
    url: "https://www.qnb.com.eg/sites/qnb/qnbegypt/page/ar/ar-home.html",
    category: "banking",
  },
  {
    id: "aaib",
    name: "Arab African International Bank",
    logo: getLogo("aaib.svg"),
    url: "https://www.aaib.com/ar",
    category: "banking",
    
  },
  {
    id: "aib",
    name: "Arab International Bank",
    logo: getLogo("aib.svg"),
    url: "https://aib.com.eg/ar/home",
    category: "banking",
     lightLogo: true,
  },
  {
    id: "faisal-bank",
    name: "Faisal Islamic Bank",
    logo: getLogo("faisal-islamic-bank.svg"),
    url: "",
    category: "banking",
  },
  {
    id: "egyptian-gulf-bank",
    name: "Egyptian Gulf Bank",
    logo: getLogo("egyptian-gulf-bank.svg"),
    url: "https://www.faisalbank.com.eg/",
    category: "banking",
  },
  {
    id: "central-bank-egypt",
    name: "Central Bank of Egypt",
    logo: getLogo("central-bank-of-egypt.svg"),
    url: "https://www.cbe.org.eg/",
    category: "banking",
  },

  // Companies
  {
    id: "orange",
    name: "Orange",
    logo: getLogo("orange.svg"),
    url: "https://www.orange.eg/ar/",
    category: "companies",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logo: getLogo("coca-cola.svg"),
    url: "https://www.coca-cola.com/eg/ar",
    category: "companies",
  },
  {
    id: "pepsi",
    name: "Pepsi",
    logo: getLogo("pepsi.svg"),
    url: "https://www.pepsi.ps/ar",
    category: "companies",
  },
  {
    id: "arab-contractors",
    name: "Arab Contractors",
    logo: getLogo("arab-contractors.svg"),
    url: "https://contact.eg/",
    category: "companies",
     lightLogo: true,
  },
   
  {
    id: "egyptian-steel",
    name: "Egyptian Steel",
    logo: getLogo("egyptian-steel.svg"),
    url: "https://egyptian-steel.com/",
    category: "companies",
  },
  {
    id: "euro-pharma",
    name: "Euro Pharma",
    logo: getLogo("euro-pharma.svg"),
    url: "https://euro-assist.com/",
    category: "companies",
  },
  {
    id: "amriya-pharma",
    name: "Amriya Pharmaceutical Industries",
    logo: getLogo("amriya-pharmaceutical-industries.svg"),
    url: "https://www.facebook.com/AmriyaPharmaceuticals/",
    category: "companies",
  },
  {
    id: "pharco",
    name: "Pharco",
    logo: getLogo("pharco.svg"),
    url: "https://pharco.org/",
    category: "companies",
  },
  {
    id: "americana",
    name: "Americana",
    logo: getLogo("americana.svg"),
    url: "https://www.americanarestaurants.com/ar/",
    category: "companies",
  },
  {
    id: "petromaint",
    name: "Petromaint",
    logo: getLogo("petromaint.svg"),
    url: "https://www.petromaint.net/",
    category: "companies",
  },
  {
    id: "maritime-transport",
    name: "Maritime Transport Company",
    logo: getLogo("maritime-transport-company.svg"),
    url: "https://hcmlt.com/",
    category: "companies",
  },
  {
    id: "al-nahar",
    name: "Al Nahar Channel",
    logo: getLogo("al-nahar-channel.svg"),
    url: "https://www.instagram.com/alnahareg/?hl=ar",
    category: "media",
  },
  {
    id: "gold-gym",
    name: "Gold's Gym",
    logo: getLogo("gold's-gym.svg"),
    url: "https://goldsgymegypt.com/",
    category: "sports",
  },
];