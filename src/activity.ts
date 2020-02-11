export enum Activity {
  A_VARIETY_OF_COMPANIES = 'a variety of companies',
  ACPA = 'acpa',
  AEROSPACE = 'aerospace',
  AGRI_FOOD_INDUSTRY = 'agri-food industry',
  AGRICULTURE = 'agriculture',
  AIR_VEHICLES = 'air vehicles',
  AMBULANCE_SERVICES = 'ambulance services',
  ASSURANCE = 'assurance',
  AUDIO = 'audio',
  AVIATION = 'aviation',
  AVS = 'avs',
  BANK = 'bank',
  BIOCHEMISTRY = 'biochemistry',
  BIOTECHNOLOGY = 'biotechnology',
  BODY_ARMORS = 'body armors',
  BODY_BANK = 'body bank',
  BODY_CARE = 'body care',
  BODYGUARDS = 'bodyguards',
  CAMERAS = 'cameras',
  CAPTURE_OF_CYBERPSYCHOS = 'capture of cyberpsychos',
  CARS = 'cars',
  CATERERS = 'caterers',
  CHEMISTRY = 'chemistry',
  CLOTHES = 'clothes',
  CORPORATE_EXTRACTIONS = 'corporate extractions',
  CORPORATE_INFORMATION = 'corporate information',
  CORPORATE_MERCENARIES = 'corporate mercenaries',
  CORPORATE_MILITIAS = 'corporate militias',
  COURIER_SERVICE = 'courier service',
  CYBERNETICS = 'cybernetics',
  DELIVERIES = 'deliveries',
  DETECTIVES = 'detectives',
  ELECTRONIC = 'electronic',
  ELECTRONIC_CHIPS = 'electronic chips',
  ELECTRONIC_SECURITY = 'electronic security',
  ENVIRONMENTAL_TECHNOLOGY = 'environmental technology',
  ESCORT = 'escort',
  FASHION = 'fashion',
  FINANCIAL_EMPIRE = 'financial empire',
  FINANCIAL_INVESTMENTS = 'financial investments',
  FUELS = 'fuels',
  GENETIC = 'genetic',
  HELICOPTERS = 'helicopters',
  HIGH_SECURITY_FREIGHT_TRANSPORT = 'high security freight transport',
  HIGH_TECH_WEAPONRY = 'high-tech weaponry',
  HOME_SERVICES = 'home services',
  HOSPITAL_CARE = 'hospital care',
  HOSTAGE_RELEASES = 'hostage releases',
  HOUSEHOLD_APPLIANCES = 'household appliances',
  HOVERCRAFTS = 'hovercrafts',
  INDUSTRIAL_VEHICLES = 'industrial vehicles',
  INFORMATION_TECHNOLOGY = 'information technology',
  INTERCONTINENTAL_TRANSPORT = 'intercontinental transport',
  INVESTIGATIONS = 'investigations',
  LUXURY_APARTMENT_RENTAL = 'luxury apartment rental',
  MEDIAS = 'medias',
  MEDICAL_ELECTRONICS = 'medical electronics',
  MEDICAL_EQUIPMENT = 'medical equipment',
  MERCENARY_OPERATIONS = 'mercenary operations',
  METALLURGY = 'metallurgy',
  MICROBIOLOGY = 'microbiology',
  MILITARY_EQUIPMENT = 'military equipment',
  MILITARY_VEHICLES = 'military vehicles',
  MINES = 'mines',
  MONOMOLECULAR_PRODUCTS = 'monomolecular products',
  MOTORCYCLES = 'motorcycles',
  MUSICAL_INSTRUMENTS = 'musical instruments',
  NANOTECHNOLOGIES = 'nanotechnologies',
  NEWS_AGENCY = 'news agency',
  OCEAN_TECHNOLOGY = 'ocean technology',
  OPTICS = 'optics',
  ORBITAL_ALLOYS = 'orbital alloys',
  ORBITAL_TRANSPORT = 'orbital transport',
  PHARMACOLOGY = 'pharmacology',
  PHOTOS = 'photos',
  PLASTIC = 'plastic',
  POLITICS = 'politics',
  POWER_GENERATION = 'power generation',
  PRECIOUS_MATERIALS_BROKER = 'precious materials broker',
  RAW_MATERIALS = 'raw materials',
  REAL_ESTATE_AGENCY = 'real estate agency',
  RECEPTIONS = 'receptions',
  RENTAL_OF_TEMPORARY_STAFF = 'rental of temporary staff',
  ROBOTICS = 'robotics',
  SATELLITES = 'satellites',
  SECURITY = 'security',
  SOFTWARES = 'softwares',
  SPACE_CONSTRUCTION = 'space construction',
  SPACE_FACILITIES = 'space facilities',
  SPACE_TRANSPORT = 'space transport',
  SPATIAL_MAINTENANCE = 'spatial maintenance',
  SUBMARINES = 'submarines',
  TANKS = 'tanks',
  TELECOMMUNICATIONS = 'telecommunications',
  TOOLS = 'tools',
  TOURISM = 'tourism',
  TRANSPORT = 'transport',
  TRANSPORT_VEHICLES = 'transport vehicles',
  VEHICLE_LEASING = 'vehicle leasing',
  VEHICLES = 'vehicles',
  VIDEO_GAMES = 'video games',
  VIRTUAL_REALITIES = 'virtual realities',
  WEAPONRY = 'weaponry',
}

export const from = (input : Activity) : string => input.valueOf()
export const to = (input : string) : Activity => Activity[Object.keys(Activity).find(key => Activity[key] === input)]